import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "**.pexels.com",
    },
    {
      protocol: "https",
      hostname: "**.unsplash.com",
    },
    {
      protocol: "https",
      hostname: "**.pixabay.com",
    },
  ],
}
};

export default nextConfig;
