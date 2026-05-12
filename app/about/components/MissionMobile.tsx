"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const missionImages = [
  {
    src: "/About/Rectangle_44.webp",
    alt: "Mission Image 1",
  },
  {
    src: "/About/Rectangle_45.webp",
    alt: "Mission Image 2",
    className: "drop-shadow-md",
  },
  {
    src: "/About/Rectangle_46.webp",
    alt: "Mission Image 3",
    hasShape: true,
  },
];

const MissionMobile = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % missionImages.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="flex w-full flex-col items-center space-y-6 overflow-x-hidden px-4 py-8 md:hidden">
      <div className="w-full max-w-sm overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {missionImages.map((image) => (
            <div
              key={image.src}
              className="flex w-full flex-shrink-0 justify-center px-2"
            >
              <div className="relative h-[220px] w-full max-w-[280px]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 639px) 280px"
                  className={`rounded-[16px] object-cover ${
                    image.className ?? ""
                  }`}
                />
                {image.hasShape && (
                  <Image
                    src="/About/Geometric_Shape_Silver.webp"
                    alt="Geometric Shape"
                    width={60}
                    height={60}
                    className="pointer-events-none absolute -bottom-2 -right-2 h-6 w-6 opacity-90"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {missionImages.map((image, index) => (
            <span
              key={image.src}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "w-6 bg-[#4C8C74]" : "w-2 bg-white/30"
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <div className="max-w-sm text-center">
        <h2 className="mb-3 text-xl font-bold sm:text-2xl">Our Mission</h2>
        <p
          className="text-xs font-normal leading-relaxed text-[#AAAAAA] sm:text-sm"
          data-text-sm-light
        >
          We exist to create digital solutions that drive growth. By combining
          clean design with smart strategies, we help brands reach their full
          potential online. Every project is an opportunity to bring your
          vision to life and make your brand stronger, more impactful, and
          ready for the future.
        </p>
      </div>
    </div>
  );
};

export default MissionMobile;
