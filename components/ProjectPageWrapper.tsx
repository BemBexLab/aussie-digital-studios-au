"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// Enhanced URL cleaning function
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

interface ProjectPageWrapperProps {
  children: (project: any, isLoading: boolean) => React.ReactNode;
}

export default function ProjectPageWrapper({ children }: ProjectPageWrapperProps) {
  const params = useParams();
  const slug = params?.slug as string;
  
  const [project, setProject] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProject = async () => {
      setIsLoading(true);
      setError(null);
      
      // Add a small delay to ensure smooth transition
      await new Promise(resolve => setTimeout(resolve, 150));

      try {
        const response = await fetch(`/api/projects/${slug}`, {
          cache: 'no-store',
        });

        if (!response.ok) {
          throw new Error('Project not found');
        }

        const data = await response.json();
        
        // Clean all URLs in the project data
        const cleanedData = cleanObjectUrls(data);
        
        // Additional validation delay
        await new Promise(resolve => setTimeout(resolve, 100));
        
        setProject(cleanedData);
      } catch (err) {
        console.error('Error fetching project:', err);
        setError('Failed to load project');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Project Not Found</h1>
          <p className="text-gray-400">{error}</p>
        </div>
      </div>
    );
  }

  return <>{children(project, isLoading)}</>;
}