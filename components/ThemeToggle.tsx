"use client";
import { useEffect, useState } from "react";
import { PiSunFill, PiMoonFill } from "react-icons/pi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // initialise from localStorage or default to dark
    const stored = typeof window !== "undefined" ? localStorage.getItem("ads_theme") : null;
    const initial = stored || "dark";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  function applyTheme(t: string) {
    const el = typeof document !== "undefined" ? document.documentElement : null;
    if (!el) return;
    if (t === "light") {
      el.classList.add("light");
      el.classList.remove("dark");
    } else {
      el.classList.remove("light");
      el.classList.add("dark");
    }
  }

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("ads_theme", next);
    } catch {}
    applyTheme(next);
  }

  return (
    <button
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
      className="w-12 h-12 rounded-full bg-[#4C8C74] flex items-center justify-center drop-shadow-[0_0_20px_rgba(76,140,116,0.8)]"
    >
      {theme === "dark" ? <PiSunFill size={26} /> : <PiMoonFill size={26} />}
    </button>
  );
}
