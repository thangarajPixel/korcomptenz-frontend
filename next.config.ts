import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  htmlLimitedBots: /.*/,

  // Performance optimizations for mobile
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "@radix-ui/react-accordion",
      "@radix-ui/react-dialog",
      "@radix-ui/react-popover",
      "@radix-ui/react-tabs",
    ],
    webpackBuildWorker: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aue2kormlworkspacetest01.blob.core.windows.net",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: process.env.NEXT_PUBLIC_IMAGE_DOMAIN || "korcomptenz.com",
      },
    ],
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async headers() {
    return [
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/assets/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=3600, stale-while-revalidate=86400",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            // Early hints: preconnect to image CDN and font origin
            key: "Link",
            value: [
              "<https://aue2kormlworkspacetest01.blob.core.windows.net>; rel=preconnect",
              "<https://fonts.gstatic.com>; rel=preconnect; crossorigin",
            ].join(", "),
          },
        ],
      },
    ];
  },
  redirects: async () => [
    {
      source: "/:path*",
      has: [
        {
          type: "host",
          value: "korcomptenz.com",
        },
      ],
      destination: "https://www.korcomptenz.com/:path*",
      permanent: true,
    },
    {
      source: "/sap-consulting-service",
      destination: "https://campaigns.korcomptenz.com/sap-consulting-service",
      permanent: true,
    },
    {
      source: "/kor-bankiq-retail-banking-analytics",
      destination:
        "https://campaigns.korcomptenz.com/kor-bankiq-retail-banking-analytics",
      permanent: true,
    },
    {
      source: "/application-modernization-services",
      destination:
        "https://campaigns.korcomptenz.com/application-modernization-services",
      permanent: true,
    },
    {
      source: "/free-migration-modernization-assessment",
      destination:
        "https://campaigns.korcomptenz.com/free-migration-modernization-assessment",
      permanent: true,
    },
  ],
};

export default nextConfig;
