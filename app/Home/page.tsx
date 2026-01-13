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

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <div className="relative hidden md:block">
        <Image
          src="/Geometric_Shape_Silver.png"
          alt="Decorative Image"
          width={200}
          height={200}
          className="left-13 -bottom-25 right-3 md:block relative z-10"
        />
      </div>
      <br />
      <Services />
      <br />
      <PortfolioSection />
      <br />
      <BrandLevelUp />
      <div className="flex justify-end hidden md:flex">
        <Image
          src="/Geometric_Shape_Silver.png"
          alt="Decorative Image"
          width={200}
          height={200}
          className="relative z-10 bottom-35 right-0 md:block"
        />
      </div>
      <PricingPlan />
      <Testimonials />
    </div>
  );
};

export default HomePage;
