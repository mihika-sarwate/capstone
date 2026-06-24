import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/capstone',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
