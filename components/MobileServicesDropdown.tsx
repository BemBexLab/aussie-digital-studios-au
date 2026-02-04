// components/MobileServicesDropdown.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileServicesDropdown = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname ?? "";

  // Mobile services dropdown is dark-only. No theme detection required.

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
          {servicesContent.map((section, idx) => (
            <div key={idx} className="px-4 py-3 border-b last:border-b-0 border-gray-800">
              <Link
                href={`/services/${section.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-xs font-semibold text-[#4C8C74] uppercase mb-2 block hover:text-green-400 transition-colors"
                onClick={() => setIsServicesDropdownOpen(false)}
              >
                {section.title}
              </Link>
              <ul className="space-y-1">
                {section.items.map((subItem, subIdx) => (
                  <li key={subIdx}>
                    <Link
                      href={`/services/${section.title.toLowerCase().replace(/\s+/g, "-")}/${subItem.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-xs hover:text-green-400 transition-colors block text-gray-300"
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      {subItem}
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
