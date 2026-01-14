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

const HomePage = () => {
  return (
    <div>
      <Hero />
      <LogoSlider />
      <AboutUs />
      <Image
        src="/Geometric_Shape_Silver.png"
        alt="Decorative Image"
        width={200}
        height={200}
        className="left-13 hidden -bottom-180 right-3 md:block absolute z-50"
      />
      <Services />
      <PortfolioSection />
      <WhyChooseUs />
      <BrandLevelUp />
      <div className="flex justify-end hidden md:flex">
        <Image
          src="/Geometric_Shape_Silver.png"
          alt="Decorative Image"
          width={200}
          height={200}
          className="absolute z-10 bottom-35 right-0 md:block"
        />
      </div>
      <PricingPlan />
      <CustomPlan />
      <Testimonials />
    </div>
  );
};

export default HomePage;
