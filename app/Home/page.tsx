import Header from "@/components/Header";
import React from "react";
// import Hero from "./components/Hero_old";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import PortfolioSection from "./components/PortfolioSection";
import PricingPlan from "./components/PricingPlan";
import BrandLevelUp from "./components/BrandLevelUp";
import { Testimonials } from "./components/Testimonials";
import Footer from "@/components/Footer";

import Image from "next/image";
import Hero from "./components/Hero";
import LogoSlider from "./components/LogoSlider";
import WhyChooseUs from "./components/WhyChooseUs";
import CustomPlan from "./components/CustomPlan";
import ContactUs from "./components/ContactUs";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LogoSlider />
      <AboutUs />
      <Services />
      <Image
        src="/Geometric_Shape_Silver.png"
        alt="Portfolio Background"
        className="hidden md:block absolute w-[250px] translate-y-70 h-[300px] z-30"
        width={1920}
        height={1080}
      />
      <PortfolioSection />
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
