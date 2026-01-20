"use client"; 

import React from "react";
import PricingPlanMobile from "./PricingPlanMobile";

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
          "48 to 72 hours TAT",
          "100% Unique Design Guarantee",
          "100% Satisfaction Guarantee",
          "100% Ownership Rights",
          "100% Money Back Guarantee",
        ],
      },
      {
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
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
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
        includes: [
          "UNLIMITED Logo Design Concepts",
          "By 4 Designers",
          "UNLIMITED Revisions",
          "Stationary Design (Business Card, Letterhead, Envelope)",
          "48 to 72 hours TAT",
          "FREE MS Word Letterhead",
          "All Final Files Format (AI, PSD, EPS, PNG, GIF, jpeg, PDF)",
        ],
      },
    ],
  },
  {
    service: "E-Commerce",
    data: [
      {
        title: "Ecommerce",
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
          "48 to 72 hours TAT",
          "100% Unique Design Guarantee",
          "100% Satisfaction Guarantee",
          "100% Ownership Rights",
          "100% Money Back Guarantee",
        ],
      },
      {
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
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
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
        includes: [
          "UNLIMITED Logo Design Concepts",
          "By 4 Designers",
          "UNLIMITED Revisions",
          "Stationary Design (Business Card, Letterhead, Envelope)",
          "48 to 72 hours TAT",
          "FREE MS Word Letterhead",
          "All Final Files Format (AI, PSD, EPS, PNG, GIF, jpeg, PDF)",
        ],
      },
    ],
  },
  {
    service: "Website Design",
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
          "48 to 72 hours TAT",
          "100% Unique Design Guarantee",
          "100% Satisfaction Guarantee",
          "100% Ownership Rights",
          "100% Money Back Guarantee",
        ],
      },
      {
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
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
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
        includes: [
          "UNLIMITED Logo Design Concepts",
          "By 4 Designers",
          "UNLIMITED Revisions",
          "Stationary Design (Business Card, Letterhead, Envelope)",
          "48 to 72 hours TAT",
          "FREE MS Word Letterhead",
          "All Final Files Format (AI, PSD, EPS, PNG, GIF, jpeg, PDF)",
        ],
      },
    ],
  },
  {
    service: "SMM",
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
          "48 to 72 hours TAT",
          "100% Unique Design Guarantee",
          "100% Satisfaction Guarantee",
          "100% Ownership Rights",
          "100% Money Back Guarantee",
        ],
      },
      {
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
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
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
        includes: [
          "UNLIMITED Logo Design Concepts",
          "By 4 Designers",
          "UNLIMITED Revisions",
          "Stationary Design (Business Card, Letterhead, Envelope)",
          "48 to 72 hours TAT",
          "FREE MS Word Letterhead",
          "All Final Files Format (AI, PSD, EPS, PNG, GIF, jpeg, PDF)",
        ],
      },
    ],
  },
  {
    service: "Video Animation",
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
          "48 to 72 hours TAT",
          "100% Unique Design Guarantee",
          "100% Satisfaction Guarantee",
          "100% Ownership Rights",
          "100% Money Back Guarantee",
        ],
      },
      {
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
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
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
        includes: [
          "UNLIMITED Logo Design Concepts",
          "By 4 Designers",
          "UNLIMITED Revisions",
          "Stationary Design (Business Card, Letterhead, Envelope)",
          "48 to 72 hours TAT",
          "FREE MS Word Letterhead",
          "All Final Files Format (AI, PSD, EPS, PNG, GIF, jpeg, PDF)",
        ],
      },
    ],
  },
  {
    service: "SEO",
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
          "48 to 72 hours TAT",
          "100% Unique Design Guarantee",
          "100% Satisfaction Guarantee",
          "100% Ownership Rights",
          "100% Money Back Guarantee",
        ],
      },
      {
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
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
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
        includes: [
          "UNLIMITED Logo Design Concepts",
          "By 4 Designers",
          "UNLIMITED Revisions",
          "Stationary Design (Business Card, Letterhead, Envelope)",
          "48 to 72 hours TAT",
          "FREE MS Word Letterhead",
          "All Final Files Format (AI, PSD, EPS, PNG, GIF, jpeg, PDF)",
        ],
      },
    ],
  },
  {
    service: "Maintainance",
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
          "48 to 72 hours TAT",
          "100% Unique Design Guarantee",
          "100% Satisfaction Guarantee",
          "100% Ownership Rights",
          "100% Money Back Guarantee",
        ],
      },
      {
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
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
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
        includes: [
          "UNLIMITED Logo Design Concepts",
          "By 4 Designers",
          "UNLIMITED Revisions",
          "Stationary Design (Business Card, Letterhead, Envelope)",
          "48 to 72 hours TAT",
          "FREE MS Word Letterhead",
          "All Final Files Format (AI, PSD, EPS, PNG, GIF, jpeg, PDF)",
        ],
      },
    ],
  },
  {
    service: "Branding",
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
          "48 to 72 hours TAT",
          "100% Unique Design Guarantee",
          "100% Satisfaction Guarantee",
          "100% Ownership Rights",
          "100% Money Back Guarantee",
        ],
      },
      {
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
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
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
        includes: [
          "UNLIMITED Logo Design Concepts",
          "By 4 Designers",
          "UNLIMITED Revisions",
          "Stationary Design (Business Card, Letterhead, Envelope)",
          "48 to 72 hours TAT",
          "FREE MS Word Letterhead",
          "All Final Files Format (AI, PSD, EPS, PNG, GIF, jpeg, PDF)",
        ],
      },
    ],
  },
];

const PricingPlan = () => {
  const [selectedService, setSelectedService] = React.useState("Logo");
  const selectedData = cardData.find(item => item.service === selectedService);

  return (
    <>
      <PricingPlanMobile />
      <div className="hidden sm:block text-white mt-20 py-0">
        <div className="max-w-7xl mx-auto px-4 justify-center">

          {/* Buttons */}
          <div className="flex flex-row gap-4 justify-center flex-wrap">
            {cardData.map((service) => (
              <button
                key={service.service}
                onClick={() => setSelectedService(service.service)}
                className={`px-4 py-2 rounded-[8px] border cursor-pointer text-sm transition ${
                  selectedService === service.service
                    ? "border-yellow-400 text-yellow-400 bg-yellow-400/10"
                    : "text-gray-400 border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
                }`}
              >
                {service.service}
              </button>
            ))}
          </div>

          {/* Cards here */}
          <div className="flex flex-col md:flex-row gap-6 justify-center my-7 px-4">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Mapped Pricing Plan cards */}
              {selectedData?.data.map((card, index) => (
                <div
                  key={index}
                  className="bg-cover h-[500px] bg-center rounded-xl p-6 w-[370px] max-w-md md:max-w-2xl shadow-lg"
                  data-pricing-bg
                  style={{
                    backgroundImage: "url('/Home/Frame_161.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <h2 className="text-base text-yellow-400 mb-4 pricing-package-title">
                    {card.title}
                  </h2>
                  <p className="text-5xl text-white font-semibold mb-4">
                    {card.price}
                    <span className="line-through font-normal text-base mx-[5px] text-[#4C8C74]">
                      {card.discountedFrom}
                    </span>
                  </p>
                  <p className="text-base text-[#4C8C74]">
                    Up to{" "}
                    <span className="font-bold pricing-discount-percent">
                      $50%
                    </span>{" "}
                    referral AAR
                  </p>

                  <p className="font-semibold text-md mt-10">Includes:</p>
                  <ul
                    role="list"
                    className="space-y-1 mt-1 mb-6 text-[#4C8C74] overflow-y-auto pr-1 max-h-[180px] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-[#4C8C74] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-[#202020] scrollbar-thin scrollbar-thumb-[#4C8C74] scrollbar-track-[#202020]"
                  >
                    {card.includes.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-5 h-5 shrink-0 text-fg-brand me-1.5"
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
                        <span className="text-sm font-normal">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="flex font-light text-sm items-center justify-center gap-1 bg-[#4C8C74] text-white py-2 px-3 rounded-full hover:bg-blue-300 transition-colors group w-fit mr-auto"
                  >
                    Place Your Order
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
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
      </div>
    </>
  );
};

export default PricingPlan;
