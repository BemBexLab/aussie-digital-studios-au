import React from 'react'
import Hero from '@/components/Hero'
import HeroMobile from '@/components/HeroMobile'
import BlogPosts from './components/BlogPosts'
import BlogPostsMobile from './components/BlogPostsMobile'


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