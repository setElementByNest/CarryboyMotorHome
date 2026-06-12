/** @type {import('next').NextConfig} */

// const isProduction = process.env.NODE_ENV === "development";
const isProduction = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProduction ? "" : undefined,
  assetPrefix: isProduction ? "" : undefined,
  trailingSlash: true,
  output: "export",
  images: {
    domains: ["images.unsplash.com"],
    unoptimized: true,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

module.exports = nextConfig;
