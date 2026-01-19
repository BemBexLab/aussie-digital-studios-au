import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import PortfolioSection from "./components/PortfolioSection";
import Hero from "@/components/Hero";

const PortfolioPage = () => {
  return (
    <div>
      <Hero H="portfolio" />
      <PortfolioSection />
      <div className="flex justify-end">
        <img
          src="/Geometric_Shape_Silver.png"
          alt="Decorative Image"
          width={100}
          height={100}
          className="relative z-10 bottom-[-103px] right-0 md:block"
        />
      </div>
    </div>
  );
};

export default PortfolioPage;
