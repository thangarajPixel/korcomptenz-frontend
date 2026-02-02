import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'aue2kormlworkspacetest01.blob.core.windows.net',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_IMAGE_DOMAIN || 'korcomptenz.com',
      },
    ],
  },
  redirects: async () => [
    {
      source: '/sap-consulting-service',
      destination: 'https://campaigns.korcomptenz.com/sap-consulting-service',
      permanent: true,
    },
    {
      source: '/kor-bankiq-retail-banking-analytics',
      destination: 'https://campaigns.korcomptenz.com/kor-bankiq-retail-banking-analytics',
      permanent: true,
    },
    {
      source: '/application-modernization-services',
      destination: 'https://campaigns.korcomptenz.com/application-modernization-services',
      permanent: true,
    },
    {
      source: '/free-migration-modernization-assessment',
      destination: 'https://campaigns.korcomptenz.com/free-migration-modernization-assessment',
      permanent: true,
    },
    {
      source: '/microsoft-fabric-assessment',
      destination: 'https://campaigns.korcomptenz.com/microsoft-fabric-assessment',
      permanent: true,
    },
    {
      source: '/edi-partner-integration',
      destination: 'https://campaigns.korcomptenz.com/edi-partner-integration',
      permanent: true,
    },
    {
      source: '/erp-advisory-services',
      destination: 'https://campaigns.korcomptenz.com/erp-advisory-services',
      permanent: true,
    },
    {
      source: '/migrate-to-microsoft-dynamics-365-finance-and-operation',
      destination: 'https://campaigns.korcomptenz.com/migrate-to-microsoft-dynamics-365-finance-and-operation',
      permanent: true,
    },
    {
      source: '/ecc-to-s4hana-migration-guide',
      destination: 'https://campaigns.korcomptenz.com/ecc-to-s4hana-migration-guide',
      permanent: true,
    },
    {
      source: '/ai-readiness-assessment',
      destination: 'https://campaigns.korcomptenz.com/ai-readiness-assessment',
      permanent: true,
    },
    {
      source: '/kor-smartforge-d365-reporting-analytics',
      destination: 'https://campaigns.korcomptenz.com/kor-smartforge-d365-reporting-analytics',
      permanent: true,
    },
    {
      source: '/infrastructure-managed-services-assessment',
      destination: 'https://campaigns.korcomptenz.com/infrastructure-managed-services-assessment',
      permanent: true,
    },
    {
      source: '/microsoft-dynamics-365-solutions',
      destination: 'https://campaigns.korcomptenz.com/microsoft-dynamics-365-solutions',
      permanent: true,
    },
    {
      source: '/erp-implementation-for-grill-manufacturer',
      destination: 'https://campaigns.korcomptenz.com/erp-implementation-for-grill-manufacturer',
      permanent: true,
    },
    {
      source: '/rapid-erp-implementation',
      destination: 'https://campaigns.korcomptenz.com/rapid-erp-implementation',
      permanent: true,
    },
    {
      source: '/digital-banking-suite',
      destination: 'https://campaigns.korcomptenz.com/digital-banking-suite',
      permanent: true,
    },
    {
      source: '/cloud-and-digital-engineering-solutions',
      destination: 'https://campaigns.korcomptenz.com/cloud-and-digital-engineering-solutions',
      permanent: true,
    },
    {
      source: '/cloud-and-digital-engineering-solutions/applications-services',
      destination: 'https://campaigns.korcomptenz.com/cloud-and-digital-engineering-solutions/applications-services',
      permanent: true,
    },
    {
      source: '/cloud-and-digital-engineering-solutions/data-and-artificial-intelligence-services',
      destination: 'https://campaigns.korcomptenz.com/cloud-and-digital-engineering-solutions/data-and-artificial-intelligence-services',
      permanent: true,
    },
    {
      source: '/cloud-and-digital-engineering-solutions/cybersecurity',
      destination: 'https://campaigns.korcomptenz.com/cloud-and-digital-engineering-solutions/cybersecurity',
      permanent: true,
    },
    {
      source: '/cloud-and-digital-engineering-solutions/hybrid-cloud-infrastructure',
      destination: 'https://campaigns.korcomptenz.com/cloud-and-digital-engineering-solutions/hybrid-cloud-infrastructure',
      permanent: true,
    },
    {
      source: '/cloud-and-digital-engineering-solutions/it-managed-service',
      destination: 'https://campaigns.korcomptenz.com/cloud-and-digital-engineering-solutions/it-managed-service',
      permanent: true,
    },
    {
      source: '/sap-application-managed-service',
      destination: 'https://campaigns.korcomptenz.com/sap-application-managed-service',
      permanent: true,
    },
    {
      source: '/mergers-acqusition',
      destination: 'https://campaigns.korcomptenz.com/mergers-acqusition',
      permanent: true,
    },
    {
      source: '/sap-implementation-services',
      destination: 'https://campaigns.korcomptenz.com/sap-implementation-services',
      permanent: true,
    },
    {
      source: '/data-ai-for-sap',
      destination: 'https://campaigns.korcomptenz.com/data-ai-for-sap',
      permanent: true,
    },
    {
      source: '/sap-cloud-solutions',
      destination: 'https://campaigns.korcomptenz.com/sap-cloud-solutions',
      permanent: true,
    },
    {
      source: '/digital-manufacturing',
      destination: 'https://campaigns.korcomptenz.com/digital-manufacturing',
      permanent: true,
    },
  ],
};

export default nextConfig;
