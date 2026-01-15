"use client";

import React, { useState } from "react";
import Image from "next/image";

const Portfolio = () => {
  const [clickedImageId, setClickedImageId] = useState<string | null>(null);

  const images = [
    { id: "1", src: "/services/web_01.svg", translateY: "-translate-y-25" },
    { id: "2", src: "/services/web_02.svg", translateY: "" },
    { id: "3", src: "/services/web_02.svg", translateY: "-translate-y-25" },
    { id: "4", src: "/services/web_03.svg", translateY: "" },
    { id: "5", src: "/services/web_04.svg", translateY: "-translate-y-25" },
    { id: "6", src: "/services/web_05.svg", translateY: "" },
    { id: "7", src: "/services/web_06.svg", translateY: "-translate-y-25" },
    { id: "8", src: "/services/web_07.svg", translateY: "" },
  ];

  return (
    <section className="my-20 py-10" style={{
        backgroundImage: 'url("/Home/CTA.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }}>
      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-xl font-medium text-[#4C8C74] mb-2">Our Portfolio</p>
        <h2 className="text-4xl md:text-4xl font-semibold text-white">
          Real Websites, Not Just Mockups
        </h2>

        {/* Cards slider */}
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .portfolio-scroll {
            animation: scroll 30s linear infinite;
          }
          .portfolio-scroll.paused {
            animation: none;
          }
          .portfolio-image {
            cursor: pointer;
            transition: transform 0.3s ease;
          }
          .portfolio-image:hover {
            transform: scale(1.05);
          }
          .portfolio-image.zoomed {
            transform: scale(1.15);
          }
        `}</style>
        <div className="overflow-hidden mt-10">
          <div className={`flex flex-row gap-3 ${clickedImageId ? "portfolio-scroll paused" : "portfolio-scroll"}`}>
            {images.map((image) => (
              <Image
                key={image.id}
                className={`w-[350px] h-[600px] flex-shrink-0 portfolio-image ${image.translateY} ${
                  clickedImageId === image.id ? "zoomed" : ""
                }`}
                src={image.src}
                alt="Our Process"
                width={1200}
                height={1500}
                onClick={() => setClickedImageId(image.id === clickedImageId ? null : image.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
