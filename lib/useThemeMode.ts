"use client";

import { useSyncExternalStore } from "react";

export type ThemeMode = "light" | "dark";

const THEME_EVENT = "ads-theme-change";
const subscribers = new Set<() => void>();
let listenersInitialized = false;

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

function emitThemeModeChange() {
  subscribers.forEach((callback) => callback());
}

function ensureThemeListeners() {
  if (listenersInitialized || typeof window === "undefined") {
    return;
  }

  const syncThemeMode = () => {
    emitThemeModeChange();
  };

  window.addEventListener("storage", syncThemeMode);
  window.addEventListener(THEME_EVENT, syncThemeMode as EventListener);
  listenersInitialized = true;
}

export function applyThemeMode(nextTheme: ThemeMode) {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;

  if (nextTheme === "light") {
    root.classList.add("light");
    root.classList.remove("dark");
  } else {
    root.classList.remove("light");
    root.classList.add("dark");
  }

  try {
    window.localStorage.setItem("ads_theme", nextTheme);
  } catch {}

  dispatchThemeModeChange(nextTheme);
}

export function dispatchThemeModeChange(nextTheme: ThemeMode) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent(THEME_EVENT, { detail: { theme: nextTheme } }),
    );
  }
}

export function useThemeMode() {
  const themeMode = useSyncExternalStore(
    (onStoreChange) => {
      ensureThemeListeners();
      subscribers.add(onStoreChange);

      return () => {
        subscribers.delete(onStoreChange);
      };
    },
    readThemeMode,
    () => "dark",
  );

  return {
    themeMode,
    isLightMode: themeMode === "light",
    isDarkMode: themeMode === "dark",
  };
}
