import Image from "next/image";
import PricingPlan from "./components/PricingPlan";
import BrandLevelUp from "./components/BrandLevelUp";
import Hero from "@/components/Hero";

const PackagePage = () => {
  return (
    <div>
      <Hero H="PACKAGES" />
      {/* <Image
        src="/Geometric_Shape_Silver.png"
        alt="Portfolio Background"
        className="absolute w-[120px] translate-y-20 translate-x-80 h-[140px] z-30"
        width={1920}
        height={1080}
      /> */}
      <PricingPlan />
      <BrandLevelUp />
      <div className="relative">
        {/* <img
          src="/Geometric_Shape_Silver.png"
          alt="Decorative Image"
          width={150}
          height={150}
          className="left-70 -bottom-15 right-3 md:block absolute z-10"
        /> */}
      </div>
    </div>
  );
};

export default PackagePage;
