import type { Metadata } from "next";

export const SITE_NAME = "Aussie Digital Studios";
export const SITE_URL = "https://www.aussiedigitalstudios.com";
export const DEFAULT_DESCRIPTION =
  "Aussie Digital Studios delivers web design, branding, SEO, paid media, content, and digital growth services for businesses across Australia.";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({
  title,
  description,
  path,
}: MetadataInput): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
