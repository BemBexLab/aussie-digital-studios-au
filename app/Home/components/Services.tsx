import React from "react";
import Image from "next/image";

import arrowUpRight from "@/public/Home/arrow_up_right_circle_white.svg";


const services = [
  {
    title: "Web Design & Development",
    desc: "Fast, clean and designed to convert. Modern websites built around your brand and goals.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
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
  },
  {
    title: "Branding & Identity",
    desc: "Professional, memorable visuals that define your brand and make a strong first impression.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
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
    title: "SEO & Digital Strategy",
    desc: "Smart optimisation that drives steady growth and keeps your brand visible.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
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
    title: "Marketing & Content",
    desc: "Clear, engaging content that builds trust and keeps your audience interested.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 50 50"
        fill="none"
      >
        <path
          d="M45.8333 21.875V25C45.8333 34.8209 45.8333 39.7314 42.7824 42.7823C39.7314 45.8333 34.8209 45.8333 25 45.8333C15.1791 45.8333 10.2686 45.8333 7.21763 42.7823C4.16666 39.7314 4.16666 34.8209 4.16666 25C4.16666 15.179 4.16666 10.2686 7.21763 7.2176C10.2686 4.16663 15.1791 4.16663 25 4.16663H28.125"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M14.5833 29.1667L18.3269 24.6745C19.8103 22.8944 20.552 22.0043 21.5278 22.0043C22.5036 22.0043 23.2453 22.8944 24.7287 24.6745L25.2713 25.3256C26.7547 27.1057 27.4965 27.9958 28.4722 27.9958C29.448 27.9958 30.1897 27.1057 31.6732 25.3256L35.4167 20.8334"
          stroke="#4C8C74"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle
          cx="39.5833"
          cy="10.4166"
          r="6.25"
          stroke="#4C8C74"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section
      className="relative w-full overflow-hidden py-28"
      style={{
        backgroundImage: "url('/Home/Service.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* overlay for content readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* subtle grid floor */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-emerald-400 mb-2">
            Our Services
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            What We Do
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-white/10 p-6 transition overflow-hidden"
              style={{
                backgroundImage: "radial-gradient(circle at top right, rgba(9, 97, 53, 0.3) 0%, transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex flex-row">
                {/* icon - fixed: use the icon directly */}
                <div className="mb-4">{service.icon}</div>

                {/* arrow */}
                <Image
                  src={arrowUpRight}
                  alt="Decorative Arrow"
                  width={24}
                  height={24}
                  className="absolute top-4 right-4 mt-2 w-7 h-7  transition"
                />
              </div>

              <h3 className="text-sm font-semibold text-yellow-400 mb-2">
                {service.title}
              </h3>

              <p className="text-sm text-white/60 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
