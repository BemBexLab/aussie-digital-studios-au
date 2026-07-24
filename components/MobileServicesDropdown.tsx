// components/MobileServicesDropdown.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MOBILE_SERVICE_NAVIGATION } from "@/lib/serviceNavigation";

const MobileServicesDropdown = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname ?? "";

  // Mobile services dropdown is dark-only. No theme detection required.

  useEffect(() => {
    // Close dropdown when scrolling
    const handleScroll = () => {
      setIsServicesDropdownOpen(false);
    };

    if (isServicesDropdownOpen) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isServicesDropdownOpen]);

  const isActive = () => {
    return currentPath === "/services" || currentPath.startsWith("/services/");
  };

  const active = isActive();

  return (
    <div className="w-full md:hidden">
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsServicesDropdownOpen(!isServicesDropdownOpen);
        }}
        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
          active || isServicesDropdownOpen
            ? "text-[#4C8C74] bg-gray-900"
            : "text-gray-300 hover:text-white hover:bg-gray-900"
        }`}
      >
        Services
      </button>

      {/* Mobile Dropdown Panel */}
      {isServicesDropdownOpen && (
        <div
          className="rounded-lg my-2 overflow-hidden max-h-[70vh] overflow-y-auto bg-black text-white"
        >
          {MOBILE_SERVICE_NAVIGATION.map((section, idx) => (
            <div key={idx} className="px-4 py-3 border-b last:border-b-0 border-gray-800">
              <Link
                prefetch={false}
                href={section.title.href}
                className="text-xs font-semibold text-[#4C8C74] uppercase mb-2 block hover:text-green-400 transition-colors"
                onClick={() => setIsServicesDropdownOpen(false)}
              >
                {section.title.label}
              </Link>
              <ul className="space-y-1">
                {section.items.map((subItem, subIdx) => (
                  <li key={subIdx}>
                    <Link
                      prefetch={false}
                      href={subItem.href}
                      className="text-xs hover:text-green-400 transition-colors block text-gray-300"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      {subItem.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileServicesDropdown;
