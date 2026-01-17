import React from 'react'
import Hero from '@/components/Hero'
import BlogPosts from './components/BlogPosts'

const BlogPage = () => {
  return (
    <section>
        <Hero H={"Blogs"} />
        <BlogPosts />
    </section>
  )
}

export default BlogPage