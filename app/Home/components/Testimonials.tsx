"use client";

import React from "react";
import { motion } from "@/lib/motion";
import Image from "next/image";

type CardData = {
  review: string;
  image: string;
  name: string;
};

const TESTIMONIALS: CardData[] = [
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Sophie Bennett",
    review:
      "Aussie Digital Studios rebuilt our website and finally made it feel like a business asset instead of a brochure. Leads started coming in within weeks.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Liam Carter",
    review:
      "Their team understood our brand surprisingly fast. The new site looks sharper, loads faster, and gives our customers far more confidence.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Mia Thompson",
    review:
      "We needed clear messaging, stronger design, and better conversions. They delivered all three and made the process easy from start to finish.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/71.jpg",
    name: "Noah Edwards",
    review:
      "What stood out most was the strategy behind the design. Everything had a reason, and the final result feels premium without losing clarity.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    name: "Chloe Harris",
    review:
      "Our old website looked dated and did nothing for sales. The new one feels polished, trustworthy, and much better aligned with our audience.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    name: "Ethan Walker",
    review:
      "Communication was excellent, turnaround was fast, and the quality was genuinely impressive. We have already booked them for our next phase.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/27.jpg",
    name: "Isla Morgan",
    review:
      "They helped us simplify our offer and present it in a way customers actually understand. The difference in engagement has been massive.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Jack Foster",
    review:
      "From branding to layout to small UX details, everything felt considered. The site now looks like the level of company we want to be seen as.",
  },
];

const Testimonials = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  const [repeatCount, setRepeatCount] = React.useState(4);
  const [groupWidth, setGroupWidth] = React.useState(0);
  const headingRef = React.useRef<HTMLDivElement | null>(null);
  const marqueeContainerRef = React.useRef<HTMLDivElement | null>(null);
  const measureGroupRef = React.useRef<HTMLDivElement | null>(null);
  const [isHeadingInView, setIsHeadingInView] = React.useState(false);
  const [cardsData] = React.useState(() =>
    [...TESTIMONIALS].sort(() => Math.random() - 0.5),
  );

  const CreateCard = ({ card }: { card: CardData }) => (
    <div
      className="mx-2 w-[calc(100vw-3rem)] max-w-[23rem] min-h-[200px] shrink-0 rounded-xl border border-gray-800 bg-[#202020] p-4 text-white shadow-lg transition-all duration-200 hover:shadow-xl sm:w-[20rem] sm:max-w-none sm:p-5 lg:w-[22rem]"
      data-testimonial-card
    >
      <div className="flex gap-2">
        <div className="flex flex-col">
          {/* Stars goes here */}
          <div className="flex flex-row items-center gap-1">
            <Image
              src="/Home/Star_5.svg"
              width={20}
              height={20}
              alt="Star rating"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            <Image
              src="/Home/Star_5.svg"
              width={20}
              height={20}
              alt="Star rating"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            <Image
              src="/Home/Star_5.svg"
              width={20}
              height={20}
              alt="Star rating"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            <Image
              src="/Home/Star_5.svg"
              width={20}
              height={20}
              alt="Star rating"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
            <Image
              src="/Home/Star_5.svg"
              width={20}
              height={20}
              alt="Star rating"
              className="h-4 w-4 sm:h-5 sm:w-5"
            />
          </div>
          {/* <span className="text-xs text-gray-400">{card.handle}</span> */}
        </div>
      </div>
      <p className="mt-3 mb-4 text-sm leading-6 text-gray-300 break-words whitespace-normal sm:text-[0.95rem]">
        {card.review}
      </p>
      <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <img
            className="h-10 w-10 rounded-full object-cover sm:h-11 sm:w-11"
            src={card.image}
            alt={card.name}
          />
          <p className="pr-2 text-sm font-medium text-blue-400 sm:text-[0.95rem]">
            {card.name}
          </p>
        </div>
      </div>
    </div>
  );

  const renderCardGroup = (groupKey: string) => (
    <div key={groupKey} className="flex w-max shrink-0 items-stretch py-3 sm:py-4">
      {cardsData.map((card, index) => (
        <CreateCard key={`${groupKey}-${card.name}-${index}`} card={card} />
      ))}
    </div>
  );

  React.useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeadingInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  React.useEffect(() => {
    const updateMarqueeMetrics = () => {
      const containerWidth = marqueeContainerRef.current?.offsetWidth ?? 0;
      const singleGroupWidth = measureGroupRef.current?.scrollWidth ?? 0;

      if (!containerWidth || !singleGroupWidth) {
        return;
      }

      setGroupWidth(singleGroupWidth);

      const requiredCopies = Math.max(
        3,
        Math.ceil((containerWidth * 2) / singleGroupWidth) + 2,
      );

      setRepeatCount((current) =>
        current === requiredCopies ? current : requiredCopies,
      );
    };

    updateMarqueeMetrics();

    const resizeObserver = new ResizeObserver(updateMarqueeMetrics);

    if (marqueeContainerRef.current) {
      resizeObserver.observe(marqueeContainerRef.current);
    }

    if (measureGroupRef.current) {
      resizeObserver.observe(measureGroupRef.current);
    }

    window.addEventListener("resize", updateMarqueeMetrics);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateMarqueeMetrics);
    };
  }, [cardsData]);

  return (
    <div className="relative py-8 sm:py-10 lg:py-12">
      <div ref={headingRef} className="my-8 flex flex-col px-4 sm:my-10 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-sm font-semibold text-[#4C8C74] sm:text-base"
          initial={{ opacity: 0, y: 8 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.6 }}
        >
          Testimonial
        </motion.p>
        <motion.p
          className="mt-2 text-center text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl xl:text-5xl"
          initial={{ opacity: 0, y: 10 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          What Client Say About us
        </motion.p>
      </div>
      <style>{`
            @keyframes marqueeLeft {
                0% { transform: translate3d(0, 0, 0); }
                100% { transform: translate3d(calc(-1 * var(--marquee-distance, 0px)), 0, 0); }
                }

            @keyframes marqueeRight {
                0% { transform: translate3d(calc(-1 * var(--marquee-distance, 0px)), 0, 0); }
                100% { transform: translate3d(0, 0, 0); }
            }

            .marquee-track {
                display: flex;
                width: max-content;
                will-change: transform;
            }

            .marquee-left {
                animation: marqueeLeft 28s linear infinite;
            }

            .marquee-right {
                animation: marqueeRight 28s linear infinite;
            }

            .marquee-track.paused {
                animation-play-state: paused;
            }
        `}</style>

      {/* observe headings and trigger animation when visible (handled in hook above) */}

      <div className="absolute -z-10 invisible overflow-hidden pointer-events-none">
        <div ref={measureGroupRef}>{renderCardGroup("measure")}</div>
      </div>

      <div
        ref={marqueeContainerRef}
        className="marquee-row relative mx-auto w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-4 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent sm:w-8 lg:w-12"></div>
        <div
          className={`marquee-track marquee-left transform-gpu ${isPaused ? "paused" : ""}`}
          style={
            {
              "--marquee-distance": `${groupWidth}px`,
            } as React.CSSProperties
          }
        >
          {Array.from({ length: repeatCount }, (_, index) =>
            renderCardGroup(`top-${index}`),
          )}
        </div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-4 bg-gradient-to-l from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent sm:w-8 lg:w-12"></div>
      </div>

      <div
        className="marquee-row relative mx-auto -mt-2 w-full overflow-hidden sm:-mt-1"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-4 bg-gradient-to-r from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent sm:w-8 lg:w-12"></div>
        <div
          className={`marquee-track marquee-right transform-gpu ${isPaused ? "paused" : ""}`}
          style={
            {
              "--marquee-distance": `${groupWidth}px`,
            } as React.CSSProperties
          }
        >
          {Array.from({ length: repeatCount }, (_, index) =>
            renderCardGroup(`bottom-${index}`),
          )}
        </div>
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-4 bg-gradient-to-l from-[#0f0f0f] via-[#0f0f0f]/80 to-transparent sm:w-8 lg:w-12"></div>
      </div>
    </div>
  );
};

export { Testimonials };
