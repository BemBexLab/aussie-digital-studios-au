"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useThemeMode } from "@/lib/useThemeMode";

const valuesContent = [
    {
      title: "Creativity",
      description:
        "Every work is research-based, and bringing success helps to stand out as we build authority, influence, and dominance.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M10.3725 20.1773C6.23526 18.5224 4.16663 17.6949 4.16663 16.6667C4.16663 15.6385 6.23526 14.811 10.3725 13.1561L16.2235 10.8157C20.3608 9.16083 22.4294 8.33337 25 8.33337C27.5705 8.33337 29.6392 9.16083 33.7764 10.8157L39.6274 13.1561C43.7647 14.811 45.8333 15.6385 45.8333 16.6667C45.8333 17.6949 43.7647 18.5224 39.6274 20.1773L33.7764 22.5177C29.6392 24.1726 27.5705 25 25 25C22.4294 25 20.3608 24.1726 16.2235 22.5177L10.3725 20.1773Z"
            stroke="#4C8C74"
            strokeWidth="2"
          />
          <path
            d="M45.8333 25C45.8333 25 43.7647 26.8557 39.6274 28.5106L33.7764 30.851C29.6392 32.5059 27.5705 33.3333 25 33.3333C22.4294 33.3333 20.3608 32.5059 16.2235 30.851L10.3725 28.5106C6.23526 26.8557 4.16663 25 4.16663 25"
            stroke="#4C8C74"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M45.8333 33.3334C45.8333 33.3334 43.7647 35.1891 39.6274 36.844L33.7764 39.1843C29.6392 40.8393 27.5705 41.6667 25 41.6667C22.4294 41.6667 20.3608 40.8393 16.2235 39.1843L10.3725 36.844C6.23526 35.1891 4.16663 33.3334 4.16663 33.3334"
            stroke="#4C8C74"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Reliability",
      description:
        "Our services are based on consistency, transparency, and measurable results.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 50 50"
          fill="none"
        >
          <circle cx="25" cy="12.5" r="8.33333" stroke="#4C8C74" strokeWidth="2" />
          <path
            d="M37.5 18.75C40.9518 18.75 43.75 16.4182 43.75 13.5417C43.75 10.6652 40.9518 8.33337 37.5 8.33337"
            stroke="#4C8C74"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12.5 18.75C9.04822 18.75 6.25 16.4182 6.25 13.5417C6.25 10.6652 9.04822 8.33337 12.5 8.33337"
            stroke="#4C8C74"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <ellipse
            cx="25"
            cy="35.4167"
            rx="12.5"
            ry="8.33333"
            stroke="#4C8C74"
            strokeWidth="2"
          />
          <path
            d="M41.6666 39.5833C45.3213 38.7818 47.9166 36.7522 47.9166 34.375C47.9166 31.9977 45.3213 29.9681 41.6666 29.1666"
            stroke="#4C8C74"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8.33337 39.5833C4.67869 38.7818 2.08337 36.7522 2.08337 34.375C2.08337 31.9977 4.67869 29.9681 8.33337 29.1666"
            stroke="#4C8C74"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Australian Expertise",
      description:
        "Proudly Australian, we bring a local understanding with a global standard of execution.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M4.16663 25C4.16663 15.179 4.16663 10.2686 7.2176 7.2176C10.2686 4.16663 15.179 4.16663 25 4.16663C34.8209 4.16663 39.7314 4.16663 42.7823 7.2176C45.8333 10.2686 45.8333 15.179 45.8333 25C45.8333 34.8209 45.8333 39.7314 42.7823 42.7823C39.7314 45.8333 34.8209 45.8333 25 45.8333C15.179 45.8333 10.2686 45.8333 7.2176 42.7823C4.16663 39.7314 4.16663 34.8209 4.16663 25Z"
            stroke="#4C8C74"
            strokeWidth="2"
          />
          <path
            d="M14.5834 29.1667L19.3602 24.3898C20.1738 23.5763 21.4929 23.5763 22.3065 24.3898L25.6102 27.6936C26.4238 28.5072 27.7429 28.5072 28.5565 27.6936L35.4167 20.8334M35.4167 20.8334V26.0417M35.4167 20.8334H30.2084"
            stroke="#4C8C74"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Long-Term Growth",
      description:
        "Our approach is simple: calculated strategies, precise execution, and results that focus on building lasting partnerships and scalable strategies that grow with your brand.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 50 50"
          fill="none"
        >
          <path
            d="M4.16663 25C4.16663 15.179 4.16663 10.2686 7.2176 7.2176C10.2686 4.16663 15.179 4.16663 25 4.16663C34.8209 4.16663 39.7314 4.16663 42.7823 7.2176C45.8333 10.2686 45.8333 15.179 45.8333 25C45.8333 34.8209 45.8333 39.7314 42.7823 42.7823C39.7314 45.8333 34.8209 45.8333 25 45.8333C15.179 45.8333 10.2686 45.8333 7.2176 42.7823C4.16663 39.7314 4.16663 34.8209 4.16663 25Z"
            stroke="#4C8C74"
            strokeWidth="2"
          />
          <path
            d="M14.5834 37.5V18.75"
            stroke="#4C8C74"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M25 37.5V12.5"
            stroke="#4C8C74"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M35.4166 37.5V27.0834"
            stroke="#4C8C74"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
];

type ValueItem = (typeof valuesContent)[number];

function ValueCard({
  item,
  backgroundImage,
  accentColor,
}: {
  item: ValueItem;
  backgroundImage: string;
  accentColor: string;
}) {
  return (
    <div
      className="group relative h-full overflow-hidden rounded-2xl border border-white/10 p-5 transition sm:p-6"
      data-values-card
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(76,140,116,0.14),rgba(255,255,255,0.02)_55%,rgba(0,0,0,0.08))]" />
      <div className="flex h-full flex-col">
        {item.icon}
        <div className="mt-4 flex flex-1 flex-col">
          <h3
            className="text-lg font-semibold sm:text-xl"
            style={{ color: accentColor }}
          >
            {item.title}
          </h3>
          <p className="mt-2 text-sm font-light leading-6 text-white/85 sm:text-base">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
}

const Values = () => {
  const { isLightMode: isLight } = useThemeMode();
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const backgroundImage = isLight
    ? "url(/About/Frame_163_Light.svg)"
    : "url(/About/values_card_dark.webp)";
  const accentColor = isLight ? "#417AB8" : "#FBBF24";
  const sectionBackground = isLight
    ? "radial-gradient(circle at left top, rgba(250,204,21,0.16), transparent 28%), linear-gradient(90deg, rgba(6,78,59,0.08), rgba(255,255,255,0) 42%)"
    : "radial-gradient(circle at left top, rgba(250,204,21,0.14), transparent 28%), linear-gradient(90deg, rgba(5,46,37,0.9), rgba(3,18,16,0.98) 42%)";

  return (
    <section
      className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 xl:py-20"
      style={{ background: sectionBackground }}
    >
      <div
        ref={sectionRef}
        className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(420px,0.86fr)] lg:items-stretch lg:gap-14 xl:gap-20"
      >
        <div className="min-w-0 lg:flex lg:h-full lg:flex-col">
          <motion.p
            className="mb-3 text-sm font-medium text-[#4C8C74] sm:text-base lg:text-lg"
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.6 }}
          >
            Our Values
          </motion.p>

          <motion.h2
            className="mb-8 max-w-xl text-4xl font-bold leading-none text-white sm:text-5xl lg:mb-10 lg:text-6xl"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Our Core Values
          </motion.h2>

          <motion.div
            className="grid max-w-[640px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5"
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            {valuesContent.map((item) => (
              <ValueCard
                key={item.title}
                item={item}
                backgroundImage={backgroundImage}
                accentColor={accentColor}
              />
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mx-auto w-full max-w-[420px] lg:mt-4 lg:h-full lg:max-w-none"
          initial={{ opacity: 0, x: 18 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative mx-auto aspect-[0.91/1] w-full max-w-[500px] overflow-hidden rounded-[24px] sm:rounded-[28px] lg:ml-auto lg:mr-0 lg:h-full lg:max-w-[520px] lg:aspect-auto">
            <Image
              src="/About/Rectangle 43.webp"
              alt="Values Illustration"
              fill
              sizes="(max-width: 639px) 88vw, (max-width: 1023px) 72vw, (max-width: 1279px) 40vw, 520px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
