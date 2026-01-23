"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ServicesDropdown = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const dropdownRef = useRef<HTMLDivElement>(null);

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
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

  const isActive = () => {
    return currentPath === "/services" || currentPath.startsWith("/services/");
  };

  const servicesContent = [
    {
      title: "Website design and development",
      items: [
        "Custom Website Design",
        "E-commerce Website Development",
        "Magento Development",
        "Opencart",
        "Shopify Development",
        "WooCommerce Development",
        "Wordpress Development",
      ],
    },
    {
      title: "Search Engine Optimization",
      items: [
        "SEO Strategy & Planning",
        "Local Search Dominance",
        "Local Listing",
        "On-page & Off-page",
        "Link Building",
        "Intent-Based Keyword Architecture",
        "Technical SEO Infrastructure",
        "Ecommerce SEO",
        "Google Profile Optimization",
      ],
    },
    {
      title: "Performance Marketing",
      items: [
        "Google Ads",
        "Youtube Ads",
        "Meta Ads",
        "Tiktok Shop Ads",
        "Linkedin Ads",
        "Retargeting & Remarketing",
        "Shopping Ads",
        "Affiliate Performance Marketing",
        "Influencer Performance Marketing",
        "App Performance Marketing",
      ],
    },
    {
      title: "Logo Design & Branding",
      items: [
        "Logo Design & Visual Systems",
        "Brand Guide Book",
        "Playbook",
        "Personal Branding",
        "Video & Motion Graphics",
        "Brand Identity Development",
      ],
    },
    {
      title: "Social Media Marketing & Management",
      items: [
        "Profile Optimization",
        "High-Impact Content Systems",
        "Algorithm-Optimized Distribution",
        "Conversion-Focused Profile Architecture",
        "Trend Intelligence & Reach Amplification",
      ],
    },
    {
      title: "Content Marketing",
      items: [
        "Email Marketing",
        "SEO Content Writing",
        "Copywriting",
        "Conversion Rate Optimization (CRO)",
      ],
    },
  ];

  const active = isActive();

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsServicesDropdownOpen(!isServicesDropdownOpen);
        }}
        className={`text-sm font-semibold transition-colors whitespace-nowrap ${
          active
            ? "text-[#4C8C74]"
            : "text-white opacity-50 hover:text-white hover:opacity-100"
        }`}
      >
        <div className="flex flex-col items-center">
          <span>Services</span>
          <span
            className={`mt-1 rounded-full w-2 h-2 ${
              active ? "bg-[#4C8C74]" : "bg-transparent"
            }`}
          />
        </div>
      </button>

      {/* Dropdown Panel */}
      {isServicesDropdownOpen && (
        <div
          className="fixed -translate-y-12 sm:-translate-y-15 -translate-x-1/2 rounded-xl z-50 overflow-hidden"
          style={{
            top: "calc(5rem + 50px)",
            left: "calc(50% - 20px)",
            width: "1100px",
            height: "390px",
          }}
          onClick={() => setIsServicesDropdownOpen(false)}
        >
          {/* Background Image Layer using Tailwind */}
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat ${
              isDarkMode
                ? "bg-[url('/drop_down_2_dark.webp')]"
                : "bg-[url('/drop_down_2_light.webp')]"
            }`}
            style={{
              backgroundSize: '100% 100%',
            }}
          />

          {/* Content Layer with Semi-transparent Overlay */}
          <div
            className={`absolute inset-0 ${isDarkMode ? "bg-black/20" : "bg-white/20"}`}
          ></div>

          {/* Content Container */}
          <div
            className={`relative flex flex-wrap gap-4 h-full overflow-y-auto p-6 ${isDarkMode ? "text-white" : "text-black"}`}
          >
            {servicesContent.map((col, idx) => (
              <div key={idx} className="space-y-0.5 flex-1 min-w-fit">
                <a
                  className="font-light text-xs sm:text-xs md:text-sm uppercase tracking-tight block leading-tight"
                  href={`/services/${col.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {col.title}
                </a>
                <ul className="space-y-0.5 text-xs font-light mt-3 text-[#AAAAAA]">
                  {col.items.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        href={`/services/${col.title.toLowerCase().replace(/\s+/g, "-")}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`hover:text-green-400 transition-colors text-xs ${isDarkMode ? "text-[#AAAAAA]" : "text-[#444444]"}`}
                      >
                        {subItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesDropdown;
