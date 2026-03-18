"use client";

import React from "react";
import Image from "next/image";

type CardData = {
  image: string;
  name: string;
  handle: string;
  date: string;
  review: string;
};

const Testimonials = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  const [repeatCount, setRepeatCount] = React.useState(4);
  const [groupWidth, setGroupWidth] = React.useState(0);
  const marqueeContainerRef = React.useRef<HTMLDivElement | null>(null);
  const measureGroupRef = React.useRef<HTMLDivElement | null>(null);
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@neilstellar",
      date: "April 20, 2025",
      review: "Aussie made my day!"
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
      review: "Aussie's great!"
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordantalks",
      date: "June 5, 2025",
      review: "Aussie solved my problems big time!"
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
      review: "I don't know what I would have donw without Aussie's help"
    },
  ];

  React.useEffect(() => {
    const updateMarqueeMetrics = () => {
      const containerWidth = marqueeContainerRef.current?.offsetWidth ?? 0;
      const singleGroupWidth = measureGroupRef.current?.scrollWidth ?? 0;

      if (!containerWidth || !singleGroupWidth) {
        return;
      }

      setGroupWidth(singleGroupWidth);

      // Keep enough copies on the track so the viewport is always filled
      // before and after shifting by exactly one group width.
      const requiredCopies = Math.max(
        3,
        Math.ceil((containerWidth * 2) / singleGroupWidth) + 2
      );

      setRepeatCount((current) =>
        current === requiredCopies ? current : requiredCopies
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
  }, []);

  const renderCardGroup = (groupKey: string) => (
    <div key={groupKey} className="flex w-max shrink-0 items-start py-4">
      {cardsData.map((card, index) => (
        <CreateCard key={`${groupKey}-${card.name}-${index}`} card={card} />
      ))}
    </div>
  );

  const CreateCard = ({ card }: { card: CardData }) => (
    <div
      className="p-4 rounded-xl mx-2 shadow-lg hover:shadow-xl transition-all duration-200 w-[350px] h-[180px] shrink-0 bg-[#202020] text-white border border-gray-800"
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
      <p className="text-sm py-4 text-gray-300">
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

  return (
    <div className="relative py-8">
      <div className="flex flex-col my-8">
        <p className="text-sm text-[#4C8C74] font-semibold text-center">
          Testimonial
        </p>
        <p className="text-center text-4xl font-semibold text-white mt-1">
          What Client Say About us
        </p>
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
                animation: marqueeLeft 25s linear infinite;
            }

            .marquee-right {
                animation: marqueeRight 25s linear infinite;
            }

            .marquee-track.paused {
                animation-play-state: paused;
            }
        `}</style>

      <div className="absolute invisible pointer-events-none -z-10 overflow-hidden">
        <div ref={measureGroupRef}>{renderCardGroup("measure")}</div>
      </div>

      <div
        ref={marqueeContainerRef}
        className="marquee-row w-full mx-auto overflow-hidden relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 h-full w-10 z-10 pointer-events-none bg-gradient-to-r from-transparent to-transparent"></div>
        <div
          className={`marquee-track marquee-left transform-gpu ${isPaused ? "paused" : ""}`}
          style={
            {
              "--marquee-distance": `${groupWidth}px`,
            } as React.CSSProperties
          }
        >
          {Array.from({ length: repeatCount }, (_, index) =>
            renderCardGroup(`top-${index}`)
          )}
        </div>
        <div className="absolute right-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-transparent to-transparent"></div>
      </div>

      <div
        className="marquee-row w-full mx-auto overflow-hidden relative -mt-2"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 h-full w-10 z-10 pointer-events-none bg-gradient-to-r from-transparent to-transparent"></div>
        <div
          className={`marquee-track marquee-right transform-gpu ${isPaused ? "paused" : ""}`}
          style={
            {
              "--marquee-distance": `${groupWidth}px`,
            } as React.CSSProperties
          }
        >
          {Array.from({ length: repeatCount }, (_, index) =>
            renderCardGroup(`bottom-${index}`)
          )}
        </div>
        <div className="absolute right-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export { Testimonials };
