import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    appDir: true, // Ensures App Router is enabled
  },
  reactStrictMode: true,
  trailingSlash: false, // Make sure URLs are correctly routed
};

export default nextConfig;
