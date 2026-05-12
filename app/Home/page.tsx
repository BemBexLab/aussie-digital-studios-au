import React from "react";
import dynamic from "next/dynamic";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import { getProjectPosts } from "@/lib/projectPosts";

const PortfolioSection = dynamic(() => import("./components/PortfolioSection"));
const WhyChooseUs = dynamic(() => import("./components/WhyChooseUs"));
const BrandLevelUp = dynamic(() => import("./components/BrandLevelUp"));
const PricingPlan = dynamic(() => import("./components/PricingPlan"));
const CustomPlan = dynamic(() => import("./components/CustomPlan"));
const Testimonials = dynamic(() =>
  import("./components/Testimonials").then((mod) => mod.Testimonials)
);
const ContactUs = dynamic(() => import("./components/ContactUs"));

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
