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
  const desktopPanelHeight = 300;
  const bodyContentRef = useRef<HTMLDivElement | null>(null);
  const bodyContentInnerRef = useRef<HTMLDivElement | null>(null);
  const rightContentRef = useRef<HTMLDivElement | null>(null);
  const rightContentInnerRef = useRef<HTMLDivElement | null>(null);

  const leftScrollbarClasses =
    "scrollbar-thin scrollbar-thumb-[#4C8C74] scrollbar-track-transparent [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#4C8C74]";

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
        <div className="grid w-full max-w-[1200px] grid-cols-1 items-stretch gap-4 md:gap-5 lg:grid-cols-[minmax(0,1.7fr)_minmax(340px,430px)]">
          {/* Custom Plan Content */}
          <div
            className="flex w-full flex-col rounded-xl px-5 py-4 sm:px-6 lg:px-6"
            style={
              isDarkMode
                ? {
                    backgroundImage: `url('/Home/Custom_plans.webp')`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    height: `${desktopPanelHeight}px`,
                  }
                : {
                    backgroundColor: "#f9f1f1",
                    height: `${desktopPanelHeight}px`,
                  }
            }
          >
            <h2 className="text-2xl font-semibold text-white md:text-3xl lg:text-4xl">
              {data?.heading || "Your Plan, Not Ours"}
            </h2>
            <div
              ref={bodyContentRef}
              className={`mt-4 w-full max-w-[720px] flex-1 min-h-0 px-1 text-sm leading-relaxed text-[#AAAAAA] sm:px-2 sm:text-base ${
                hasBodyOverflow
                  ? `overflow-y-auto pr-2 ${leftScrollbarClasses}`
                  : "overflow-hidden"
              }`}
            >
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
            <div className="mt-3 flex flex-wrap items-center justify-between gap-4 pt-3">
              <a
                href="/contact"
                className="group flex min-h-[40px] w-full items-center justify-center gap-2 rounded-full bg-[#4C8C74] px-5 py-1 text-center text-sm font-light text-white transition-colors hover:bg-blue-300 sm:w-fit sm:min-w-[380px] sm:justify-start"
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
              {data?.miniTagData ? (
                <div className="my-1 flex flex-row items-center justify-center self-start sm:self-center">
                  <p className="text-[#4C8C74]">{data.miniTagData}</p>
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
              ) : null}
            </div>
          </div>

          {/* Image on right side */}
          <div className="flex w-full items-stretch justify-center lg:justify-end">
            {data?.rightContent ? (
              <div
                ref={rightContentRef}
                className={`w-full rounded-xl border border-white/10 bg-[#08110e] px-5 py-5 text-[#AAAAAA] sm:px-6 lg:max-w-[430px] ${
                  hasRightContentOverflow
                    ? `overflow-y-auto ${glassScrollbarClasses}`
                    : "overflow-visible"
                }`}
                style={{ height: `${desktopPanelHeight}px` }}
              >
                <div ref={rightContentInnerRef} className="flow-root">
                  {data.rightContent}
                </div>
              </div>
            ) : (
              <div
                className="flex w-full items-center justify-center overflow-hidden rounded-xl lg:max-w-[430px]"
                style={{ height: `${desktopPanelHeight}px` }}
              >
                <Image
                  src={data?.rightImageUrl || "/Home/performance_marketing.webp"}
                  alt={data?.rightImageAlt || "Custom Plan Illustration"}
                  width={430}
                  height={300}
                  className="h-full w-full rounded-xl object-contain"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomPlan;
