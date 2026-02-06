import Image from "next/image";
import Hero from "@/components/Hero";
import ProjectCardGrid from "./components/ProjectCards";
import PortfolioSection from "../Home/components/PortfolioSection";

const PortfolioPage = () => {
  return (
    <div>
      <Hero H="portfolio" />
      {/* <PortfolioSection /> */}
      {/* <div className="flex justify-end">
        <img
          src="/Geometric_Shape_Silver.png"
          alt="Decorative Image"
          width={100}
          height={100}
          className="relative z-10 bottom-[-103px] right-0 md:block"
        />
      </div> */}
      <PortfolioSection />
    </div>
  );
};

export default PortfolioPage;
