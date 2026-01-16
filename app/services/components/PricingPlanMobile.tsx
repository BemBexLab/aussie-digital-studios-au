import React from "react";

type PricingPlanMobileProps = {
  service: {
    pricingCardData?: Array<{
      title: string;
      price: string;
      discountedFrom: string;
      includes: string[];
    }>;
  };
};

const defaultPricingData = [
  {
    title: "Basic Package",
    price: "$99",
    discountedFrom: "$199",
    includes: [
      "5 Revisions",
      "24 Hours Delivery",
      "Unique Design",
      "100% Satisfaction Guarantee",
    ],
  },
  {
    title: "Standard Package",
    price: "$199",
    discountedFrom: "$399",
    includes: [
      "Unlimited Revisions",
      "48 Hours Delivery",
      "Unique Design",
      "100% Satisfaction Guarantee",
      "Ownership Rights",
    ],
  },
  {
    title: "Premium Package",
    price: "$299",
    discountedFrom: "$599",
    includes: [
      "Unlimited Revisions",
      "72 Hours Delivery",
      "Unique Design",
      "100% Satisfaction Guarantee",
      "Ownership Rights",
      "Free Updates",
    ],
  },
];

const PricingPlanMobile = ({ service }: PricingPlanMobileProps) => {
  const cardData = service.pricingCardData || defaultPricingData;

  return (
    <div className="text-white mt-10 py-0 px-4">
      <div className="flex flex-col gap-4">
        <p className="text-center text-sm font-medium text-[#4C8C74] mb-2">
          Pricing Plans
        </p>
        <h1 className="text-center text-2xl font-semibold text-white mb-4">
          Our Packages
        </h1>

        {/* Filter Buttons - Compact for Mobile */}
        <div className="flex flex-row gap-2 justify-center flex-wrap mb-4">
          <div className="text-gray-400 px-3 py-1.5 rounded-[6px] border border-gray-600 cursor-pointer text-xs hover:border-yellow-400 hover:text-yellow-400 transition">
            Logo
          </div>
          <div className="text-gray-400 px-3 py-1.5 rounded-[6px] border border-gray-600 cursor-pointer text-xs hover:border-yellow-400 hover:text-yellow-400 transition">
            E-Commerce
          </div>
          <div className="text-gray-400 px-3 py-1.5 rounded-[6px] border border-gray-600 cursor-pointer text-xs hover:border-yellow-400 hover:text-yellow-400 transition">
            Website
          </div>
          <div className="text-gray-400 px-3 py-1.5 rounded-[6px] border border-gray-600 cursor-pointer text-xs hover:border-yellow-400 hover:text-yellow-400 transition">
            SMM
          </div>
          <div className="text-gray-400 px-3 py-1.5 rounded-[6px] border border-gray-600 cursor-pointer text-xs hover:border-yellow-400 hover:text-yellow-400 transition">
            Video Animation
          </div>
          <div className="text-gray-400 px-3 py-1.5 rounded-[6px] border border-gray-600 cursor-pointer text-xs hover:border-yellow-400 hover:text-yellow-400 transition">
            SEO
          </div>
          <div className="text-gray-400 px-3 py-1.5 rounded-[6px] border border-gray-600 cursor-pointer text-xs hover:border-yellow-400 hover:text-yellow-400 transition">
            Maintenance
          </div>
          <div className="text-gray-400 px-3 py-1.5 rounded-[6px] border border-gray-600 cursor-pointer text-xs hover:border-yellow-400 hover:text-yellow-400 transition">
            Branding
          </div>
        </div>

        {/* Pricing Cards - Stacked Vertically */}
        <div className="flex flex-col gap-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-cover bg-center rounded-lg p-4 shadow-lg"
              data-pricing-bg
              style={{
                backgroundImage: "url('/Home/Frame_161.svg')",
              }}
            >
              <h2 className="text-sm text-yellow-400 mb-3 font-semibold">
                {card.title}
              </h2>
              <p className="text-3xl text-white font-semibold mb-2">
                {card.price}
                <span className="line-through font-normal text-xs mx-2 text-[#4C8C74]">
                  {card.discountedFrom}
                </span>
              </p>
              <p className="text-xs text-[#4C8C74] mb-4">
                Up to <span className="font-bold">50%</span> referral AAR
              </p>

              <p className="font-semibold text-xs mb-2">Includes:</p>
              <ul role="list" className="space-y-1 mb-4 text-[#4C8C74]">
                {card.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      className="w-4 h-4 shrink-0 text-[#4C8C74] mt-0.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                className="flex font-light text-xs items-center justify-center gap-1 bg-[#4C8C74] text-white py-2 px-3 rounded-full hover:bg-[#3d7a63] transition-colors group w-full"
              >
                Place Your Order
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-300 group-hover:rotate-[45deg]"
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
