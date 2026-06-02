"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";
import { blogPosts } from "../data";

const BlogPosts = () => {
  const [displayCount, setDisplayCount] = useState(6);

  const handleLoadMore = () => {
    setDisplayCount((currentCount) => currentCount + 3);
  };

  const displayedPosts = blogPosts.slice(0, displayCount);
  const hasMorePosts = displayCount < blogPosts.length;

  return (
    <section className="px-4 py-10 sm:px-6 md:px-8 md:py-12 lg:px-10 lg:py-14 xl:px-12">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
        {displayedPosts.map((post, index) => (
          <article
            key={index}
            className="overflow-hidden rounded-[14px] border border-[#28322d] bg-[#1d1f1e] p-3 shadow-[0_0_0_1px_rgba(97,132,117,0.05),0_18px_40px_rgba(0,0,0,0.18)] sm:p-3.5"
            style={{
              background:
                "linear-gradient(180deg, rgba(66,95,82,0.38) 0%, rgba(29,31,30,1) 16%, rgba(29,31,30,1) 100%)",
            }}
          >
            <div className="overflow-hidden rounded-[12px]">
              <Image
                src={post.image}
                alt={post.title}
                width={372}
                height={228}
                className="h-[190px] w-full object-cover sm:h-[210px] lg:h-[220px] xl:h-[190px]"
              />
            </div>

            <div className="px-1 pb-1 pt-4 sm:pt-5">
              <p className="text-[10px] font-medium leading-none text-[#5a8e78] sm:text-[11px]">
                {post.category}
              </p>
              <h3 className="mt-2.5 line-clamp-1 text-base font-medium leading-tight text-[#d49c22] sm:mt-3 sm:text-[18px]">
                {post.title}
              </h3>
              <p className="mt-2.5 line-clamp-3 max-w-[95%] text-[11px] leading-[1.55] text-[#8c908e] sm:mt-3 sm:text-[12px]">
                {post.description}
              </p>

              <a
                className="mt-4 inline-flex items-center gap-2 text-[11px] font-light text-[#8f9491] transition hover:text-[#c5c9c7] sm:mt-5 sm:text-[12px]"
                href={`/blog/${post.subblog[0]?.slug || "default"}`}
              >
                <BsArrowUpRightCircle className="h-4 w-4 text-[#4f826c] sm:h-[18px] sm:w-[18px]" />
                <span>Read More</span>
              </a>
            </div>
          </article>
        ))}
      </div>

      {hasMorePosts && (
        <div className="mt-6 flex justify-center sm:mt-8">
          <button
            onClick={handleLoadMore}
            className="rounded-full bg-[#4c8c74] px-5 py-2.5 text-sm text-white transition hover:bg-[#3d735f] sm:px-6 sm:py-3"
          >
            Load More
            <GoArrowDown className="ml-2 inline-block" />
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogPosts;
