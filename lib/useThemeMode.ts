"use client";

import { useEffect, useState } from "react";

export type ThemeMode = "light" | "dark";

const THEME_EVENT = "ads-theme-change";

function readThemeMode(): ThemeMode {
  if (typeof document !== "undefined") {
    return document.documentElement.classList.contains("light")
      ? "light"
      : "dark";
  }

  if (typeof window !== "undefined") {
    try {
      return window.localStorage.getItem("ads_theme") === "light"
        ? "light"
        : "dark";
    } catch {
      return "dark";
    }
  }

  return "dark";
}

export function dispatchThemeModeChange(nextTheme: ThemeMode) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(THEME_EVENT, { detail: { theme: nextTheme } }),
    );
  }
}

export function useThemeMode() {
  const [themeMode, setThemeMode] = useState<ThemeMode>("dark");

  useEffect(() => {
    const syncThemeMode = () => {
      setThemeMode(readThemeMode());
    };

    syncThemeMode();

    window.addEventListener("storage", syncThemeMode);
    window.addEventListener(THEME_EVENT, syncThemeMode as EventListener);

    return () => {
      window.removeEventListener("storage", syncThemeMode);
      window.removeEventListener(THEME_EVENT, syncThemeMode as EventListener);
    };
  }, []);

  return {
    themeMode,
    isLightMode: themeMode === "light",
    isDarkMode: themeMode === "dark",
  };
}
