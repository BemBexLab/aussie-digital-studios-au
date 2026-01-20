"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ServicesDropdown = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const pathname = usePathname();
  const currentPath = pathname ?? "";

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
    <div className="relative">
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
          className={`fixed top-20 -translate-y-12 sm:-translate-y-15 -translate-x-1/2 rounded-lg z-50 p-3 sm:p-4 md:p-8 lg:p-18 ${isDarkMode ? 'text-white' : 'text-black'}`}
          style={{
            left: 'calc(50% - 20px)',
            backgroundImage: `url(${isDarkMode ? '/dropdown_dark.webp' : '/dropdown_light.webp'})`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: 'clamp(85vw, 95vw, 1320px)',
            height: 'clamp(350px, 75vh, 580px)',
          }}
          onClick={() => setIsServicesDropdownOpen(false)}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2 md:gap-5 h-full overflow-y-auto max-h-[350px] sm:max-h-[450px] md:max-h-full px-2 sm:px-0">
            {servicesContent.map((col, idx) => (
              <div key={idx} className="space-y-1">
                <a className="font-light text-xs sm:text-sm md:text-md uppercase tracking-wide block" href="#">
                  {col.title}
                </a>
                <ul className="space-y-0.5 text-xs sm:text-sm">

                  {col.items.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        href={`/services#${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                        className={`hover:text-green-400 transition-colors text-sm ${isDarkMode ? 'text-white' : 'text-black'}`}
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
