"use client";

import Image from "next/image";
import { useState } from "react";
import { GoArrowDown } from "react-icons/go";
import MobilePortfolioSection from "./MobilePortfolioSection";

const cardData = [
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
  {
    image: "/Home/Rectangle_32.webp",
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
    image: "/Home/Rectangle_32.webp",
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
    image: "/Home/Rectangle_32.webp",
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
    image: "/Home/Rectangle_32.webp",
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
    image: "/Home/Rectangle_32.webp",
    title: "Project Name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tags: ["Web design", "Web development", "Support"],
  },
];

const ITEMS_PER_PAGE = 6;

export default function PortfolioSectionWrapper() {
  return (
    <>
      <MobilePortfolioSection />
      <PortfolioSection />
    </>
  );
}

function PortfolioSection() {
  const [displayedItems, setDisplayedItems] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setDisplayedItems((prev) => prev + ITEMS_PER_PAGE);
  };

  const visibleData = cardData.slice(0, displayedItems);
  const hasMoreData = displayedItems < cardData.length;
  return (
    <section className="relative mt-25 my-20 hidden md:block">
      {/* Heading */}
      <div className="text-center mb-20">
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
          {[
            "Logo",
            "E-Commerce",
            "Website Design",
            "SMM",
            "Video Animation",
            "SEO",
            "Maintenance",
            "Branding",
          ].map((label) => (
            <div
              key={label}
              className="text-gray-400 px-3 py-1.5 md:px-4 md:py-2 rounded-[8px] border border-gray-600 cursor-pointer text-xs md:text-sm hover:border-yellow-400 hover:text-yellow-400 transition"
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="grid grid-cols-2 gap-20">
          {/* Portfolio Cards */}
          {visibleData.map((card, index) => (
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

      {/* Load More Button */}
      {hasMoreData && (
        <div className="flex justify-center mt-16">
          <button
            onClick={handleLoadMore}
            className="px-6 py-3 bg-[#4C8C74] text-white rounded-4xl hover:bg-[#3a6a56] transition"
          >
            Load More
            <GoArrowDown className="inline-block ml-2" />
            {/* <PiArrowCircleUpRightThin className="inline-block ml-2" /> */}
          </button>
        </div>
      )}
    </section>
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
