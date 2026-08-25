import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/projects.html",
        destination: "/projects",
      },
    ];
  },
};

export default nextConfig;
