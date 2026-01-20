"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";
import { blogPosts } from "../data";

const BlogPostsMobile = () => {
  const [displayCount, setDisplayCount] = useState(6);
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
    setDisplayCount(displayCount + 3);
  };

  const displayedPosts = blogPosts.slice(0, displayCount);
  const hasMorePosts = displayCount < blogPosts.length;
  const cardBg = isLightMode ? '/blog/card_light.webp' : '/blog/card_dark.webp';
  const descriptionColor = isLightMode ? '#000000' : '#AAAAAA';

  return (
    <section className="md:hidden px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
        {displayedPosts.map((post, index) => (
          <div
            key={index}
            className="p-3 h-auto rounded-xl"
            style={{
              backgroundImage: `url("${cardBg}")`
            }}
          >
            <Image
              src={post.image}
              alt={post.title}
              width={200}
              height={150}
              className="rounded-lg w-full h-[150px] object-cover"
            />
            <div className="mt-3">
              <p className="text-xs mt-2 text-[#4C8C74]">{post.category}</p>
              <h3 className="mt-2 text-base font-semibold text-yellow-500 line-clamp-2">
                {post.title}
              </h3>
              <p className="mt-2 text-xs line-clamp-2" style={{ color: descriptionColor }}>{post.description}</p>
              <div className="flex flex-row justify-start items-center gap-2 mt-3">
                <BsArrowUpRightCircle className="w-4 h-4 text-[#4C8C74]" />
                <a className="text-xs font-light text-[#AAAAAA]" href={`/blog/${post.subblog[0]?.slug || 'default'}`}>Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {hasMorePosts && (
        <div className="flex justify-center mt-6">
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
};

export default BlogPostsMobile;
