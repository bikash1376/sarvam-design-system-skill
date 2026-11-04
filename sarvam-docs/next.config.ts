import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // static site -> out/ (deployed to Netlify as plain files)
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
