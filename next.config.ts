import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // 🚫 disables ESLint during build
  },
  /* config options here */
  reactStrictMode: false,
};

export default nextConfig;
