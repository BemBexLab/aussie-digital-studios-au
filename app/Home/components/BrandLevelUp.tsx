"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import BrandLevelUpMobile from "./BrandLevelUpMobile";
import { motion } from "motion/react";

const BrandLevelUp = () => {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const target = wrapperRef.current;
    if (!target) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    obs.observe(target);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={wrapperRef}>
      <BrandLevelUpMobile />
      <div
        className="hidden bg-cover bg-center px-4 py-16 text-white sm:flex sm:px-6 lg:px-8 xl:py-20"
        data-brandlevelup-bg
        style={{ backgroundImage: "url(/Home/CTA.svg)" }}
      >
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between xl:gap-12">
          {/* Text Part */}
          <div className="w-full max-w-[38rem] px-1 sm:px-3 md:px-6 lg:w-[48%] lg:px-0">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="text-4xl font-semibold leading-tight text-white md:text-5xl xl:text-[3.25rem]"
            >
              Ready to <span className="text-yellow-400">level up</span> your
              brand?
            </motion.h1>
            <p className="mt-4 max-w-[30rem] text-base text-white/85 md:text-lg xl:text-xl">
              Let's create something modern, simple, and effective.
            </p>

            {/* Button */}
            <div className="mt-5 flex flex-row">
              <button
                onClick={() => router.push("/contact")}
                className="group mt-2 inline-flex h-[45px] w-full max-w-[220px] items-center justify-center rounded-full bg-teal-500 px-4 text-sm text-white transition-all hover:bg-blue-400 sm:w-[190px]"
              >
                <span>Book a Strategy Call</span>
                <span className="ml-3 relative w-6 h-6 flex items-center justify-center">
                  <span
                    className="absolute inset-0 bg-black rounded-full"
                    aria-hidden="true"
                  ></span>
                  <svg
                    className="relative w-4 h-4 z-10 transition-transform duration-300 group-hover:rotate-45 button-arrow-svg"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                  >
                    <path
                      d="M7 17 L17 7"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                    <path
                      d="M11 7 H17 V13"
                      stroke="#fff"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Image Part */}
          <div
            className="mx-auto flex h-[260px] w-full items-center justify-center rounded-lg bg-cover bg-center sm:h-[300px] md:h-[340px] lg:mx-0 lg:h-[320px] lg:w-[46%] xl:h-[360px]"
            style={{
              backgroundImage: "url(/Home/Rectangle_1905.webp)",
            }}
          >
            {/* Green Elipse */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="130"
              viewBox="0 0 201 204"
              fill="none"
              className="flex h-[96px] w-[96px] items-center justify-center sm:h-[120px] sm:w-[120px] xl:h-[130px] xl:w-[150px]"
            >
              <g filter="url(#filter0_dg_1087_1656)">
                <circle cx="100.442" cy="100.442" r="94.6417" fill="#4C8C74" />
              </g>
              <defs>
                <filter
                  id="filter0_dg_1087_1656"
                  x="-1.23978e-05"
                  y="-0.000195503"
                  width="200.883"
                  height="203.083"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1087_1656"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1087_1656"
                    result="shape"
                  />
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.029325515031814575 0.029325515031814575"
                    numOctaves="3"
                    seed="7793"
                  />
                  <feDisplacementMap
                    in="shape"
                    scale="11.600000381469727"
                    xChannelSelector="R"
                    yChannelSelector="G"
                    result="displacedImage"
                    width="100%"
                    height="100%"
                  />
                  <feMerge result="effect2_texture_1087_1656">
                    <feMergeNode in="displacedImage" />
                  </feMerge>
                </filter>
              </defs>
              {/* Play button SVG */}
              <g transform="translate(77, 78.5)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                >
                  <path
                    d="M39.8058 18.2417C43.9444 20.4923 43.9444 26.3184 39.8058 28.569L14.8168 42.1579C10.7944 44.3453 5.85132 41.4983 5.85132 36.9943L5.85132 9.81637C5.85132 5.31238 10.7944 2.4654 14.8168 4.65273L39.8058 18.2417Z"
                    stroke="white"
                    strokeWidth="2.92567"
                  />
                </svg>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLevelUp;
