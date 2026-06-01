import type { ReactNode } from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import Hero from "../components/Hero";
import ServiceBody from "../components/ServiceBody";
import { services } from "./data";
import SectionFallback from "@/components/SectionFallback";

const Cards = dynamic(() => import("../components/Cards"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});
const WhyChoose = dynamic(() => import("../components/WhyChoose"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const SocialAuditCta2 = dynamic(() => import("../components/SocialAuditCta2"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const OurProcess = dynamic(() => import("../components/OurProcess"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const Portfolio = dynamic(() => import("../components/Portfolio"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});
const PricingPlan = dynamic(() => import("../components/PricingPlan"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});
const CustomPlan = dynamic(() => import("../../Home/components/CustomPlan"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const Testimonials = dynamic(() =>
  import("../components/Testimonials").then((mod) => mod.Testimonials),
  {
    loading: () => <SectionFallback heightClassName="min-h-80" />,
  }
);
const FAQ = dynamic(() => import("../components/FAQ"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const ContactUs = dynamic(() => import("../components/ContactUs"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="relative w-full p-0 m-0">
      <Hero H={service.title} />
      <ServiceBody
        data={service.serviceBodyData ?? []}
        footnote={"footnote" in service ? (service.footnote as ReactNode) : undefined}
      />
      <Cards service={service} />
      <WhyChoose data={service.whyChooseData} />
      {"ctaData" in service && service.ctaData ? (
        <SocialAuditCta2 data={service.ctaData} />
      ) : "ctaDiv" in service ? (
        (service.ctaDiv as ReactNode)
      ) : null}
      <OurProcess service={service} />
      <Portfolio service={service} />
      <PricingPlan service={service} />
      <CustomPlan data={service.customplanData} />
      <Testimonials />
      <FAQ service={service} />
      <ContactUs data={service.contactData} />
    </div>
  );
}
