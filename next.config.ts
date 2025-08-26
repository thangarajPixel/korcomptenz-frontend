import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
