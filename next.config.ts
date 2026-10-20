import type { NextConfig } from "next";

const isGithubPages = process.env.DEPLOY_TARGET === "github";
const repoBasePath = isGithubPages ? "/mansy-tours" : undefined;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
