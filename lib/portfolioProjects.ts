const PORTFOLIO_API_URL = "https://projects-api-bembexlab.vercel.app/api/images/";

export const PORTFOLIO_API_ORIGIN = "https://projects-api-bembexlab.vercel.app";

type PortfolioApiResponse = {
  projects?: RawPortfolioProject[];
};

type RawPortfolioProject = {
  id: string;
  href_url?: string;
  category?: string;
  subcategory?: string;
  alt?: string;
  description?: string;
  cover_image_url?: string;
  images?: Array<{
    id: string;
    image_url?: string;
    filename?: string;
    content_type?: string;
    size?: number;
  }>;
};

export interface PortfolioProjectPost {
  id: string;
  slug: string;
  title: { rendered: string };
  hrefUrl?: string;
  acf?: {
    project_image?: { url: string };
    catogary?: string | string[];
    subcategory?: string;
  };
}

const CATEGORY_LABELS: Record<string, string> = {
  branding: "BRANDING",
  illustration: "ILLUSTRATION",
  logo: "LOGO DESIGN",
  print: "PRINT",
  "website development & design": "WEB DEVELOPMENT",
};

const WEB_SUBCATEGORY_LABELS: Record<string, string> = {
  react: "REACT",
  laravel: "LARAVEL",
  wordpress: "WORDPRESS",
  wix: "WIX",
  shopify: "SHOPIFY",
};
const RANDOM_WEB_SUBCATEGORIES = [
  "REACT",
  "LARAVEL",
  "WORDPRESS",
  "WIX",
  "SHOPIFY",
] as const;

const normalizeKey = (value?: string) => value?.trim().toLowerCase() || "";

function assignWebSubcategory(projectId: string) {
  let hash = 0;

  for (const char of projectId) {
    hash = (hash * 31 + char.charCodeAt(0)) >>> 0;
  }

  return RANDOM_WEB_SUBCATEGORIES[hash % RANDOM_WEB_SUBCATEGORIES.length];
}

function buildProjectTitle(
  project: RawPortfolioProject,
  categoryLabel: string,
  index: number,
) {
  const title = project.alt?.trim() || project.description?.trim();

  if (title) {
    return title.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
  }

  return `${categoryLabel} ${index + 1}`;
}

function normalizePortfolioProject(
  project: RawPortfolioProject,
  index: number,
): PortfolioProjectPost | null {
  const categoryKey = normalizeKey(project.category);
  const categoryLabel =
    CATEGORY_LABELS[categoryKey] ||
    project.category?.trim().toUpperCase();
  const normalizedSubcategory =
    categoryKey === "website development & design"
      ? assignWebSubcategory(project.id)
      : WEB_SUBCATEGORY_LABELS[normalizeKey(project.subcategory)] ||
        project.subcategory?.trim().toUpperCase() ||
        undefined;
  const normalizedCategories =
    categoryKey === "website development & design"
      ? ["WEB DEVELOPMENT", "FIGMA DESIGN"]
      : categoryLabel;
  const imageUrl = project.cover_image_url || project.images?.[0]?.image_url;

  if (!project.id || !categoryLabel || !imageUrl) {
    return null;
  }

  return {
    id: project.id,
    slug: project.id,
    title: {
      rendered: buildProjectTitle(project, categoryLabel, index),
    },
    hrefUrl: project.href_url?.trim() || "",
    acf: {
      project_image: { url: imageUrl },
      catogary: normalizedCategories,
      subcategory: normalizedSubcategory,
    },
  };
}

export async function getPortfolioProjects(): Promise<PortfolioProjectPost[]> {
  const res = await fetch(PORTFOLIO_API_URL, {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch portfolio projects: ${res.status}`);
  }

  const data = (await res.json()) as PortfolioApiResponse;

  return (data.projects || [])
    .map((project, index) => normalizePortfolioProject(project, index))
    .filter((project): project is PortfolioProjectPost => project !== null);
}
