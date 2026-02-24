"use client";

import { useEffect, useState } from "react";
import HomePage from "./Home/page";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const fallback = setTimeout(() => setShowLoading(false), 2000);
    return () => clearTimeout(fallback);
  }, []);

  return (
    <div className="relative">
      <HomePage />
      {showLoading && <LoadingScreen onComplete={() => setShowLoading(false)} />}
    </div>
  );
}
