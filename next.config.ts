import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://repository-images.githubusercontent.com/**")],
  },
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
