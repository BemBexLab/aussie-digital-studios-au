// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoFallback, setLogoFallback] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const [hash, setHash] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
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
    <header className="fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left side: Logo + Nav (grouped together) */}
        <div className="flex items-center space-x-18">
          {/* Logo */}
          <div className="flex items-center">
            {!logoFallback ? (
              <Image
                src="/Group_1.png"
                alt="Aussie Digital Studios"
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
              <img src="/Group_1.png" alt="Aussie Digital Studios" className="h-14 w-auto" />
            )}
          </div>

          {/* Desktop Nav - now next to logo */}
          <nav className="hidden md:flex space-x-6">
            {['Home', 'About', 'Services', 'Portfolio', 'Packages', 'Contact'].map((item) => {
              const href =
                item === 'Home'
                  ? '/'
                  : item === 'Services'
                    ? '/services'
                    : `/${item.toLowerCase()}`;

              const active = isActive(item);

              return (
                <Link
                  key={item}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`text-sm font-semibold transition-colors whitespace-nowrap ${active
                    ? 'text-[#4C8C74]'
                    : 'text-white opacity-50 hover:text-white hover:opacity-100'
                    }`}
                >
                  <div className="flex flex-col items-center">
                    <span>{item}</span>
                    <span className={`mt-1 rounded-full w-2 h-2 ${active ? 'bg-[#4C8C74]' : 'bg-transparent'}`} />
                  </div>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right side: Get In Touch button */}
        <button className="hidden md:flex items-center space-x-1 text-sm text-white hover:text-green-400 transition-colors">
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

        {/* Mobile Menu Button (only visible on mobile) */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        <div className="md:hidden bg-black/90 pb-4">
          <nav className="flex flex-col space-y-4 px-6 py-4">
            {['Home', 'About', 'Services', 'Portfolio', 'Packages', 'Contact'].map((item) => {
              const href =
                item === 'Home'
                  ? '/'
                  : item === 'Services'
                    ? '/#services'
                    : `/${item.toLowerCase()}`;

              const active = isActive(item);

              return (
                <Link
                  key={item}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`text-sm font-medium transition-colors ${active ? 'text-[#4C8C74]' : 'text-gray-300 hover:text-white'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex flex-col items-start md:items-center">
                    <span>{item}</span>
                    <span className={`mt-1 rounded-full w-2 h-2 ${active ? 'bg-[#4C8C74]' : 'bg-transparent'}`} />
                  </div>
                </Link>
              );
            })}
            <button className="flex items-center space-x-1 text-sm text-white hover:text-green-400 transition-colors pt-2">
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
  );
};

export default Header;