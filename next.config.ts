import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: !isDev,
  cacheComponents: !isDev,
  typedRoutes: true,
  images: {
    qualities: [75, 82],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pulse-clinic.co.uk",
        port: "",
        pathname: "/wp-content/uploads/**"
      },
    ],
  },

  experimental: {
    typedEnv: true,
    viewTransition: true,
  },
};

export default nextConfig;
