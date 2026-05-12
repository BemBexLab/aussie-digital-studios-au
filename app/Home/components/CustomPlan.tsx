"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import CustomPlanMobile from "./CustomPlanMobile";
import { useThemeMode } from "@/lib/useThemeMode";

type CustomPlanData = {
  heading?: React.ReactNode;
  body?: React.ReactNode;
  buttonText?: React.ReactNode;
  rightImageUrl?: string;
  rightImageAlt?: string;
  rightContent?: React.ReactNode;
  miniTagData?: React.ReactNode;
};

type CustomPlanProps = {
  data?: CustomPlanData;
};

const CustomPlan = ({ data }: CustomPlanProps) => {
  const { isDarkMode } = useThemeMode();
  const [hasBodyOverflow, setHasBodyOverflow] = useState(false);
  const [hasRightContentOverflow, setHasRightContentOverflow] = useState(false);
  const defaultButtonText = "Book a consultation call to create your perfect plan";
  const bodyContentRef = useRef<HTMLDivElement | null>(null);
  const bodyContentInnerRef = useRef<HTMLDivElement | null>(null);
  const rightContentRef = useRef<HTMLDivElement | null>(null);
  const rightContentInnerRef = useRef<HTMLDivElement | null>(null);

  const glassScrollbarClasses =
    "scrollbar-thin scrollbar-thumb-[#AAAAAA]/60 scrollbar-track-white/10 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-[#ffffff14] [&::-webkit-scrollbar-track]:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border [&::-webkit-scrollbar-thumb]:border-solid [&::-webkit-scrollbar-thumb]:border-[#ffffff33] [&::-webkit-scrollbar-thumb]:bg-[#AAAAAA99]";

  useEffect(() => {
    const updateOverflowState = () => {
      const bodyEl = bodyContentRef.current;
      const bodyInnerEl = bodyContentInnerRef.current;
      const rightEl = rightContentRef.current;
      const rightInnerEl = rightContentInnerRef.current;

      setHasBodyOverflow(
        bodyEl && bodyInnerEl
          ? bodyInnerEl.scrollHeight > bodyEl.clientHeight + 6
          : false
      );
      setHasRightContentOverflow(
        rightEl && rightInnerEl
          ? rightInnerEl.scrollHeight > rightEl.clientHeight + 10
          : false
      );
    };

    updateOverflowState();

    const resizeObserver = new ResizeObserver(updateOverflowState);

    if (bodyContentRef.current) {
      resizeObserver.observe(bodyContentRef.current);
    }

    if (bodyContentInnerRef.current) {
      resizeObserver.observe(bodyContentInnerRef.current);
    }

    if (rightContentRef.current) {
      resizeObserver.observe(rightContentRef.current);
    }

    if (rightContentInnerRef.current) {
      resizeObserver.observe(rightContentInnerRef.current);
    }

    window.addEventListener("resize", updateOverflowState);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateOverflowState);
    };
  }, [data]);

  return (
      <>
      <CustomPlanMobile data={data} />
      <section className="mb-15 hidden w-full justify-center px-4 sm:flex sm:px-6 lg:px-8">
        <div className="flex w-full max-w-[1200px] flex-col items-stretch gap-4 md:gap-5 lg:flex-row lg:items-center">
          {/* Custom Plan Content */}
          <div
            className="flex w-full flex-col rounded-xl px-5 py-7 sm:px-6 sm:py-8 lg:h-[350px] lg:w-[90%] lg:px-6 lg:py-10"
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
            <h2 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
              {data?.heading || "Your Plan, Not Ours"}
            </h2>
            <div
              ref={bodyContentRef}
              className={`mt-4 w-full max-w-full px-1 text-sm leading-relaxed text-[#AAAAAA] sm:px-2 sm:text-base lg:w-[720px] lg:max-h-[170px] ${
                hasBodyOverflow
                  ? `overflow-y-auto ${glassScrollbarClasses}`
                  : "overflow-y-hidden"
              }`}
            >
              {/* <p className="text-sm text-[#4C8C74]">
              AussieDigitalStudios is a full-service digital studio built for
              modern, fast-growing brands. From strategy to standout design and
              digital execution, everything you need to build and grow your
              online presence lives here, powered by a creative, results-focused
              team.
            </p> */}
              <div ref={bodyContentInnerRef}>
                {data?.body || (
                  <>
                    <ul className="space-y-3 text-sm text-[#AAAAAA] sm:text-base">
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
            </div>
            <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-start sm:justify-between">
              <a
                href="/contact"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#4C8C74] px-4 py-3 text-center text-sm font-light text-white transition-colors hover:bg-blue-300 sm:mr-auto sm:w-fit sm:justify-start"
              >
                <span className="max-w-[28rem]">
                  {data?.buttonText || defaultButtonText}
                </span>
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
              <div className="my-1 flex flex-row items-center justify-center self-start sm:my-2 sm:self-center">
                <p className="text-[#4C8C74]">{data?.miniTagData}</p>
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
          <div className="flex w-full items-center justify-center lg:w-[50%] lg:justify-end">
            {data?.rightContent ? (
              <div
                ref={rightContentRef}
                className={`w-full rounded-xl border border-white/10 bg-[#08110e] px-5 py-5 text-[#AAAAAA] sm:px-6 lg:h-[350px] lg:max-w-[430px] ${
                  hasRightContentOverflow
                    ? `overflow-y-auto ${glassScrollbarClasses}`
                    : "overflow-y-hidden"
                }`}
              >
                <div ref={rightContentInnerRef} className="flow-root">
                  {data.rightContent}
                </div>
              </div>
            ) : (
              <Image
                src={data?.rightImageUrl || "/Home/performance_marketing.webp"}
                alt={data?.rightImageAlt || "Custom Plan Illustration"}
                width={430}
                height={400}
                className="h-auto w-full max-w-[430px] rounded-xl object-contain lg:h-[350px]"
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomPlan;
