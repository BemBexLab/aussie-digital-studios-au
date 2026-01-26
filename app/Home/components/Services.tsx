"use client";

import React from "react";
import { useRouter } from "next/navigation";
import arrowUpRight from "@/public/Home/arrow_up_right_circle_white.svg";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from "next/image";
import ServicesMobile from "./ServicesMobile";

const services = [
  {
    title: "Web Design & Development",
    desc: "Fast, clean and designed to convert. Modern websites built around your brand and goals.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M32.2916 18.7501L32.6491 19.1076C35.4268 21.8853 36.8157 23.2742 36.8157 25.0001C36.8157 26.726 35.4268 28.1149 32.6491 30.8927L32.2916 31.2501"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M27.696 14.9385L25 25.0002L22.3039 35.0619"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M17.7083 18.7501L17.3509 19.1076C14.5731 21.8853 13.1842 23.2742 13.1842 25.0001C13.1842 26.726 14.5731 28.1149 17.3509 30.8927L17.7083 31.2501"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M4.16663 25.0001C4.16663 15.1792 4.16663 10.2687 7.2176 7.21772C10.2686 4.16675 15.179 4.16675 25 4.16675C34.8209 4.16675 39.7314 4.16675 42.7823 7.21772C45.8333 10.2687 45.8333 15.1792 45.8333 25.0001C45.8333 34.821 45.8333 39.7315 42.7823 42.7824C39.7314 45.8334 34.8209 45.8334 25 45.8334C15.179 45.8334 10.2686 45.8334 7.2176 42.7824C4.16663 39.7315 4.16663 34.821 4.16663 25.0001Z"
          stroke="#4C8C74"
          strokeWidth="2"
        />
      </svg>
    ),
    route: "services/website-design-and-development",
  },
  {
    title: "Logo Design & Branding",
    desc: "Professional, memorable visuals that define your brand and make a strong first impression.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M4.16666 12.5C4.16666 7.89759 7.89762 4.16663 12.5 4.16663C17.1024 4.16663 20.8333 7.89759 20.8333 12.5V37.5C20.8333 42.1023 17.1024 45.8333 12.5 45.8333C7.89762 45.8333 4.16666 42.1023 4.16666 37.5V12.5Z"
          stroke="#4C8C74"
          strokeWidth="2"
        />
        <path
          d="M20.8333 17.1722L27.7368 10.2688C30.9912 7.01441 36.2675 7.01441 39.5219 10.2688C42.7763 13.5231 42.7763 18.7995 39.5219 22.0539L19.3883 42.1875"
          stroke="#4C8C74"
          strokeWidth="2"
        />
        <path
          d="M12.5 45.8333L37.5 45.8333C42.1024 45.8333 45.8333 42.1023 45.8333 37.5C45.8333 32.8976 42.1024 29.1666 37.5 29.1666L32.2917 29.1666"
          stroke="#4C8C74"
          strokeWidth="2"
        />
        <path
          d="M14.5833 37.5C14.5833 38.6506 13.6506 39.5833 12.5 39.5833C11.3494 39.5833 10.4167 38.6506 10.4167 37.5C10.4167 36.3494 11.3494 35.4166 12.5 35.4166C13.6506 35.4166 14.5833 36.3494 14.5833 37.5Z"
          stroke="#4C8C74"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Search Engine Optimization",
    desc: "Smart optimisation that drives steady growth and keeps your brand visible.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 50 50"
        fill="none"
      >
        <circle
          cx="23.9583"
          cy="23.9583"
          r="19.7917"
          stroke="#4C8C74"
          strokeWidth="2"
        />
        <path
          d="M41.6667 41.6666L45.8333 45.8333"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Performance Marketing",
    desc: "Fast, clean and designed to convert. Modern websites built around your brand and goals.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M4.16666 25C4.16666 15.179 4.16666 10.2686 7.21763 7.2176C10.2686 4.16663 15.1791 4.16663 25 4.16663C34.8209 4.16663 39.7314 4.16663 42.7824 7.2176C45.8333 10.2686 45.8333 15.179 45.8333 25C45.8333 34.8209 45.8333 39.7314 42.7824 42.7823C39.7314 45.8333 34.8209 45.8333 25 45.8333C15.1791 45.8333 10.2686 45.8333 7.21763 42.7823C4.16666 39.7314 4.16666 34.8209 4.16666 25Z"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14.5833 37.5L14.5833 31.25"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M25 37.5V25"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M35.4167 37.5V18.75"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Social Media Marketing",
    desc: "Professional, memorable visuals that define your brand and make a strong first impression.",
    icon: (
      <Image
        src="/Home/Group_26.svg"
        width={28}
        height={28}
        alt="social media icon"
      />
    ),
  },
  {
    title: "Content Marketing",
    desc: "Professional, memorable visuals that define your brand and make a strong first impression.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M37.8751 16.7486L38.8406 15.7831C40.4403 14.1835 43.0339 14.1835 44.6336 15.7831C46.2333 17.3828 46.2333 19.9764 44.6336 21.5761L43.6681 22.5416M37.8751 16.7486C37.8751 16.7486 37.9958 18.8003 39.8061 20.6106C41.6164 22.421 43.6681 22.5416 43.6681 22.5416M37.8751 16.7486L28.9988 25.6249C28.3976 26.2261 28.097 26.5268 27.8384 26.8582C27.5335 27.2492 27.272 27.6722 27.0587 28.1199C26.8778 28.4993 26.7434 28.9026 26.4745 29.7092L25.6137 32.2917L25.3352 33.1272M43.6681 22.5416L34.7918 31.4179C34.1906 32.0191 33.89 32.3197 33.5585 32.5783C33.1675 32.8832 32.7445 33.1447 32.2969 33.358C31.9174 33.5389 31.5141 33.6733 30.7075 33.9422L28.125 34.803L27.2895 35.0815M27.2895 35.0815L26.454 35.36C26.0571 35.4923 25.6194 35.389 25.3236 35.0931C25.0277 34.7973 24.9244 34.3596 25.0567 33.9627L25.3352 33.1272M27.2895 35.0815L25.3352 33.1272"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16.6667 27.0834H21.875"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16.6667 18.75H30.2083"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M16.6667 35.4166H19.7917"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M41.3092 6.6074C38.8684 4.16663 34.9401 4.16663 27.0833 4.16663H22.9167C15.0599 4.16663 11.1316 4.16663 8.69078 6.6074C6.25 9.04818 6.25 12.9766 6.25 20.8333V29.1666C6.25 37.0234 6.25 40.9517 8.69078 43.3925C11.1316 45.8333 15.0599 45.8333 22.9167 45.8333H27.0833C34.9401 45.8333 38.8684 45.8333 41.3092 43.3925C43.274 41.4278 43.6572 38.4991 43.7319 33.3333"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const Services = () => {
  const router = useRouter();

  return (
    <>
      {/* Desktop version - hidden on sm screens */}
      <section
        className="hidden sm:block relative w-full overflow-hidden py-18 services-bg-section"
        data-services-bg
        style={{
          backgroundImage: "url('/Home/Service.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* overlay for content readability */}
        <div className="absolute inset-0 " />

        {/* subtle grid floor */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

        <div className="relative max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <p className="text-xl font-medium text-[#4C8C74] mb-2">
              Our Services
            </p>
            <h2 className="text-4xl md:text-4xl font-semibold text-white">
              What We Do
            </h2>
          </div>

          <div className="flex justify-center">
            {/* Cards */}
            <div className="w-[950px] max-[1250px]:w-full grid grid-cols-3 sm:grid-cols-2 max-[1250px]:grid-cols-1 lg:grid-cols-3 gap-6 justify-center px-4 max-[1250px]:px-0">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl w-[290px] max-[1250px]:w-full border border-white/10 p-6 transition overflow-hidden"
                  data-service-card
                  style={{
                    backgroundImage: "url('/Home/card_dark.svg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="flex flex-row">
                    {/* icon - fixed: use the icon directly */}
                    <div className="mb-4">{service.icon}</div>

                    {/* arrow: SVG for dark, react-icon for light mode */}
                    <button
                      onClick={() => router.push(service.route)}
                      className="absolute top-4 right-4 mt-2 w-7 h-7 transition arrow-icon cursor-pointer hover:opacity-80"
                      aria-label={`Navigate to ${service.title}`}
                    >
                      <BsArrowUpRightCircle size={28} />
                    </button>
                  </div>

                  <h3 className="text-sm font-semibold text-yellow-400 mb-2">
                    {service.title}
                  </h3>

                  <p
                    className="text-sm text-[#AAA] leading-relaxed"
                    data-text-sm-dark-light
                  >
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile version */}
      <ServicesMobile />
    </>
  );
};

export default Services;
