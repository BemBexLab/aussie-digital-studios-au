import Header from "@/components/Header";
import Image from "next/image";
import { notFound } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import { FiCheckCircle } from "react-icons/fi";
import Footer from "@/components/Footer";
import FAQ from "../components/FAQ";
import Cards from "../components/Cards";

// Sample data (can also fetch from API or database)
const services = [
  // Sample API data in JSON format
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

// Utility function to slugify text
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

// Generate static paths
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Page component
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Find the service by slug
  const service = services.find((s) => s.slug === slug);

  // If service not found, return 404
  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto relative">
      {/* Header Section */}
      <Header />

      {/* Hero Section */}
      <div
        className="w-full h-100 flex items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: "url('/About/Frame_about_hero.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Clouds Video Overlay with brightness filter */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            mixBlendMode: "overlay",
            filter: "brightness(2) contrast(1.1)",
          }}
        >
          <source src="/Clouds.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="flex items-end justify-center w-full relative z-10 px-4">
          <div className="relative">
            {/* Slug Heading in the header */}
            <h2 className="text-4xl md:text-6xl lg:text-[96px] font-medium text-white">
              {service.title}
            </h2>

            {/* Green circle positioned above and to the right */}
            <div className="absolute -top-2 -right-12 md:top-0 md:-right-16 lg:top-2 lg:-right-20">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      {/* Body Section # 01 (Image & Description section) */}
      <div className="flex flex-row my-50 m-10 gap-7">
        {/* Text Column */}
        <div className="flex flex-col w-1/2 items-stretch relative">
          <Image
            src="/Geometric_Shape_Silver.png"
            alt="Geometric Shape 01"
            width={160}
            height={160}
            className="absolute top-0 left-0 translate-x-2 -translate-y-72 pointer-events-none"
          />
          <h2 className="text-3xl font-medium">{service.heading}</h2>
          <p className="whitespace-pre-line mt-4 text-[#AAAAAA]">
            {service.description}
          </p>
          <ul className="mt-4 text-[#AAAAAA]">
            {service.points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 mb-2">
                <FiCheckCircle className="mt-1 text-[#4C8C74] flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-[#AAAAAA]">{service.footnote}</div>
        </div>

        {/* Image Column */}
        <div className="w-1/2 h-full">
          <Image
            src={service.imageUrl ?? `/Services/${slug}_image.png`}
            alt={`${service.title} Image`}
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-[18px]"
          />
        </div>
      </div>

      {/* Body Section # 02 */}
      <Cards />

      <br />
      <br />
      <br />

      {/* Body Section # 03 (FAQS) */}
      <FAQ />

      {/* Fotter */}
      <Footer />
    </div>
  );
}

// Optional: Generate metadata for SEO optimization (In future)
// Note: For anyone whose reading this, ensure to uncomment the below code if you wish to use it.
// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const service = services.find((s) => s.slug === slug);

//   if (!service) {
//     return {
//       title: "Service Not Found",
//     };
//   }

//   return {
//     title: `${service.title} | Our Services`,
//     description: service.description,
//   };
// }
