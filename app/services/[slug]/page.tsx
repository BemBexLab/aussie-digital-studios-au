import Header from "@/components/Header";
import Image from "next/image";
import { notFound } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { FiCheckCircle } from "react-icons/fi";
import Footer from "@/components/Footer";
import FAQ from "../components/FAQ";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Portfolio from "../components/Portfolio";
import { Testimonials } from "../components/Testimonials";
import ContactUs from "../components/ContactUs";
import PricingPlan from "../components/PricingPlan";
import CustomPlan from "../../Home/components/CustomPlan";
import ServiceBody from "../components/ServiceBody";
import OurProcess from "../components/OurProcess";
import { services } from "./data";

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
      <ServiceBody service={service} />
      <Cards service={service} />
      <WhyChoose />
      <OurProcess service={service} />
      <Portfolio service={service} />
      <PricingPlan service={service} />
      <CustomPlan />
      <Testimonials />
      <FAQ service={service} />
      <ContactUs />
    </div>
  );
}
