import React from "react";
import Image from "next/image";

const PricingPlan = () => {
  return (
    <div className="text-white py-20">
      <div className="max-w-7xl mx-auto px-4 justify-center">
        {/* <p className="text-center my-[7px] text-xl font-medium text-[#4C8C74]">
          Pricing Plans
        </p>
        <h1 className="text-center text-4xl font-semibold text-white mb-16">
          Our Packages
        </h1> */}

        {/* Buttons */}
        <div className="flex flex-row gap-2 justify-center mb-7 flex-wrap">
          <div className="bg-[rgba(76, 140, 116, 0.10)] text-[#AAAAAA] px-3 py-1.5 rounded-[8px] border border-solid hover:border-yellow-400 hover:text-yellow-400 cursor-pointer text-sm">
            Logo
          </div>
          <div className="bg-[rgba(76, 140, 116, 0.10)] text-[#AAAAAA] px-3 py-1.5 rounded-[8px] border border-solid hover:border-yellow-400 hover:text-yellow-400 cursor-pointer text-sm">
            E-Commerce
          </div>
          <div className="bg-[rgba(76, 140, 116, 0.10)] text-[#AAAAAA] px-3 py-1.5 rounded-[8px] border border-solid hover:border-yellow-400 hover:text-yellow-400 cursor-pointer text-sm">
            Website Design
          </div>
          <div className="bg-[rgba(76, 140, 116, 0.10)] text-[#AAAAAA] px-3 py-1.5 rounded-[8px] border border-solid hover:border-yellow-400 hover:text-yellow-400 cursor-pointer text-sm">
            SMM
          </div>
          <div className="bg-[rgba(76, 140, 116, 0.10)] text-[#AAAAAA] px-3 py-1.5 rounded-[8px] border border-solid hover:border-yellow-400 hover:text-yellow-400 cursor-pointer text-sm">
            Animation
          </div>
          <div className="bg-[rgba(76, 140, 116, 0.10)] text-[#AAAAAA] px-3 py-1.5 rounded-[8px] border border-solid hover:border-yellow-400 hover:text-yellow-400 cursor-pointer text-sm">
            SEO
          </div>
          <div className="bg-[rgba(76, 140, 116, 0.10)] text-[#AAAAAA] px-3 py-1.5 rounded-[8px] border border-solid hover:border-yellow-400 hover:text-yellow-400 cursor-pointer text-sm">
            Maintainance
          </div>
          <div className="bg-[rgba(76, 140, 116, 0.10)] text-[#AAAAAA] px-3 py-1.5 rounded-[8px] border border-solid hover:border-yellow-400 hover:text-yellow-400 cursor-pointer text-sm">
            Branding
          </div>
        </div>

        {/* Cards here */}
        <div className="flex flex-col lg:flex-row gap-4 justify-center my-7 px-4">
          <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-auto">
            {/* Package 1 */}
            <div
              className="bg-cover bg-center rounded-lg p-6 w-full max-w-2xl shadow-lg"
              style={{
                backgroundImage: "url('/Home/Frame_161.svg')",
              }}
            >
              <h2 className="text-base text-yellow-400 mb-4">
                Basic Website Package
              </h2>
              <p className="text-5xl text-white font-bold mb-4">
                $229
                <span className="line-through text-gray-400 font-semibold text-base mx-[5px] text-[#4C8C74]">
                  $499
                </span>
              </p>
              <p className="text-base text-[rgba(255, 255, 255, 0.50)]">
                Up to <span className="font-bold">$50%</span> referral AAR
              </p>
              <ul role="list" className="space-y-4 my-6">
                <li className="flex items-center">
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
                  <span className="text-body">
                    2 Custom Logo Design Concepts
                  </span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">1 Dedicated Designer</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">4 REVISIONS</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">48 to 72 hours TAT</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">
                    100% Unique Design Guarantee
                  </span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">100% Satisfaction Guarantee</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">100% Ownership Rights</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">100% Money Back Guarantee </span>
                </li>
              </ul>
              <a
                href="#"
                className="flex items-center justify-center gap-1 bg-[#4C8C74] text-gray-900 py-2 px-3 rounded-full hover:bg-blue-300 transition-colors group w-fit mr-auto"
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

            {/* Package 2 */}
            <div
              className="bg-cover bg-center rounded-lg p-6 w-full max-w-2xl shadow-lg"
              style={{
                backgroundImage: "url('/Home/Frame_161.svg')",
              }}
            >
              <h2 className="text-base text-yellow-400 mb-4">
                Basic Website Package
              </h2>
              <p className="text-5xl text-white font-bold mb-4">
                $229
                <span className="line-through text-gray-400 font-semibold text-base mx-[5px] text-[#4C8C74]">
                  $499
                </span>
              </p>
              <p className="text-base text-[rgba(255, 255, 255, 0.50)]">
                Up to <span className="font-bold">$50%</span> referral AAR
              </p>
              <ul role="list" className="space-y-4 my-6">
                <li className="flex items-center">
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
                  <span className="text-body">
                    5 Custom Logo Design Concepts
                  </span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">By 2 Designers</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">UNLIMITED Revisions</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">48 to 72 hours TAT</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">
                    100% Unique Design Guarantee
                  </span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">100% Satisfaction Guarantee</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">100% Ownership Rights</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">100% Money Back Guarantee </span>
                </li>
              </ul>
              <a
                href="#"
                className="flex items-center justify-center gap-1 bg-[#4C8C74] text-gray-900 py-2 px-3 rounded-full hover:bg-blue-300 transition-colors group w-fit mr-auto"
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

            {/* Package 3 */}
            <div
              className="bg-cover bg-center rounded-lg p-6 w-full max-w-2xl shadow-lg relative"
              style={{
                backgroundImage: "url('/Home/Frame_161.svg')",
              }}
            >
              <Image
                src="/Geometric_Shape_Silver.png"
                alt="Decorative Image"
                width={150}
                height={150}
                className="absolute -top-24 -right-20 z-20 pointer-events-none"
              />
              <h2 className="text-base text-yellow-400 mb-4">
                Basic Website Package
              </h2>
              <p className="text-5xl text-white font-bold mb-4">
                $229
                <span className="line-through text-gray-400 font-semibold text-base mx-[5px] text-[#4C8C74]">
                  $499
                </span>
              </p>
              <p className="text-base text-[rgba(255, 255, 255, 0.50)]">
                Up to <span className="font-bold">$50%</span> referral AAR
              </p>
              <ul role="list" className="space-y-4 my-6">
                <li className="flex items-center">
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
                  <span className="text-body">
                    UNLIMITED Logo Design Concepts
                  </span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">By 4 Designers</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">UNLIMITED Revisions</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">
                    Stationary Design (Business Card, Letterhead, Envelope)
                  </span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">48 to 72 hours TAT</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">FREE MS Word Letterhead</span>
                </li>
                <li className="flex items-center">
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
                  <span className="text-body">
                    All Final Files Format (AI, PSD, EPS, PNG, GIF, jpeg, PDF)
                  </span>
                </li>
              </ul>
              <a
                href="#"
                className="flex items-center justify-center gap-1 bg-[#4C8C74] text-gray-900 py-2 px-3 rounded-full hover:bg-blue-300 transition-colors group w-fit mr-auto"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
