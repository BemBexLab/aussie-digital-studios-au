"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "@/lib/motion";
import Image from "next/image";
import { useThemeMode } from "@/lib/useThemeMode";

const About = () => {
  const { isLightMode: isLight } = useThemeMode();
  const headerRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const statsRef = useRef<HTMLDivElement | null>(null);
  const [isHeaderInView, setIsHeaderInView] = useState(false);
  const [isBodyInView, setIsBodyInView] = useState(false);
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);
  const [hasCounted, setHasCounted] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBodyInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasCounted) {
          startCounting();
          setHasCounted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [hasCounted]);

  const startCounting = () => {
    const targets = [569, 1890, 250];
    const duration = 1600;

    targets.forEach((target, idx) => {
      const start = performance.now();

      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - (1 - progress) * (1 - progress);
        const current = Math.round(target * eased);

        setCounts((prev) => {
          const next = [...prev];
          next[idx] = current;
          return next;
        });

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    });
  };

  return (
    <section className="px-4 py-12 sm:px-6 md:py-14 lg:px-8 xl:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-start md:justify-between md:gap-10">
          <div ref={headerRef} className="md:w-2/5">
            <motion.p
              className="mb-2 text-base font-medium text-[#4C8C74] sm:text-lg"
              initial={{ opacity: 0, y: 8 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.6 }}
            >
              About Us
            </motion.p>
            <motion.h2
              className="text-3xl font-semibold text-white sm:text-4xl"
              initial={{ opacity: 0, y: 10 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.05 }}
            >
              Our Story
            </motion.h2>
          </div>

          <div ref={bodyRef} className="max-w-[650px] md:flex-1">
            <motion.p
              className="text-sm leading-7 text-[#AAAAAA] sm:text-base"
              data-text-sm-light
              initial={{ opacity: 0, y: 8 }}
              animate={isBodyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.6, delay: 0.06 }}
            >
              Aussie Digital Solution is not just a digital company; we are a
              growth partner. Every strategy we build is backed by research and
              executed with creativity to convert your website into a
              recognizable brand. We take care of development to visibility and
              engagement, we don&apos;t just launch, we monitor, optimize, and
              scale your presence to keep you ahead in a competitive market.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5 lg:gap-8">
          <div className="relative lg:col-span-3">
            <Image
              src="/About/Rectangle_42.webp"
              alt="About Us Image"
              width={800}
              height={900}
              className="h-[260px] w-full rounded-lg object-cover shadow-lg sm:h-[340px] md:h-[420px] lg:h-[327px] xl:h-[380px]"
            />
            <img
              src="/Geometric_Shape_Silver.webp"
              alt="Decorative shape"
              className="pointer-events-none absolute bottom-0 right-0 w-16 translate-x-1/4 translate-y-1/4 sm:w-20 md:w-28 lg:w-32 lg:translate-x-1/3 lg:translate-y-1/3"
            />
          </div>

          <div
            className="w-full rounded-lg bg-[#212423] p-6 shadow-lg sm:p-7 lg:col-span-2"
            data-about-stat-card
            style={{
              backgroundImage: "url('/About/About_Section_img_02.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div ref={statsRef} className="space-y-5">
              <div>
                <h3
                  className="text-3xl font-medium sm:text-4xl"
                  style={{ color: isLight ? "#417AB8" : "#FBBF24" }}
                >
                  {counts[0].toLocaleString()}+
                </h3>
                <p className="mt-1 text-base font-extralight text-white sm:text-lg">
                  Happy Customers
                </p>
                <hr className="mt-3 w-4/5 border-t border-gray-600" />
              </div>

              <div>
                <h3
                  className="text-3xl font-medium sm:text-4xl"
                  style={{ color: isLight ? "#417AB8" : "#FBBF24" }}
                >
                  {counts[1].toLocaleString()}+
                </h3>
                <p className="mt-1 text-base font-extralight text-white sm:text-lg">
                  Issues Solved
                </p>
                <hr className="mt-3 w-4/5 border-t border-gray-600" />
              </div>

              <div>
                <h3
                  className="text-3xl font-medium sm:text-4xl"
                  style={{ color: isLight ? "#417AB8" : "#FBBF24" }}
                >
                  {counts[2].toLocaleString()}+
                </h3>
                <p className="mt-1 text-base font-extralight text-white sm:text-lg">
                  Finished Projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
