"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "@/lib/motion";
import Link from "next/link";

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
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="overflow-hidden px-4 py-12 sm:px-6 md:py-14 lg:px-8 xl:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
        <div className="flex w-full flex-wrap justify-center gap-4 sm:gap-5 lg:w-auto lg:flex-nowrap lg:gap-6">
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

          <div className="relative h-52 w-[9.5rem] sm:w-[10.5rem] md:h-64 md:w-[11rem] lg:h-72 lg:w-[12.5rem]">
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
            Our mission is to help businesses grow through strategic digital
            marketing and website development, using proven practices across
            SEO, content strategy, and performance marketing, and much more, to
            build strong, recognizable brands.
          </motion.p>
          <div className="mt-5 flex justify-center lg:justify-start">
            <Link href="/services">
              <button className="group mt-2 inline-flex h-[45px] w-full max-w-[320px] items-center justify-center rounded-full bg-teal-500 px-4 text-sm text-white transition-all hover:bg-blue-400 sm:w-[195px]">
                <span>See all Services</span>
                <span className="relative ml-3 flex h-6 w-6 items-center justify-center">
                  <span
                    className="absolute inset-0 rounded-full bg-black"
                    aria-hidden="true"
                  ></span>
                  <svg
                    className="button-arrow-svg relative z-10 h-4 w-4 transition-transform duration-300 group-hover:rotate-45"
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
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
