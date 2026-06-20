export interface ProjectPost {
  id: number;
  slug: string;
  title: { rendered: string };
  acf?: {
    project_image?: { url: string };
    project_url?: string;
    catogary?: string | string[];
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

export async function getProjectPosts(): Promise<ProjectPost[]> {
  const allPosts: ProjectPost[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const separator = PROJECTS_API_URL.includes("?") ? "&" : "?";
    const res = await fetch(`${PROJECTS_API_URL}${separator}page=${page}`, {
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch project posts: ${res.status}`);
    }

    const posts = (await res.json()) as ProjectPost[];
    allPosts.push(...posts);

    const totalPagesHeader = res.headers.get("X-WP-TotalPages");
    totalPages = totalPagesHeader ? Number(totalPagesHeader) : page;
    page += 1;
  }

  return cleanObject(allPosts);
}
