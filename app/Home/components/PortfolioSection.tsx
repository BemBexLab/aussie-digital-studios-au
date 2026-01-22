"use client";

import Image from "next/image";
import React, { useState } from "react";
import PortfolioSectionMobileNew from "./PortfolioSectionMobileNew";

const cardData = [
  {
    title: "Logo",
    data: [
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_34.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
    ],
  },
  {
    title: "E-Commerce",
    data: [
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
    ],
  },
  {
    title: "Website Design",
    data: [
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_34.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
    ],
  },
  {
    title: "SMM",
    data: [
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_34.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
    ],
  },
  {
    title: "Video Animation",
    data: [
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_34.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
    ],
  },
  {
    title: "SEO",
    data: [
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_34.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
    ],
  },
  {
    title: "Maintenance",
    data: [
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_34.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
    ],
  },
  {
    title: "Branding",
    data: [
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_34.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
    ],
  },
];

export default function PortfolioSection() {
  const [selectedService, setSelectedService] = useState("Logo");
  const selectedData = cardData.find(item => item.title === selectedService);
  return (
    <>
      <PortfolioSectionMobileNew />
      {/* Desktop version - hidden on md and below screens */}
      <section className="hidden md:block relative mt-25 my-20 max-[1250px]:px-4">
        {/* Heading */}
        <div className="text-center mb-20 px-4">
          {" "}
          {/* Added px-4 for safety on mobile */}
          <p className="text-xl text-[#4C8C74] mb-2 font-semibold">
            Our Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Proven results,
            <br /> stunning Websites
          </h2>
          {/* Buttons - wrap & stack on mobile */}
          <div className="flex flex-wrap gap-2 mt-6 md:gap-4 justify-center">
            {cardData.map((service) => (
              <button
                key={service.title}
                onClick={() => setSelectedService(service.title)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-[8px] border cursor-pointer text-xs md:text-sm transition ${
                  selectedService === service.title
                    ? "border-yellow-400 text-yellow-400 bg-yellow-400/10"
                    : "text-gray-400 border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main Container */}
        <div className="max-w-7xl mx-auto flex justify-center">
          <div className="grid grid-cols-2 max-[1250px]:grid-cols-1 gap-20">
            {/* Portfolio Cards */}
            {selectedData?.data.map((card, index) => (
              <div
                key={index}
                className="h-full w-[480px] overflow-hidden relative"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  className="w-[480px] h-[350px]"
                  width={900}
                  height={900}
                />
                <h2 className="text-[#3A6EA5] text-lg mt-4">{card.title}</h2>
                <p className="text-white text-sm mt-2 font-light">
                  {card.description}
                </p>
                <div className="flex gap-2 flex-wrap mt-3">
                  {card.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex} label={tag} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

type TagProps = {
  label: string;
};

function Tag({ label }: TagProps) {
  return (
    <span className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-300 whitespace-nowrap">
      {label}
    </span>
  );
}
