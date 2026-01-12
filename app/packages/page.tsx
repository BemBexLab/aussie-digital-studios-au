import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Hero from "./components/Hero";
import PricingPlan from "./components/PricingPlan";
import BrandLevelUp from "./components/BrandLevelUp";

const PackagePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <PricingPlan />
      <BrandLevelUp />
      <div className="w-full h-5"></div>
      <div className="relative">
        <img
          src="/Geometric_Shape_Silver.png"
          alt="Decorative Image"
          width={150}
          height={150}
          className="left-70 -bottom-30 right-3 md:block relative z-10"
        />
      </div>
      <Footer />
    </div>
  );
};

export default PackagePage;
