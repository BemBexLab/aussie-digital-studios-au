"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from "next/image";
import { motion } from "@/lib/motion";
import ServicesMobile from "./ServicesMobile";

const services = [
  {
    title: "Web Design & Development",
    desc: (
      <>
        <ul className="list-outside list-disc space-y-2 pl-5 marker:text-gray-300">
          <li>Your website is your hardest-working employee. We make sure it actually shows up.</li>
          <li>Built fast, built clean, built to turn visitors into customers.</li>
          <li>Most websites sit there. Yours should be selling.</li>
        </ul>
      </>
    ),
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
    route: "services/web-design-development",
  },
  {
    title: "Logo Design & Branding",
    desc: (<>
      <ul className="list-outside list-disc space-y-2 pl-5 marker:text-gray-300">
        <li>A great brand isn't designed. It's built — deliberately, strategically, and memorably.</li>
        <li>People forget names. They don't forget brands. Let's make yours unforgettable.</li>
        <li>Your logo is the first thing they see. Make it count.</li>
      </ul>
    </>),
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
    route: "services/logo-design-branding",
  },
  {
    title: "Search Engine Optimization",
    desc: (<>
      <ul className="list-outside list-disc space-y-2 pl-5 marker:text-gray-300">
        <li>Your customers are searching for you right now. The question is whether they're finding you or your competitor.</li>
        <li>Page one isn't luck. It's a strategy.</li>
        <li>Rank higher. Get found. Stay there.</li>
      </ul>
    </>),
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
    route: "services/search-engine-optimization",
  },
  {
    title: "Performance Marketing",
    desc: (<>
      <ul className="list-outside list-disc space-y-2 pl-5 marker:text-gray-300">
        <li>Every dollar you spend on ads should be working. If it's not, that's a fixable problem.</li>
        <li>Stop paying for clicks that go nowhere. We run campaigns that pay for themselves.</li>
        <li>We don't run ads. We run campaigns that return more than they cost.</li>
      </ul>
    </>),
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
    route: "services/performance-marketing",
  },
  {
    title: "Social Media Marketing",
    desc: (<>
      <ul className="list-outside list-disc space-y-2 pl-5 marker:text-gray-300">
        <li>Posting without a strategy is just making noise. We build social media that actually builds your business.</li>
        <li>Followers are fine. Customers are better. We focus on the second one.</li>
        <li>Your audience is already on social. The question is whether they're finding you there.</li>
      </ul>
    </>),
    icon: (
      <Image
        src="/Home/Group_26.svg"
        width={28}
        height={28}
        alt="social media icon"
      />
    ),
    route: "services/social-media-marketing-management",
  },
  {
    title: "Content Marketing",
    desc: (<>
      <ul className="list-outside list-disc space-y-2 pl-5 marker:text-gray-300">
        <li>Content that ranks on Google, sounds like a real person wrote it, and actually makes people buy.</li>
        <li>Bad content gets ignored. Great content compounds. We write the second kind.</li>
        <li>The words on your site are either working for you or against you. We make sure it's the first one.</li>
      </ul>
    </>),
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
    route: "services/content-marketing",
  },
];

const Services = () => {
  const router = useRouter();
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Desktop version - hidden on sm screens */}
      <section
        ref={sectionRef}
        className="hidden sm:block relative w-full overflow-hidden py-20 services-bg-section"
        data-services-bg
        style={{
          backgroundImage: "url('/Home/Service.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Decorative 3D shape - top left */}
        <div className="absolute top-12 left-12 opacity-40">
          <Image
            src="/Geometric_Shape_Silver.webp"
            alt="Decorative Shape"
            width={120}
            height={120}
            className="opacity-60"
          />
        </div>

        {/* Grid floor effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(76,140,116,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(76,140,116,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative max-w-7xl mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg font-medium text-[#4C8C74] mb-3"
            >
              Our Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl font-semibold text-white"
            >
              What We Do
            </motion.h2>
          </div>

          {/* Cards Grid - 3 columns, 2 rows */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-[#4C8C74]/20 p-6 transition-all duration-300 hover:border-[#4C8C74]/40 hover:shadow-lg hover:shadow-[#4C8C74]/10"
                data-service-card
                style={{
                  backgroundImage: "url('/Home/card_dark.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backdropFilter: "blur(10px)",
                  minHeight: "200px",
                }}
              >
                {/* Icon and Arrow Container */}
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-[#4C8C74]/10 border border-[#4C8C74]/20">
                    {service.icon}
                  </div>

                  {/* Arrow button */}
                  {service.route && (
                    <button
                      onClick={() => router.push(service.route)}
                      className="w-8 h-8 flex items-center justify-center rounded-full border border-[#4C8C74]/30 bg-transparent hover:bg-[#4C8C74]/10 transition-all duration-300 hover:scale-110 arrow-icon cursor-pointer"
                      aria-label={`Navigate to ${service.title}`}
                    >
                      <BsArrowUpRightCircle size={20} className="text-white" />
                    </button>
                  )}
                </div>

                {/* Title */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg font-semibold text-[#F5A623] mb-3 leading-tight"
                >
                  {service.title}
                </motion.h3>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-sm text-gray-300 leading-relaxed"
                >
                  {service.desc}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile version */}
      <ServicesMobile />
    </>
  );
};

export default Services;
