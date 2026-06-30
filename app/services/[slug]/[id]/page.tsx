import type { Metadata } from "next";
import type { ComponentProps, ReactNode } from "react";
import Hero from "../../components/Hero";
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
import { notFound } from "next/navigation";
import { services } from "../data";
import SocialAuditCta from "../../components/SocialAuditCta";
import SocialAuditCta2 from "../../components/SocialAuditCta2";
import { buildMetadata } from "@/lib/seo";

interface ServicePageProps {
  params: Promise<{
    slug: string;
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug, id } = await params;

  const parentService = services.find((service) => service.slug === slug);
  const service = parentService?.subcategory?.find(
    (subcategory) => subcategory.slug === id
  );

  if (!service) {
    return buildMetadata({
      title: "Service Details",
      description:
        "Explore detailed digital service solutions from Aussie Digital Studios.",
      path: `/services/${slug}/${id}`,
    });
  }

  return buildMetadata({
    title: service.title,
    description: `Learn more about ${service.title} from Aussie Digital Studios and how this service supports business growth, visibility, and conversion.`,
    path: `/services/${slug}/${id}`,
  });
}

const ServiceInnerPage = async ({ params }: ServicePageProps) => {
  const { slug, id } = await params;

  const parentService = services.find((s) => s.slug === slug);

  if (!parentService) {
    notFound();
  }

  const service = parentService.subcategory?.find((subcategory) => subcategory.slug === id);

  if (!service) {
    notFound();
  }

  const serviceBodyData =
    "serviceBodyData" in service && Array.isArray(service.serviceBodyData)
      ? service.serviceBodyData
      : "imageUrl" in service &&
          typeof service.imageUrl === "string" &&
          "description" in service &&
          service.description
        ? [
            {
              heading:
                "heading" in service && typeof service.heading === "string"
                  ? service.heading
                  : undefined,
              imageUrl: service.imageUrl,
              description: service.description as ReactNode,
              points:
                "points" in service && Array.isArray(service.points)
                  ? service.points
                  : undefined,
            },
          ]
        : [];
  const serviceBodyData2 =
    "serviceBodyData2" in service && Array.isArray(service.serviceBodyData2)
      ? service.serviceBodyData2
      : [];

  const whyChooseData = ("whyChooseData" in service
    ? service.whyChooseData
    : undefined) as ComponentProps<typeof WhyChoose>["data"];
  const easyExperienceSectionData =
    "easyExperienceData" in service ? service.easyExperienceData : null;
  const contactData = ("contactData" in service
    ? service.contactData
    : undefined) as ComponentProps<typeof ContactUs>["data"];

  return (
    <section className="overflow-x-hidden overflow-y-visible">
      <Hero H={service.title} />
      <ServiceBody
        data={serviceBodyData}
        footnote={
          "footnote" in service
            ? (service.footnote as ReactNode)
            : undefined
        }
      />
      {"strategicCardData" in service && service.strategicCardData?.length ? (
        <Cards service={service} />
      ) : null}
      {whyChooseData ? <WhyChoose data={whyChooseData} /> : null}
      {"processCardData" in service && service.processCardData?.length ? (
        <OurProcess service={service} />
      ) : null}
      {"pricingCardData" in service && service.pricingCardData?.length ? (
        <PricingPlan service={service} />
      ) : null}
      {"customplanData" in service && service.customplanData ? (
        <CustomPlan data={service.customplanData} />
      ) : null}
      {easyExperienceSectionData ? (
        <EasyExperience sectionData={easyExperienceSectionData} />
      ) : null}
      {"ctaData" in service && service.ctaData ? (
        <SocialAuditCta2 data={service.ctaData} />
      ) : "ctaDiv" in service ? (
        (service.ctaDiv as ReactNode)
      ) : null}
      <ServiceBody
        data={serviceBodyData2}
        footnote={
          "footnote" in service
            ? (service.footnote as ReactNode)
            : undefined
        }
      />
      {"portfolioData" in service && service.portfolioData?.length ? (
        <Portfolio service={service} />
      ) : null}
      {"faqData" in service && service.faqData?.length ? (
        <FAQ service={service} />
      ) : null}
      <Testimonials />
      {contactData ? <ContactUs data={contactData} /> : null}
    </section>
  );
};

export default ServiceInnerPage;
