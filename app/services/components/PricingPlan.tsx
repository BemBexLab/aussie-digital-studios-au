"use client";

import React from "react";
import { motion } from "@/lib/motion";
import PricingPlanMobile from "./PricingPlanMobile";

type PricingPlanProps = {
  service: {
    pricingCardData?: Array<{
      title: string;
      price: string;
      discountedFrom: string;
      includes: string[];
    }>;
  };
};
//   {
//     title: "Basic Package",
//     price: "$99",
//     discountedFrom: "$199",
//     includes: [
//       "5 Revisions",
//       "24 Hours Delivery",
//       "Unique Design",
//       "100% Satisfaction Guarantee",
//     ],
//   },
//   {
//     title: "Standard Package",
//     price: "$199",
//     discountedFrom: "$399",
//     includes: [
//       "Unlimited Revisions",
//       "48 Hours Delivery",
//       "Unique Design",
//       "100% Satisfaction Guarantee",
//       "Ownership Rights",
//     ],
//   },
//   {
//     title: "Premium Package",
//     price: "$299",
//     discountedFrom: "$599",
//     includes: [
//       "Unlimited Revisions",
//       "72 Hours Delivery",
//       "Unique Design",
//       "100% Satisfaction Guarantee",
//       "Ownership Rights",
//       "Free Updates",
//     ],
//   },
// ];

const PricingPlan = ({ service }: PricingPlanProps) => {
  const cardData = service.pricingCardData;
  
  if (!cardData || cardData.length === 0) {
    return null;
  }
  
  return (
    <>
      {/* Mobile View */}
      <div className="sm:hidden">
        <PricingPlanMobile service={service} />
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block text-white mt-20 mb-4">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.p
              className="text-xl font-medium text-[#4C8C74] mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Pricing Plans
            </motion.p>
            <motion.h1
              className="text-4xl font-semibold text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              Our Packages
            </motion.h1>
          </div>

          {/* Pricing Cards - Single Row */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6">
            {cardData.map((card, index) => (
              <motion.div
                key={index}
                className="bg-cover bg-center rounded-2xl p-8 flex flex-col w-full lg:w-1/3 lg:max-w-[400px]"
                style={{
                  backgroundImage: "url('/Home/Frame_161.svg')",
                  minHeight: "550px",
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                {/* Package Title */}
                <h2 className="text-lg text-yellow-400 font-medium mb-6">
                  {card.title}
                </h2>

                {/* Price */}
                <div className="mb-2">
                  <span className="text-5xl text-white font-bold">
                    {card.price}
                  </span>
                  <span className="line-through font-normal text-lg ml-2 text-gray-400">
                    {card.discountedFrom}
                  </span>
                </div>

                {/* Discount Info */}
                <p className="text-base text-[#4C8C74] mb-8">
                  Up to{" "}
                  <span className="font-bold">$50%</span>{" "}
                  referral AAR
                </p>

                {/* Includes Section */}
                <div className="flex-grow">
                  <p className="font-semibold text-lg mb-4 text-white">Includes:</p>
                  <ul className="space-y-3 max-h-[200px] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-[#4C8C74] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-[#202020] scrollbar-thin scrollbar-thumb-[#4C8C74] scrollbar-track-[#202020]">
                    {card.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 shrink-0 text-[#4C8C74] mt-0.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
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
                        <span className="text-sm text-[#4C8C74] leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button onClick={() => window.location.href = "/contact"} className="flex items-center justify-center gap-2 bg-[#4C8C74] text-white py-3 px-6 rounded-full hover:bg-[#5da888] transition-all duration-300 group w-fit">
                    <span className="text-sm font-medium">Place Your Order</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
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
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPlan;
