import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/pawmatcher.github.io',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
