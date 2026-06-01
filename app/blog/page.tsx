import React from 'react'
import dynamic from "next/dynamic";
import Hero from '@/components/Hero'
import HeroMobile from '@/components/HeroMobile'
import SectionFallback from "@/components/SectionFallback";

const BlogPosts = dynamic(() => import("./components/BlogPosts"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});
const BlogPostsMobile = dynamic(() => import("./components/BlogPostsMobile"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});


const BlogPage = () => {
  return (
    <section>
        <Hero H={"Blogs"} />
        <HeroMobile H={"Blogs"} />
        <BlogPosts />
        <BlogPostsMobile />
    </section>
  )
}

export default BlogPage
