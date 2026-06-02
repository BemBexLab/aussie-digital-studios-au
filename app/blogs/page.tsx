import type { Metadata } from "next";
import React from 'react'
import dynamic from "next/dynamic";
import Hero from '@/components/Hero'
import SectionFallback from "@/components/SectionFallback";
import LazySection from "@/components/LazySection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Blogs",
  description:
    "Read insights, ideas, and updates from Aussie Digital Studios on web design, branding, marketing, and digital growth.",
  path: "/blogs",
});

const BlogPosts = dynamic(() => import("./components/BlogPosts"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});


const BlogPage = () => {
  return (
    <section>
        <Hero H={"Blogs"} />
        <LazySection heightClassName="min-h-96">
          <BlogPosts />
        </LazySection>
    </section>
  )
}

export default BlogPage
