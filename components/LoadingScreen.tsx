"use client";

import React from "react";

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const fallback = window.setTimeout(() => setIsVisible(false), 3200);
    return () => window.clearTimeout(fallback);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <section
      className="loading-screen fixed inset-0 z-[9999] flex items-center justify-center bg-black"
      onAnimationEnd={() => setIsVisible(false)}
    >
      <div
        style={{
          backgroundImage: "url('/Group_1.webp')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "20%",
          height: "20%",
        }}
      />
    </section>
  );
};

export default LoadingScreen;
