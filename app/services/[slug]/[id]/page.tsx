import Hero from "../../components/Hero";
import React from "react";
import ServiceBody from "../../components/ServiceBody";
import Cards from "../../components/Cards";
import WhyChoose from "../../components/WhyChoose";
import OurProcess from "../../components/OurProcess";
import Portfolio from "../../components/Portfolio";
import PricingPlan from "../../components/PricingPlan";
import CustomPlan from "../../../Home/components/CustomPlan";
import { Testimonials } from "../../../Home/components/Testimonials";
import FAQ from "../../components/FAQ";
import ContactUs from "../../components/ContactUs";
import EasyExperience from "../../components/EasyExperience";
import EasyExperienceSm from "../../components/EasyExperienceSm";
import { services } from "../data";

interface ServicePageProps {
  params: Promise<{
    slug: string;
    id: string;
  }>;
}

const ServiceInnerPage = async ({ params }: ServicePageProps) => {
  const { slug, id } = await params;
  
  // Find the parent service by slug
  const parentService = services.find(s => s.slug === slug);
  
  if (!parentService) {
    return <div>Service not found</div>;
  }
  
  // Find the subcategory service by id within the parent's subcategory array
  const service = parentService.subcategory?.find(s => s.slug === id);
  
  if (!service) {
    return <div>Subcategory service not found</div>;
  }
  
  return (
    <section>
      <Hero H={service.title} />
      <ServiceBody service={service} />
      <OurProcess service={service} />
      <PricingPlan service={service} />
      <CustomPlan />
      <EasyExperience />
      <EasyExperienceSm />
      <Portfolio service={service} />
      <FAQ service={service} />
      <Testimonials />
      <ContactUs />
    </section>
  );
};

export default ServiceInnerPage;
