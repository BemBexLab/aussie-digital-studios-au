export const revalidate = 300;

import { getProjectPosts } from "@/lib/projectPosts";

// URL cleaning function
const cleanUrl = (url: string): string => {
  if (!url) return "";
  
  let cleaned = String(url);
  
  // Remove escaped backslash sequences (\\a, \\n, \\t, etc.)
  cleaned = cleaned.replace(/\\[a-z]/gi, '');
  
  // Remove all control characters (including \a, \n, \r, \t)
  cleaned = cleaned.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
  
  // Remove all whitespace characters
  cleaned = cleaned.replace(/\s+/g, '');
  
  // Trim any remaining whitespace
  cleaned = cleaned.trim();
  
  return cleaned;
};

// Recursively clean all URLs in an object
const cleanObjectUrls = (obj: any): any => {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(item => cleanObjectUrls(item));
  }

  const cleaned: any = {};
  for (const key in obj) {
    const value = obj[key];
    
    // If it's a URL field, clean it
    if (typeof value === 'string' && (key === 'url' || key.includes('url') || key.includes('URL') || key.includes('link'))) {
      cleaned[key] = cleanUrl(value);
    } 
    // If it's an object or array, recurse
    else if (typeof value === 'object' && value !== null) {
      cleaned[key] = cleanObjectUrls(value);
    } 
    // Otherwise, keep as is
    else {
      cleaned[key] = value;
    }
  }
  
  return cleaned;
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  try {
    const { slug } = await params;
    const data = await getProjectPosts();

    const project = Array.isArray(data)
      ? data.find((item: any) => item?.slug === slug)
      : null;

    if (!project) {
      return new Response("Project not found", { status: 404 });
    }

    // Clean all URLs in the response data
    const cleanedData = cleanObjectUrls(project);

    return new Response(JSON.stringify(cleanedData), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return new Response("Internal server error", { status: 500 });
  }
}
