import type { Metadata } from "next";
import React from 'react'
import dynamic from "next/dynamic";
import Hero from '@/components/Hero'
import SectionFallback from "@/components/SectionFallback";
import LazySection from "@/components/LazySection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with Aussie Digital Studios to discuss your website, branding, SEO, content, or digital marketing project.",
  path: "/contact",
});

const Contact = dynamic(() => import("./components/Contact"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});


const ContactPage = () => {
  return (
    <div>
      <Hero H="CONTACT US" />
      <LazySection heightClassName="min-h-96">
        <Contact />
      </LazySection>
    </div>
)
}
export default ContactPage
