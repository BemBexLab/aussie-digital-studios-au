import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import { getProjectPosts } from "@/lib/projectPosts";
import SectionFallback from "@/components/SectionFallback";
import LazySection from "@/components/LazySection";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Browse the Aussie Digital Studios portfolio to see recent website, branding, and digital project work delivered for growing businesses.",
  path: "/portfolio",
});

const LazyPortfolioSection = dynamic(
  () => import("../Home/components/PortfolioSection"),
  {
    loading: () => <SectionFallback heightClassName="min-h-96" />,
  }
);

const PortfolioPage = async () => {
  const initialPosts = await getProjectPosts();

  return (
    <div>
      <Hero H="portfolio" />
      {/* <PortfolioSection /> */}
      {/* <div className="flex justify-end">
        <img
          src="/Geometric_Shape_Silver.webp"
          alt="Decorative Image"
          width={100}
          height={100}
          className="relative z-10 bottom-[-103px] right-0 md:block"
        />
      </div> */}
      <LazySection heightClassName="min-h-96">
        <LazyPortfolioSection initialPosts={initialPosts} />
      </LazySection>
    </div>
  );
};

export default PortfolioPage;
