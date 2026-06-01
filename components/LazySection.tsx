"use client";

import React from "react";

type LazySectionProps = {
  children: React.ReactNode;
  className?: string;
  heightClassName?: string;
  rootMargin?: string;
};

export default function LazySection({
  children,
  className,
  heightClassName = "min-h-72",
  rootMargin = "300px 0px",
}: LazySectionProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const node = containerRef.current;

    if (!node || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? (
        children
      ) : (
        <div
          className={`w-full animate-pulse rounded-3xl border border-white/10 bg-white/5 ${heightClassName}`}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
