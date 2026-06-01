import { FC, useState, useEffect } from "react";
import { Switch, useTheme } from "@heroui/react";
import clsx from "clsx";

import { SunFilledIcon, MoonFilledIcon } from "@/components/icons";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const [isMounted, setIsMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent Hydration Mismatch
  if (!isMounted) return <div className="w-6 h-6" />;

  return (
    <Switch
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className={clsx("px-px transition-opacity hover:opacity-80", className)}
      isSelected={isLight}
      onChange={() => setTheme(isLight ? "dark" : "light")}
    >
      <Switch.Control className="h-auto w-auto bg-transparent p-0 text-muted">
        <Switch.Thumb className="hidden" />
        <Switch.Icon className="flex items-center justify-center">
          {isLight ? (
            <MoonFilledIcon size={22} />
          ) : (
            <SunFilledIcon size={22} />
          )}
        </Switch.Icon>
      </Switch.Control>
    </Switch>
  );
};
