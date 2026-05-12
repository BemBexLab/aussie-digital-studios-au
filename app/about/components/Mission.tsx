"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import MissionMobile from "./MissionMobile";

const Mission = () => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [isContentInView, setIsContentInView] = useState(false);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsContentInView(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <div className="md:hidden">
        <MissionMobile />
      </div>
      {/* Desktop: unchanged (md and up), responsive below 1250px */}
      <div className="hidden overflow-hidden px-4 py-12 md:flex md:justify-center md:px-6 lg:px-8 xl:py-16">
        <div className="flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
          <div className="flex w-full flex-wrap justify-center gap-4 md:gap-5 lg:w-auto lg:flex-nowrap lg:gap-6">
            <div className="relative h-52 w-[9.5rem] sm:w-[10.5rem] md:h-64 md:w-[11rem] lg:h-72 lg:w-[12.5rem]">
              <Image
                src="/About/Rectangle_44.webp"
                alt="Mission Image"
                fill
                sizes="(max-width: 767px) 152px, (max-width: 1023px) 176px, 200px"
                className="rounded-[18px] object-cover"
              />
            </div>

            <div className="relative h-52 w-[9.5rem] drop-shadow-2xl sm:w-[10.5rem] md:h-64 md:w-[11rem] lg:h-72 lg:w-[12.5rem] lg:-translate-y-10">
              <Image
                src="/About/Rectangle_45.webp"
                alt="Mission Image"
                fill
                sizes="(max-width: 767px) 152px, (max-width: 1023px) 176px, 200px"
                className="rounded-[18px] object-cover"
              />
            </div>

            <div className="relative h-52 w-[9.5rem] overflow-visible sm:w-[10.5rem] md:h-64 md:w-[11rem] lg:h-72 lg:w-[12.5rem]">
              <Image
                src="/About/Rectangle_46.webp"
                alt="Mission Image"
                fill
                sizes="(max-width: 767px) 152px, (max-width: 1023px) 176px, 200px"
                className="rounded-[18px] object-cover"
              />
            </div>
          </div>

          <div
            ref={contentRef}
            className="flex w-full max-w-[42rem] flex-col justify-center px-2 text-center md:px-4 lg:w-[34rem] lg:max-w-none lg:px-0 lg:text-left"
          >
            <motion.h2
              className="mb-5 text-3xl font-bold md:text-4xl"
              initial={{ opacity: 0, y: 10 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6 }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="font-normal leading-relaxed text-[#AAAAAA] md:text-base"
              data-text-sm-light
              initial={{ opacity: 0, y: 8 }}
              animate={isContentInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              We exist to create digital solutions that drive growth. By combining
              clean design with smart strategies, we help brands reach their full
              potential online. Every project is an opportunity to bring your
              vision to life and make your brand stronger, more impactful, and
              ready for the future.
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
