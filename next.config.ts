import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "olive-peafowl-546702.hostingersite.com",
      },
    ],
  },
};

export default nextConfig;

