import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/slrico.github.io",
  assetPrefix: "/slrico.github.io/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;