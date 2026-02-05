"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ServicesDropdown = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname ?? "";
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const isActive = () => {
    return currentPath === "/services" || currentPath.startsWith("/services/");
  };

  const serviceCategories = [
    {
      title: { label: "Web Design & Development", href: "/services/web-design-development/" },
      items: [
        { label: "Custom Website Design", href: "/services/web-design-development/custom-website-design" },
        { label: "E-commerce Website Development", href: "/services/web-design-development/ecommerce-website-development" },
        { label: "Magento Development", href: "/services/web-design-development/magento-development" },
        { label: "Opencart", href: "/services/web-design-development/opencart" },
        { label: "Shopify Development", href: "/services/web-design-development/shopify-development" },
        { label: "WooCommerce Development", href: "/services/web-design-development/woocommerce-development" },
        { label: "Wordpress Development", href: "/services/web-design-development/wordpress-development" },
      ]
    },
    {
      title: { label: "Search Engine Optimization", href: "/services/search-engine-optimization/" },
      items: [
        { label: "SEO Strategy & Planning", href: "/services/search-engine-optimization/seo-strategy-planning" },
        { label: "Local Search Dominance", href: "/services/search-engine-optimization/local-search-dominance" },
        { label: "Local Listing", href: "/services/search-engine-optimization/local-listing" },
        { label: "On-page & Off-page", href: "/services/search-engine-optimization/onpage-offpage-seo" },
        { label: "Link Building", href: "/services/search-engine-optimization/link-building" },
        { label: "Intent-Based Keyword Architecture", href: "/services/search-engine-optimization/intent-based-keyword-architecture" },
        { label: "Technical SEO Infrastructure", href: "/services/search-engine-optimization/technical-seo-infrastructure" },
        { label: "Ecommerce SEO", href: "/services/search-engine-optimization/ecommerce-seo" },
        { label: "Google Profile Optimization", href: "/services/search-engine-optimization/google-profile-optimization" },
      ]
    },
    {
      title: { label: "Performance Marketing", href: "/services/performance-marketing/" },
      items: [
        { label: "Google Ads", href: "/services/performance-marketing/google-ads" },
        { label: "Youtube Ads", href: "/services/performance-marketing/youtube-ads" },
        { label: "Meta Ads", href: "/services/performance-marketing/meta-ads" },
        { label: "Tiktok Shop Ads", href: "/services/performance-marketing/tiktok-shop-ads" },
        { label: "Linkedin Ads", href: "/services/performance-marketing/linkedin-ads" },
        { label: "Retargeting & Remarketing", href: "/services/performance-marketing/retargeting-remarketing" },
        { label: "Shopping Ads", href: "/services/performance-marketing/shopping-ads" },
        { label: "Affiliate Performance Marketing", href: "/services/performance-marketing/affiliate-performance-marketing" },
        { label: "Influencer Performance Marketing", href: "/services/performance-marketing/influencer-performance-marketing" },
        { label: "App Performance Marketing", href: "/services/performance-marketing/app-performance-marketing" },
      ]
    },
    {
      title: { label: "Logo Design & Branding", href: "/services/logo-design-branding/" },
      items: [
        { label: "Logo Design & Visual Systems", href: "/services/logo-design-branding/logo-design-visual-systems" },
        { label: "Brand Guide Book", href: "/services/logo-design-branding/brand-guide-book" },
        { label: "Playbook", href: "/services/logo-design-branding/playbook" },
        { label: "Personal Branding", href: "/services/logo-design-branding/personal-branding" },
        { label: "Video & Motion Graphics", href: "/services/logo-design-branding/video-motion-graphics" },
        { label: "Brand Identity Development", href: "/services/logo-design-branding/brand-identity-development" },
      ]
    },
    {
      title: { label: "Social Media Marketing & Management", href: "/services/social-media-marketing-management/" },
      items: [
        { label: "Profile Optimization", href: "/services/social-media-marketing-management/profile-optimization" },
        { label: "High-Impact Content Systems", href: "/services/social-media-marketing-management/high-impact-content-systems" },
        { label: "Algorithm-Optimized Distribution", href: "/services/social-media-marketing-management/algorithm-optimized-distribution" },
        { label: "Conversion-Focused Profile Architecture", href: "/services/social-media-marketing-management/conversion-focused-profile-architecture" },
        { label: "Trend Intelligence & Reach Amplification", href: "/services/social-media-marketing-management/trend-intelligence-reach-amplification" },
      ]
    },
    {
      title: { label: "Content Marketing", href: "/services/content-marketing/" },
      items: [
        { label: "Email Marketing", href: "/services/content-marketing/email-marketing" },
        { label: "SEO Content Writing", href: "/services/content-marketing/seo-content-writing" },
        { label: "Copywriting", href: "/services/content-marketing/copywriting" },
        { label: "Conversion Rate Optimization (CRO)", href: "/services/content-marketing/conversion-rate-optimization-cro" },
      ]
    },
  ];

  const active = isActive();

  return (
    <div className="relative flex flex-col items-center" ref={dropdownRef}>
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
            className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-[url('/drop_down_2_dark.webp')]"
            style={{
              backgroundSize: '100% 100%',
            }}
          />

          {/* Content Layer with Semi-transparent Overlay */}
          <div
            className="absolute inset-0 bg-black/20"
          ></div>

          {/* Content Container */}
          <div
            className="relative flex flex-wrap gap-4 h-full overflow-y-auto p-6 text-white"
          >
            {serviceCategories.map((col, idx) => (
              <div key={idx} className="space-y-0.5 flex-1 min-w-fit">
                <a
                  className="font-light text-xs sm:text-xs md:text-sm uppercase tracking-tight block leading-tight hover:text-green-400 transition-colors"
                  href={col.title.href}
                >
                  {col.title.label}
                </a>
                <ul className="space-y-0.5 text-xs font-light mt-3 text-[#AAAAAA]">
                  {col.items.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link
                        href={subItem.href}
                        className="hover:text-green-400 transition-colors text-xs text-[#AAAAAA]"
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
    </div>
  );
};

export default ServicesDropdown;
