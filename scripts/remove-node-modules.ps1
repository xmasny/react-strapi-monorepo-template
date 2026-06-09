param(
  [switch]$DryRun,
  [int]$Retries = 2,
  [int]$RetryDelaySeconds = 2
)

$ErrorActionPreference = "Stop"

$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path
$repoRootWithSeparator = $repoRoot.TrimEnd([IO.Path]::DirectorySeparatorChar, [IO.Path]::AltDirectorySeparatorChar) + [IO.Path]::DirectorySeparatorChar

function Test-IsInsideRepo {
  param([string]$Path)

  $resolved = (Resolve-Path -LiteralPath $Path).Path

  return $resolved -eq $repoRoot -or $resolved.StartsWith($repoRootWithSeparator, [StringComparison]::OrdinalIgnoreCase)
}

function Clear-NodeModulesAttributes {
  param([string]$Path)

  if (-not (Test-Path -LiteralPath $Path)) {
    return
  }

  Get-ChildItem -LiteralPath $Path -Recurse -Force -ErrorAction SilentlyContinue |
    ForEach-Object {
      try {
        $_.Attributes = $_.Attributes -band (-bnot [IO.FileAttributes]::ReadOnly) -band (-bnot [IO.FileAttributes]::Hidden) -band (-bnot [IO.FileAttributes]::System)
      } catch {
        Write-Warning "Could not clear attributes on $($_.FullName): $($_.Exception.Message)"
      }
    }

  try {
    $rootItem = Get-Item -LiteralPath $Path -Force
    $rootItem.Attributes = $rootItem.Attributes -band (-bnot [IO.FileAttributes]::ReadOnly) -band (-bnot [IO.FileAttributes]::Hidden) -band (-bnot [IO.FileAttributes]::System)
  } catch {
    Write-Warning "Could not clear attributes on ${Path}: $($_.Exception.Message)"
  }
}

function Remove-NodeModulesTarget {
  param([string]$Path)

  for ($attempt = 0; $attempt -le $Retries; $attempt++) {
    if (-not (Test-Path -LiteralPath $Path)) {
      return $true
    }

    try {
      Clear-NodeModulesAttributes -Path $Path
      Remove-Item -LiteralPath $Path -Recurse -Force -ErrorAction Stop
      return $true
    } catch {
      $isFinalAttempt = $attempt -eq $Retries

      if ($isFinalAttempt) {
        Write-Error "Failed to remove $Path after $($Retries + 1) attempt(s): $($_.Exception.Message)" -ErrorAction Continue
        return $false
      }

      Write-Warning "Failed to remove $Path on attempt $($attempt + 1): $($_.Exception.Message). Retrying in $RetryDelaySeconds second(s)."
      Start-Sleep -Seconds $RetryDelaySeconds
    }
  }
}

$workspaceRoots = @($repoRoot)

foreach ($group in @("apps", "packages")) {
  $groupPath = Join-Path $repoRoot $group

  if (Test-Path -LiteralPath $groupPath) {
    $workspaceRoots += Get-ChildItem -LiteralPath $groupPath -Directory -Force -ErrorAction SilentlyContinue |
      ForEach-Object { $_.FullName }
  }
}

$targets = $workspaceRoots |
  ForEach-Object { Join-Path $_ "node_modules" } |
  Where-Object { Test-Path -LiteralPath $_ } |
  ForEach-Object { Get-Item -LiteralPath $_ } |
  Where-Object { Test-IsInsideRepo $_.FullName } |
  Sort-Object FullName

if (-not $targets) {
  Write-Host "No node_modules directories found under $repoRoot"
  exit 0
}

if ($DryRun) {
  Write-Host "Would remove:"
  $targets | ForEach-Object { Write-Host "  $($_.FullName)" }
  exit 0
}

Write-Host "Removing node_modules directories under $repoRoot"

$failedTargets = @()

foreach ($target in $targets) {
  if (-not (Test-IsInsideRepo $target.FullName)) {
    throw "Refusing to remove path outside repo: $($target.FullName)"
  }

  Write-Host "  Removing $($target.FullName)"
  $removed = Remove-NodeModulesTarget -Path $target.FullName

  if (-not $removed) {
    $failedTargets += $target.FullName
  }
}

if ($failedTargets.Count -gt 0) {
  Write-Host "Finished with failures:"
  $failedTargets | ForEach-Object { Write-Host "  $_" }
  exit 1
}

Write-Host "Done."
