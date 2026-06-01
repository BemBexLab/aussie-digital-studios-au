import { notFound } from "next/navigation";
import nextDynamic from "next/dynamic";
import ProjectImage from "@/components/Projectimage";
import SectionFallback from "@/components/SectionFallback";

export const revalidate = 300;

// Dynamically import the client-only BackButton
const BackButton = nextDynamic(() => import("../[slug]/BackButton"));
const LivePreview = nextDynamic(() => import("@/components/LivePreview"), {
  loading: () => <SectionFallback heightClassName="min-h-96" />,
});

const API_URL =
  "https://olive-peafowl-546702.hostingersite.com/wp-json/wp/v2/posts?slug=";

// Enhanced URL cleaning function
function cleanUrl(url: string): string {
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
}

// Recursively clean all URLs in an object
function cleanObjectUrls(obj: any): any {
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
}

export async function generateStaticParams() {
  try {
    const res = await fetch(
      "https://olive-peafowl-546702.hostingersite.com/wp-json/wp/v2/posts",
      { next: { revalidate: 300 } }
    );
    
    if (!res.ok) return [];
    
    const posts = await res.json();
    return posts.map((post: any) => ({ slug: post.slug }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  try {
    const res = await fetch(`${API_URL}${slug}`, {
      next: { revalidate: 300 },
    });

    if (!res.ok) return notFound();

    const data = await res.json();
    if (!data || data.length === 0) return notFound();
    
    const rawProject = data[0];
    if (!rawProject) return notFound();

    // Clean all URLs in the project data
    const project = cleanObjectUrls(rawProject);

    // Safely get image URL with cleaning and fallback
    let imageUrl = project.acf?.project_image?.url || "/default.webp";
    
    // Additional cleaning for the image URL
    if (imageUrl !== "/default.webp") {
      imageUrl = cleanUrl(imageUrl);
      
      // Handle protocol-relative URLs
      if (imageUrl.startsWith("//")) {
        imageUrl = `https:${imageUrl}`;
      }
      
      // Force HTTPS
      if (imageUrl.startsWith("http://")) {
        imageUrl = imageUrl.replace("http://", "https://");
      }
      
      // Fallback if URL is invalid
      if (!imageUrl || imageUrl.length < 5) {
        imageUrl = "/default.webp";
      }
    }

    const acf = project.acf;

    return (
      <div className="text-white px-4 flex flex-col items-center pt-[80px]">
        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold max-w-4xl text-left w-full text-white bg-clip-text mb-[50px]">
          {project.title?.rendered || 'Untitled Project'}
        </h1>

        {/* Project Image - Now using Client Component */}
        <ProjectImage 
          src={imageUrl}
          alt={project.title?.rendered || 'Project image'}
          fallback="/default.webp"
        />

        {/* Project Content Sections */}
        <div className="w-full max-w-3xl space-y-12 text-lg sm:text-xl">
          {acf?.introduction && (
            <Section title="Introduction" text={acf.introduction} />
          )}
          {acf?.genesis_of_collaboration && (
            <Section
              title="Genesis Of Collaboration"
              text={acf.genesis_of_collaboration}
            />
          )}
          {acf?.conceptualization && (
            <Section title="Conceptualization" text={acf.conceptualization} />
          )}
          {acf?.design_symphony && (
            <Section title="Design Symphony" text={acf.design_symphony} />
          )}
          {acf?.development_overture && (
            <Section
              title="Development Overture"
              text={acf.development_overture}
            />
          )}
          {acf?.launch_and_beyond && (
            <Section title="Launch And Beyond" text={acf.launch_and_beyond} />
          )}
          {acf?.conclusion && (
            <Section title="Conclusion" text={acf.conclusion} />
          )}
        </div>

        {/* Live Website Preview (only if project_url exists) */}
        {acf?.project_url && (
          <div className="w-full max-w-5xl mx-auto my-16 rounded-2xl overflow-hidden">
            <div className="text-2xl font-semibold mb-2 px-6 pt-6 text-[#3A6EA5] text-center">
              {/* Extract domain from URL or use default */}
              {acf.project_url 
                ? new URL(cleanUrl(acf.project_url)).hostname 
                : 'Live Preview'
              }
            </div>
            <LivePreview url={cleanUrl(acf.project_url)} />
          </div>
        )}

        {/* Back Button */}
        <div className="mt-16 mb-8 text-center">
          <BackButton />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error loading project:', error);
    return notFound();
  }
}

function Section({ title, text }: { title: string; text: string }) {
  return (
    <div className="space-y-3">
      <h2 className="text-xl font-semibold text-[#3A6EA5]">{title}</h2>
      <p className="text-white text-lg leading-relaxed whitespace-pre-line">
        {text}
      </p>
    </div>
  );
}
