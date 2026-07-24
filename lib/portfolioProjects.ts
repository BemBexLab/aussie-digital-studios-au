import { unstable_cache } from "next/cache";

export const PORTFOLIO_API_ORIGIN =
  "https://projects-api-bembexlab.vercel.app";

const PORTFOLIO_API_URL = `${PORTFOLIO_API_ORIGIN}/api/images/`;

export const PORTFOLIO_REVALIDATE_SECONDS = 300;

export const PORTFOLIO_MAIN_CATEGORIES = [
  "WEB DEVELOPMENT",
  "LOGO DESIGN",
  "BRANDING",
  "FIGMA DESIGN",
  "ILLUSTRATION",
  "PRINT",
] as const;

export const PORTFOLIO_WEBSITE_SUBCATEGORIES = [
  "REACT",
  "LARAVEL",
  "WORDPRESS",
  "WIX",
  "SHOPIFY",
] as const;

export type PortfolioMainCategory = (typeof PORTFOLIO_MAIN_CATEGORIES)[number];
export type PortfolioWebsiteSubcategory =
  (typeof PORTFOLIO_WEBSITE_SUBCATEGORIES)[number];

type RawPortfolioProject = {
  id?: string;
  href_url?: string;
  category?: string;
  subcategory?: string;
  alt?: string;
  description?: string;
  cover_image_url?: string;
  images?: Array<{
    image_url?: string;
  }>;
};

type RawPortfolioResponse = {
  projects?: RawPortfolioProject[];
};

export type PortfolioProjectPost = {
  id: string;
  slug: string;
  href_url: string;
  title: { rendered: string };
  alt: string;
  description: string;
  isWebsiteProject: boolean;
  acf: {
    project_image: { url: string };
    catogary: PortfolioMainCategory[];
    subcategory: PortfolioWebsiteSubcategory | "";
  };
};

function cleanString(value?: string | null): string {
  if (!value) {
    return "";
  }

  return String(value)
    .replace(/[\x00-\x1F\x7F-\x9F]/g, "")
    .trim();
}

function normalizeUrl(value?: string | null): string {
  const cleaned = cleanString(value);

  if (!cleaned) {
    return "";
  }

  if (cleaned.startsWith("//")) {
    return `https:${cleaned}`;
  }

  if (cleaned.startsWith("/")) {
    return new URL(cleaned, PORTFOLIO_API_ORIGIN).toString();
  }

  if (/^https?:\/\//i.test(cleaned)) {
    return cleaned.replace(/^http:\/\//i, "https://");
  }

  return `https://${cleaned}`;
}

function normalizeCategories(category?: string): PortfolioMainCategory[] {
  switch (cleanString(category)) {
    case "Website Development & Design":
      return ["WEB DEVELOPMENT", "FIGMA DESIGN"];
    case "Logo":
      return ["LOGO DESIGN"];
    case "Branding":
      return ["BRANDING"];
    case "Illustration":
      return ["ILLUSTRATION"];
    case "Print":
      return ["PRINT"];
    default:
      return [];
  }
}

function getStableWebsiteSubcategory(
  projectId: string,
): PortfolioWebsiteSubcategory {
  const hash = Array.from(projectId).reduce((acc, char) => {
    return (acc * 31 + char.charCodeAt(0)) >>> 0;
  }, 7);

  return PORTFOLIO_WEBSITE_SUBCATEGORIES[
    hash % PORTFOLIO_WEBSITE_SUBCATEGORIES.length
  ];
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function normalizeTitle(
  project: RawPortfolioProject,
  fallbackId: string,
): string {
  const title = cleanString(project.alt) || cleanString(project.description);

  if (title) {
    return title;
  }

  const category = cleanString(project.category);
  return category ? `${category} ${fallbackId.slice(-6)}` : `Project ${fallbackId}`;
}

function normalizePortfolioProject(
  project: RawPortfolioProject,
): PortfolioProjectPost | null {
  const projectId = cleanString(project.id);
  const categories = normalizeCategories(project.category);
  const imageUrl = normalizeUrl(
    project.cover_image_url || project.images?.[0]?.image_url,
  );

  if (!projectId || categories.length === 0 || !imageUrl) {
    return null;
  }

  const title = normalizeTitle(project, projectId);
  const isWebsiteProject =
    cleanString(project.category) === "Website Development & Design";
  const subcategory = isWebsiteProject
    ? getStableWebsiteSubcategory(projectId)
    : "";

  return {
    id: projectId,
    slug: slugify(`${title}-${projectId}`),
    href_url: normalizeUrl(project.href_url),
    title: { rendered: title },
    alt: cleanString(project.alt) || title,
    description: cleanString(project.description),
    isWebsiteProject,
    acf: {
      project_image: {
        url: imageUrl,
      },
      catogary: categories,
      subcategory,
    },
  };
}

const getPortfolioProjectsCached = unstable_cache(
  async (): Promise<PortfolioProjectPost[]> => {
    const response = await fetch(PORTFOLIO_API_URL, {
      next: { revalidate: PORTFOLIO_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch portfolio projects: ${response.status} ${response.statusText}`,
      );
    }

    const data = (await response.json()) as RawPortfolioResponse;

    return (data.projects || [])
      .map(normalizePortfolioProject)
      .filter(
        (project): project is PortfolioProjectPost => project !== null,
      );
  },
  ["portfolio-projects"],
  { revalidate: PORTFOLIO_REVALIDATE_SECONDS },
);

export async function getPortfolioProjects(): Promise<PortfolioProjectPost[]> {
  return getPortfolioProjectsCached();
}
