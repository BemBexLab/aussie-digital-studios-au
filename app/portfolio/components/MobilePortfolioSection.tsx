// app/portfolio/components/MobilePortfolioSection.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { GoArrowDown } from "react-icons/go";

const cardData = [
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
  {
    image: "/Home/Rectangle_33.webp",
    title: "Project Name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tags: ["Web design", "Web development", "Support"],
  },
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
    image: "/Home/Rectangle_32.webp",
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
    image: "/Home/Rectangle_32.webp",
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
    image: "/Home/Rectangle_32.webp",
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
    image: "/Home/Rectangle_32.webp",
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
    image: "/Home/Rectangle_32.webp",
    title: "Project Name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    tags: ["Web design", "Web development", "Support"],
  },
];

const ITEMS_PER_PAGE = 3;

export default function MobilePortfolioSection() {
  const [displayedItems, setDisplayedItems] = useState(ITEMS_PER_PAGE);

  const handleLoadMore = () => {
    setDisplayedItems((prev) => prev + ITEMS_PER_PAGE);
  };

  const visibleData = cardData.slice(0, displayedItems);
  const hasMoreData = displayedItems < cardData.length;

  return (
    <section className="relative mt-16 my-10 md:hidden px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-lg text-[#4C8C74] mb-2 font-semibold">
          Our Portfolio
        </p>
        <h2 className="text-2xl font-semibold text-white">
          Proven results,
          <br /> stunning Websites
        </h2>

        {/* Buttons - Scrollable on mobile */}
        <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
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
              className="text-gray-400 px-3 py-1.5 rounded-[8px] border border-gray-600 cursor-pointer text-xs hover:border-yellow-400 hover:text-yellow-400 transition whitespace-nowrap flex-shrink-0"
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div className="flex justify-center">
        <div className="w-full grid grid-cols-1 gap-8">
          {/* Portfolio Cards */}
          {visibleData.map((card, index) => (
            <div
              key={index}
              className="w-full overflow-hidden relative"
            >
              <Image
                src={card.image}
                alt={card.title}
                className="w-full h-48 object-cover rounded-lg"
                width={400}
                height={300}
              />
              <h2 className="text-[#3A6EA5] text-base mt-3">{card.title}</h2>
              <p className="text-white text-xs mt-2 font-light line-clamp-2">
                {card.description}
              </p>
              <div className="flex gap-2 flex-wrap mt-2">
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
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-[#4C8C74] text-white rounded-4xl hover:bg-[#3a6a56] transition text-sm"
          >
            Load More
            <GoArrowDown className="inline-block ml-2" />
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
    <span className="text-xs px-2 py-0.5 rounded-full border border-gray-700 text-gray-300 whitespace-nowrap">
      {label}
    </span>
  );
}
