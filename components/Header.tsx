// components/Header.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ServicesDropdown from "./ServicesDropdown";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoFallback, setLogoFallback] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const [hash, setHash] = useState("");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    // Detect initial theme
    const theme = localStorage.getItem("ads_theme");
    setIsDarkMode(theme !== "light");

    // Listen for theme changes
    const handleThemeChange = () => {
      const theme = localStorage.getItem("ads_theme");
      setIsDarkMode(theme !== "light");
    };

    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("storage", handleThemeChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  useEffect(() => {
    setHash(window.location.hash || "");

    const onHashChange = () => setHash(window.location.hash || "");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [currentPath]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    lastScrollY.current = window.scrollY || 0;

    const handleScroll = () => {
      const currentY = window.scrollY || 0;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const delta = currentY - lastScrollY.current;

          // Consider user near top: keep transparent and visible
          if (currentY <= 50) {
            setIsScrolled(false);
            setIsHeaderVisible(true);
          } else {
            setIsScrolled(true);
            // scroll down -> hide header; scroll up -> show header
            if (delta > 5) {
              setIsHeaderVisible(false);
            } else if (delta < -5) {
              setIsHeaderVisible(true);
            }
          }

          lastScrollY.current = currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (item: string) => {
    if (item === "Home") return currentPath === "/";
    if (item === "Services") {
      return currentPath === "/services" || (currentPath === "/" && hash === "#services");
    }
    return currentPath === `/${item.toLowerCase()}`;
  };

  return (
    <>
      {/* Mobile Header - hidden on md and above */}
      <MobileHeader />

      {/* Desktop Header - hidden on mobile and small tablets */}
      <header
        className={`hidden md:block fixed w-full z-50 transform transition-transform duration-300 ease-in-out ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'} ${isScrolled && isHeaderVisible ? 'bg-white/5 backdrop-blur-sm' : 'bg-transparent'}`}
      >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side: Logo + Nav (grouped together) */}
        <div className="flex items-center space-x-18">
          {/* Logo */}
          <div className="flex items-center">
            {!logoFallback ? (
              <Image
                src={isDarkMode ? "/Group_1.webp" : "/Aussie_Header_Logo_Light.webp"}
                alt="Aussie Digital Studios Header logo"
                width={140}
                height={56}
                className="h-14 w-auto"
                priority
                unoptimized
                onError={() => setLogoFallback(true)}
              />
            ) : (
              // fallback to plain img if next/image fails for any reason
              // keeps visual classes consistent
              // eslint-disable-next-line @next/next/no-img-element
              <img src={isDarkMode ? "/Group_1.webp" : "/Aussie_Header_Logo_Light.webp"} alt="Aussie Digital Studios" className="h-14 w-auto" />
            )}
          </div>

          {/* Desktop Nav - now next to logo */}
          <nav className="hidden md:flex flex-row space-x-6 items-center relative">
            {['Home', 'About', 'Services', 'Portfolio', 'Packages', 'Contact'].map((item) => {
              const href =
                item === 'Home'
                  ? '/'
                  : item === 'Services'
                    ? '/services' // Keep this for direct navigation
                    : `/${item.toLowerCase()}`;

              const active = isActive(item);

              // Special handling for Services dropdown
              if (item === 'Services') {
                return <ServicesDropdown key={item} />;
              }

              return (
                <Link
                  key={item}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`text-sm font-semibold transition-colors whitespace-nowrap flex flex-col items-center gap-1 ${active
                    ? 'text-[#4C8C74]'
                    : 'text-white opacity-50 hover:text-white hover:opacity-100'
                    }`}
                >
                  <span>{item}</span>
                  <span className={`mt-1 rounded-full w-2 h-2 ${active ? 'bg-[#4C8C74]' : 'bg-transparent'}`} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right side: Get In Touch button */}
        <button className="hidden md:flex items-center space-x-1 text-sm text-white hover:text-green-400 transition-colors" onClick={() => { window.location.href = '/contact'; }}>
          <span>Get In Touch</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </header>
    </>
  );
};

export default Header;