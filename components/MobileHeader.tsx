// components/MobileHeader.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileServicesDropdown from "./MobileServicesDropdown";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [logoFallback, setLogoFallback] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const [hash, setHash] = useState("");

  useEffect(() => {
    // Check if document has dark class
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);

    // Listen for changes in the dark class
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setHash(window.location.hash || "");

    const onHashChange = () => setHash(window.location.hash || "");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [currentPath]);

  const isActive = (item: string) => {
    if (item === "Home") return currentPath === "/";
    if (item === "Services") {
      return currentPath === "/services" || (currentPath === "/" && hash === "#services");
    }
    return currentPath === `/${item.toLowerCase()}`;
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-[100] md:hidden ${isDarkMode ? 'bg-black/10' : 'bg-white/60'} backdrop-blur-sm transition-colors`}>
      <div className={`flex items-center justify-between px-4 py-3 ${isDarkMode ? 'text-white' : 'text-black'}`}>
        {/* Logo */}
        <div className="flex items-center">
          {!logoFallback ? (
            <Image
              src={isDarkMode ? "/Group_1.png" : "/Aussie_Header_Logo_Light.webp"}
              alt="Aussie Digital Studios"
              width={100}
              height={40}
              className="h-10 w-auto"
              priority
              unoptimized
              onError={() => setLogoFallback(true)}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={isDarkMode ? "/Group_1.png" : "/Aussie_Header_Logo_Light.webp"} alt="Aussie Digital Studios" className="h-10 w-auto" />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`${isDarkMode ? 'text-white' : 'text-black'} p-2`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`${isDarkMode ? 'bg-black/60 border-gray-700 text-white' : 'bg-white/60 border-gray-200 text-black'} backdrop-blur-sm pb-4 border-t`}>
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {['Home', 'About'].map((item) => {
              const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              const active = isActive(item);

              return (
                <Link
                  key={item}
                  href={href}
                  className={`px-4 py-2 rounded-lg transition-colors block ${isDarkMode ? 'text-white' : 'text-black'} ${
                    active
                      ? `text-[#4C8C74] ${isDarkMode ? 'bg-[#4C8C74]' : 'bg-gray-200'}`
                      : (isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200')
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}

            {/* Services Dropdown - after About */}
            <MobileServicesDropdown />

            {['Portfolio', 'Packages', 'Contact'].map((item) => {
              const href = `/${item.toLowerCase()}`;
              const active = isActive(item);

              return (
                <Link
                  key={item}
                  href={href}
                  className={`px-4 py-2 rounded-lg transition-colors block ${isDarkMode ? 'text-white' : 'text-black'} ${
                    active
                      ? `text-[#4C8C74] ${isDarkMode ? 'bg-[#4C8C74]' : 'bg-gray-200'}`
                      : (isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200')
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}

            <button className={`w-full flex items-center justify-center space-x-1 text-sm ${isDarkMode ? 'text-white hover:text-green-400' : 'text-black hover:text-green-600'} transition-colors px-4 py-2 mt-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-900' : 'hover:bg-gray-200'}`}>
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
          </nav>
        </div>
      )}
      </header>
    
      {/* Spacer to push content below fixed header */}
      <div className="h-16 md:hidden" />
    </>
  );
};

export default MobileHeader;
