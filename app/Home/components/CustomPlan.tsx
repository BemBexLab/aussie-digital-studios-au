"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import CustomPlanMobile from "./CustomPlanMobile";

type CustomPlanData = {
  heading?: React.ReactNode;
  body?: React.ReactNode;
  buttonText?: React.ReactNode;
  rightImageUrl?: string;
  rightImageAlt?: string;
  rightContent?: React.ReactNode;
};

type CustomPlanProps = {
  data?: CustomPlanData;
};

const CustomPlan = ({ data }: CustomPlanProps) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const defaultButtonText = "Book a consultation call to create your perfect plan";

  useEffect(() => {
    // Initial theme detection
    const theme = localStorage.getItem("ads_theme");
    setIsDarkMode(theme !== "light");

    // Listen for theme changes via document class mutations
    const handleThemeChange = () => {
      const theme = localStorage.getItem("ads_theme");
      setIsDarkMode(theme !== "light");
    };

    // Watch for class changes on document element
    const observer = new MutationObserver(handleThemeChange);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Also listen to storage changes (for cross-tab updates)
    window.addEventListener("storage", handleThemeChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", handleThemeChange);
    };
  }, []);

  return (
    <>
      <CustomPlanMobile data={data} />
      <section className="hidden sm:flex w-full justify-center items-center">
        <div className="flex flex-col lg:flex-row w-[1200px] gap-2 lg:gap-4 items-center">
          {/* Custom Plan Content */}
          <div
            className="flex flex-col rounded-xl px-6 lg:px-6 py-8 lg:py-10 w-full lg:h-[350px] lg:w-[90%]"
            style={
              isDarkMode
                ? {
                    backgroundImage: `url('/Home/Custom_plans.webp')`,
                    backgroundSize: "fill",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }
                : {
                    backgroundColor: "#f9f1f1",
                  }
            }
          >
            <h2 className="font-semibold text-2xl lg:text-4xl text-white">
              {data?.heading || "Your Plan, Not Ours"}
            </h2>
            <div className="w-full lg:w-[720px] max-h-[170px] overflow-y-auto text-sm text-[#4C8C74] mt-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:w-0">
              {/* <p className="text-sm text-[#4C8C74]">
              AussieDigitalStudios is a full-service digital studio built for
              modern, fast-growing brands. From strategy to standout design and
              digital execution, everything you need to build and grow your
              online presence lives here, powered by a creative, results-focused
              team.
            </p> */}
              {data?.body || (
                <>
                  <ul className="text-sm text-[#4C8C74] space-y-3">
                    <li>
                      We don't sell packages. We sit down with you, work out
                      what your business needs right now and where you want it
                      to be in two years, and build a plan around that.
                    </li>
                    <li>
                      For some businesses, that's a brand new website. For
                      others, it's fixing what's already there and putting a
                      proper SEO strategy behind it. For others, it's the whole
                      thing, new brand, new site, new digital direction.
                    </li>
                    <li>
                      Whatever it looks like for you, we'll be upfront about
                      what it involves, what it costs, and how long it takes. No
                      vague proposals. No hidden extras halfway through.
                    </li>
                  </ul>
                </>
              )}
            </div>
            <div className="mt-8 flex flex-row">
              <a
                href="/contact"
                className="flex font-light text-sm items-center justify-center gap-1 bg-[#4C8C74] text-white py-2 px-3 rounded-full hover:bg-blue-300 transition-colors group w-fit mr-auto"
              >
                {data?.buttonText || defaultButtonText}
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
              <div className="flex flex-row justify-center my-2">
                <p className="text-[#4C8C74]">SMM Plans</p>
                <svg
                  className="m-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <circle
                    cx="5.89511"
                    cy="5.89511"
                    r="5.89511"
                    fill="#4C8C74"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Image on right side */}
          <div className="w-full lg:w-[40%] flex justify-end items-center">
            {data?.rightContent ? (
              <div className="w-full h-[350px] max-w-[370px] overflow-y-auto rounded-xl border border-white/10 bg-[#08110e] px-6 py-5 text-[#AAAAAA] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:w-0">
                {data.rightContent}
              </div>
            ) : (
              <Image
                src={data?.rightImageUrl || "/Home/performance_marketing.webp"}
                alt={data?.rightImageAlt || "Custom Plan Illustration"}
                width={370}
                height={400}
                className="w-full h-[350px] max-w-[370px]"
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomPlan;
