"use client";

import React, { useEffect, useState } from "react";
import { BsArrowUpRightCircle } from "react-icons/bs";

const BlogBody = ({ subblog }: { subblog?: any }) => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const checkLightMode = () => {
      setIsLightMode(document.documentElement.classList.contains("light"));
    };

    checkLightMode();

    const observer = new MutationObserver(checkLightMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!subblog) {
    return <div className="p-10">Loading...</div>;
  }

  const blogPageBg = isLightMode
    ? "/Blog/blog_page_light.webp"
    : "/Blog/blog_page_dark.webp";
  const descriptionColor = isLightMode ? "#111111" : "#AAAAAA";
  const headingColor = isLightMode ? "#111111" : "#FFFFFF";
  const bodyBackground = isLightMode
    ? "linear-gradient(180deg, #f7f3ea 0%, #ffffff 100%)"
    : "linear-gradient(180deg, #09110f 0%, #101917 100%)";

  return (
    <section
      className="px-4 pb-12 pt-8 sm:px-6 md:px-8 md:pb-20 md:pt-10 lg:px-10"
      style={{ background: bodyBackground }}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <div>
          <img
            src={subblog.image}
            alt={subblog.heading || "Blog image"}
            className="h-auto w-full rounded-2xl object-cover"
          />

          <div className="mt-8">
            <p
              className="whitespace-pre-line text-sm leading-8 md:text-[15px] md:leading-9"
              style={{ color: descriptionColor }}
            >
              {subblog.description}
            </p>
          </div>
        </div>

        <aside className="lg:sticky lg:top-24">
          <h2
            className="mb-4 text-lg font-semibold md:text-xl"
            style={{ color: headingColor }}
          >
            Related Blogs
          </h2>

          <div className="space-y-4">
            {subblog.relatedblog.map((blog: any, index: number) => (
              <article
                key={index}
                className="overflow-hidden rounded-2xl border border-white/10 bg-cover bg-center p-3 shadow-lg"
                style={{
                  backgroundImage: `url("${blogPageBg}")`,
                }}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-[90px] w-[110px] rounded-xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#4C8C74]">
                      {blog.category}
                    </p>
                    <h3 className="mt-1 line-clamp-2 text-sm font-medium text-[#d49c22]">
                      {blog.title}
                    </h3>
                    <a
                      className="mt-2 inline-flex items-center gap-2 text-sm font-light text-[#AAAAAA] transition hover:text-white"
                      href={`/blogs/${blog.slug}`}
                    >
                      <BsArrowUpRightCircle className="h-4 w-4 text-[#4C8C74]" />
                      <span>Read More</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BlogBody;
