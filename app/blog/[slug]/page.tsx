import React from 'react'
import Hero from '../components/Hero'
import HeroMobile from '../components/HeroMobile'
import BlogBody from '../components/BlogBody'
import BlogBodyMobile from '../components/BlogBodyMobile'
import { blogPosts } from '../data'
import { notFound } from 'next/navigation'

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  const params: { slug: string }[] = []
  blogPosts.forEach((post) => {
    if (post.subblog && post.subblog.length > 0) {
      post.subblog.forEach((sub) => {
        params.push({ slug: sub.slug })
      })
    }
  })
  return params
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const { slug } = await params
  
  let subblogData = null
  let blogPost = null
  
  for (const post of blogPosts) {
    if (post.subblog) {
      const found = post.subblog.find((sub) => sub.slug === slug)
      if (found) {
        subblogData = found
        blogPost = post
        break
      }
    }
  }

  if (!subblogData || !blogPost) {
    notFound()
  }

  return (
    <section>
      <Hero H={blogPost.title} B={blogPost.description} />
      <HeroMobile H={blogPost.title} B={blogPost.description} />
      <BlogBody subblog={subblogData} />
      <BlogBodyMobile subblog={subblogData} />
    </section>
  )
}

export default BlogPage