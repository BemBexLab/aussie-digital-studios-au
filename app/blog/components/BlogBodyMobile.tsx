"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const BlogBodyMobile = ({ subblog }: { subblog?: any }) => {
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
    <section className="md:hidden w-screen -ml-screen overflow-x-hidden">
      <div className="w-full px-4">
        <Image
          src={subblog.image}
          alt="Blog Body Image"
          width={500}
          height={500}
          priority
          className="w-full h-auto rounded-lg my-6 block"
        />
        <div className="flex flex-col w-full">
          <div className="w-full h-auto mb-8">
            <p className="text-sm" style={{ color: descriptionColor }}>
              {subblog.description}
            </p>
          </div>

          <div className="flex flex-col">
            <h2 className="text-base text-white font-semibold">Related Blogs</h2>

            <div className="flex flex-col mt-4 w-full">
              {subblog.relatedblog.map((blog: any, index: number) => (
              <div
                key={index}
                className="flex flex-col h-auto w-full bg-cover bg-center rounded-lg p-3 mb-4"
                style={{
                  backgroundImage: `url("${blogPageBg}")`,
                }}
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={100}
                  height={100}
                  className="w-full h-[100px] rounded-lg object-cover mb-2"
                />
                <div className="flex flex-col w-full">
                    <p className="text-xs text-[#4C8C74]">
                      {blog.category}
                    </p>
                    <h2 className="text-sm text-yellow-500 font-semibold my-1">
                      {blog.title}
                    </h2>

                  <div className="flex flex-row justify-start items-center gap-2 mt-2">
                    <BsArrowUpRightCircle className="w-4 h-4 text-[#4C8C74]" />
                    <a className="text-xs font-light text-[#AAAAAA]" href={`/blog/${blog.slug}`}>
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

export default BlogBodyMobile;
