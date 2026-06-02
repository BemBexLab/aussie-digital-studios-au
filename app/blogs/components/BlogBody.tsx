"use client";

import Image from "next/image";
import React, { useState, useEffect, use } from "react";

import { BsArrowUpRightCircle } from "react-icons/bs";

const BlogBody = ({ subblog }: { subblog?: any }) => {
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

  if (!subblog) {
    return <div className="p-10">Loading...</div>;
  }

  const blogPageBg = isLightMode ? '/Blog/blog_page_light.webp' : '/Blog/blog_page_dark.webp';
  const descriptionColor = isLightMode ? '#000000' : '#AAAAAA';

  return (
    <section className="hidden md:block">
      <div className="z-10 transform -translate-y-25">
        <Image
          src={subblog.image}
          alt="Blog Body Image"
          width={1500}
          height={1500}
          className="w-[1180px] h-auto rounded-2xl my-10 mx-10"
        />
        <div className="flex flex-row mx-10">
          <div className="w-[65%] h-auto">
            <p className="text-sm" style={{ color: descriptionColor }}>
              {subblog.description}
            </p>
          </div>

          <div className="flex flex-col ml-13">
            <h2 className="text-lg text-white font-semibold">Related Blogs</h2>

            <div className="felx flex-col mt-5">
              {subblog.relatedblog.map((blog: any, index: number) => (
              <div
                key={index}
                className="flex flex-row h-[125px] w-[370px] bg-cover bg-center rounded-lg px-3 mb-3"
                style={{
                  backgroundImage: `url("${blogPageBg}")`,
                }}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={100}
                  height={100}
                  className="w-[100px] h-[90px] rounded-lg my-5"
                />
                <div className="flex flex-col py-8 px-3">
                    <p className="text-sm text-[#4C8C74] text-">
                      {blog.category}
                    </p>
                    <h2 className="text-md text-yellow-500">
                      {blog.title}
                    </h2>

                  <div className="flex flex-row justify-start items-center gap-2 mt-1">
                    <BsArrowUpRightCircle className="w-5 h-5 text-[#4C8C74]" />
                    <a className="text-sm font-light text-[#AAAAAA]" href={`/blog/${blog.slug}`}>
                      Read More
                    </a>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogBody;
