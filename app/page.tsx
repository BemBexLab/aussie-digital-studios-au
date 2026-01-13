import Header from "@/components/Header";
import Image from "next/image";
import Hero from "./Home/components/Hero_old";
import AboutUs from "./Home/components/AboutUs";
import Services from "./Home/components/Services";
import PortfolioSection from "./Home/components/PortfolioSection";
import BrandLevelUp from "./Home/components/BrandLevelUp";
import PricingPlan from "./Home/components/PricingPlan";
import { Testimonials } from "./Home/components/Testimonials";
import Footer from "@/components/Footer";
import HomePage from "./Home/page";

export default function Home() {
  return (
    <div >
      <HomePage />
    </div>
  );
}
