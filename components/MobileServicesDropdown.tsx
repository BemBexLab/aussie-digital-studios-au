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
          {serviceCategories.map((section, idx) => (
            <div key={idx} className="px-4 py-3 border-b last:border-b-0 border-gray-800">
              <Link
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
