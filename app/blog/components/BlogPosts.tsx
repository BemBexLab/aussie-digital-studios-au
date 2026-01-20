"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { PiArrowCircleUpRightThin } from "react-icons/pi";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";
import { blogPosts } from "../data";

const BlogPosts = () => {
  const [displayCount, setDisplayCount] = useState(9);
  const [cardsLoaded, setCardsLoaded] = useState(9);
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check if light mode is active
    const checkLightMode = () => {
      setIsLightMode(document.documentElement.classList.contains("light"));
    };
    
    checkLightMode();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkLightMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    
    return () => observer.disconnect();
  }, []);

  const handleLoadMore = () => {
    setCardsLoaded(cardsLoaded + 3);
    setDisplayCount(displayCount + 3);
  };

  const displayedPosts = blogPosts.slice(0, displayCount);
  const hasMorePosts = displayCount < blogPosts.length;
  const cardBg = isLightMode ? '/blog/card_light.webp' : '/blog/card_dark.webp';
  const descriptionColor = isLightMode ? '#000000' : '#AAAAAA';

  return (
    <section className="hidden md:block">
      <div className="grid grid-cols-3 gap-3 my-15 mx-25">
        {displayedPosts.map((post, index) => (
          <div
            key={index}
            className="p-3 h-[455px] w-[350px] rounded-xl"
            style={{
              backgroundImage: `url("${cardBg}")`
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              className="rounded-2xl w-[350px] h-[250px] object-cover"
            />
            <div className="w-[350px] h-[250px]">
              <p className="text-sm mt-4 text-[#4C8C74]">{post.category}</p>
              <h3 className="mt-3 text-xl font-semibold text-yellow-500">
                {post.title}
              </h3>
              <p className="mt-2 text-sm" style={{ color: descriptionColor }}>{post.description} </p>
              <div className="flex flex-row justify-start items-center gap-2 mt-3">
                <BsArrowUpRightCircle className="w-5 h-5 text-[#4C8C74]" />
                <a className="text-sm font-light text-[#AAAAAA]" href={`/blog/${post.subblog[0]?.slug || 'default'}`}>Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {hasMorePosts && (
        <div className="flex justify-center mt-8">
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
};

export default BlogPosts;
