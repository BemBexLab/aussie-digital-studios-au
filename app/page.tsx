import type { Metadata } from "next";
import HomePage from "./Home/page";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Home",
  description:
    "Aussie Digital Studios helps brands grow with web design, development, branding, digital marketing, and performance-focused creative services.",
  path: "/",
});

export default function Home() {
  return (
    <HomePage />
  );
}
