"use client";
import { PiSunFill, PiMoonFill } from "react-icons/pi";
import { applyThemeMode, useThemeMode } from "@/lib/useThemeMode";

export default function ThemeToggle() {
  const { themeMode } = useThemeMode();

  function toggle() {
    applyThemeMode(themeMode === "dark" ? "light" : "dark");
  }

  return (
    <button
      aria-label={
        themeMode === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      onClick={toggle}
      className="w-12 h-12 rounded-full bg-[#4C8C74] flex items-center justify-center drop-shadow-[0_0_20px_rgba(76,140,116,0.8)]"
    >
      {themeMode === "dark" ? <PiSunFill size={26} /> : <PiMoonFill size={26} />}
    </button>
  );
}
