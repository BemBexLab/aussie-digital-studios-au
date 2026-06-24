// components/MobileHeader.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileServicesDropdown from "./MobileServicesDropdown";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoFallback, setLogoFallback] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const [hash, setHash] = useState(() =>
    typeof window === "undefined" ? "" : window.location.hash || "",
  );

  // Mobile header is dark-only. No theme detection required.

  useEffect(() => {
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
      <header className="fixed top-0 w-full z-[100] lg:hidden transition-colors">
      <div className="mx-3 mt-3 rounded-[22px] border border-white/12 bg-black/10 px-4 py-3 text-white backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.22)] sm:mx-4 sm:px-5">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          {!logoFallback ? (
            <Image
              src="/Group_1.webp"
              alt="Aussie Digital Studios"
              width={100}
              height={40}
              className="h-9 w-auto sm:h-10"
              priority
              onError={() => setLogoFallback(true)}
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/Group_1.webp" alt="Aussie Digital Studios" className="h-10 w-auto" />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white p-2"
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mx-3 mt-2 rounded-[22px] border border-white/12 bg-black/12 pb-4 text-white backdrop-blur-xl shadow-[0_14px_40px_rgba(0,0,0,0.22)] sm:mx-4">
          <nav className="flex flex-col space-y-2 px-4 py-4 sm:px-5">
            {['Home', 'About'].map((item) => {
              const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
              const active = isActive(item);

              return (
                <Link
                  key={item}
                  href={href}
                  className={`px-4 py-2 rounded-lg transition-colors block text-white ${
                    active
                      ? 'text-[#4C8C74] bg-white/5'
                      : 'hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}

            {/* Services Dropdown - after About */}
            <MobileServicesDropdown />

            {['Portfolio', 'Packages', 'Blogs', 'Contact'].map((item) => {
              const href = `/${item.toLowerCase()}`;
              const active = isActive(item);

              return (
                <Link
                  key={item}
                  href={href}
                  className={`px-4 py-2 rounded-lg transition-colors block text-white ${
                    active
                      ? 'text-[#4C8C74] bg-white/5'
                      : 'hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="w-full flex items-center justify-center space-x-1 text-sm text-white hover:text-green-400 transition-colors px-4 py-2 mt-2 rounded-lg hover:bg-gray-900"
              onClick={() => setIsMenuOpen(false)}
            >
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
            </Link>
          </nav>
        </div>
      )}
      </header>
    
      {/* Spacer to push content below fixed header */}
      <div className="h-20 lg:hidden" />
    </>
  );
};

export default MobileHeader;
