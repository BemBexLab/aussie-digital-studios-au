export const revalidate = 300;

// Helper to clean ALL strings of control characters
function cleanString(str: string): string {
  if (typeof str !== "string") return str;
  
  return str
    // Remove bell character (what \a represents)
    .replace(/[\x07]/g, "")
    // Remove all control characters (ASCII 0-31 and 127)
    .replace(/[\x00-\x1F\x7F]/g, "")
    // Remove line breaks and tabs but preserve normal spaces if they're needed for URLs
    .replace(/[\n\r\t\v\f]/g, "");
}

// Recursively clean all strings in the object
function cleanObject(obj: any): any {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (typeof obj === "string") {
    return cleanString(obj);
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => cleanObject(item));
  }

  if (typeof obj === "object") {
    const cleaned: any = {};
    for (const [key, value] of Object.entries(obj)) {
      cleaned[key] = cleanObject(value);
    }
    return cleaned;
  }

  return obj;
}

export async function GET() {
  try {
    const allPosts: any[] = [];
    let page = 1;

    while (true) {
      const res = await fetch(
        `https://olive-peafowl-546702.hostingersite.com/wp-json/wp/v2/posts?per_page=100&page=${page}`,
        { next: { revalidate: 300 } }
      );

      if (!res.ok) break;
      const posts = await res.json();
      allPosts.push(...posts);
      if (posts.length < 100) break;
      page++;
    }

    // Recursively clean ALL strings in all posts
    const cleanedPosts = cleanObject(allPosts);

    return new Response(JSON.stringify(cleanedPosts), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("API Route Error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
