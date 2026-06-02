import type { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import { services } from "./[slug]/data";
import SectionFallback from "@/components/SectionFallback";
import LazySection from "@/components/LazySection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description:
    "Explore Aussie Digital Studios services including web design, development, branding, SEO, paid advertising, social media, and digital strategy.",
  path: "/services",
});

const WhyChoose = dynamic(() => import("./components/WhyChoose"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const Testimonials = dynamic(
  () => import("../Home/components/Testimonials").then((mod) => mod.Testimonials),
  {
    loading: () => <SectionFallback heightClassName="min-h-80" />,
  }
);
const CustomPlan = dynamic(() => import("../Home/components/CustomPlan"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const ContactUs = dynamic(() => import("./components/ContactUs"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const MainServices = dynamic(() => import("./components/MainServices"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});

const servicesCustomPlanData = {
  rightContent: (
    <>
      <h3 className="text-2xl text-white mt-3">What&apos;s Typically Included</h3>
      <p className="mt-2">Depending on what we agree on, your project might include:</p>
      <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Custom logo design, primary mark plus variations</li>
        <li>Full colour palette and typography system</li>
        <li>Brand guide or complete playbook</li>
        <li>Business card and stationery design</li>
        <li>Social media profile branding</li>
        <li>Motion graphics and brand animations</li>
        <li>All source files and full IP ownership</li>
      </ul>
    </>
  ),
};

const ServicePage = () => {
  return (
    <section>
      <Hero H="Our Services" />
      <LazySection heightClassName="min-h-72">
        <WhyChoose data={services[0]?.whyChooseData} />
      </LazySection>
      <LazySection heightClassName="min-h-96">
        <MainServices />
      </LazySection>
      <LazySection heightClassName="min-h-72">
        <CustomPlan data={servicesCustomPlanData} />
      </LazySection>
      <LazySection heightClassName="min-h-80">
        <Testimonials />
      </LazySection>
      <LazySection heightClassName="min-h-72">
        <ContactUs data={services[0]?.contactData} />
      </LazySection>
    </section>
  );
};

export default ServicePage;
