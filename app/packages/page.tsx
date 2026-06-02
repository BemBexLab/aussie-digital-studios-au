import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import SectionFallback from "@/components/SectionFallback";
import LazySection from "@/components/LazySection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Packages",
  description:
    "Review Aussie Digital Studios packages for branding, web design, and digital services built to suit different business stages and budgets.",
  path: "/packages",
});

const PricingPlan = dynamic(() => import("../Home/components/PricingPlan"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});
const BrandLevelUp = dynamic(() => import("../Home/components/BrandLevelUp"), {
  loading: () => <SectionFallback heightClassName="min-h-72" />,
});

const PackagePage = () => {
  return (
    <div>
      <Hero H="PACKAGES" />
      {/* <Image
        src="/Geometric_Shape_Silver.webp"
        alt="Portfolio Background"
        className="absolute w-[120px] translate-y-20 translate-x-80 h-[140px] z-30"
        width={1920}
        height={1080}
      /> */}
      <LazySection heightClassName="min-h-96">
        <PricingPlan />
      </LazySection>
      <LazySection heightClassName="min-h-72">
        <BrandLevelUp />
      </LazySection>
      <div className="relative">
        {/* <img
          src="/Geometric_Shape_Silver.webp"
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
