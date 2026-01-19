import Hero from "@/components/Hero";
import React from "react";
import ServiceBody from "../../components/ServiceBody";
import Cards from "../../components/Cards";
import WhyChoose from "../../components/WhyChoose";
import OurProcess from "../../components/OurProcess";
import Portfolio from "../../components/Portfolio";
import PricingPlan from "../../components/PricingPlan";
import CustomPlan from "../../components/CustomPlan";
import { Testimonials } from "../../components/Testimonials";
import FAQ from "../../components/FAQ";
import ContactUs from "../../components/ContactUs";
import EasyExperience from "../../components/EasyExperience";
import EasyExperienceSm from "../../components/EasyExperienceSm";

// Sample data (can also fetch from API or database)
const services = [
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Development",
    heading: "What Is a Custom Website",
    imageUrl: "/Services/Rectangle_52.png",
    description: `Your website is more than just an online presence. It’s where people discover your brand, learn what you offer and decide to take action. Template sites can only take you so far. Our custom website service is built from the ground up to match your goals, your audience and your brand identity.
Whether you’re launching something new, refreshing your brand or scaling your business, we design and build websites that are clean, fast and built to perform. Every site is thoughtfully planned, carefully designed and optimised for real results. No shortcuts, no guesswork, just a website designed to grow with your business.`,
    points: [
      "Custom Website Design",
      "Responsive Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "Performance Optimization",
    ],
    processCardData: [
      {
        image: "/Services/01.svg",
        heading: "Plan & Strategize Your Website",
        paragraph:
          "We assess your business goals, audience insights, and visual direction to build a clear strategy. This includes mapping conversion pathways, defining content structure, and planning functionality to ensure your custom site supports growth and performance.",
      },
      {
        image: "/Services/02.svg",
        heading: "Design & Develop a Fully Custom Website",
        paragraph:
          "Our team designs and builds a from-scratch website with responsive layouts, optimized speed, and conversion-driven UX. Every section—from branding to features—is crafted to engage visitors, boost credibility, and deliver measurable results.",
      },
      {
        image: "/Services/03.svg",
        heading: "Launch, Optimize & Maintain Long-Term",
        paragraph:
          "We launch your site, track real-time performance, and continuously refine for speed, engagement, and search visibility. Ongoing updates, maintenance, and support keep your website secure, scalable, and aligned with business evolution.",
      },
    ],
    pricingCardData: [
      {
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
        includes: [
          "2 Custom Logo Design Concepts",
          "1 Dedicated Designer",
          "4 REVISIONS",
          "48 to 72 hours TAT",
          "100% Unique Design Guarantee",
          "100% Satisfaction Guarantee",
          "100% Ownership Rights",
          "100% Money Back Guarantee",
        ],
      },
      {
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
        includes: [
          "5 Custom Logo Design Concepts",
          "By 2 Designers",
          "UNLIMITED Revisions",
          "48 to 72 hours TAT",
          "100% Unique Design Guarantee",
          "100% Satisfaction Guarantee",
          "100% Ownership Rights",
          "100% Money Back Guarantee",
        ],
      },
      {
        title: "Basic Website Package",
        price: "$229",
        discountedFrom: "$499",
        includes: [
          "UNLIMITED Logo Design Concepts",
          "By 4 Designers",
          "UNLIMITED Revisions",
          "Stationary Design (Business Card, Letterhead, Envelope)",
          "48 to 72 hours TAT",
          "FREE MS Word Letterhead",
          "All Final Files Format (AI, PSD, EPS, PNG, GIF, jpeg, PDF)",
        ],
      },
    ],
    faqData: [
      {
        question: "How to use this component?",
        answer:
          "Import the FAQ component and place it in your page. Click any question to expand or collapse the answer.",
      },
      {
        question: "Are there any other components available?",
        answer:
          "Yes — check the Components section of the repo or documentation for more reusable UI pieces.",
      },
      {
        question: "Are components responsive?",
        answer:
          "Yes, components are designed to be responsive across screen sizes.",
      },
      {
        question: "Can I customize the components?",
        answer:
          "Yes, pass props or override styles to adapt components to your design.",
      },
    ],
    portfolioData: [
      { id: "1", src: "/services/web_01.svg", translateY: "-translate-y-25" },
      { id: "2", src: "/services/web_02.svg", translateY: "" },
      { id: "3", src: "/services/web_02.svg", translateY: "-translate-y-25" },
      { id: "4", src: "/services/web_03.svg", translateY: "" },
      { id: "5", src: "/services/web_04.svg", translateY: "-translate-y-25" },
      { id: "6", src: "/services/web_05.svg", translateY: "" },
      { id: "7", src: "/services/web_06.svg", translateY: "-translate-y-25" },
      { id: "8", src: "/services/web_07.svg", translateY: "" },
    ],
    footnote:
      "Partner with us to create a website that not only looks great but also delivers real results for your brand.",
  },
];

interface ServicePageProps {
  params: Promise<{
    slug: string;
    id: string;
  }>;
}

const ServiceInnerPage = async ({ params }: ServicePageProps) => {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  
  if (!service) {
    return <div>Service not found</div>;
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
