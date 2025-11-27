import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.r2.cloudflarestorage.com',
      },
      // Add your custom R2 domain if using one
      // {
      //   protocol: 'https',
      //   hostname: 'your-custom-domain.com',
      // },
    ],
  },
  // Hide the Next.js development indicator
  devIndicators: false,
  // Allow larger file uploads (up to 100MB)
  experimental: {
    serverActions: {
      bodySizeLimit: '100mb',
    },
    // Increase body size limit for API routes (default is 10MB)
    proxyClientMaxBodySize: '100mb',
  },
};

export default nextConfig;
