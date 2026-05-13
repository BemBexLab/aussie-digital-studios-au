import React from "react";
import About from "./components/About";
import Values from "./components/Values";
import BrandLevelUp from "../Home/components/BrandLevelUp";
import Mission from "./components/Mission";
import Hero from "@/components/Hero";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero H="ABOUT US" />
      <About />
      <Values />
      {/* <div className="relative">
        <Image
          src="/Geometric_Shape_Silver.webp"
          alt="Decorative Image"
          width={150}
          height={150}
          className="left-50 -bottom-17 right-3 md:block absolute z-10"
        />
      </div> */}
      <BrandLevelUp />
      <Mission />
    </div>
  );
};

export default AboutPage;
