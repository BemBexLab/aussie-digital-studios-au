"use client";

interface ProjectImageProps {
  src: string;
  alt: string;
  fallback?: string;
}

export default function ProjectImage({ 
  src, 
  alt, 
  fallback = "/default.webp" 
}: ProjectImageProps) {
  return (
    <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl mb-12">
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover"
        onError={(e) => {
          const target = e.currentTarget as HTMLImageElement;
          if (target.src.indexOf(fallback) === -1) {
            target.src = fallback;
          }
        }}
      />
    </div>
  );
}