import { useState } from "react";
import { Button, Kbd, Link, buttonVariants } from "@heroui/react";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const searchInput = (
    <label className="flex h-10 min-w-64 items-center gap-2 rounded-lg bg-surface px-3 text-muted">
      <SearchIcon className="pointer-events-none flex-shrink-0 text-base" />
      <span className="sr-only">Search</span>
      <input
        className="min-w-0 flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
        placeholder="Search..."
        type="search"
      />
      <Kbd className="hidden lg:inline-block">Cmd K</Kbd>
    </label>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-separator bg-background/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        <div className="flex min-w-0 flex-1 items-center gap-5">
          <Link
            className="flex shrink-0 items-center justify-start gap-1 text-foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </Link>
          <div className="ml-2 hidden gap-4 lg:flex">
            {siteConfig.navItems.map((item) => (
              <Link
                className={clsx(
                  "text-sm text-foreground transition-colors hover:text-accent",
                  "data-[active=true]:font-medium data-[active=true]:text-accent"
                )}
                href={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden items-center justify-end gap-3 sm:flex">
          <div className="flex gap-2">
            <Link aria-label="Twitter" href="/">
              <TwitterIcon className="text-muted" />
            </Link>
            <Link aria-label="Discord" href="/">
              <DiscordIcon className="text-muted" />
            </Link>
            <Link aria-label="GitHub" href="/">
              <GithubIcon className="text-muted" />
            </Link>
            <ThemeSwitch />
          </div>
          <div className="hidden lg:flex">{searchInput}</div>
          <a
            className={buttonVariants({ size: "sm", variant: "secondary" })}
            href="/"
          >
            <HeartFilledIcon className="text-danger" />
            Sponsor
          </a>
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          <Link href="/">
            <GithubIcon className="text-muted" />
          </Link>
          <ThemeSwitch />
          <Button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onPress={() => setIsMenuOpen((value) => !value)}
            size="sm"
            variant="tertiary"
          >
            <span className="text-xs font-semibold leading-none">
              {isMenuOpen ? "Close" : "Menu"}
            </span>
          </Button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className="border-t border-separator px-6 py-4 sm:hidden">
          {searchInput}
          <div className="mt-4 flex flex-col gap-2">
            {siteConfig.navMenuItems.map((item, index) => (
              <Link
                className={clsx(
                  "py-1 text-lg",
                  index === 2
                    ? "text-accent"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "text-danger"
                      : "text-foreground"
                )}
                href="/"
                key={`${item.label}-${index}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};
