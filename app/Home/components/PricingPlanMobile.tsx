"use client";

import React from "react";

const cardData = [
  {
    service: "Logo",
    data: [
      {
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
        includes: [
          "2 Custom Logo Design Concepts",
          "1 Dedicated Designer",
          "4 REVISIONS",
          "48 to 72 hours TAT",
          "100% Unique Design Guarantee",
          "100% Satisfaction Guarantee",
          "100% Ownership Rights",
          "100% Money Back Guarantee",
        ],
      },
      {
        title: "Standard Package",
        price: "$349",
        discountedFrom: "$699",
        includes: [
          "5 Custom Logo Design Concepts",
          "By 2 Designers",
          "UNLIMITED Revisions",
          "48 to 72 hours TAT",
          "100% Unique Design Guarantee",
          "100% Satisfaction Guarantee",
          "100% Ownership Rights",
          "100% Money Back Guarantee",
        ],
      },
      {
        title: "Premium Package",
        price: "$499",
        discountedFrom: "$999",
        includes: [
          "UNLIMITED Logo Design Concepts",
          "By 4 Designers",
          "UNLIMITED Revisions",
          "Stationary Design",
          "48 to 72 hours TAT",
          "FREE MS Word Letterhead",
          "All Final Files Format",
        ],
      },
    ],
  },
  {
    service: "E-Commerce",
    data: [
      {
        title: "Basic E-Commerce",
        price: "$599",
        discountedFrom: "$1299",
        includes: [
          "Up to 50 Products",
          "Payment Gateway Integration",
          "Mobile Responsive",
          "Order Management",
          "Product Filtering",
          "Search Functionality",
          "Basic SEO",
          "1 Month Support",
        ],
      },
      {
        title: "Standard E-Commerce",
        price: "$999",
        discountedFrom: "$1999",
        includes: [
          "Up to 500 Products",
          "Multiple Payment Gateways",
          "Advanced Analytics",
          "Inventory Management",
          "Customer Reviews",
          "Email Marketing Integration",
          "Advanced SEO",
          "3 Months Support",
        ],
      },
      {
        title: "Premium E-Commerce",
        price: "$1599",
        discountedFrom: "$2999",
        includes: [
          "Unlimited Products",
          "Multi-Currency Support",
          "Advanced Reporting",
          "API Integration",
          "Custom Development",
          "24/7 Priority Support",
          "Enterprise SEO",
          "6 Months Support",
        ],
      },
    ],
  },
  {
    service: "Website Design",
    data: [
      {
        title: "Basic Website",
        price: "$299",
        discountedFrom: "$699",
        includes: [
          "Up to 5 Pages",
          "Responsive Design",
          "Basic SEO",
          "Contact Form",
          "Mobile Friendly",
          "SSL Certificate",
          "Free Hosting 1 Year",
          "Basic Support",
        ],
      },
      {
        title: "Standard Website",
        price: "$599",
        discountedFrom: "$1299",
        includes: [
          "Up to 15 Pages",
          "Advanced Responsive Design",
          "Advanced SEO",
          "CMS Integration",
          "Blog Section",
          "Analytics Setup",
          "Free Hosting 2 Years",
          "Priority Support",
        ],
      },
      {
        title: "Premium Website",
        price: "$999",
        discountedFrom: "$2299",
        includes: [
          "Unlimited Pages",
          "Custom Design",
          "Complete SEO Optimization",
          "E-Commerce Ready",
          "Advanced Security",
          "Custom Integrations",
          "Free Hosting 3 Years",
          "24/7 Support",
        ],
      },
    ],
  },
  {
    service: "SMM",
    data: [
      {
        title: "Starter SMM",
        price: "$199",
        discountedFrom: "$499",
        includes: [
          "1 Social Platform",
          "4 Posts Per Month",
          "Basic Graphics",
          "Community Management",
          "Monthly Report",
          "Response Time: 24 hours",
          "Content Calendar",
          "Hashtag Research",
        ],
      },
      {
        title: "Growth SMM",
        price: "$399",
        discountedFrom: "$899",
        includes: [
          "3 Social Platforms",
          "12 Posts Per Month",
          "Professional Graphics",
          "Active Engagement",
          "Bi-weekly Reports",
          "Response Time: 12 hours",
          "Influencer Outreach",
          "Analytics & Strategy",
        ],
      },
      {
        title: "Pro SMM",
        price: "$699",
        discountedFrom: "$1499",
        includes: [
          "5 Social Platforms",
          "Unlimited Posts",
          "Custom Video Content",
          "24/7 Community Management",
          "Weekly Reports",
          "Response Time: 2 hours",
          "Paid Ad Management",
          "Brand Strategy Consultation",
        ],
      },
    ],
  },
  {
    service: "Video Animation",
    data: [
      {
        title: "Basic Animation",
        price: "$299",
        discountedFrom: "$699",
        includes: [
          "Up to 30 Seconds",
          "2D Animation",
          "Basic Sound Design",
          "1 Revision Round",
          "Standard Resolution",
          "Concept Art",
          "Storyboarding",
          "Delivery: 2 weeks",
        ],
      },
      {
        title: "Standard Animation",
        price: "$599",
        discountedFrom: "$1299",
        includes: [
          "Up to 60 Seconds",
          "2D/3D Mix",
          "Professional Sound Design",
          "3 Revision Rounds",
          "Full HD Resolution",
          "Advanced Concepts",
          "Professional VFX",
          "Delivery: 3 weeks",
        ],
      },
      {
        title: "Premium Animation",
        price: "$999",
        discountedFrom: "$2299",
        includes: [
          "Unlimited Duration",
          "Full 3D Animation",
          "Custom Music & Sound",
          "Unlimited Revisions",
          "4K Resolution",
          "Character Design",
          "Motion Graphics",
          "Priority Delivery",
        ],
      },
    ],
  },
  {
    service: "SEO",
    data: [
      {
        title: "Starter SEO",
        price: "$199",
        discountedFrom: "$499",
        includes: [
          "Keyword Research",
          "On-Page Optimization",
          "5 Backlinks",
          "Monthly Report",
          "Basic Analytics",
          "Competitor Analysis",
          "Meta Tags Setup",
          "Delivery: 2 weeks",
        ],
      },
      {
        title: "Growth SEO",
        price: "$399",
        discountedFrom: "$899",
        includes: [
          "Advanced Keyword Strategy",
          "Technical SEO Audit",
          "20 Quality Backlinks",
          "Bi-weekly Reports",
          "Advanced Analytics",
          "Content Optimization",
          "Link Building",
          "Delivery: 4 weeks",
        ],
      },
      {
        title: "Enterprise SEO",
        price: "$799",
        discountedFrom: "$1799",
        includes: [
          "Complete SEO Strategy",
          "Full Site Audit",
          "50+ Quality Backlinks",
          "Weekly Reports",
          "Custom Analytics Dashboard",
          "Content Strategy",
          "Ongoing Optimization",
          "24/7 Support",
        ],
      },
    ],
  },
  {
    service: "Maintainance",
    data: [
      {
        title: "Basic Maintenance",
        price: "$99",
        discountedFrom: "$199",
        includes: [
          "Monthly Updates",
          "Security Patches",
          "Backup Management",
          "1 Bug Fix Per Month",
          "Performance Monitoring",
          "Email Support",
          "Uptime Guarantee: 99%",
          "Report: Monthly",
        ],
      },
      {
        title: "Standard Maintenance",
        price: "$199",
        discountedFrom: "$399",
        includes: [
          "Weekly Updates",
          "Advanced Security",
          "Daily Backups",
          "5 Bug Fixes Per Month",
          "Performance Optimization",
          "Priority Email Support",
          "Uptime Guarantee: 99.5%",
          "Report: Bi-weekly",
        ],
      },
      {
        title: "Premium Maintenance",
        price: "$399",
        discountedFrom: "$799",
        includes: [
          "Daily Updates",
          "Enterprise Security",
          "Hourly Backups",
          "Unlimited Bug Fixes",
          "24/7 Performance Monitoring",
          "Phone & Email Support",
          "Uptime Guarantee: 99.9%",
          "Report: Weekly",
        ],
      },
    ],
  },
  {
    service: "Branding",
    data: [
      {
        title: "Startup Branding",
        price: "$399",
        discountedFrom: "$899",
        includes: [
          "Logo Design",
          "Brand Guidelines",
          "Color Palette",
          "Typography Selection",
          "Business Card Design",
          "Social Media Kit",
          "1 Revision Round",
          "Delivery: 2 weeks",
        ],
      },
      {
        title: "Business Branding",
        price: "$699",
        discountedFrom: "$1499",
        includes: [
          "Complete Logo Suite",
          "Full Brand Guidelines",
          "Advanced Color Strategy",
          "Custom Typography",
          "Stationery Suite",
          "Marketing Collateral",
          "3 Revision Rounds",
          "Delivery: 3 weeks",
        ],
      },
      {
        title: "Enterprise Branding",
        price: "$1299",
        discountedFrom: "$2799",
        includes: [
          "Ultimate Brand Identity",
          "Comprehensive Guidelines",
          "Brand Strategy Session",
          "Custom Illustration",
          "Complete Stationery Set",
          "Full Marketing Suite",
          "Unlimited Revisions",
          "Ongoing Brand Support",
        ],
      },
    ],
  },
];

const PricingPlanMobile = () => {
  const [selectedService, setSelectedService] = React.useState("Logo");
  const selectedData = cardData.find(item => item.service === selectedService);

  return (
    <div className="sm:hidden text-white mt-10 py-0 px-4">
      <p className="text-center my-4 text-lg font-medium text-[#4C8C74]">
        Pricing Plans
      </p>
      <h1 className="text-center text-2xl font-semibold text-white mb-6">
        Our Packages
      </h1>

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
              Up to{" "}
              <span className="font-bold">$50%</span> referral AAR
            </p>

            <p className="font-semibold text-xs mb-2">Includes:</p>
            <ul className="space-y-1 text-[#4C8C74] max-h-[160px] overflow-y-auto pr-2 mb-3">
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

            <button className="w-full flex font-light text-xs items-center justify-center gap-2 bg-[#4C8C74] text-white py-2 rounded-full hover:bg-blue-300 transition-colors">
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
  );
};

export default PricingPlanMobile;
