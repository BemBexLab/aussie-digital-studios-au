import React from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import SectionFallback from "@/components/SectionFallback";
import LazySection from "@/components/LazySection";

const About = dynamic(() => import("./components/About"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const Values = dynamic(() => import("./components/Values"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const BrandLevelUp = dynamic(() => import("../Home/components/BrandLevelUp"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});
const Mission = dynamic(() => import("./components/Mission"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero H="ABOUT US" />
      <LazySection heightClassName="min-h-72">
        <About />
      </LazySection>
      <LazySection heightClassName="min-h-72">
        <Values />
      </LazySection>
      {/* <div className="relative">
        <Image
          src="/Geometric_Shape_Silver.webp"
          alt="Decorative Image"
          width={150}
          height={150}
          className="left-50 -bottom-17 right-3 md:block absolute z-10"
        />
      </div> */}
      <LazySection heightClassName="min-h-72">
        <BrandLevelUp />
      </LazySection>
      <LazySection heightClassName="min-h-72">
        <Mission />
      </LazySection>
    </div>
  );
};

export default AboutPage;
