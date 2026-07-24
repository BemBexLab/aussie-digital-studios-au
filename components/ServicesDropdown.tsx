"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { DESKTOP_SERVICE_NAVIGATION } from "@/lib/serviceNavigation";

const ServicesDropdown = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const openDropdown = () => {
    clearCloseTimeout();
    setIsServicesDropdownOpen(true);
  };

  const scheduleCloseDropdown = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
      closeTimeoutRef.current = null;
    }, 220);
  };

  // Dropdown is dark-only. No theme detection required.

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    // Close dropdown when scrolling
    const handleScroll = () => {
      setIsServicesDropdownOpen(false);
    };

    if (isServicesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isServicesDropdownOpen]);

  useEffect(() => {
    return () => {
      clearCloseTimeout();
    };
  }, []);

  const isActive = () => {
    return currentPath === "/services" || currentPath.startsWith("/services/");
  };

  const active = isActive();

  return (
    <div
      className="relative flex flex-col items-center"
      ref={dropdownRef}
      onMouseEnter={openDropdown}
      onMouseLeave={scheduleCloseDropdown}
    >
      <Link
        href="/services"
        onFocus={openDropdown}
        className={`text-sm font-semibold transition-colors whitespace-nowrap flex flex-col items-center gap-1 leading-none ${
          active
            ? "text-[#4C8C74]"
            : "text-white opacity-50 hover:text-white hover:opacity-100"
        }`}
      >
        <span>Services</span>
        <span
          className={`mt-1 rounded-full w-2 h-2 ${
            active ? "bg-[#4C8C74]" : "bg-transparent"
          }`}
        />
      </Link>

      {/* Dropdown Panel */}
      {isServicesDropdownOpen && (
        <div
          data-services-dropdown
          className="fixed -translate-y-12 sm:-translate-y-15 -translate-x-1/2 rounded-xl z-50 overflow-hidden"
          style={{
            top: "calc(5rem + 50px)",
            left: "calc(50% - 20px)",
            width: "1100px",
            height: "390px",
          }}
          onMouseEnter={openDropdown}
          onMouseLeave={scheduleCloseDropdown}
          onClick={() => setIsServicesDropdownOpen(false)}
        >
          {/* Background Image Layer */}
          <Image
            src="/drop_down_2_dark.webp"
            alt=""
            fill
            sizes="1100px"
            className="absolute inset-0 object-fill"
          />

          {/* Content Layer with Semi-transparent Overlay */}
          <div
            className="absolute inset-0 bg-black/20"
          ></div>

          {/* Content Container */}
          <div
            data-services-content
            className="relative columns-4 h-full overflow-y-auto p-6 md:p-4 text-white [column-gap:0px]"
          >
            {DESKTOP_SERVICE_NAVIGATION.map((col, idx) => (
              <div
                key={idx}
                className="service-col space-y-0.5 min-w-0 break-inside-avoid mb-7"
              >
                {(col.title.label === "Web Design & Development" ||
                  col.title.label === "Performance Marketing" ||
                  col.title.label === "Logo Design & Branding" ||
                  col.title.label === "Content Marketing") && (
                  <div className="h-8" />
                )}
                <Link
                  prefetch={false}
                  className="font-light text-md md:text-md uppercase tracking-tight block leading-tight hover:text-green-400 transition-colors"
                  href={col.title.href}
                >
                  {col.title.label}
                </Link>
                <ul className="space-y-0.5 text-md font-light text-[#AAAAAA]">
                  {col.items.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        prefetch={false}
                        href={subItem.href}
                        className="hover:text-green-400 transition-colors text-sm text-[#AAAAAA]"
                      >
                        {subItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) and (max-width: 1098px) {
          [data-services-dropdown] {
            width: calc(95vw - 20px) !important;
            max-height: 550px !important;
            height: auto !important;
          }
          [data-services-content] {
            padding: 1rem !important;
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ServicesDropdown;
