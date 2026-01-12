import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Values from "./components/Values";
import BrandLevelUp from "./components/BrandLevelUp";
import Mission from "./components/Mission";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Values />
      <div className="relative">
        <Image
          src="/Geometric_Shape_Silver.png"
          alt="Decorative Image"
          width={150}
          height={150}
          className="left-13 -bottom-17 right-3 md:block relative z-10"
        />
      </div>
      <BrandLevelUp />
      <Mission />
      <Footer />
    </div>
  );
};

export default AboutPage;
