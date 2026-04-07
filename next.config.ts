import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "12storeez.kz" },
      { protocol: "https", hostname: "api.therlgn.com" },
    ],
  },
};

export default nextConfig;
