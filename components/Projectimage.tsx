"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    setImageSrc(src);
  }, [src]);

  return (
    <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-xl mb-12">
      <Image
        src={imageSrc}
        alt={alt}
        width={1600}
        height={900}
        priority
        sizes="(max-width: 1024px) 100vw, 1024px"
        className="w-full h-auto object-cover"
        onError={() => {
          if (imageSrc !== fallback) {
            setImageSrc(fallback);
          }
        }}
      />
    </div>
  );
}
