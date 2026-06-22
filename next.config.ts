import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow local images (from /public) — no external domains needed for the portfolio
    unoptimized: false,
  },
};

export default nextConfig;
