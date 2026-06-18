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
  const headingRef = React.useRef<HTMLDivElement | null>(null);
  const [isHeadingInView, setIsHeadingInView] = React.useState(false);
  const [cardsData] = React.useState(() =>
    [...TESTIMONIALS].sort(() => Math.random() - 0.5),
  );

  const CreateCard = ({ card }: { card: CardData }) => (
    <div
      className="p-4 rounded-xl mx-2 shadow-lg hover:shadow-xl transition-all duration-200 w-[350px] min-h-[180px] shrink-0 bg-[#202020] text-white border border-gray-800"
      data-testimonial-card
    >
      <div className="flex gap-2">
        <div className="flex flex-col">
          {/* Stars goes here */}
          <div className="flex items-center flex-row gap-1">
            <Image
              src="/Home/Star_5.svg"
              width={25}
              height={25}
              alt="Description of my image"
            />
            <Image
              src="/Home/Star_5.svg"
              width={25}
              height={25}
              alt="Description of my image"
            />
            <Image
              src="/Home/Star_5.svg"
              width={25}
              height={25}
              alt="Description of my image"
            />
            <Image
              src="/Home/Star_5.svg"
              width={25}
              height={25}
              alt="Description of my image"
            />
            <Image
              src="/Home/Star_5.svg"
              width={25}
              height={25}
              alt="Description of my image"
            />
          </div>
          {/* <span className="text-xs text-gray-400">{card.handle}</span> */}
        </div>
      </div>
      <p className="text-sm text-gray-300 mt-2 mb-3 break-words whitespace-normal">
        {card.review}
      </p>
      <div className="flex items-center justify-between text-gray-500 text-xs">
        <div className="flex items-center gap-1">
          <img
            className="size-11 rounded-full"
            src={card.image}
            alt="User Image"
          />
          <p className="px-2 font-medium text-blue-400">{card.name}</p>
        </div>
      </div>
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

  return (
    <div className="relative py-8">
      <div ref={headingRef} className="flex flex-col my-8">
        <motion.p
          className="text-sm text-[#4C8C74] font-semibold text-center"
          initial={{ opacity: 0, y: 8 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.6 }}
        >
          Testimonial
        </motion.p>
        <motion.p
          className="text-center text-4xl font-semibold text-white mt-1"
          initial={{ opacity: 0, y: 10 }}
          animate={isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          What Client Say About us
        </motion.p>
      </div>
      <style>{`
            @keyframes marqueeScroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
                }
                
            .marquee-inner {
                animation: marqueeScroll 25s linear infinite;
            }

            .marquee-inner.paused {
                animation-play-state: paused;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>

      {/* observe headings and trigger animation when visible (handled in hook above) */}

      <div className="marquee-row w-full mx-auto overflow-hidden relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="absolute left-0 top-0 h-full w-10 z-10 pointer-events-none bg-gradient-to-r from-transparent to-transparent"></div>
        <div className={`marquee-inner flex items-start transform-gpu min-w-[200%] py-4 gap-0 ${isPaused ? 'paused' : ''}`}>
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-transparent to-transparent"></div>
      </div>

      <div className="marquee-row w-full mx-auto overflow-hidden relative -mt-2" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="absolute left-0 top-0 h-full w-10 z-10 pointer-events-none bg-gradient-to-r from-transparent to-transparent"></div>
        <div className={`marquee-inner marquee-reverse flex items-start transform-gpu min-w-[200%] py-4 gap-0 ${isPaused ? 'paused' : ''}`}>
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export { Testimonials };
