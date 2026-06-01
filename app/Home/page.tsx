import React from "react";
import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import { getProjectPosts } from "@/lib/projectPosts";
import SectionFallback from "@/components/SectionFallback";

const AboutUs = dynamic(() => import("./components/AboutUs"), {
  loading: () => <SectionFallback heightClassName="min-h-48" />,
});
const Services = dynamic(() => import("./components/Services"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const PortfolioSection = dynamic(() => import("./components/PortfolioSection"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});
const WhyChooseUs = dynamic(() => import("./components/WhyChooseUs"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const BrandLevelUp = dynamic(() => import("./components/BrandLevelUp"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const PricingPlan = dynamic(() => import("./components/PricingPlan"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});
const CustomPlan = dynamic(() => import("./components/CustomPlan"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const Testimonials = dynamic(() =>
  import("./components/Testimonials").then((mod) => mod.Testimonials),
  {
    loading: () => <SectionFallback heightClassName="min-h-80" />,
  }
);
const ContactUs = dynamic(() => import("./components/ContactUs"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});

const HomePage = async () => {
  const initialPosts = await getProjectPosts();

  return (
    <div className="overflow-hidden relative">
      <Hero />
      <LogoSlider />
      <AboutUs />
      <Services />
      {/* <Image
        src="/Geometric_Shape_Silver.webp"
        alt="Portfolio Background"
        className="hidden md:block absolute w-[250px] translate-y-70 h-[300px] z-30"
        width={1920}
        height={1080}
      /> */}
      <PortfolioSection initialPosts={initialPosts} />
      <WhyChooseUs />
      <BrandLevelUp />
      <PricingPlan />
      <CustomPlan />
      <Testimonials />
      <ContactUs />
    </div>
  );
};

export default HomePage;
