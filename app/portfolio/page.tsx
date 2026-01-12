import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import Hero from "./components/Hero";
import PortfolioSection from "./components/PortfolioSection";

const PortfolioPage = () => {
  return (
    <div>
      <Header />
      <Hero />
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
      <Footer />
    </div>
  );
};

export default PortfolioPage;
