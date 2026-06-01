"use client";

import React from "react";
import { motion } from "@/lib/motion";
import Image from "next/image";
import { resolveViewport } from "next/dist/lib/metadata/resolve-metadata";

type CardData = {
  review: string;
  image: string;
  name: string;
  handle: string;
  date: string;
};

const Testimonials = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  const headingRef = React.useRef<HTMLDivElement | null>(null);
  const [isHeadingInView, setIsHeadingInView] = React.useState(false);
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@neilstellar",
      date: "April 20, 2025",
      review: "Aussie Digital Studios's design work is phenomenal. They took our vision and turned it into a stunning reality. Our website traffic has doubled since the redesign!"
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
      review: "Working with Aussie Digital Studios was a game-changer for our brand. Their team is creative, responsive, and truly cares about delivering results. Highly recommend!"
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordantalks",
      date: "June 5, 2025",
      review: "Aussie Digital Studios exceeded our expectations in every way. Their strategic approach to branding and digital marketing has significantly boosted our online presence and sales."
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
      review: "Working with Aussie Digital Studios was a game-changer for our brand. Their team is creative, responsive, and truly cares about delivering results. Highly recommend!"
    },
  ];

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
