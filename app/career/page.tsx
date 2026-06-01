import React from 'react'
import dynamic from "next/dynamic";
import Hero from '@/components/Hero'
import SectionFallback from "@/components/SectionFallback";

const JobPosting = dynamic(() => import("./components/JobPosting"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});

const CareerPage = () => {
  return (
    <div>
        <Hero H='career'/>
        <JobPosting />
    </div>
  )
}

export default CareerPage
