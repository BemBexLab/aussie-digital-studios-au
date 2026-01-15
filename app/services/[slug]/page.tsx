import Header from "@/components/Header";
import Image from "next/image";
import { notFound } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { FiCheckCircle } from "react-icons/fi";
import Footer from "@/components/Footer";
import FAQ from "../components/FAQ";
import Cards from "../components/Cards";
import Hero from "@/components/Hero";
import WhyChoose from "../components/WhyChoose";
import Portfolio from "../components/Portfolio";

// Sample data (can also fetch from API or database)
const services = [
  {
    slug: "web-development",
    title: "Web Development",
    heading: "Web Development That Accelerates Growth",
    imageUrl: "/Services/Rectangle_52.png",
    description: `Build a powerful online presence with high-performing, visually stunning websites tailored to your business goals.\nWe design, develop, and optimize custom websites that engage visitors, boost conversions, and drive your business forward in a digital-first world.`,
    points: [
      "Custom Website Design",
      "Responsive Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "Performance Optimization",
    ],
    footnote:
      "Partner with us to create a website that not only looks great but also delivers real results for your brand.",
  },
  {
    slug: "seo",
    title: "SEO Optimization",
    imageUrl: "/Services/Rectangle_53.png",
    description: "Improve your search engine rankings...",
    points: [
      "Keyword Research",
      "On-Page SEO",
      "Link Building",
      "Technical SEO",
    ],
  },
];

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="relative w-full p-0 m-0">
      {/* Hero Section */}
      <Hero H={service.title} />

      {/* Body Section #01: Image & Description */}
      <div className="flex px-4 md:px-8 ">
        <div className="flex flex-col justify-center items-center gap-6 my-20 w-full max-w-7xl mx-auto md:flex-row">
          {/* Text Column */}
          <div className="w-full md:w-1/2 relative">
            <Image
              src="/Geometric_Shape_Silver.png"
              alt="Geometric Shape 01"
              width={100}
              height={100}
              className="absolute top-0 left-0 -translate-y-24 md:-translate-y-72 translate-x-1 md:translate-x-2 pointer-events-none w-16 h-16 md:w-auto md:h-auto"
            />
            <h2 className="text-2xl mt-5 md:text-3xl font-medium">
              {service.heading}
            </h2>
            <p className="whitespace-pre-line mt-4 text-[#AAAAAA] text-sm md:text-base">
              {service.description}
            </p>
            <ul className="mt-4 text-[#AAAAAA] text-sm md:text-base">
              {service.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 md:gap-3 mb-2"
                >
                  <FiCheckCircle className="mt-0.5 text-[#4C8C74] flex-shrink-0 text-sm md:text-base" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-[#AAAAAA] text-sm md:text-base">
              {service.footnote}
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-1/2 h-full">
            <Image
              src={service.imageUrl ?? `/Services/${slug}_image.png`}
              alt={`${service.title} Image`}
              width={900}
              height={900}
              className="w-full max-w-2xl h-auto object-cover rounded-[18px]"
            />
          </div>
        </div>
      </div>

      {/* Body Section #02 */}
      <Cards />
      <WhyChoose />

      <br className="md:hidden" />
      <br className="md:hidden" />
      <br className="md:hidden" />

      {/* Body Section #03 (FAQs) */}
      <Portfolio />
      <FAQ />
    </div>
  );
}
