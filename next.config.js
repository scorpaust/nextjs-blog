/** @type {import('next').NextConfig} */
//const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pexels.com",
        port: "3000",
        pathname: "/images.pexels.com/**",
      },
    ],
    domains: ["images.pexels.com"],
  },
};

module.exports = nextConfig;
