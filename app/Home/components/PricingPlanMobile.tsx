import React from "react";

const cardData = [
  {
    title: "Basic Website Package",
    price: "$229",
    discountedFrom: "$499",
    includes : [
      "2 Custom Logo Design Concepts",
      "1 Dedicated Designer",
      "4 REVISIONS",
      "48 to 72 hours TAT",
      "100% Unique Design Guarantee",
      "100% Satisfaction Guarantee",
      "100% Ownership Rights",
      "100% Money Back Guarantee"
    ],
  },
  {
    title: "Basic Website Package",
    price: "$229",
    discountedFrom: "$499",
    includes : [
      "5 Custom Logo Design Concepts",
      "By 2 Designers",
      "UNLIMITED Revisions",
      "48 to 72 hours TAT",
      "100% Unique Design Guarantee",
      "100% Satisfaction Guarantee",
      "100% Ownership Rights",
      "100% Money Back Guarantee"
    ],
  },
  {
    title: "Basic Website Package",
    price: "$229",
    discountedFrom: "$499",
    includes : [
      "UNLIMITED Logo Design Concepts",
      "By 4 Designers",
      "UNLIMITED Revisions",
      "Stationary Design (Business Card, Letterhead, Envelope)",
      "48 to 72 hours TAT",
      "FREE MS Word Letterhead",
      "All Final Files Format (AI, PSD, EPS, PNG, GIF, jpeg, PDF)",
    ],
  },
];

const PricingPlanMobile = () => {
  return (
    <div className="sm:hidden text-white mt-12 py-0 px-4">
      <div className="flex flex-col justify-center space-y-6">
        <p className="text-center text-xs sm:text-sm font-medium text-[#4C8C74]">
          Pricing Plans
        </p>
        <h1 className="text-center text-2xl sm:text-3xl font-semibold text-white leading-tight">
          Our Packages
        </h1>

        {/* Buttons - Horizontal Scroll */}
        <div className="flex flex-row gap-2 overflow-x-auto pb-2">
          <div className="text-gray-400 px-3 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-xs sm:text-sm hover:border-yellow-400 hover:text-yellow-400 transition whitespace-nowrap flex-shrink-0">
            Logo
          </div>
          <div className="text-gray-400 px-3 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-xs sm:text-sm hover:border-yellow-400 hover:text-yellow-400 transition whitespace-nowrap flex-shrink-0">
            E-Commerce
          </div>
          <div className="text-gray-400 px-3 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-xs sm:text-sm hover:border-yellow-400 hover:text-yellow-400 transition whitespace-nowrap flex-shrink-0">
            Website Design
          </div>
          <div className="text-gray-400 px-3 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-xs sm:text-sm hover:border-yellow-400 hover:text-yellow-400 transition whitespace-nowrap flex-shrink-0">
            SMM
          </div>
          <div className="text-gray-400 px-3 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-xs sm:text-sm hover:border-yellow-400 hover:text-yellow-400 transition whitespace-nowrap flex-shrink-0">
            Video Animation
          </div>
          <div className="text-gray-400 px-3 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-xs sm:text-sm hover:border-yellow-400 hover:text-yellow-400 transition whitespace-nowrap flex-shrink-0">
            SEO
          </div>
          <div className="text-gray-400 px-3 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-xs sm:text-sm hover:border-yellow-400 hover:text-yellow-400 transition whitespace-nowrap flex-shrink-0">
            Maintenance
          </div>
          <div className="text-gray-400 px-3 py-2 rounded-[8px] border border-gray-600 cursor-pointer text-xs sm:text-sm hover:border-yellow-400 hover:text-yellow-400 transition whitespace-nowrap flex-shrink-0">
            Branding
          </div>
        </div>

        {/* Cards - Single Column */}
        <div className="flex flex-col gap-6">
          {/* Mapped Pricing Plan cards */}
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-cover bg-center rounded-lg p-4 w-full shadow-lg"
              data-pricing-bg
              style={{
                backgroundImage: "url('/Home/Frame_161.svg')",
              }}
            >
              <h2 className="text-sm text-yellow-400 mb-3">
                {card.title}
              </h2>
              <p className="text-3xl sm:text-4xl text-white font-semibold mb-2">
                {card.price}
                <span className="line-through font-normal text-xs mx-2 text-[#4C8C74]">
                  {card.discountedFrom}
                </span>
              </p>
              <p className="text-xs sm:text-sm text-[#4C8C74] mb-6">
                Up to <span className="font-bold">50%</span> referral AAR
              </p>

              <p className="font-semibold text-sm mb-3">Includes:</p>
              <ul role="list" className="space-y-1 mb-4 text-[#4C8C74]">
                {card.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 shrink-0 text-fg-brand mt-0.5"
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
                    <span className="text-xs font-normal">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="flex font-light text-xs sm:text-sm items-center justify-center gap-2 bg-[#4C8C74] text-white py-2 px-3 rounded-full hover:bg-blue-300 transition-colors group w-full"
              >
                Place Your Order
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:rotate-[45deg] flex-shrink-0"
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
  );
};

export default PricingPlanMobile;
