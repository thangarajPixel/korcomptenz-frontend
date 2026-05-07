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
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
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
    {
      source: "/microsoft-fabric-assessment",
      destination:
        "https://campaigns.korcomptenz.com/microsoft-fabric-assessment",
      permanent: true,
    },
    {
      source: "/edi-partner-integration",
      destination: "https://campaigns.korcomptenz.com/edi-partner-integration",
      permanent: true,
    },
    {
      source: "/erp-advisory-services",
      destination: "https://campaigns.korcomptenz.com/erp-advisory-services",
      permanent: true,
    },
    {
      source: "/migrate-to-microsoft-dynamics-365-finance-and-operation",
      destination:
        "https://campaigns.korcomptenz.com/migrate-to-microsoft-dynamics-365-finance-and-operation",
      permanent: true,
    },
    {
      source: "/ecc-to-s4hana-migration-guide",
      destination:
        "https://campaigns.korcomptenz.com/ecc-to-s4hana-migration-guide",
      permanent: true,
    },
    {
      source: "/ai-readiness-assessment",
      destination: "https://campaigns.korcomptenz.com/ai-readiness-assessment",
      permanent: true,
    },
    {
      source: "/kor-smartforge-d365-reporting-analytics",
      destination:
        "https://campaigns.korcomptenz.com/kor-smartforge-d365-reporting-analytics",
      permanent: true,
    },
    {
      source: "/infrastructure-managed-services-assessment",
      destination:
        "https://campaigns.korcomptenz.com/infrastructure-managed-services-assessment",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-365-solutions",
      destination:
        "https://campaigns.korcomptenz.com/microsoft-dynamics-365-solutions",
      permanent: true,
    },
    {
      source: "/erp-implementation-for-grill-manufacturer",
      destination:
        "https://campaigns.korcomptenz.com/erp-implementation-for-grill-manufacturer",
      permanent: true,
    },
    {
      source: "/brochure/CKVal-Cloud.pdf",
      destination:
        "https://content.korcomptenz.com/story/ckval-one-unified-platform-for-intelligent-it-operations/page/1",
      permanent: true,
    },
    {
      source: "/rapid-erp-implementation",
      destination: "https://campaigns.korcomptenz.com/rapid-erp-implementation",
      permanent: true,
    },
    {
      source: "/digital-banking-suite",
      destination: "https://campaigns.korcomptenz.com/digital-banking-suite",
      permanent: true,
    },
    {
      source: "/cloud-and-digital-engineering-solutions",
      destination:
        "https://campaigns.korcomptenz.com/cloud-and-digital-engineering-solutions",
      permanent: true,
    },
    {
      source: "/cloud-and-digital-engineering-solutions/applications-services",
      destination:
        "https://campaigns.korcomptenz.com/cloud-and-digital-engineering-solutions/applications-services",
      permanent: true,
    },
    {
      source:
        "/cloud-and-digital-engineering-solutions/data-and-artificial-intelligence-services",
      destination:
        "https://campaigns.korcomptenz.com/cloud-and-digital-engineering-solutions/data-and-artificial-intelligence-services",
      permanent: true,
    },
    {
      source: "/cloud-and-digital-engineering-solutions/cybersecurity",
      destination:
        "https://campaigns.korcomptenz.com/cloud-and-digital-engineering-solutions/cybersecurity",
      permanent: true,
    },
    {
      source:
        "/cloud-and-digital-engineering-solutions/hybrid-cloud-infrastructure",
      destination:
        "https://campaigns.korcomptenz.com/cloud-and-digital-engineering-solutions/hybrid-cloud-infrastructure",
      permanent: true,
    },
    {
      source: "/cloud-and-digital-engineering-solutions/it-managed-service",
      destination:
        "https://campaigns.korcomptenz.com/cloud-and-digital-engineering-solutions/it-managed-service",
      permanent: true,
    },
    {
      source: "/sap-application-managed-service",
      destination:
        "https://campaigns.korcomptenz.com/sap-application-managed-service",
      permanent: true,
    },
    {
      source: "/mergers-acqusition",
      destination: "https://campaigns.korcomptenz.com/mergers-acqusition",
      permanent: true,
    },
    {
      source: "/sap-implementation-services",
      destination:
        "https://campaigns.korcomptenz.com/sap-implementation-services",
      permanent: true,
    },
    {
      source: "/data-ai-for-sap",
      destination: "https://campaigns.korcomptenz.com/data-ai-for-sap",
      permanent: true,
    },
    {
      source: "/sap-cloud-solutions",
      destination: "https://campaigns.korcomptenz.com/sap-cloud-solutions",
      permanent: true,
    },
    {
      source: "/digital-manufacturing",
      destination: "https://campaigns.korcomptenz.com/digital-manufacturing",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-enterprise-solutions",
      destination:
        "https://campaigns.korcomptenz.com/microsoft-dynamics-enterprise-solutions",
      permanent: true,
    },

    //new

    {
      source: "/appsource/privacy-policy/",
      destination: "/privacy-policy",
      permanent: true,
    },
    {
      source: "/careers/",
      destination: "/career",
      permanent: true,
    },
    {
      source: "/oracle/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/oracle/analytics/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/oracle/financials/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/oracle/oracle-cloud-erp/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/oracle/oracle-cloud-manufacturing/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/oracle/oracle-supply-chain-management/",
      destination: "/",
      permanent: true,
    },
    {
      source: "/sap/sap-merger-and-acquisition/",
      destination:
        "/sap/sap-merger-and-acquisition-consulting",
      permanent: true,
    },
    {
      source: "/solution-accelerators/",
      destination: "/kor-solution-accelerators",
      permanent: true,
    },
    {
      source: "/who-we-are/",
      destination: "/about-us",
      permanent: true,
    },
    {
      source: "/client-success/",
      destination: "/case-studies",
      permanent: true,
    },
    {
      source: "/grant-management/faqs/",
      destination:
        "/whitepaper/KORSmartGrants365.pdf",
      permanent: true,
    },
    {
      source: "/kor-bank-iq",
      destination:
        "/ai-assisted-retail-banking-microsoft-fabric",
      permanent: true,
    },
    {
      source: "/korcares/",
      destination: "/kor-cares",
      permanent: true,
    },
    {
      source: "/logistics/",
      destination:
        "/industries/logistics-and-transportation",
      permanent: true,
    },
    {
      source: "/manufacturing/",
      destination: "/industries/manufacturing",
      permanent: true,
    },
    {
      source: "/medical-devices/",
      destination:
        "/industries/manufacturing/medical-devices",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Quickbooks-to-Business-Central-migration.pdf",
      destination:
        "/whitepaper/Quickbooks-to-Business-Central-migration.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Benefits-of-Next-Generation-Field-Service-Solutions.pdf",
      destination:
        "/whitepaper/Benefits-of-Next-Generation-Field-Service-Solutions.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Microsoft-Dynamics-365-Commerce-Comparison.pdf",
      destination:
        "/whitepaper/Microsoft-Dynamics-365-Commerce-Comparison.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Salesforce-Sales-Cloud.pdf",
      destination:
        "/whitepaper/Salesforce-Sales-Cloud.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/More-than-one-way-to-make-your-business-mobile.pdf",
      destination:
        "/whitepaper/More-than-one-way-to-make-your-business-mobile.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Why-your-Business-needs-Marketing-Automation.pdf",
      destination:
        "/whitepaper/Why-your-Business-needs-Marketing-Automation.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Kentico-Xperience-Quickstart-Guide.pdf",
      destination:
        "/whitepaper/Kentico-Xperience-Quickstart-Guide.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/How-to-choose-right-Content-Management-System.pdf",
      destination:
        "/whitepaper/How-to-choose-right-Content-Management-System.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Envision-your-modern-workplace.pdf",
      destination:
        "/whitepaper/Envision-your-modern-workplace.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/productive-remote-work-for-nonprofit.pdf",
      destination:
        "/whitepaper/productive-remote-work-for-nonprofit.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/SFRA-Commerce.pdf",
      destination: "/whitepaper/SFRA-Commerce.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Salesforce-Lightning-Apps.pdf",
      destination:
        "/whitepaper/Salesforce-Lightning-Apps.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Connected-Retail.pdf",
      destination:
        "/whitepaper/Connected-Retail.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Analytics-and-AI.pdf",
      destination:
        "/whitepaper/Analytics-and-AI.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Design-Thinking-for-App-Modernization.pdf",
      destination:
        "/whitepaper/Design-Thinking-for-App-Modernization.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Digital-Transformation-and-Maturity.pdf",
      destination:
        "/whitepaper/Digital-Transformation-and-Maturity.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/App-Rationalization-Modernization.pdf",
      destination:
        "/whitepaper/App-Rationalization-Modernization.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Analytics-for-Medical-Devices.pdf",
      destination:
        "/whitepaper/Analytics-for-Medical-Devices.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/SupplyChain-for-Medical-Devices.pdf",
      destination:
        "/whitepaper/SupplyChain-for-Medical-Devices.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Patient-Provider-Experience-for-Medical-Devices.pdf",
      destination:
        "/whitepaper/Patient-Provider-Experience-for-Medical-Devices.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/ERP-Analytics.pdf",
      destination: "/whitepaper/ERP-Analytics.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/EDI.pdf",
      destination: "/whitepaper/EDI.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Retail-with-MSD365.pdf",
      destination:
        "/whitepaper/Retail-with-MSD365.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Traditional-vs-Cloud-ERP.pdf",
      destination:
        "/whitepaper/Traditional-vs-Cloud-ERP.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/MES-ERP-Integration.pdf",
      destination:
        "/whitepaper/MES-ERP-Integration.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Maximizing-CRM-Potential-with-Artificial-Intelligence.pdf",
      destination:
        "/whitepaper/Maximizing-CRM-Potential-with-Artificial-Intelligence.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Get-More-Leads-Convert-Faster-with-Marketing-Automation.pdf",
      destination:
        "/whitepaper/Get-More-Leads-Convert-Faster-with-Marketing-Automation.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Salesforce-Einstein-Copilot-vs-Microsoft-Copilot.pdf",
      destination:
        "/whitepaper/Salesforce-Einstein-Copilot-vs-Microsoft-Copilot.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Kentico-Vs-AWM-Analysis.pdf",
      destination:
        "/whitepaper/Kentico-Vs-AWM-Analysis.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/AI-Readiness-Assessment.pdf",
      destination:
        "/whitepaper/AI-Readiness-Assessment.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Microsoft-Dynamics-vs-Salesforce-CRM-Comparison-Guide-2024.pdf",
      destination:
        "/whitepaper/Microsoft-Dynamics-vs-Salesforce-CRM-Comparison-Guide-2024.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Digital-Content-Creation-Management-Trends-2024.pdf",
      destination:
        "/whitepaper/Digital-Content-Creation-Management-Trends-2024.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Strengthen-Financial-Trust-Personalized-Marketing.pdf",
      destination:
        "/whitepaper/Strengthen-Financial-Trust-Personalized-Marketing.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/How-to-migrate-from-Salesforce-to-Microsoft-Dynamics-365.pdf",
      destination:
        "/whitepaper/How-to-migrate-from-Salesforce-to-Microsoft-Dynamics-365.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Migrating-GP-to-Dynamics-365-Business-Central-Guide.pdf",
      destination:
        "/whitepaper/Migrating-GP-to-Dynamics-365-Business-Central-Guide.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Microsoft365-Copilot.pdf",
      destination:
        "/whitepaper/Microsoft365-Copilot.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/AI-Next-Gen-Tech-Transform-Business.pdf",
      destination:
        "/whitepaper/AI-Next-Gen-Tech-Transform-Business.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Salesforce-Agentforce-Whitepaper.pdf",
      destination:
        "/whitepaper/Salesforce-Agentforce-Whitepaper.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/SAP-Migration-Methodology.pdf",
      destination:
        "/whitepaper/SAP-Migration-Methodology.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/SAP-Signavio-Process-Excellence.pdf",
      destination:
        "/whitepaper/SAP-Signavio-Process-Excellence.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/SAP-Extended-Warehouse-Management.pdf",
      destination:
        "/whitepaper/SAP-Extended-Warehouse-Management.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Healthcare-Cybersecurity.pdf",
      destination:
        "/whitepaper/Healthcare-Cybersecurity.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Why-Microsoft-Dynamics-365-Finance-and-Operation-is-the-Smarter-Choice-Over-SAP-S4HANA-for-SAP-ECC-Migrations.pdf",
      destination:
        "/whitepaper/Why-Microsoft-Dynamics-365-Finance-and-Operation-is-the-Smarter-Choice-Over-SAP-S4HANA-for-SAP-ECC-Migrations.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Healthcare-Digital-Transformation-Technology-Partner.pdf",
      destination:
        "/whitepaper/Healthcare-Digital-Transformation-Technology-Partner.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Agentic-AI-Healthcare-Transformation.pdf",
      destination:
        "/whitepaper/Agentic-AI-Healthcare-Transformation.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Customer-Experience-Cost-Optimization.pdf",
      destination:
        "/whitepaper/Customer-Experience-Cost-Optimization.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/The-ERP-CRM-Ecommerce-Ecosystem-That-Pays-for-Itself.pdf",
      destination:
        "/whitepaper/The-ERP-CRM-Ecommerce-Ecosystem-That-Pays-for-Itself.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Agentic-AI-for-Smart-Warehousing.pdf",
      destination:
        "/whitepaper/Agentic-AI-for-Smart-Warehousing.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Microsoft-Dynamics-vs-Salesforce-CRM.pdf",
      destination:
        "/whitepaper/Microsoft-Dynamics-vs-Salesforce-CRM.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/IT-Managed-Services.pdf",
      destination:
        "/whitepaper/IT-Managed-Services.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/AI-Powered-Application-Modernization.pdf",
      destination:
        "/whitepaper/AI-Powered-Application-Modernization.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Transforming-Customer-Service-with-Microsoft-Copilot.pdf",
      destination:
        "/whitepaper/Transforming-Customer-Service-with-Microsoft-Copilot.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/AgenticBizApps.pdf",
      destination: "/whitepaper/AgenticBizApps.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/brochure/is-power-automate-right-for-your-organization.pdf",
      destination:
        "/brochure/is-power-automate-right-for-your-organization.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Kor-Uncovering-Power-App-Opportunities.pdf",
      destination:
        "/brochure/Kor-Uncovering-Power-App-Opportunities.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Microsoft-Managed-Services-and-Solutions.pdf",
      destination:
        "/brochure/Microsoft-Managed-Services-and-Solutions.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/complete-salesforce-ecosystem-support.pdf",
      destination:
        "/brochure/complete-salesforce-ecosystem-support.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/corporate-brochure.pdf",
      destination:
        "/brochure/corporate-brochure.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Product-configurator-addon.pdf",
      destination:
        "/brochure/Product-configurator-addon.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Quality-control-management-add-on.pdf",
      destination:
        "/brochure/Quality-control-management-add-on.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/fleet-management-solution.pdf",
      destination:
        "/brochure/fleet-management-solution.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/brochure/EduUniv-a-complete-solution-for-educational-institutions.pdf",
      destination:
        "/brochure/EduUniv-a-complete-solution-for-educational-institutions.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/brochure/Minimize-downtime-with-secured-Infrastructure-management.pdf",
      destination:
        "/brochure/Minimize-downtime-with-secured-Infrastructure-management.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Azure-Cloud-Managed-Solutions.pdf",
      destination:
        "/brochure/Azure-Cloud-Managed-Solutions.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/brochure/Transform-your-data-into-intelligent-actions-with-limitless-analytics.pdf",
      destination:
        "/brochure/Transform-your-data-into-intelligent-actions-with-limitless-analytics.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Grant-Management.pdf",
      destination: "/brochure/Grant-Management.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Education-Industry-Solution.pdf",
      destination:
        "/brochure/Education-Industry-Solution.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Automative-Industry-Accelerator.pdf",
      destination:
        "/brochure/Automative-Industry-Accelerator.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Telecommunication-Industry-Accelerator.pdf",
      destination:
        "/brochure/Telecommunication-Industry-Accelerator.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Full-Stack-Solutions.pdf",
      destination:
        "/brochure/Full-Stack-Solutions.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Complete-Cloud-Competence.pdf",
      destination:
        "/brochure/Complete-Cloud-Competence.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Connected-Retail-Solutions.pdf",
      destination:
        "/brochure/Connected-Retail-Solutions.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Supply-Chain-Optimization.pdf",
      destination:
        "/brochure/Supply-Chain-Optimization.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/ERP-Advisory.pdf",
      destination: "/brochure/ERP-Advisory.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Data-and-Analytics.pdf",
      destination:
        "/brochure/Data-and-Analytics.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Retail-POS.pdf",
      destination: "/brochure/Retail-POS.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Cloud-Migration-BFSI.pdf",
      destination:
        "/brochure/Cloud-Migration-BFSI.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Intelligent-Supply-Chain.pdf",
      destination:
        "/whitepaper/Intelligent-Supply-Chain.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Choosing-Between-CMS-and-DXP-Guide.pdf",
      destination:
        "/brochure/Choosing-Between-CMS-and-DXP-Guide.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/AI-First-Approach.pdf",
      destination: "/brochure/AI-First-Approach.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Supply-Chain-Management.pdf",
      destination:
        "/brochure/Supply-Chain-Management.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/brochure/Enterprise-Content-Management-Services-Brochure.pdf",
      destination:
        "/brochure/Enterprise-Content-Management-Services-Brochure.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Digital-Transformation-with-SAP-Solutions.pdf",
      destination:
        "/brochure/Digital-Transformation-with-SAP-Solutions.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Cybersecurity-Advisory-Managed-Services.pdf",
      destination:
        "/brochure/Cybersecurity-Advisory-Managed-Services.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/SAP-Application-Managed-Services-AMS.pdf",
      destination:
        "/brochure/SAP-Application-Managed-Services-AMS.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Microsoft-Dynamics-365-Solutions.pdf",
      destination:
        "/brochure/Microsoft-Dynamics-365-Solutions.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Microsoft-teams-the-hub-for-teamwork-in-office-365.pdf",
      destination:
        "/infographic/Microsoft-teams-the-hub-for-teamwork-in-office-365.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Leveraging-cloud-email-in-Financial-service-industry.pdf",
      destination:
        "/infographic/Leveraging-cloud-email-in-Financial-service-industry.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Modernize-your-Microsoft-workload-with-Azure.pdf",
      destination:
        "/infographic/Modernize-your-Microsoft-workload-with-Azure.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Microsoft-Teams-and-Office-365-Integrations.pdf",
      destination:
        "/infographic/Microsoft-Teams-and-Office-365-Integrations.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Leveraging-Microsoft-Teams-in-Human-Resource.pdf",
      destination:
        "/infographic/Leveraging-Microsoft-Teams-in-Human-Resource.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Leveraging-Microsoft-Teams-for-a-Role-in-Compliance.pdf",
      destination:
        "/infographic/Leveraging-Microsoft-Teams-for-a-Role-in-Compliance.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Leveraging-Microsoft-Teams-in-Healthcare.pdf",
      destination:
        "/infographic/Leveraging-Microsoft-Teams-in-Healthcare.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Leveraging-Microsoft-Teams-for-your-Finance-Department.pdf",
      destination:
        "/infographic/Leveraging-Microsoft-Teams-for-your-Finance-Department.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/How-Marketing-can-Leverage-Microsoft-Teams.pdf",
      destination:
        "/infographic/How-Marketing-can-Leverage-Microsoft-Teams.pdf",
      permanent: true,
    },
    {
      source: "/assets/infographic/Leveraging-Microsoft-Teams-in-Sales.pdf",
      destination:
        "/infographic/Leveraging-Microsoft-Teams-in-Sales.pdf",
      permanent: true,
    },
    {
      source: "/assets/infographic/Azure-Machine-Learning.pdf",
      destination:
        "/infographic/Azure-Machine-Learning.pdf",
      permanent: true,
    },
    {
      source: "/assets/infographic/Better-Value-With-Kentico.pdf",
      destination:
        "/infographic/Better-Value-With-Kentico.pdf",
      permanent: true,
    },
    {
      source: "/assets/infographic/Order-Management-System-Benefits.pdf",
      destination:
        "/infographic/Order-Management-System-Benefits.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/The-benefits-of-aligning-sales-and-marketing.pdf",
      destination:
        "/ebook/The-benefits-of-aligning-sales-and-marketing.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/How-CDP-supports-a-seamless-privacy-compliance-posture.pdf",
      destination:
        "/ebook/How-CDP-supports-a-seamless-privacy-compliance-posture.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Four-Ways-Data-Helps-B2B-Personalize-at-Scale.pdf",
      destination:
        "/ebook/Four-Ways-Data-Helps-B2B-Personalize-at-Scale.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/How-microsoft-is-redefining-B2B-eCommerce.pdf",
      destination:
        "/ebook/How-microsoft-is-redefining-B2B-eCommerce.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Bring-Apps-and-Automation-to-Microsoft-Teams-with-Power-Platform.pdf",
      destination:
        "/ebook/Bring-Apps-and-Automation-to-Microsoft-Teams-with-Power-Platform.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Top-Ways-Marketing-Can-Help-Sales-Succeed.pdf",
      destination:
        "/ebook/Top-Ways-Marketing-Can-Help-Sales-Succeed.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/How-blockchain-will-transform-the-modern-supply-chain.pdf",
      destination:
        "/ebook/How-blockchain-will-transform-the-modern-supply-chain.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Modernize-Your-Field-Service-with-Mixed-Reality.pdf",
      destination:
        "/ebook/Modernize-Your-Field-Service-with-Mixed-Reality.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/The-Power-of-Relationship-Selling.pdf",
      destination:
        "/ebook/The-Power-of-Relationship-Selling.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Five-innovative-ways-to-modernize-their-field-service.pdf",
      destination:
        "/ebook/Five-innovative-ways-to-modernize-their-field-service.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Digital-Transformation-in-Sales.pdf",
      destination:
        "/ebook/Digital-Transformation-in-Sales.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Thinking-ERP.pdf",
      destination: "/ebook/Thinking-ERP.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Guide-for-replacing-accounting-software.pdf",
      destination:
        "/ebook/Guide-for-replacing-accounting-software.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/enable-corporate-agility-with-dynamics-365.pdf",
      destination:
        "/ebook/enable-corporate-agility-with-dynamics-365.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Migrate-to-the-cloud-today.pdf",
      destination:
        "/ebook/Migrate-to-the-cloud-today.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Five-Benefits-of-Moving-to-the-Cloud-Now.pdf",
      destination:
        "/ebook/Five-Benefits-of-Moving-to-the-Cloud-Now.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Understanding-cloud-migration-strategies.pdf",
      destination:
        "/ebook/Understanding-cloud-migration-strategies.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/9-Myths-About-Moving-to-the-Cloud.pdf",
      destination:
        "/ebook/9-Myths-About-Moving-to-the-Cloud.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Microsoft-Services-Predictive-Maintenance-Manufacturing.pdf",
      destination:
        "/ebook/Microsoft-Services-Predictive-Maintenance-Manufacturing.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Digital-Transformation-in-Education-using-Predictive-Analytics.pdf",
      destination:
        "/ebook/Digital-Transformation-in-Education-using-Predictive-Analytics.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/The-IoT-Guide-for-Business-Leaders.pdf",
      destination:
        "/ebook/The-IoT-Guide-for-Business-Leaders.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/IoT-in-manufacturing.pdf",
      destination: "/ebook/IoT-in-manufacturing.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Things-to-know-about-the-state-of-IoT.pdf",
      destination:
        "/ebook/Things-to-know-about-the-state-of-IoT.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Delight-Your-Customer-in-Just-Three-Steps.pdf",
      destination:
        "/ebook/Delight-Your-Customer-in-Just-Three-Steps.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/D365-Business-Central-your-business-management-solution.pdf",
      destination:
        "/ebook/D365-Business-Central-your-business-management-solution.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Turn-Event-Attendees-into-Loyal-Customers.pdf",
      destination:
        "/ebook/Turn-Event-Attendees-into-Loyal-Customers.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Modernize-Your-Web-Apps-with-Microsoft-Azure.pdf",
      destination:
        "/ebook/Modernize-Your-Web-Apps-with-Microsoft-Azure.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Dynamics-CRM-to-Dynamics-365-Sales-feature-comparison.pdf",
      destination:
        "/ebook/Dynamics-CRM-to-Dynamics-365-Sales-feature-comparison.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Serverless-apps-Architecture-patterns-and-Azure-implementation.pdf",
      destination:
        "/ebook/Serverless-apps-Architecture-patterns-and-Azure-implementation.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Containerized-App-Lifecycle-with-Microsoft-Platform.pdf",
      destination:
        "/ebook/Containerized-App-Lifecycle-with-Microsoft-Platform.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Azure-Security-Center.pdf",
      destination:
        "/ebook/Azure-Security-Center.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Azure-Stack.pdf",
      destination: "/ebook/Azure-Stack.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/ebook-for-banking-and-financial-services-leaders.pdf",
      destination:
        "/ebook/ebook-for-banking-and-financial-services-leaders.pdf",
      permanent: true,
    },
    {
      source: "/case-studies/transforming-operations-trailer-chassis-leasing",
      destination:
        "/case-studies/mobile-application-case-studies",
      permanent: true,
    },
    {
      source: "/case-studies/edi-upgrade-global-grill-manufacturer",
      destination:
        "/case-studies/edi-transformation-for-manufacturer-case-study",
      permanent: true,
    },
    {
      source:
        "/case-studies/nav-to-d365-business-central-cloud-construction-giant",
      destination:
        "/case-studies/erp-migration-construction-dynamics365-case-study",
      permanent: true,
    },
    {
      source:
        "/case-studies/leading-phonotics-manufacturer-acheived-seamless-reporting-with-ms-fabric",
      destination:
        "/case-studies/ai-analytics-reporting-photonics-case-study",
      permanent: true,
    },
    {
      source:
        "/case-studies/design-thinking-to-reimagine-a-mission-critical-custom-application",
      destination:
        "/case-studies/cloud-claims-management-manufacturing-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/rescuing-salesforce-expansion-automation",
      destination: "/",
      permanent: true,
    },
    {
      source:
        "/case-studies/integration-of-two-salesforce-organizations-to-improve-operational-excellence-and-customer-service",
      destination:
        "/case-studies/salesforce-healthcare-data-unification-case-study",
      permanent: true,
    },
    {
      source:
        "/case-studies/greater-roi-with-lower-tco-by-migrating-to-microsoft-azure",
      destination:
        "/case-studies/erp-cloud-migration-waste-management-case-study",
      permanent: true,
    },
    {
      source:
        "/case-studies/healthcare-app-that-tracks-wellness-and-fitness-activities",
      destination:
        "/case-studies/healthcare-wellness-app-case-study",
      permanent: true,
    },
    {
      source:
        "/case-studies/automating-manual-processes-with-a-dynamics-erp-implementation-to-boost-operational-performance",
      destination:
        "/case-studies/orthopedic-erp-implementation-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/power-apps-for-human-resources-management",
      destination:
        "/case-studies/hr-power-apps-transformation-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/improve-customer-experience-with-field-service",
      destination:
        "/case-studies/water-services-dynamics-365-transformation-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/korcomptenz-power-apps-portal-case-study",
      destination:
        "/case-studies/cold-chain-case-management-portal-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/salesforce-solutions-case-study",
      destination:
        "/case-studies/salesforce-optimization-disease-management-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/quality-control-management",
      destination:
        "/case-studies/erp-quality-automation-logistics-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/retail-digital-transformation-case-study",
      destination:
        "/case-studies/retail-crm-erp-unification-dynamics-365-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/sports-fitness-center-salesforce-case-study",
      destination:
        "/case-studies/salesforce-crm-optimization-sports-wellness-case-study",
      permanent: true,
    },
    {
      source: "/korcomptenz-at-microsoft-fabric-community-conference-2026",
      destination:
        "/events/korcomptenz-at-microsoft-fabric-community-conference-2026",
      permanent: true,
    },

    //24/2/2026

    {
      source: "/blog/5-ad-tech-investments-to-make-in-your-advertising-agency",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/5-pain-points-a-unified-microsoft-dynamics-365-retail-management-system-solves-instantly",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/5-signs-you-need-a-new-microsoft-dynamics-crm-partner",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/5-top-erp-trends-in-2023-and-beyond",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/5-ways-to-achieve-student-success-with-data",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/6-key-success-factors-adobe-experience-manager-implementation",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/7-reasons-why-to-invest-in-web-design",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/ai-in-food-industry",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/ai-in-hospitality-industry",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/api-testing-services",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/artificial-intelligence-as-a-service-in-the-cloud",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/azure-hosting",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/azure-migration-and-modernization-scenarios",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/azure-migration-and-modernization-solution",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/benefits-of-cloud-native-applications",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/best-data-visualization-tools-software",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/best-practices-for-successful-database-migration-to-oracle-cloud",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/can-your-business-benefit-from-a-37-increase-in-revenue-korcomptenz-blog",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/cloud-migration-strategies",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/cloud-solutions",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/critical-questions-assessing-commerce-platform",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/crm-consulting-sales-success",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/crm-consulting-services-lead-management",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/developing-your-mobile-app",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/disaster-recovery-solutions",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/dynamics-ax-upgrade",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/dynamics-retail-solutions",
      destination: "/insights/blog",
      permanent: false,
    },

    {
      source: "/blog/edi-in-logistics",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/enterprise-mobility-solutions",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/erp-data-migration",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/erp-implementation-rescue-transforming-challenges-into-success",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/erp-rescue-implementation-getting-project-back-on-track",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/fortifying-finance-power-of-secure-virtual-desktop-infrastructure",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/freshworks",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/getting-started-with-salesforce-einstein-ai",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/helpdesk-support-options",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/honeypot-cybersecurity-guide",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/how-can-mes-and-erp-integration-help-you-achieve-industry-capabilities",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/how-marketers-spend-their-money",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/how-to-maximize-your-it-roi",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/how-website-drives-traffic",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/implementing-dynamics-365-finance-and-operations",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/ios-android",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/is-automation-the-answer-to-my-resource-needs",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/is-the-future-of-the-fashion-industry-in-the-hands-of-ai-technology",
      destination: "/insights/blog",
      permanent: false,
    },

    {
      source: "/blog/managed-services-provider",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/marketing-on-the-internet-of-things",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/mautic",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/microsoft-dynamics-365-ce-the-game-changer-for-bfsi-customer-engagement",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-dynamics-365-for-retail",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-dynamics-365-pricing-guide",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-dynamics-nav-2018",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-onedrive",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-power-app-power-platform",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-sharepoint",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-teams",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-teams-for-professionals",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-teams-integrations",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/modernize-legacy-apps-with-microservices-containerization",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/oracle-cloud-applications-revolutionalize-business-operations",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/oracle-integration-features-challenges-benefits-best-practices",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/our-web-and-mobile-technologies",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/performance-tuning-for-dynamics-ax",
      destination: "/insights/blog",
      permanent: false,
    },

    {
      source: "/blog/quick-start-guide-on-kentico",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/retail-analytics-transform-planning-pricing-customer-experiences",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/rpa-not-just-for-billion-dollar-companies",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/salesforce-crm-solutions-unlock-growth",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/salesforce-for-wealth-management",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/salesforce-implementation-partners",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/salesforce-integration-services",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/salesforce-or-microsoft-dynamics-365",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/salesforce-simple-flexible-platform",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/sap-application-management-services",
      destination: "/insights/blog",
      permanent: false,
    },

    {
      source: "/blog/smart-speaker-technology",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/strengthen-business-devsecops-development-and-security",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/supply-chain-disruptions-and-how-to-overcome-them",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/tag/dynamics-365-business-central",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/the-future-of-cloud-security-top-trends-to-watch-in-2024-and-beyond",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/the-industry-leading-crm",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/top-10-advantages-of-sap-implementation",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/top-10-web-security-issues",
      destination: "/insights/blog",
      permanent: false,
    },

    {
      source: "/blog/top-reasons-to-choose-microsoft-dynamics-365",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/trends-in-b2b-e-commerce",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/understanding-tcp-ip-osi-model-layers",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/web-security-standards",
      destination: "/insights/blog",
      permanent: false,
    },

    {
      source: "/blog/what-is-augmented-reality",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/why-have-mobile-applications",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/why-should-you-implement-intelligent-security-for-the-modern-workplace",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/why-upgrade-dynamics-gp-to-bc",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/wordpress",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/wordpress-vs-drupal",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/wordpress-vs-drupal",
      destination: "/insights/blog",
      permanent: false,
    },
    {
      source: "/appsource/privacy-policy",
      destination: "/privacy-policy",
      permanent: false,
    },
    {
      source: "/careers",
      destination: "/career",
      permanent: false,
    },
    {
      source: "/oracle",
      destination: "/",
      permanent: false,
    },
    {
      source: "/oracle/analytics",
      destination: "/",
      permanent: false,
    },
    {
      source: "/oracle/financials",
      destination: "/",
      permanent: false,
    },
    {
      source: "/oracle/oracle-cloud-erp",
      destination: "/",
      permanent: false,
    },
    {
      source: "/oracle/oracle-cloud-manufacturing",
      destination: "/",
      permanent: false,
    },
    {
      source: "/oracle/oracle-supply-chain-management",
      destination: "/",
      permanent: false,
    },
    {
      source: "/sap/sap-merger-and-acquisition",
      destination:
        "/sap/sap-merger-and-acquisition-consulting",
      permanent: false,
    },
    {
      source: "/solution-accelerators",
      destination: "/kor-solution-accelerators",
      permanent: false,
    },
    {
      source: "/who-we-are",
      destination: "/about-us",
      permanent: false,
    },
    {
      source: "/client-success",
      destination: "/case-studies",
      permanent: false,
    },
    {
      source: "/grant-management/faqs",
      destination:
        "/whitepaper/KORSmartGrants365.pdf",
      permanent: false,
    },
    {
      source: "/kor-bank-iq",
      destination:
        "/ai-assisted-retail-banking-microsoft-fabric",
      permanent: false,
    },
    {
      source: "/korcares",
      destination: "/kor-cares",
      permanent: false,
    },
    {
      source: "/logistics",
      destination:
        "/industries/logistics-and-transportation",
      permanent: false,
    },
    {
      source: "/manufacturing",
      destination: "/industries/manufacturing",
      permanent: false,
    },
    {
      source: "/medical-devices",
      destination:
        "/industries/manufacturing/medical-devices",
      permanent: false,
    },

    //25.02.2026??

    {
      source: "/cloud/ai-powered-cloud-managed-services",
      destination:
        "/cloud/ai-powered-infrastructure-managed-services",
      permanent: true,
    },
    {
      source: "/salesforce/salesforce-rescue-and-rapid-response",
      destination: "/crm/crm-implementation-rescue",
      permanent: true,
    },

    //05.03.2026
    {
      source: "/microsoft-dynamics-365-business-central-product-configurator",
      destination:
        "/microsoft-dynamics-365/microsoft-dynamics-365-business-central-product-configurator",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-365-business-central-quality-control",
      destination:
        "/microsoft-dynamics-365/microsoft-dynamics-365-business-central-quality-control",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-365-customer-engagement",
      destination:
        "/microsoft-dynamics-365/microsoft-dynamics-365-customer-engagement",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-365-customer-insights",
      destination:
        "/microsoft-dynamics-365/microsoft-dynamics-365-customer-insights",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-365-managed-services",
      destination:
        "/microsoft-dynamics-365/microsoft-dynamics-365-managed-services",
      permanent: true,
    },
    {
      source:
        "/microsoft-dynamics-365/microsoft-dynamics-365-erp-advisory-and-consulting",
      destination:
        "/erp/erp-advisory-and-consulting-services",
      permanent: true,
    },
    {
      source: "/cloud/cloud-managed-services",
      destination:
        "/cloud/ai-powered-infrastructure-managed-services",
      permanent: true,
    },
    {
      source: "/cloud/cloud-migration-services",
      destination:
        "/cloud/ai-powered-cloud-migration-services",
      permanent: true,
    },
    {
      source: "/cloud/enterprise-analytics-cloud-services",
      destination: "/modern-cloud-data-services",
      permanent: true,
    },
    //11.3.2026

    {
      source: "/salesforce-einstein-ai-and-analytics-services",
      destination:
        "/salesforce/salesforce-einstein-ai-and-analytics",
      permanent: true,
    },
    {
      source: "/banking-and-financial-services",
      destination:
        "/industries/banking-and-financial-services",
      permanent: true,
    },
    {
      source: "/case-studies/salesforce-crm-construction-materials-case-study",
      destination: "/case-studies",
      permanent: true,
    },
    {
      source: "/healthcare",
      destination: "/industries/healthcare",
      permanent: true,
    },

    {
      source: "/kor-bank-iq",
      has: [
        {
          type: "host",
          value: "dev01_korcomptenz.korcomptenz.com",
        },
      ],
      destination:
        "/ai-assisted-retail-banking-microsoft-fabric",
      permanent: true,
    },
    {
      source: "/logistics",
      destination:
        "/industries/logistics-and-transportation",
      permanent: true,
    },
    {
      source: "/crm-consulting-services",
      destination:
        "/crm-advisory-and-consulting-services",
      permanent: true,
    },
    {
      source: "/fashion-and-retail",
      destination: "/industries/retail",
      permanent: true,
    },
    {
      source: "/fashion-and-retail/microsoft-dynamics-365-for-retail",
      destination:
        "/microsoft-dynamics-365/microsoft-dynamics-unified-commerce",
      permanent: true,
    },
    {
      source: "/fashion-and-retail/k3-pebblestone",
      destination: "/",
      permanent: true,
    },
    {
      source: "/smb-sales-marketing-clickdimensions/:path*",
      has: [
        {
          type: "host",
          value: "dev01_korcomptenz.korcomptenz.com",
        },
      ],
      destination: "https://www.korcomptenz.com",
      permanent: true,
    },

    {
      source: "/microsoft-dynamics-solutions/book-a-consultation",
      destination: "/book-consultation/",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-solutions/book-a-free-demo",
      destination: "/book-consultation",
      permanent: true,
    },
    {
      source: "/microsoft-fabric-ai-reporting-cloud-manufacturing",
      destination: "/enterprise-ai-platform",
      permanent: true,
    },


    //24.03.2026
    {
      source: "/product-configurator-for-dynamics-365-business-central",
      destination: "/microsoft-dynamics-365/microsoft-dynamics-365-business-central-product-configurator",
      permanent: true,
    },

    //08/4/2026
    {
      source: "/kor-smartforge",
      destination: "/enterprise-ai-platform",
      permanent: true,
    },
    {
      source: "/kor-esgenius",
      destination: "/demo-days-drive-esg-compliance-and-business-growth",
      permanent: true,
    },
    {
      source: "/case-study/transforming-operations-trailer-chassis-leasing",
      destination: "/case-studies/mobile-application-case-studies",
      permanent: true,
    },
    {
      source: "/case-study/mobile-application-case-studies",
      destination: "/case-studies/mobile-application-case-studies",
      permanent: true,
    },
    {
      source: "/case-study/modern-digital-banking-solution",
      destination: "/case-studies/digital-experience-retail-banking-case-study",
      permanent: true,
    },
    {
      source: "/case-study/digital-experience-retail-banking-case-study",
      destination: "/case-studies/digital-experience-retail-banking-case-study",
      permanent: true,
    },
    {
      source: "/case-study/edi-upgrade-global-grill-manufacturer",
      destination: "/case-studies/edi-transformation-for-manufacturer-case-study",
      permanent: true,
    },
    {
      source: "/case-study/edi-transformation-for-manufacturer-case-study",
      destination: "/case-studies/edi-transformation-for-manufacturer-case-study",
      permanent: true,
    },
    {
      source: "/case-study/sap-slo-carve-in-for-process-industry",
      destination: "/case-studies/sap-slo-carve-in-for-process-industry",
      permanent: true,
    },
    {
      source: "/case-study/boosting-efficiency-savings-scalability",
      destination: "/case-studies/azure-cost-optimization-engineering-case-study",
      permanent: true,
    },
    {
      source: "/case-study/azure-cost-optimization-engineering-case-study",
      destination: "/case-studies/azure-cost-optimization-engineering-case-study",
      permanent: true,
    },
    {
      source: "/case-study/cloud-infrastructure-manufacturing",
      destination: "/case-studies/cloud-iot-analytics-manufacturing-case-study",
      permanent: true,
    },
    {
      source: "/case-study/cloud-iot-analytics-manufacturing-case-study",
      destination: "/case-studies/cloud-iot-analytics-manufacturing-case-study",
      permanent: true,
    },
    {
      source: "/case-study/salesforce-crm-for-financial-services",
      destination: "/case-studies/salesforce-crm-retail-banking-case-study",
      permanent: true,
    },
    {
      source: "/case-study/salesforce-crm-retail-banking-case-study",
      destination: "/case-studies/salesforce-crm-retail-banking-case-study",
      permanent: true,
    },
    {
      source: "/case-study/nav-to-d365-business-central-cloud-construction-giant",
      destination: "/case-studies/erp-migration-construction-dynamics365-case-study",
      permanent: true,
    },
    {
      source: "/case-study/erp-migration-construction-dynamics365-case-study",
      destination: "/case-studies/erp-migration-construction-dynamics365-case-study",
      permanent: true,
    },
    {
      source: "/case-study/leading-phonotics-manufacturer-acheived-seamless-reporting-with-ms-fabric",
      destination: "/case-studies/ai-analytics-reporting-photonics-case-study",
      permanent: true,
    },
    {
      source: "/case-study/ai-analytics-reporting-photonics-case-study",
      destination: "/case-studies/ai-analytics-reporting-photonics-case-study",
      permanent: true,
    },
    {
      source: "/case-study/streamline-field-service-customer-experience-salesforce-implementation",
      destination: "/case-studies/salesforce-field-service-manufacturing-case-study",
      permanent: true,
    },
    {
      source: "/case-study/salesforce-field-service-manufacturing-case-study",
      destination: "/case-studies/salesforce-field-service-manufacturing-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dynamics-365-fo-optical-equipment-manufacturer",
      destination: "/case-studies/erp-implementation-optical-manufacturing-case-study",
      permanent: true,
    },
    {
      source: "/case-study/erp-implementation-optical-manufacturing-case-study",
      destination: "/case-studies/erp-implementation-optical-manufacturing-case-study",
      permanent: true,
    },
    {
      source: "/case-study/rapid-erp-implementation-for-grill-manufacturer",
      destination: "/case-studies/erp-turnaround-manufacturing-dynamics365-case-study",
      permanent: true,
    },
    {
      source: "/case-study/erp-turnaround-manufacturing-dynamics365-case-study",
      destination: "/case-studies/erp-turnaround-manufacturing-dynamics365-case-study",
      permanent: true,
    },
    {
      source: "/case-study/erp-implementation-and-integration-for-foam-manufacturer",
      destination: "/case-studies/erp-implementation-foam-manufacturing-case-study",
      permanent: true,
    },
    {
      source: "/case-study/erp-implementation-foam-manufacturing-case-study",
      destination: "/case-studies/erp-implementation-foam-manufacturing-case-study",
      permanent: true,
    },
    {
      source: "/case-study/streamlining-retail-and-fashion-workflows-with-microsoft-dynamics-365-fo",
      destination: "/case-studies/erp-support-fashion-retail-case-study",
      permanent: true,
    },
    {
      source: "/case-study/erp-support-fashion-retail-case-study",
      destination: "/case-studies/erp-support-fashion-retail-case-study",
      permanent: true,
    },
    {
      source: "/case-study/salesforce-transformation-business-units-automation",
      destination: "/case-studies/salesforce-automation-construction-distribution-case-study",
      permanent: true,
    },
    {
      source: "/case-study/salesforce-automation-construction-distribution-case-study",
      destination: "/case-studies/salesforce-automation-construction-distribution-case-study",
      permanent: true,
    },
    {
      source: "/case-study/product-health-reporting",
      destination: "/case-studies/data-infrastructure-modernization-carpet-manufacturing-case-study",
      permanent: true,
    },
    {
      source: "/case-study/data-infrastructure-modernization-carpet-manufacturing-case-study",
      destination: "/case-studies/data-infrastructure-modernization-carpet-manufacturing-case-study",
      permanent: true,
    },
    {
      source: "/case-study/leveraging-kentico-xperience-13-to-replace-a-legacy-application",
      destination: "/case-studies/kentico-website-implementation-travel-industry-case-study",
      permanent: true,
    },
    {
      source: "/case-study/kentico-website-implementation-travel-industry-case-study",
      destination: "/case-studies/kentico-website-implementation-travel-industry-case-study",
      permanent: true,
    },
    {
      source: "/case-study/improving-customer-experience-effciency-aftermarket-suspensions-client",
      destination: "/case-studies/improving-customer-experience-effciency-aftermarket-suspensions-client",
      permanent: true,
    },
    {
      source: "/case-study/tranforming-user-experience-customer-portal-task-automation-for-utility-giant",
      destination: "/case-studies/utility-customer-portal-modernization-case-study",
      permanent: true,
    },
    {
      source: "/case-study/utility-customer-portal-modernization-case-study",
      destination: "/case-studies/utility-customer-portal-modernization-case-study",
      permanent: true,
    },
    {
      source: "/case-study/comprehensive-support-services-for-automotive-leader",
      destination: "/case-studies/automotive-erp-modernization-ax2009-case-study",
      permanent: true,
    },
    {
      source: "/case-study/automotive-erp-modernization-ax2009-case-study",
      destination: "/case-studies/automotive-erp-modernization-ax2009-case-study",
      permanent: true,
    },
    {
      source: "/case-study/robust-ecommerce-platform-for-dental-device-manufacturer",
      destination: "/case-studies/dental-ecommerce-platform-integration-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dental-ecommerce-platform-integration-case-study",
      destination: "/case-studies/dental-ecommerce-platform-integration-case-study",
      permanent: true,
    },
    {
      source: "/case-study/advanced-web-portal-development-for-enhanced-engagement",
      destination: "/case-studies/global-youth-film-festival-portal-case-study",
      permanent: true,
    },
    {
      source: "/case-study/global-youth-film-festival-portal-case-study",
      destination: "/case-studies/global-youth-film-festival-portal-case-study",
      permanent: true,
    },
    {
      source: "/case-study/customer-experience-kentico",
      destination: "/case-studies/kentico-flooring-digital-experience-case-study",
      permanent: true,
    },
    {
      source: "/case-study/kentico-flooring-digital-experience-case-study",
      destination: "/case-studies/kentico-flooring-digital-experience-case-study",
      permanent: true,
    },
    {
      source: "/case-study/custom-application-construction-industry",
      destination: "/case-studies/smart-contract-app-construction-d365-case-study",
      permanent: true,
    },
    {
      source: "/case-study/smart-contract-app-construction-d365-case-study",
      destination: "/case-studies/smart-contract-app-construction-d365-case-study",
      permanent: true,
    },
    {
      source: "/case-study/website-redesign-services-for-healthcare-business",
      destination: "/case-studies/healthcare-website-revamp-fqhc-case-study",
      permanent: true,
    },
    {
      source: "/case-study/healthcare-website-revamp-fqhc-case-study",
      destination: "/case-studies/healthcare-website-revamp-fqhc-case-study",
      permanent: true,
    },
    {
      source: "/case-study/design-thinking-to-reimagine-a-mission-critical-custom-application",
      destination: "/case-studies/cloud-claims-management-manufacturing-case-study",
      permanent: true,
    },
    {
      source: "/case-study/cloud-claims-management-manufacturing-case-study",
      destination: "/case-studies/cloud-claims-management-manufacturing-case-study",
      permanent: true,
    },
    {
      source: "/case-study/integration-of-two-salesforce-organizations-to-improve-operational-excellence-and-customer-service",
      destination: "/case-studies/salesforce-healthcare-data-unification-case-study",
      permanent: true,
    },
    {
      source: "/case-study/salesforce-healthcare-data-unification-case-study",
      destination: "/case-studies/salesforce-healthcare-data-unification-case-study",
      permanent: true,
    },
    {
      source: "/case-study/greater-roi-with-lower-tco-by-migrating-to-microsoft-azure",
      destination: "/case-studies/erp-cloud-migration-waste-management-case-study",
      permanent: true,
    },
    {
      source: "/case-study/erp-cloud-migration-waste-management-case-study",
      destination: "/case-studies/erp-cloud-migration-waste-management-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dynamics-365-finance-and-operations-in-fashion-retail",
      destination: "/case-studies/fashion-retail-erp-implementation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/fashion-retail-erp-implementation-case-study",
      destination: "/case-studies/fashion-retail-erp-implementation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/healthcare-app-that-tracks-wellness-and-fitness-activities",
      destination: "/case-studies/healthcare-wellness-app-case-study",
      permanent: true,
    },
    {
      source: "/case-study/healthcare-wellness-app-case-study",
      destination: "/case-studies/healthcare-wellness-app-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dynamics-365-in-fashion-manufacturing",
      destination: "/case-studies/luxury-textile-erp-crm-implementation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/luxury-textile-erp-crm-implementation-case-study",
      destination: "/case-studies/luxury-textile-erp-crm-implementation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/automating-manual-processes-with-a-dynamics-ax-implementation-to-boost-operational-performance",
      destination: "/case-studies/orthopedic-erp-implementation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/orthopedic-erp-implementation-case-study",
      destination: "/case-studies/orthopedic-erp-implementation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/power-apps-for-human-resources-management",
      destination: "/case-studies/hr-power-apps-transformation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/hr-power-apps-transformation-case-study",
      destination: "/case-studies/hr-power-apps-transformation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/improve-customer-experience-with-field-service",
      destination: "/case-studies/water-services-dynamics-365-transformation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/water-services-dynamics-365-transformation-case-study",
      destination: "/case-studies/water-services-dynamics-365-transformation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/korcomptenz-power-apps-portal-case-study",
      destination: "/case-studies/cold-chain-case-management-portal-case-study",
      permanent: true,
    },
    {
      source: "/case-study/periodontal-mobile-app",
      destination: "/case-studies/oral-health-mobile-app-diagnosis-case-study",
      permanent: true,
    },
    {
      source: "/case-study/oral-health-mobile-app-diagnosis-case-study",
      destination: "/case-studies/oral-health-mobile-app-diagnosis-case-study",
      permanent: true,
    },
    {
      source: "/case-study/patient-survey-software",
      destination: "/case-studies/healthcare-survey-app-modernization-case-study",
      permanent: true,
    },
    {
      source: "/case-study/healthcare-survey-app-modernization-case-study",
      destination: "/case-studies/healthcare-survey-app-modernization-case-study",
      permanent: true,
    },
    {
      source: "/case-study/salesforce-solutions-case-study",
      destination: "/case-studies/salesforce-optimization-disease-management-case-study",
      permanent: true,
    },
    {
      source: "/case-study/salesforce-optimization-disease-management-case-study",
      destination: "/case-studies/salesforce-optimization-disease-management-case-study",
      permanent: true,
    },
    {
      source: "/case-study/quality-control-management",
      destination: "/case-studies/erp-quality-automation-logistics-case-study",
      permanent: true,
    },
    {
      source: "/case-study/erp-quality-automation-logistics-case-study",
      destination: "/case-studies/erp-quality-automation-logistics-case-study",
      permanent: true,
    },
    {
      source: "/case-study/salesforce-online-onboarding-case-study",
      destination: "/case-studies/ira-onboarding-automation-salesforce-case-study",
      permanent: true,
    },
    {
      source: "/case-study/ira-onboarding-automation-salesforce-case-study",
      destination: "/case-studies/ira-onboarding-automation-salesforce-case-study",
      permanent: true,
    },
    {
      source: "/case-study/budget-control-customization-to-effectively-monitor-expenditure-and-avoid-overpaying",
      destination: "/case-studies/nonprofit-erp-modernization-business-central-case-study",
      permanent: true,
    },
    {
      source: "/case-study/nonprofit-erp-modernization-business-central-case-study",
      destination: "/case-studies/nonprofit-erp-modernization-business-central-case-study",
      permanent: true,
    },
    {
      source: "/case-study/microsoft-dynamics-ax-support",
      destination: "/case-studies/global-retail-erp-support-dynamics-ax-case-study",
      permanent: true,
    },
    {
      source: "/case-study/global-retail-erp-support-dynamics-ax-case-study",
      destination: "/case-studies/global-retail-erp-support-dynamics-ax-case-study",
      permanent: true,
    },
    {
      source: "/case-study/retail-digital-transformation-case-study",
      destination: "/case-studies/retail-crm-erp-unification-dynamics-365-case-study",
      permanent: true,
    },
    {
      source: "/case-study/retail-crm-erp-unification-dynamics-365-case-study",
      destination: "/case-studies/retail-crm-erp-unification-dynamics-365-case-study",
      permanent: true,
    },
    {
      source: "/case-study/sports-fitness-center-salesforce-case-study",
      destination: "/case-studies/salesforce-crm-optimization-sports-wellness-case-study",
      permanent: true,
    },
    {
      source: "/case-study/salesforce-crm-optimization-sports-wellness-case-study",
      destination: "/case-studies/salesforce-crm-optimization-sports-wellness-case-study",
      permanent: true,
    },
    {
      source: "/case-study/product-configurator-for-microsoft-dynamics-nav",
      destination: "/case-studies/nav-product-configurator-commercial-printing-case-study",
      permanent: true,
    },
    {
      source: "/case-study/nav-product-configurator-commercial-printing-case-study",
      destination: "/case-studies/nav-product-configurator-commercial-printing-case-study",
      permanent: true,
    },
    {
      source: "/case-study/education-client-boosts-sales-and-marketing-with-microsoft-dynamics-365",
      destination: "/case-studies/dynamics-365-event-donor-platform-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dynamics-365-event-donor-platform-case-study",
      destination: "/case-studies/dynamics-365-event-donor-platform-case-study",
      permanent: true,
    },
    {
      source: "/case-study/optimizing-ware-house",
      destination: "/case-studies/dynamics-365-retail-warehouse-optimization-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dynamics-365-retail-warehouse-optimization-case-study",
      destination: "/case-studies/dynamics-365-retail-warehouse-optimization-case-study",
      permanent: true,
    },
    {
      source: "/case-study/sage-to-dynamics-365-finance-and-operations",
      destination: "/case-studies/dynamics-365-warehouse-automation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dynamics-365-warehouse-automation-case-study",
      destination: "/case-studies/dynamics-365-warehouse-automation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/sales-commission-process-automation-boosted-revenue-sales-morale",
      destination: "/case-studies/dynamics-365-sales-commission-automation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dynamics-365-sales-commission-automation-case-study",
      destination: "/case-studies/dynamics-365-sales-commission-automation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dynamics-crm-upgrade-and-marketing-features-implementation",
      destination: "/case-studies/dynamics-365-crm-marketing-cloud-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dynamics-365-crm-marketing-cloud-case-study",
      destination: "/case-studies/dynamics-365-crm-marketing-cloud-case-study",
      permanent: true,
    },
    {
      source: "/case-study/generate-proactive-insights-with-azure-synapse-analytics-and-power-bi",
      destination: "/case-studies/azure-synapse-d365-analytics-case-study",
      permanent: true,
    },
    {
      source: "/case-study/azure-synapse-d365-analytics-case-study",
      destination: "/case-studies/azure-synapse-d365-analytics-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dynamics-365-business-central-customization",
      destination: "/case-studies/d365-business-central-seafood-erp-automation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/d365-business-central-seafood-erp-automation-case-study",
      destination: "/case-studies/d365-business-central-seafood-erp-automation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/microsoft-cloud-solution-provider",
      destination: "/case-studies/azure-migration-nonprofit-it-modernization-case-study",
      permanent: true,
    },
    {
      source: "/case-study/azure-migration-nonprofit-it-modernization-case-study",
      destination: "/case-studies/azure-migration-nonprofit-it-modernization-case-study",
      permanent: true,
    },
    {
      source: "/case-study/enterprise-level-infra-managed-services-for-fashion-brand",
      destination: "/case-studies/it-managed-services-ecommerce-infrastructure-case-study",
      permanent: true,
    },
    {
      source: "/case-study/it-managed-services-ecommerce-infrastructure-case-study",
      destination: "/case-studies/it-managed-services-ecommerce-infrastructure-case-study",
      permanent: true,
    },
    {
      source: "/case-study/extending-salesforce-capabilities-with-custom-lightning-apps",
      destination: "/case-studies/salesforce-lightning-manufacturing-workflow-case-study",
      permanent: true,
    },
    {
      source: "/case-study/salesforce-lightning-manufacturing-workflow-case-study",
      destination: "/case-studies/salesforce-lightning-manufacturing-workflow-case-study",
      permanent: true,
    },
    {
      source: "/case-study/an-always-on-dynamics-365-support-services-boosts-operational-efficiency",
      destination: "/case-studies/dynamics-365-seafood-brand-transformation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dynamics-365-seafood-brand-transformation-case-study",
      destination: "/case-studies/dynamics-365-seafood-brand-transformation-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dynamics-ax-ecommerce-integration",
      destination: "/case-studies/dynamics-365-integration-for-manufacturer-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dynamics-365-integration-for-manufacturer-case-study",
      destination: "/case-studies/dynamics-365-integration-for-manufacturer-case-study",
      permanent: true,
    },
    {
      source: "/case-study/predictive-analytics-insights-for-better-vehicle-maintenance-and-customer-service",
      destination: "/case-studies/predictive-analytics-cold-chain-logistics-case-study",
      permanent: true,
    },
    {
      source: "/case-study/predictive-analytics-cold-chain-logistics-case-study",
      destination: "/case-studies/predictive-analytics-cold-chain-logistics-case-study",
      permanent: true,
    },
    {
      source: "/case-study/integrations-with-microsoft-dynamics-365-business-central",
      destination: "/case-studies/staffing-workflow-automation-dynamics-365-case-study",
      permanent: true,
    },
    {
      source: "/case-study/staffing-workflow-automation-dynamics-365-case-study",
      destination: "/case-studies/staffing-workflow-automation-dynamics-365-case-study",
      permanent: true,
    },
    {
      source: "/case-study/ensure-vital-control-over-inventory-traceability-operations-and-efficiency",
      destination: "/case-studies/dynamics-365-inventory-optimization-case-study",
      permanent: true,
    },
    {
      source: "/case-study/dynamics-365-inventory-optimization-case-study",
      destination: "/case-studies/dynamics-365-inventory-optimization-case-study",
      permanent: true,
    },
    {
      source: "/case-study/faster-month-end-closings-from-quickbooks-to-dynamics-365-erp-migration",
      destination: "/case-studies/faster-month-end-closings-from-quickbooks-to-dynamics-365-erp-migration",
      permanent: true,
    },
    {
      source: "/case-study/d365-implementation-optical-equipment-manufacturer",
      destination: "/case-studies/d365-implementation-optical-equipment-manufacturer",
      permanent: true,
    },
    {
      source: "/case-study/reimagining-the-enterprise-for-purpose-and-performance",
      destination: "/case-studies/reimagining-the-enterprise-for-purpose-and-performance",
      permanent: true,
    },
    {
      source: "/case-study/sage-to-dynamics-365-fo-migration-saudi-oil-gas",
      destination: "/case-studies/sage-to-dynamics-365-fo-migration-saudi-oil-gas",
      permanent: true,
    },
    {
      source: "/case-study/ai-powered-bank-analytics-transformation",
      destination: "/case-studies/ai-powered-bank-analytics-transformation",
      permanent: true,
    },
    {
      source: "/case-study/chemical-manufacturer-crm-modernization",
      destination: "/case-studies/chemical-manufacturer-crm-modernization",
      permanent: true,
    },
    {
      source: "/sap/sap-questionnaire/",
      destination: "/sap",
      permanent: true,
    },
    {
      source: "/erp-edi-integration/",
      destination: "/erp/erp-edi-integration",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-solutions/book-a-consultation/",
      destination: "/contact-us",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-solutions/book-a-free-demo/",
      destination: "/contact-us",
      permanent: true,
    },
    {
      source: "/$",
      destination: "/",
      permanent: true,
    },
    {
      source: "/>",
      destination: "/",
      permanent: true,
    },
    {
      source: "/15/19/22/23",
      destination: "/",
      permanent: true,
    },
    {
      source: "/178",
      destination: "/",
      permanent: true,
    },
    {
      source: "/au",
      destination: "/",
      permanent: true,
    },
    {
      source: "/au/2025/04/23",
      destination: "/",
      permanent: true,
    },
    {
      source: "/au/awards-and-recognitions",
      destination: "/",
      permanent: true,
    },
    {
      source: "/au/page/80",
      destination: "/",
      permanent: true,
    },
    {
      source: "/au/playbook/supply-chain-optimization-solutions-for-intelligent-supply-chains",
      destination: "/",
      permanent: true,
    },
    {
      source: "/au/progressive-web-app-development",
      destination: "/",
      permanent: true,
    },
    {
      source: "/au/software-development/qa-testing",
      destination: "/",
      permanent: true,
    },
    {
      source: "/author/admin",
      destination: "/",
      permanent: true,
    },
    {
      source: "/ca/app-development",
      destination: "/",
      permanent: true,
    },
    {
      source: "/ca/digital-workplace-services",
      destination: "/",
      permanent: true,
    },
    {
      source: "/ca/page/2",
      destination: "/",
      permanent: true,
    },
    {
      source: "/education",
      destination: "/",
      permanent: true,
    },
    {
      source: "/en/education",
      destination: "/",
      permanent: true,
    },
    {
      source: "/en_AU",
      destination: "/",
      permanent: true,
    },
    {
      source: "/en_au",
      destination: "/",
      permanent: true,
    },
    {
      source: "/identity-access-management.html",
      destination: "/",
      permanent: true,
    },
    {
      source: "/microsoft-sharepoint",
      destination: "/",
      permanent: true,
    },
    {
      source: "/migration-to-Office365",
      destination: "/",
      permanent: true,
    },
    {
      source: "/page/2",
      destination: "/",
      permanent: true,
    },
    {
      source: "/page/20",
      destination: "/",
      permanent: true,
    },
    {
      source: "/page/33",
      destination: "/",
      permanent: true,
    },
    {
      source: "/page/37",
      destination: "/",
      permanent: true,
    },
    {
      source: "/page/44",
      destination: "/",
      permanent: true,
    },
    {
      source: "/page/5",
      destination: "/",
      permanent: true,
    },
    {
      source: "/page/6",
      destination: "/",
      permanent: true,
    },
    {
      source: "/page/61",
      destination: "/",
      permanent: true,
    },
    {
      source: "/page/76",
      destination: "/",
      permanent: true,
    },
    {
      source: "/page/8",
      destination: "/",
      permanent: true,
    },
    {
      source: "/pega",
      destination: "/",
      permanent: true,
    },
    {
      source: "/recruitment-process-outsourcing",
      destination: "/",
      permanent: true,
    },
    {
      source: "/sitecore",
      destination: "/",
      permanent: true,
    },
    {
      source: "/web-solutions",
      destination: "/",
      permanent: true,
    },
    {
      source: "/ae/case-studies/dynamics-365-inventory-optimization-case-study",
      destination: "/case-studies/dynamics-365-inventory-optimization-case-study",
      permanent: true,
    },
    {
      source: "/internet-of-things",
      destination: "/artificial-intelligence/internet-of-things-iot-services",
      permanent: true,
    },
    {
      source: "/au/artificial-intelligence/microsoft-fabric",
      destination: "/artificial-intelligence/microsoft-fabric",
      permanent: true,
    },
    {
      source: "/artificial-intelligence/responsible-ai-integration",
      destination: "/artificial-intelligence/responsible-ai-solutions",
      permanent: true,
    },
    {
      source: "/au/artificial-intelligence/responsible-ai-integration",
      destination: "/artificial-intelligence/responsible-ai-solutions",
      permanent: true,
    },
    {
      source: "/ca/artificial-intelligence/responsible-ai-integration",
      destination: "/artificial-intelligence/responsible-ai-solutions",
      permanent: true,
    },
    {
      source: "/smb-sales-marketing-clickdimensions",
      destination: "/blog/evaluating-enterprise-crm-solutions-smb-guide",
      permanent: true,
    },
    {
      source: "/quick-service-restaurant",
      destination: "/blog/how-analytics-and-digital-tecnologies-ensure-restaurant-growth",
      permanent: true,
    },
    {
      source: "/quick-service-restaurants",
      destination: "/blog/how-analytics-and-digital-tecnologies-ensure-restaurant-growth",
      permanent: true,
    },
    {
      source: "/ae/erp/erp-free-consultation",
      destination: "/blog/how-to-choose-erp-system",
      permanent: true,
    },
    {
      source: "/microsoft-power-platform/microsoft-power-apps",
      destination: "/blog/microsoft-power-apps-pricing-licensing",
      permanent: true,
    },
    {
      source: "/artificial-intelligence/robotic-process-automation-rpa-services",
      destination: "/blog/sap-robotic-process-automation-rpa",
      permanent: true,
    },
    {
      source: "/ax-upgrade-to-d365",
      destination: "/microsoft-dynamics-365/upgrade-ax-to-dynamics-365",
      permanent: true,
    },
    {
      source: "/dynamics-ax-upgrade",
      destination: "https://dev01_korcomptenz.korcomptenz.com/microsoft-dynamics-365/upgrade-ax-to-dynamics-365/",
      permanent: true,
    },
    {
      source: "/upgrade-ax-to-d365",
      destination: "https://dev01_korcomptenz.korcomptenz.com/microsoft-dynamics-365/upgrade-ax-to-dynamics-365/",
      permanent: true,
    },
    {
      source: "/playbook/agentic-ai-solutions-for-banking-and-financial-services",
      destination: "https://content.korcomptenz.com/story/transform-your-customer-experience-with-ai/page/1?draft=6b03102e-831e-4521-a6ac-61b869aef04e",
      permanent: true,
    },
    {
      source: "/network-connectivity.html",
      destination: "/blog/what-is-a-local-area-network",
      permanent: true,
    },
    {
      source: "/permanent-hiring",
      destination: "/career",
      permanent: true,
    },
    {
      source: "/au/case-study-old/retail-digital-transformation-case-study",
      destination: "/case-studies/retail-crm-erp-unification-dynamics-365-case-study",
      permanent: true,
    },
    {
      source: "/ca/case-study-old/rapid-erp-implementation-for-grill-manufacturer",
      destination: "/case-studies/erp-turnaround-manufacturing-dynamics365-case-study",
      permanent: true,
    },
    {
      source: "/case-study-old/boosting-efficiency-savings-scalability",
      destination: "/case-studies/azure-cost-optimization-engineering-case-study",
      permanent: true,
    },
    {
      source: "/case-study-old/transforming-operations-trailer-chassis-leasing",
      destination: "/case-studies/mobile-application-case-studies",
      permanent: true,
    },
    {
      source: "/en_CA/case-study/rigorous-testing-optical-manufacturer-quality-assurance",
      destination: "/case-studies",
      permanent: true,
    },
    {
      source: "/ca/case-studies/edi-transformation-for-manufacturer-case-study",
      destination: "/case-studies/edi-transformation-for-manufacturer-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/ai-cloud-migration",
      destination: "/case-studies/erp-cloud-migration-waste-management-case-study",
      permanent: true,
    },
    {
      source: "/au/case-study/cloud-servicesservices",
      destination: "/case-study/cloud-case-studies",
      permanent: true,
    },
    {
      source: "/au/case-study-old/microsoft-cloud-solution-provider",
      destination: "/case-study/cloud-case-studies",
      permanent: true,
    },
    {
      source: "/case-study/enterprise-applications-case-studies/page/2",
      destination: "/case-study/enterprise-applications-case-studies",
      permanent: true,
    },
    {
      source: "/case-study/enterprise-applications-case-studies/page/4",
      destination: "/case-study/enterprise-applications-case-studies",
      permanent: true,
    },
    {
      source: "/upgrading-to-azure-Is-as-easy-as-1-2-12",
      destination: "/case-study/microsoft-azure-case-studies",
      permanent: true,
    },
    {
      source: "/case-study/microsoft-dynamics-365-case-studies/page/3",
      destination: "/case-study/microsoft-dynamics-365-case-studies",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-solutions/success-stories",
      destination: "/microsoft-dynamics-solutions/brochures/",
      permanent: true,
    },
    {
      source: "/case-study/microsoft-fabric-case-studies/feed",
      destination: "/case-study/microsoft-fabric-case-studies",
      permanent: true,
    },
    {
      source: "/case-study-old/leading-phonotics-manufacturer-acheived-seamless-reporting-with-ms-fabric",
      destination: "/case-studies/ai-analytics-reporting-photonics-case-study",
      permanent: true,
    },
    {
      source: "/ae/case-study/others-case-studies",
      destination: "/case-study/others-case-study",
      permanent: true,
    },
    {
      source: "/sap/brochures-success-stories",
      destination: "/case-study/sap-case-studies",
      permanent: true,
    },
    {
      source: "/case-study-old/sap-slo-carve-in-for-process-industry",
      destination: "/case-studies/sap-slo-carve-in-for-process-industry",
      permanent: true,
    },
    {
      source: "/ca/cloud/cloud-migration-services",
      destination: "/cloud/ai-powered-cloud-migration-services",
      permanent: true,
    },
    {
      source: "/ca/cloud/ai-powered-cloud-managed-services",
      destination: "/cloud/ai-powered-infrastructure-managed-services",
      permanent: true,
    },
    {
      source: "/sap-on-microsoft-azure",
      destination: "/sap/sap-on-azure",
      permanent: true,
    },
    {
      source: "/cloud/cloud-application-modernization-services",
      destination: "/cloud/cloud-modernization-services",
      permanent: true,
    },
    {
      source: "/cloud/cyber-security-services",
      destination: "/cloud/cyber-secruity-services",
      permanent: true,
    },
    {
      source: "/au/salesforce/salesforce-rescue-and-rapid-response",
      destination: "/crm/crm-implementation-rescue",
      permanent: true,
    },
    {
      source: "/crm-rescue-and-rapid-response-solutions",
      destination: "/crm/crm-implementation-rescue",
      permanent: true,
    },
    {
      source: "/au/edi-consulting-services",
      destination: "/edi-consulting-services",
      permanent: true,
    },
    {
      source: "/ae/education/eduuniv",
      destination: "/education/eduuniv",
      permanent: true,
    },
    {
      source: "/ae/microsoft-dynamics-365/microsoft-dynamics-365-erp-advisory-and-consulting/feed",
      destination: "/erp/erp-advisory-and-consulting-services",
      permanent: true,
    },
    {
      source: "/ca/erp-solution",
      destination: "/erp/erp-advisory-and-consulting-services",
      permanent: true,
    },
    {
      source: "/en_au/erp",
      destination: "/erp/erp-advisory-and-consulting-services",
      permanent: true,
    },
    {
      source: "/enterprise-resource-planning-erp-solutions",
      destination: "/erp/erp-advisory-and-consulting-services",
      permanent: true,
    },
    {
      source: "/erp",
      destination: "/erp/erp-advisory-and-consulting-services",
      permanent: true,
    },
    {
      source: "/erp/erp-free-consultation",
      destination: "/erp/erp-advisory-and-consulting-services",
      permanent: true,
    },
    {
      source: "/erp-advisory-and-consulting-services",
      destination: "/erp/erp-advisory-and-consulting-services",
      permanent: true,
    },
    {
      source: "/erp-implementation-rescue",
      destination: "/erp/erp-implementation-rescue",
      permanent: true,
    },
    {
      source: "/upgrade-and-migration",
      destination: "/erp/erp-migration-and-upgrade-services",
      permanent: true,
    },
    {
      source: "/en/newsroom-and-events",
      destination: "/events",
      permanent: true,
    },
    {
      source: "/korcomptenz-kentico-11",
      destination: "/cms/kentico",
      permanent: true,
    },
    {
      source: "/banking-and-financial-services",
      destination: "/industries/banking-and-financial-services",
      permanent: true,
    },
    {
      source: "/banking-and-financial-services/digital-banking-financial-services",
      destination: "https://campaigns.korcomptenz.com/digital-banking-suite",
      permanent: true,
    },
    {
      source: "/healthcare-digital-solutions",
      destination: "/industries/healthcare",
      permanent: true,
    },
    {
      source: "/portfolio-tags/manufacturing",
      destination: "/industries/manufacturing",
      permanent: true,
    },
    {
      source: "/automotive",
      destination: "/industries/manufacturing/automotive",
      permanent: true,
    },
    {
      source: "/en_au/medical-devices",
      destination: "/industries/manufacturing/medical-devices",
      permanent: true,
    },
    {
      source: "/au/microsoft-dynamics-365-for-fashion-retail",
      destination: "/industries/retail",
      permanent: true,
    },
    {
      source: "/retail-fashion-industry-solutions",
      destination: "/industries/retail",
      permanent: true,
    },
    {
      source: "/au/insights/page/5",
      destination: "/insights",
      permanent: true,
    },
    {
      source: "/resource",
      destination: "/insights",
      permanent: true,
    },
    {
      source: "/resource/page/6",
      destination: "/insights",
      permanent: true,
    },
    {
      source: "/resource-webinars",
      destination: "/insights/webinar",
      permanent: true,
    },
    {
      source: "/ai-driven-insights-transform-business",
      destination: "/artificial-intelligence/ai-readiness-assessments-strategies",
      permanent: true,
    },
    {
      source: "/benefits-of-office-365-for-business",
      destination: "/insights/blog",
      permanent: true,
    },
    {
      source: "/insights/page/48",
      destination: "/insights/blog",
      permanent: true,
    },
    {
      source: "/au/whitepaper/page/5",
      destination: "/insights/whitepaper",
      permanent: true,
    },
    {
      source: "/ca/whitepaper/agentic-ai-healthcare-transformation",
      destination: "/insights/whitepaper",
      permanent: true,
    },
    {
      source: "/ca/insurance",
      destination: "/insurance",
      permanent: true,
    },
    {
      source: "/en/insurance",
      destination: "/insurance",
      permanent: true,
    },
    {
      source: "/korcares-flyers",
      destination: "/kor-cares",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-solutions/book-a-free-demo",
      destination: "/contact-us",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics",
      destination: "/microsoft-dynamics-365",
      permanent: true,
    },
    {
      source: "/ms-dynamics365",
      destination: "/microsoft-dynamics-365",
      permanent: true,
    },
    {
      source: "/advanced-warehouse-management",
      destination: "/microsoft-dynamics-365/microsoft-dynamics-365-advanced-warehouse-management",
      permanent: true,
    },
    {
      source: "/en/microsoft-dynamics-365/microsoft-dynamics-365-business-central",
      destination: "/microsoft-dynamics-365/microsoft-dynamics-365-business-central",
      permanent: true,
    },
    {
      source: "/erp/microsoft-dynamics-365/microsoft-dynamics-365-business-central",
      destination: "/microsoft-dynamics-365/microsoft-dynamics-365-business-central",
      permanent: true,
    },
    {
      source: "/en/microsoft-dynamics-365/microsoft-dynamics-365-business-central-product-configurator",
      destination: "/microsoft-dynamics-365/microsoft-dynamics-365-business-central-product-configurator",
      permanent: true,
    },
    {
      source: "/quality-control-for-dynamics-365-business-central-trk=products_details_guest_primary_call_to_action",
      destination: "/microsoft-dynamics-365/microsoft-dynamics-365-business-central-quality-control",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-365-customer-engagement-ce-crm",
      destination: "/microsoft-dynamics-365/microsoft-dynamics-365-customer-engagement",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-365-customer-service",
      destination: "/microsoft-dynamics-365/microsoft-dynamics-365-customer-service",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-365-finance-and-operations",
      destination: "/microsoft-dynamics-365/microsoft-dynamics-365-finance-and-operations",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-365-sales",
      destination: "/microsoft-dynamics-365/microsoft-dynamics-365-sales",
      permanent: true,
    },
    {
      source: "/ae/microsoft-power-platform",
      destination: "/microsoft-power-platform",
      permanent: true,
    },
    {
      source: "/ca/microsoft-power-apps-solutions-and-services",
      destination: "/microsoft-power-platform",
      permanent: true,
    },
    {
      source: "/microsoft-power-bi-integration-implementation-services",
      destination: "/microsoft-power-platform/microsoft-power-bi",
      permanent: true,
    },
    {
      source: "/cloud/enterprise-analytics-cloud-services",
      destination: "/modern-cloud-data-services",
      permanent: true,
    },
    {
      source: "/november-newsletter",
      destination: "/newsletter",
      permanent: true,
    },
    {
      source: "/october-newsletter",
      destination: "/newsletter",
      permanent: true,
    },
    {
      source: "/september-newsletter",
      destination: "/newsletter",
      permanent: true,
    },
    {
      source: "/au/newsroom/korcomptenz-iso-9001-certification-quality-excellence",
      destination: "/newsroom/korcomptenz-iso-9001-certification-quality-excellence",
      permanent: true,
    },
    {
      source: "/au/newsroom/korcomptenz-named-contender-in-isg-provider-lens-for-ai-services-and-data-fabric-2025-report",
      destination: "/newsroom/korcomptenz-iso-iec-27001-certification-security",
      permanent: true,
    },
    {
      source: "/newsroom-and-events/sap-sapphire-2024",
      destination: "/newsroom/sap-sapphire-2024",
      permanent: true,
    },
    {
      source: "/newsroom-and-events/sap-sapphire-2025",
      destination: "/newsroom/sap-sapphire-2025",
      permanent: true,
    },
    {
      source: "/press-release/korcomptenz-expands-chennai-office-ai-center",
      destination: "/newsroom/korcomptenz-expands-chennai-office-ai-center",
      permanent: true,
    },
    {
      source: "/awards-and-recognitions/korcomptenz-named-contender-in-isg-provider-lens-for-ai-services-and-data-fabric-2025-report",
      destination: "/newsroom/korcomptenz-named-contender-in-isg-provider-lens-for-ai-services-and-data-fabric-2025-report",
      permanent: true,
    },
    {
      source: "/non-profit-sector-solutions",
      destination: "/nonprofit-sectors",
      permanent: true,
    },
    {
      source: "/au/podcast/ep-04-serverless-analytics",
      destination: "/podcast/ep-04-serverless-analytics",
      permanent: true,
    },
    {
      source: "/en/salesforce/salesforce-marketing-cloud",
      destination: "/salesforce/salesforce-marketing-cloud",
      permanent: true,
    },
    {
      source: "/salesforce-consulting",
      destination: "/salesforce/salesforce-consulting-services",
      permanent: true,
    },
    {
      source: "/salesforce-consulting-services",
      destination: "/salesforce/salesforce-consulting-services",
      permanent: true,
    },
    {
      source: "/salesforce-integration",
      destination: "/salesforce/salesforce-consulting-services",
      permanent: true,
    },
    {
      source: "/au/salesforce/salesforce-einstein-ai-and-analytics",
      destination: "/salesforce/salesforce-einstein-ai-and-analytics",
      permanent: true,
    },
    {
      source: "/salesforce-marketing-cloud",
      destination: "/salesforce/salesforce-marketing-cloud",
      permanent: true,
    },
    {
      source: "/ae/salesforce-sales-cloud-solutions",
      destination: "/salesforce/salesforce-sales-cloud",
      permanent: true,
    },
    {
      source: "/ae/sap/grow-with-sap",
      destination: "/sap/grow-with-sap",
      permanent: true,
    },
    {
      source: "/sap-s4hana-implemenation-services",
      destination: "/sap/sap-s4hana-implemenation-services",
      permanent: true,
    },
    {
      source: "/rise-with-sap",
      destination: "/sap/rise-with-sap",
      permanent: true,
    },
    {
      source: "/sap/sap-private-cloud",
      destination: "/sap/sap-business-suite",
      permanent: true,
    },
    {
      source: "/sap-services",
      destination: "/sap/sap-consulting-services",
      permanent: true,
    },
    {
      source: "/sap-integrated-business-planning",
      destination: "/sap/sap-ibp-services",
      permanent: true,
    },
    {
      source: "/supply-chain-management-services",
      destination: "/supply-chain-management",
      permanent: true,
    },
    {
      source: "/au/webinar/cloud-azure-synapse-analytics-services",
      destination: "/webinar/cloud-azure-synapse-analytics-services",
      permanent: true,
    },
    {
      source: "/prevailing-through-disruption-with-rapid-adoption-of-technologies",
      destination: "/webinar/prevailing-through-disruption-with-rapid-adoption-of-technologies",
      permanent: true,
    },
    {
      source: "/web-stories/5-reasons-to-move-to-the-public-cloud-with-grow-with-sap",
      destination: "/webstories/5-reasons-to-move-to-the-public-cloud-with-grow-with-sap",
      permanent: true,
    },
    {
      source: "/web-stories/why-sap-erp-is-key-to-growing-your-business-smarter",
      destination: "/webstories/eight-ways-sap-erp-benefits-your-busines",
      permanent: true,
    },
    {
      source: "/au/whitepaper/driving-innovation-how-ai-and-next-generation-technologies-can-transform-your-business",
      destination: "/whitepaper/AI-Next-Gen-Tech-Transform-Business.pdf",
      permanent: true,
    },
    {
      source: "/au/whitepaper/healthcare-cybersecurity",
      destination: "/whitepaper/Healthcare-Cybersecurity.pdf",
      permanent: true,
    },
    {
      source: "/ca/cms/shopify-development",
      destination: "/cms/shopify-development/",
      permanent: true,
    },
    {
      source: "/ae/whitepaper/microsoft-dynamics-vs-salesforce-crm",
      destination: "/whitepaper/Microsoft-Dynamics-vs-Salesforce-CRM.pdf",
      permanent: true,
    },
    {
      source: "/ae/whitepaper/why-microsoft-dynamics-365-finance-and-operation-is-the-smarter-choice-over-sap-s4hana-for-sap-ecc-migrations",
      destination: "/whitepaper/Why-Microsoft-Dynamics-365-Finance-and-Operation-is-the-Smarter-Choice-Over-SAP-S4HANA-for-SAP-ECC-Migrations.pdf",
      permanent: true,
    },

  {
    source: "/blog/crm-in-banking-urgent-impertive-for-financial-institutions",
    destination: "/blog/crm-in-banking-industry-ai-powered-growth",
    permanent: true,
  },

  {
    source: "/wp-content/uploads/2025/04/ISG-Provider-Lens-Quadrant-Report.pdf",
    destination: "/asset/report/ISG-Provider-Lens-Quadrant-Report.pdf",
    permanent: true,
  },

  {
    source: "/assets/case-study/Transforming-CRM-Salesforce-Implementation-Financial-Organization.pdf",
    destination: "/case-studies-asset/Transforming-CRM-Salesforce-Implementation-Financial-Organization.pdf",
    permanent: true,
  },

  {
    source: "/it-infrastructure/it-infrastructure-modernization",
    destination: "/cloud/it-infrastructure-modernization",
    permanent: true,
  },

  {
    source: "/assets/brochure/Top-priorities-for-nonprofits.pdf",
    destination: "/brochure/Top-priorities-for-nonprofits.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/Fundraising-and-Engagement.pdf",
    destination: "/brochure/Fundraising-and-Engagement.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/Journaling.pdf",
    destination: "/brochure/Journaling.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/Travelogue.pdf",
    destination: "/brochure/Travelogue.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/A-Passion-for-Passion.pdf",
    destination: "/brochure/A-Passion-for-Passion.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/Customer-Experience-Kentico.pdf",
    destination: "/brochure/Customer-Experience-Kentico.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/AWS-Cloud-Services.pdf",
    destination: "/brochure/AWS-Cloud-Services.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/M365-Frontline-Workers.pdf",
    destination: "/brochure/M365-Frontline-Workers.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/Connected-Retail-for-Fashion-and-Textile.pdf",
    destination: "/brochure/Connected-Retail-for-Fashion-and-Textile.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/Korcomptenz-Solutions-for-Fashion-and-Textile.pdf",
    destination: "/brochure/Korcomptenz-Solutions-for-Fashion-and-Textile.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/KOR-ArtificialIntelligence.pdf",
    destination: "/brochure/KOR-ArtificialIntelligence.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/Corporate-Brochure-UAE-2023.pdf",
    destination: "/brochure/Corporate-Brochure-UAE-2023.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/Dynamics-Support-Service-Packages.pdf",
    destination: "/brochure/Dynamics-Support-Service-Packages.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/ISG-Provider-Lens-Microsoft-AI-and-Cloud-Ecosystem.pdf",
    destination: "/brochure/ISG-Provider-Lens-Microsoft-AI-and-Cloud-Ecosystem.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/SAP-Public-Cloud-Edition.pdf",
    destination: "/brochure/SAP-Public-Cloud-Edition.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/ESG-Reporting-Solution-with-Microsoft-Fabric.pdf",
    destination: "/brochure/ESG-Reporting-Solution-with-Microsoft-Fabric.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/Personalize-Banking-Experiences-Dynamics-365.pdf",
    destination: "/brochure/Personalize-Banking-Experiences-Dynamics-365.pdf",
    permanent: true,
  },

  {
    source: "/assets/brochure/SAP-Capability.pdf",
    destination: "/brochure/SAP-Capability.pdf",
    permanent: true,
  },
  
  {
    source: "/sap-grow-fast-implementation",
    destination: "/sap/sap-grow-fast-implementation",
    permanent: true,
  },

  {
    source: "/insights/whitepaper",
    destination: "/insights/whitepapers",
    permanent: true,
  },

  {
    source: "/insights/blog",
    destination: "/insights/blogs",
    permanent: true,
  },

  {
    source: "/insights/ebook",
    destination: "/insights/ebooks",
    permanent: true,
  },

  {
    source: "/insights/infographic",
    destination: "/insights/infographics",
    permanent: true,
  },

  {
    source: "/insights/brochure",
    destination: "/insights/brochures",
    permanent: true,
  },

  {
    source: "/insights/webinar",
    destination: "/insights/webinars",
    permanent: true,
  },

  {
    source: "/insights/podcast",
    destination: "/insights/podcasts",
    permanent: true,
  },

  {
    source: "/insights/playbook",
    destination: "/insights/decision-guides",
    permanent: true,
  },

  {
    source: "/insights/playbooks",
    destination: "/insights/decision-guides",
    permanent: true,
  },

  {
    source: "/insights/web-stories",
    destination: "/insights/webstories",
    permanent: true,
  },

  {
    source: "/whitepaper/KOR-SmartForge-Microsoft-Fabric-AI-and-Cloud-for-Manufacturing.pdf",
    destination: "/whitepaper/Altiaris-Microsoft-Fabric-AI-and-Cloud-for-Manufacturing.pdf",
    permanent: true,
  },
  
  {
    source: "/microsoft-dynamics-365/microsoft-dynamics-365-managed-services",
    destination: "/microsoft-dynamics-365/microsoft-dynamics-365-support-services",
    permanent: true,
  },

  ],
};

export default nextConfig;
