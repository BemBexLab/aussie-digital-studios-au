"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
// Mobile layout merged below; removed separate PricingPlanMobile file

const cardData = [
  {
    service: "Logo",
    data: [
      {
        title: "Starter Logo",
        price: "$149",
        discountedFrom: "$299",
        includes: [
          "2 Unique Logo Concepts",
          "1 Dedicated Designer",
          "3 Revisions",
          "48–72 Hour Delivery",
          "PNG, JPG, PDF Files",
          "100% Ownership Rights",
          "Money-Back Guarantee",
        ],
      },
      {
        title: "Professional Logo",
        price: "$249",
        discountedFrom: "$499",
        includes: [
          "5 Custom Logo Concepts",
          "2 Expert Designers",
          "Unlimited Revisions",
          "48-Hour Delivery",
          "AI, EPS, PSD, PNG, SVG, PDF",
          "Social Media Kit (Profile + Cover)",
          "Brand Color Palette",
          "Full Copyright Ownership",
        ],
      },
      {
        title: "Premium Brand Identity",
        price: "$499",
        discountedFrom: "$999",
        includes: [
          "Unlimited Logo Concepts",
          "Team of 4 Senior Designers",
          "Stationery Suite (Business Card, Letterhead, Envelope)",
          "Brand Style Guide (Fonts, Colors, Usage Rules)",
          "MS Word & Print Templates",
          "All Source + Web Files",
          "Dedicated Project Manager",
          "30-Day Post-Delivery Support",
        ],
      },
    ],
  },
  {
    service: "E-Commerce",
    data: [
      {
        title: "Basic Online Store",
        price: "$499",
        discountedFrom: "$999",
        includes: [
          "5 Product Pages",
          "Shopping Cart & Checkout",
          "Mobile-Responsive Design",
          "SSL Security",
          "PayPal + Stripe Integration",
          "Contact Form",
          "Basic SEO Setup",
          "1 Week Support",
        ],
      },
      {
        title: "Advanced E-Commerce",
        price: "$999",
        discountedFrom: "$1,999",
        includes: [
          "Up to 20 Products",
          "Category Filtering & Search",
          "User Accounts & Order History",
          "Email Notifications",
          "Google Analytics + Meta Pixel",
          "Inventory Management",
          "Speed Optimization",
          "30-Day Support",
        ],
      },
      {
        title: "Enterprise E-Commerce",
        price: "$1,999",
        discountedFrom: "$3,499",
        includes: [
          "Unlimited Products",
          "Multi-Vendor Ready (Optional)",
          "Custom Admin Dashboard",
          "CRM & ERP API Integration",
          "Abandoned Cart Recovery",
          "Multi-Currency & Language",
          "Advanced Reporting",
          "90-Day Developer Support",
        ],
      },
    ],
  },
  {
    service: "Website Design",
    data: [
      {
        title: "Brochure Website",
        price: "$299",
        discountedFrom: "$599",
        includes: [
          "5 Responsive Pages",
          "Mobile-Optimized Layout",
          "Contact Form + Google Map",
          "Basic SEO (Meta Tags, Sitemap)",
          "Fast Loading (Optimized Images)",
          "1 Email Address Setup",
          "1 Week Support",
        ],
      },
      {
        title: "Business Website",
        price: "$599",
        discountedFrom: "$1,199",
        includes: [
          "Up to 10 Pages",
          "CMS (Easy Content Editing)",
          "Blog Section",
          "Social Media Integration",
          "Google Analytics",
          "SSL Certificate",
          "30-Day Support & Training",
        ],
      },
      {
        title: "Custom Web Application",
        price: "$1,299",
        discountedFrom: "$2,499",
        includes: [
          "Fully Custom UI/UX",
          "User Login System",
          "Database Integration",
          "API Connections",
          "Admin Panel",
          "Performance & Security Audit",
          "60-Day Bug Fixing",
        ],
      },
    ],
  },
  {
    service: "SMM",
    data: [
      {
        title: "Starter Social Plan",
        price: "$199/mo",
        discountedFrom: "$399/mo",
        includes: [
          "3 Platforms (FB, IG, LinkedIn)",
          "8 Posts/Month",
          "Basic Graphics",
          "Caption Writing",
          "Monthly Performance Report",
          "Community Engagement (5 hrs/week)",
        ],
      },
      {
        title: "Growth Social Plan",
        price: "$399/mo",
        discountedFrom: "$799/mo",
        includes: [
          "4 Platforms + Stories",
          "16 Posts + 8 Stories/Month",
          "Custom Visuals & Short Videos",
          "Hashtag Strategy",
          "Competitor Analysis",
          "Engagement (10 hrs/week)",
          "Bi-Weekly Reports",
        ],
      },
      {
        title: "Premium Social Management",
        price: "$799/mo",
        discountedFrom: "$1,499/mo",
        includes: [
          "All Major Platforms",
          "Daily Posting + Stories",
          "Reels & TikTok Content",
          "Influencer Outreach Coordination",
          "Ad Campaign Monitoring",
          "Dedicated Account Manager",
          "Weekly Strategy Calls",
          "Full Analytics Dashboard",
        ],
      },
    ],
  },
  {
    service: "Video Animation",
    data: [
      {
        title: "Explainer Video (30 sec)",
        price: "$299",
        discountedFrom: "$599",
        includes: [
          "Scriptwriting",
          "Storyboard",
          "Voiceover (English)",
          "2D Animation",
          "Background Music",
          "1 Revision",
          "MP4 Delivery (HD)",
        ],
      },
      {
        title: "Standard Animated Video (60 sec)",
        price: "$599",
        discountedFrom: "$1,199",
        includes: [
          "Professional Script",
          "Custom Illustrations",
          "Native Voiceover (Multiple Accents)",
          "Smooth 2D Motion",
          "Sound Effects + Music",
          "Unlimited Revisions",
          "Source Files + MP4",
        ],
      },
      {
        title: "Premium Brand Video (90 sec)",
        price: "$999",
        discountedFrom: "$1,999",
        includes: [
          "Concept to Final Delivery",
          "Character Animation",
          "Multi-Scene Storytelling",
          "Studio-Quality Voiceover",
          "Original Soundtrack",
          "Vertical + Horizontal Formats",
          "YouTube, Instagram, TikTok Cuts",
          "30-Day Edits Included",
        ],
      },
    ],
  },
  {
    service: "SEO",
    data: [
      {
        title: "Local SEO Starter",
        price: "$199/mo",
        discountedFrom: "$399/mo",
        includes: [
          "Google Business Profile Optimization",
          "Local Citation Building",
          "On-Page SEO (5 Pages)",
          "Keyword Research (5 Keywords)",
          "Monthly Ranking Report",
          "Review Generation Strategy",
        ],
      },
      {
        title: "National SEO Growth",
        price: "$499/mo",
        discountedFrom: "$999/mo",
        includes: [
          "Technical SEO Audit",
          "Content Optimization (10 Pages)",
          "Blog Writing (2 Articles/Month)",
          "Backlink Building (10 High-Quality Links)",
          "Competitor Gap Analysis",
          "Rank Tracking (20 Keywords)",
          "Bi-Monthly Strategy Call",
        ],
      },
      {
        title: "Enterprise SEO",
        price: "$999/mo",
        discountedFrom: "$1,999/mo",
        includes: [
          "Full-Site Technical SEO",
          "Content Strategy + Calendar",
          "4 Blog Posts + 1 Pillar Page/Month",
          "Link Building (25+ Premium Links)",
          "Schema Markup Implementation",
          "E-A-T Optimization",
          "Dedicated SEO Manager",
          "Custom Dashboard & Weekly Reports",
        ],
      },
    ],
  },
  {
    service: "Maintenance",
    data: [
      {
        title: "Basic Care Plan",
        price: "$49/mo",
        discountedFrom: "$99/mo",
        includes: [
          "Software Updates (CMS, Plugins)",
          "Daily Backups",
          "Uptime Monitoring",
          "Security Scans",
          "1 Hour of Edits/Month",
          "Malware Removal (If Detected)",
        ],
      },
      {
        title: "Pro Maintenance",
        price: "$99/mo",
        discountedFrom: "$199/mo",
        includes: [
          "All Basic Features",
          "Priority Support (<24h Response)",
          "3 Hours of Content Updates",
          "Broken Link Fixes",
          "Performance Optimization",
          "SSL Renewal Handling",
          "Monthly Health Report",
        ],
      },
      {
        title: "White-Glove Support",
        price: "$199/mo",
        discountedFrom: "$399/mo",
        includes: [
          "24/7 Monitoring & Fixes",
          "Unlimited Small Edits",
          "Emergency Hotline",
          "Speed & Core Web Vitals Tuning",
          "Staging Environment Access",
          "Quarterly Strategy Review",
          "Dedicated Tech Manager",
        ],
      },
    ],
  },
  {
    service: "Branding",
    data: [
      {
        title: "Core Brand Kit",
        price: "$399",
        discountedFrom: "$799",
        includes: [
          "Logo + Variations",
          "Color Palette (Primary + Secondary)",
          "Typography Pairing",
          "Brand Voice Guidelines",
          "Social Media Banners",
          "Basic Stationery (Card + Letterhead)",
        ],
      },
      {
        title: "Complete Brand Identity",
        price: "$799",
        discountedFrom: "$1,599",
        includes: [
          "Premium Logo Suite",
          "Full Brand Style Guide (20+ Pages)",
          "Extended Color System",
          "Custom Icon Set",
          "Email Signature Template",
          "Presentation (PPT) Template",
          "Social Media Content Templates",
          "Print + Digital Asset Library",
        ],
      },
      {
        title: "Enterprise Brand System",
        price: "$1,499",
        discountedFrom: "$2,999",
        includes: [
          "Multi-Platform Brand Architecture",
          "Sub-Brand Guidelines",
          "Motion Logo + Animations",
          "Brand Training Deck",
          "Internal Brand Playbook",
          "Merchandise Design Mockups",
          "Voice & Tone Handbook",
          "Ongoing Brand Consultation (3 Sessions)",
        ],
      },
    ],
  },
];

const PricingPlan = () => {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (e?.isIntersecting) {
          setIsInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const [selectedService, setSelectedService] = React.useState("Logo");
  const selectedData = cardData.find(
    (item) => item.service === selectedService,
  );

  return (
    <div ref={wrapperRef}>
      {/* Mobile view (hidden on sm and up) */}
      <div className="sm:hidden text-white mt-10 py-0 px-4">
        <motion.p
          className="text-center my-4 text-lg font-medium text-[#4C8C74]"
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.6 }}
        >
          Pricing Plans
        </motion.p>
        <motion.h1
          className="text-center text-2xl font-semibold text-white mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Our Packages
        </motion.h1>

        {/* Service Buttons Grid */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {cardData.map((service) => (
            <button
              key={service.service}
              onClick={() => setSelectedService(service.service)}
              className={`px-3 py-2 rounded-[6px] border cursor-pointer text-xs transition font-medium ${
                selectedService === service.service
                  ? "border-[#4C8C74] text-white bg-[#4C8C74]"
                  : "text-gray-300 border-gray-600 hover:border-[#4C8C74] hover:text-[#4C8C74]"
              }`}
            >
              {service.service}
            </button>
          ))}
        </div>

        {/* Cards - Vertical Stack */}
        <div className="space-y-4 mt-6 pb-8">
          {selectedData?.data.map((card, index) => (
            <div
              key={index}
              className="bg-cover bg-center rounded-lg p-4 shadow-lg border border-gray-700"
              data-pricing-bg
              style={{
                backgroundImage: "url('/Home/Frame_161.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className="text-sm text-yellow-400 mb-2 font-semibold">
                {card.title}
              </h2>
              <p className="text-3xl text-white font-semibold mb-2">
                {card.price}
                <span className="line-through font-normal text-xs mx-2 text-[#4C8C74]">
                  {card.discountedFrom}
                </span>
              </p>
              <p className="text-xs text-[#4C8C74] mb-3">
                Up to <span className="font-bold">$50%</span> referral AAR
              </p>

              <p className="font-semibold text-xs mb-2">Includes:</p>
              <ul className="space-y-1 text-[#4C8C74] max-h-[160px] overflow-y-auto pr-2 mb-3 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-[#4C8C74] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-[#202020]">
                {card.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs">
                    <svg
                      className="w-3 h-3 shrink-0 mt-0.5 text-[#4C8C74]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full flex font-light text-xs items-center justify-center gap-2 bg-[#4C8C74] text-white py-2 rounded-full hover:bg-[#5da888] transition-colors">
                Place Your Order
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="10" fill="black" />
                  <path
                    d="M9 12H15M15 12L12 9M15 12L12 15"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet and Desktop view */}
      <div className="hidden sm:block text-white mt-5 sm:mt-4 lg:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 justify-center">
          <motion.p
            className="text-center my-[7px] text-lg sm:text-xl font-medium text-[#4C8C74]"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.6 }}
          >
            Pricing Plans
          </motion.p>
          <motion.h1
            className="text-center text-3xl sm:text-4xl font-semibold text-white mb-5 sm:mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Our Packages
          </motion.h1>

          {/* Service Buttons - Responsive */}
          <div className="flex flex-row gap-2 sm:gap-4 justify-center flex-wrap mb-8">
            {cardData.map((service) => (
              <button
                key={service.service}
                onClick={() => setSelectedService(service.service)}
                className={`px-3 sm:px-4 py-2 rounded-[8px] border cursor-pointer text-xs sm:text-sm transition font-medium ${
                  selectedService === service.service
                    ? "border-yellow-400 text-yellow-400 bg-yellow-400/10"
                    : "text-gray-400 border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
                }`}
              >
                {service.service}
              </button>
            ))}
          </div>

          {/* Cards - Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 justify-items-center my-7 px-2 sm:px-4">
            {selectedData?.data.map((card, index) => (
              <div
                key={index}
                className="bg-cover bg-center rounded-xl p-5 sm:p-6 w-full max-w-md xl:max-w-[370px] shadow-lg flex flex-col"
                data-pricing-bg
                style={{
                  backgroundImage: "url('/Home/Frame_161.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  minHeight: "480px",
                }}
              >
                <h2 className="text-sm sm:text-base text-yellow-400 mb-3 sm:mb-4 pricing-package-title font-medium">
                  {card.title}
                </h2>
                <p className="text-4xl sm:text-5xl text-white font-semibold mb-3 sm:mb-4">
                  {card.price}
                  <span className="line-through font-normal text-sm sm:text-base mx-[5px] text-[#4C8C74]">
                    {card.discountedFrom}
                  </span>
                </p>
                <p className="text-sm sm:text-base text-[#4C8C74] mb-6 sm:mb-8">
                  Up to{" "}
                  <span className="font-bold pricing-discount-percent">
                    $50%
                  </span>{" "}
                  referral AAR
                </p>

                <p className="font-semibold text-sm sm:text-md mb-2 sm:mb-3">
                  Includes:
                </p>
                <ul
                  role="list"
                  className="space-y-1 sm:space-y-1.5 mt-1 mb-4 sm:mb-6 text-[#4C8C74] overflow-y-auto pr-1 sm:pr-2 max-h-[160px] sm:max-h-[180px] flex-grow [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-[#4C8C74] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-[#202020] scrollbar-thin scrollbar-thumb-[#4C8C74] scrollbar-track-[#202020]"
                >
                  {card.includes.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-fg-brand me-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <span className="text-xs sm:text-sm font-normal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="flex font-light text-xs sm:text-sm items-center justify-center gap-1 sm:gap-2 bg-[#4C8C74] text-white py-2 sm:py-2.5 px-3 sm:px-4 rounded-full hover:bg-[#5da888] transition-colors group w-fit mr-auto mt-auto"
                >
                  Place Your Order
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 group-hover:rotate-[45deg] sm:w-[28px] sm:h-[28px]"
                  >
                    <circle cx="12" cy="12" r="10" fill="black" />
                    <path
                      d="M9 12H15M15 12L12 9M15 12L12 15"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      transform="rotate(-45 12 12)"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
