"use client";

import Image from "next/image";
import React, { useState } from "react";

const cardData = [
  {
    title: "Logo",
    data: [
      {
        image: "/Home/Rectangle_33.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_34.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
    ],
  },
  {
    title: "SMM",
    data: [
      {
        image: "/Home/Rectangle_34.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
    ],
  },
  {
    title: "SEO",
    data: [
      {
        image: "/Home/Rectangle_32.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
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
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
    ],
  },
  {
    title: "Branding",
    data: [
      {
        image: "/Home/Rectangle_34.webp",
        title: "Project Name",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        tags: ["Web design", "Web development", "Support"],
      },
    ],
  },
];

export default function PortfolioSectionMobile() {
  const [selectedService, setSelectedService] = useState("Logo");
  const selectedData = cardData.find(item => item.title === selectedService);

  return (
    <section className="md:hidden relative mt-12 my-12 px-4 w-full overflow-x-hidden">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-base text-[#4C8C74] mb-2 font-semibold">
          Our Portfolio
        </p>
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          Proven results,
          <br /> stunning Websites
        </h2>
      </div>

      {/* Service Buttons - Wrapped Grid */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center w-full">
        {cardData.map((service) => (
          <button
            key={service.title}
            onClick={() => setSelectedService(service.title)}
            className={`px-3 py-2 rounded-[8px] border cursor-pointer text-xs transition ${
              selectedService === service.title
                ? "border-yellow-400 text-yellow-400 bg-yellow-400/10"
                : "text-gray-400 border-gray-600 hover:border-yellow-400 hover:text-yellow-400"
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      {/* Portfolio Cards - Single Column */}
      <div className="flex flex-col gap-6">
        {selectedData?.data.map((card, index) => (
          <div
            key={index}
            className="w-full overflow-hidden relative flex flex-col"
          >
            <Image
              src={card.image}
              alt={card.title}
              className="w-full h-[220px] rounded-lg object-cover"
              width={400}
              height={220}
            />
            <h2 className="text-[#3A6EA5] text-base mt-3">{card.title}</h2>
            <p className="text-white text-xs mt-2 font-light leading-relaxed">
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
    </section>
  );
}

type TagProps = {
  label: string;
};

function Tag({ label }: TagProps) {
  return (
    <span className="text-xs px-2 py-1 rounded-full border border-gray-700 text-gray-300 whitespace-nowrap">
      {label}
    </span>
  );
}
