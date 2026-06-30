"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

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

  const serviceCategories = [
    {
      title: { label: "Web Design & Development", href: "/services/web-design-development/" },
      items: [
        { label: "Custom Website Design", href: "/services/web-design-development/custom-website-design" },
        { label: "E-commerce Development", href: "/services/web-design-development/ecommerce-website-development" },
        { label: "Magento Development", href: "/services/web-design-development/magento-development" },
        // { label: "Opencart", href: "/services/web-design-development/opencart" },
        // { label: "Shopify Development", href: "/services/web-design-development/shopify-development" },
        // { label: "WooCommerce Development", href: "/services/web-design-development/woocommerce-development" },
        { label: "Wordpress Development", href: "/services/web-design-development/wordpress-development" },
      ]
    },
    {
      title: { label: "Search Engine Optimization", href: "/services/search-engine-optimization/" },
      items: [
        { label: "SEO Strategy & Planning", href: "/services/search-engine-optimization/seo-strategy-planning" },
        { label: "Local Search Dominance", href: "/services/search-engine-optimization/local-search-dominance" },
        // { label: "Local Listing", href: "/services/search-engine-optimization/local-listing" },
        { label: "On-page & Off-page", href: "/services/search-engine-optimization/onpage-offpage-seo" },
        // { label: "Link Building", href: "/services/search-engine-optimization/link-building" },
        // { label: "Intent-Based Keyword Architecture", href: "/services/search-engine-optimization/intent-based-keyword-architecture" },
        { label: "Technical SEO Infrastructure", href: "/services/search-engine-optimization/technical-seo-infrastructure" },
        // { label: "Ecommerce SEO", href: "/services/search-engine-optimization/ecommerce-seo" },
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
        { label: "Logo & Visual Designs", href: "/services/logo-design-branding/logo-design-visual-systems" },
        { label: "Brand Guide Book", href: "/services/logo-design-branding/brand-guide-book" },
        // { label: "Playbook", href: "/services/logo-design-branding/playbook" },
        { label: "Personal Branding", href: "/services/logo-design-branding/personal-branding" },
        // { label: "Video & Motion Graphics", href: "/services/logo-design-branding/video-motion-graphics" },
        { label: "Brand Development", href: "/services/logo-design-branding/brand-identity-development" },
      ]
    },
    {
      title: { label: "Social Media Marketing & Management", href: "/services/social-media-marketing-management/" },
      items: [
        { label: "Profile Optimization", href: "/services/social-media-marketing-management/profile-optimization" },
        { label: "High-Impact Content Systems", href: "/services/social-media-marketing-management/high-impact-content-systems" },
        // { label: "Algorithm-Optimized Distribution", href: "/services/social-media-marketing-management/algorithm-optimized-distribution" },
        { label: "Conversion-Focused Profile Optimization", href: "/services/social-media-marketing-management/conversion-focused-profile-architecture" },
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
            priority
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
            {serviceCategories.map((col, idx) => (
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
                <a
                  className="font-light text-md md:text-md uppercase tracking-tight block leading-tight hover:text-green-400 transition-colors"
                  href={col.title.href}
                >
                  {col.title.label}
                </a>
                <ul className="space-y-0.5 text-md font-light text-[#AAAAAA]">
                  {col.items.map((subItem, subIdx) => (
                    <li key={subIdx}>
                      <Link
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
