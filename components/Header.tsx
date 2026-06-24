// components/Header.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ServicesDropdown from "./ServicesDropdown";
import MobileHeader from "./MobileHeader";
import { useThemeMode } from "@/lib/useThemeMode";

const Header = () => {
  const [logoFallback, setLogoFallback] = useState(false);
  const { isDarkMode } = useThemeMode();
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const [hash, setHash] = useState("");
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

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
      <div className="w-full px-6 py-4 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between">
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
                style={{ width: "auto" }}
                priority
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
          <nav className="hidden md:flex flex-row space-x-8 lg:space-x-15 items-center relative ml-[190px]">
            {['Home', 'About', 'Services', 'Portfolio', 'Packages', 'Blogs', 'Contact'].map((item) => {
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
        <Link
          href="tel:+61468285539"
          className="hidden md:flex items-center space-x-1 text-xs lg:text-sm text-white hover:text-green-400 transition-colors whitespace-nowrap px-2 lg:px-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
  <path d="M14.3761 2.05373C14.3761 2.05373 16.6352 2.2591 19.5104 5.13432C22.3857 8.00955 22.591 10.2687 22.591 10.2687" stroke="white" stroke-width="1.5403" stroke-linecap="round"/>
  <path d="M14.5887 5.68436C14.5887 5.68436 15.6052 5.9748 17.13 7.49962C18.6549 9.02443 18.9453 10.041 18.9453 10.041" stroke="white" stroke-width="1.5403" stroke-linecap="round"/>
  <path d="M10.3073 5.459L10.9737 6.65317C11.5752 7.73085 11.3337 9.14458 10.3865 10.0918C10.3865 10.0918 9.23747 11.2408 11.3207 13.3241C13.4039 15.4073 14.553 14.2583 14.553 14.2583C15.5002 13.3111 16.914 13.0696 17.9916 13.6711L19.1858 14.3375C20.8131 15.2457 21.0053 17.5278 19.5749 18.9582C18.7154 19.8177 17.6625 20.4865 16.4986 20.5306C14.5392 20.6049 11.2116 20.109 7.87372 16.7711C4.53582 13.4332 4.03993 10.1056 4.11421 8.14622C4.15834 6.98228 4.82711 5.92937 5.6866 5.06988C7.11697 3.63951 9.3991 3.83169 10.3073 5.459Z" stroke="white" stroke-width="1.5403" stroke-linecap="round"/>
</svg>
          <span>(0468) 285-539</span>
          {/* <svg
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
          </svg> */}
        </Link>
      </div>
    </header>
    </>
  );
};

export default Header;
