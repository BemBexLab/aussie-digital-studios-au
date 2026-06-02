import type { Metadata } from "next";
import React from 'react'
import dynamic from "next/dynamic";
import Hero from '@/components/Hero'
import SectionFallback from "@/components/SectionFallback";
import LazySection from "@/components/LazySection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Careers",
  description:
    "Explore career opportunities at Aussie Digital Studios and learn how to join our team across design, development, and digital marketing.",
  path: "/career",
});

const JobPosting = dynamic(() => import("./components/JobPosting"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});

const CareerPage = () => {
  return (
    <div>
        <Hero H='career'/>
        <LazySection heightClassName="min-h-96">
          <JobPosting />
        </LazySection>
    </div>
  )
}

export default CareerPage
