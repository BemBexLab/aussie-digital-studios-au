import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import PricingPlan from "./components/PricingPlan";
import BrandLevelUp from "./components/BrandLevelUp";
import Hero from "@/components/Hero";

const PackagePage = () => {
  return (
    <div>
      <Hero H="PACKAGES"/>
      <PricingPlan />
      <BrandLevelUp />
      <div className="relative">
        <img
          src="/Geometric_Shape_Silver.png"
          alt="Decorative Image"
          width={150}
          height={150}
          className="left-70 -bottom-30 right-3 md:block relative z-10"
        />
      </div>
    </div>
  );
};

export default PackagePage;
