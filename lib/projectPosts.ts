import { unstable_cache } from "next/cache";

export interface ProjectPost {
  id: number;
  slug: string;
  title: { rendered: string };
  acf?: {
    project_title?: string;
    project_image?: { url: string };
    project_url?: string;
    catogary?: string | string[];
    introduction?: string;
    genesis_of_collaboration?: string;
    conceptualization?: string;
    design_symphony?: string;
    development_overture?: string;
    launch_and_beyond?: string;
    conclusion?: string;
    logo_sub_catogary?: string | string[];
  };
}

function cleanString(str: string): string {
  if (typeof str !== "string") return str;

  return str
    .replace(/[\x07]/g, "")
    .replace(/[\x00-\x1F\x7F]/g, "")
    .replace(/[\n\r\t\v\f]/g, "");
}

function cleanObject<T>(obj: T): T {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (typeof obj === "string") {
    return cleanString(obj) as T;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => cleanObject(item)) as T;
  }

  if (typeof obj === "object") {
    const cleaned: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      cleaned[key] = cleanObject(value);
    }
    return cleaned as T;
  }

  return obj;
}

const PROJECTS_API_URL =
  "https://olive-peafowl-546702.hostingersite.com/index.php/wp-json/wp/v2/posts?per_page=100";

export const PROJECTS_REVALIDATE_SECONDS = 300;

async function fetchProjectPostsPage(page: number) {
  const separator = PROJECTS_API_URL.includes("?") ? "&" : "?";
  const res = await fetch(`${PROJECTS_API_URL}${separator}page=${page}`, {
    next: { revalidate: PROJECTS_REVALIDATE_SECONDS },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch project posts: ${res.status}`);
  }

  const posts = (await res.json()) as ProjectPost[];
  const totalPagesHeader = res.headers.get("X-WP-TotalPages");

  return {
    posts,
    totalPages: totalPagesHeader ? Number(totalPagesHeader) : page,
  };
}

const getProjectPostsCached = unstable_cache(
  async (): Promise<ProjectPost[]> => {
    const firstPage = await fetchProjectPostsPage(1);
    const remainingPages = Array.from(
      { length: Math.max(firstPage.totalPages - 1, 0) },
      (_, index) => index + 2,
    );

    const additionalPages = await Promise.all(
      remainingPages.map((page) => fetchProjectPostsPage(page)),
    );

    return cleanObject([
      ...firstPage.posts,
      ...additionalPages.flatMap((page) => page.posts),
    ]);
  },
  ["project-posts"],
  { revalidate: PROJECTS_REVALIDATE_SECONDS },
);

export async function getProjectPosts(): Promise<ProjectPost[]> {
  return getProjectPostsCached();
}
