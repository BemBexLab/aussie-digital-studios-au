import type { Metadata } from "next";
import React from 'react'
import dynamic from "next/dynamic";
import Hero from '../components/Hero'
import { blogPosts } from '../data'
import { notFound } from 'next/navigation'
import SectionFallback from "@/components/SectionFallback";
import LazySection from "@/components/LazySection";
import { buildMetadata } from "@/lib/seo";

const BlogBody = dynamic(() => import("../components/BlogBody"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});

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

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;

  for (const post of blogPosts) {
    const subblog = post.subblog?.find((sub) => sub.slug === slug);
    if (subblog) {
      return buildMetadata({
        title: subblog.heading || post.title,
        description: post.description,
        path: `/blogs/${slug}`,
      });
    }
  }

  return buildMetadata({
    title: "Blogs",
    description:
      "Read insights, ideas, and updates from Aussie Digital Studios on web design, branding, marketing, and digital growth.",
    path: `/blogs/${slug}`,
  });
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
      <Hero
        H={subblogData.heading || blogPost.title}
        B={subblogData.herotext || blogPost.description}
      />
      <LazySection heightClassName="min-h-96">
        <BlogBody subblog={subblogData} />
      </LazySection>
    </section>
  )
}

export default BlogPage
