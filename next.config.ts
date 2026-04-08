import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
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
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
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
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
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
      destination: "https://www.korcomptenz.com/privacy-policy",
      permanent: true,
    },
    {
      source: "/careers/",
      destination: "https://www.korcomptenz.com/career",
      permanent: true,
    },
    {
      source: "/oracle/",
      destination: "https://www.korcomptenz.com",
      permanent: true,
    },
    {
      source: "/oracle/analytics/",
      destination: "https://www.korcomptenz.com",
      permanent: true,
    },
    {
      source: "/oracle/financials/",
      destination: "https://www.korcomptenz.com",
      permanent: true,
    },
    {
      source: "/oracle/oracle-cloud-erp/",
      destination: "https://www.korcomptenz.com",
      permanent: true,
    },
    {
      source: "/oracle/oracle-cloud-manufacturing/",
      destination: "https://www.korcomptenz.com",
      permanent: true,
    },
    {
      source: "/oracle/oracle-supply-chain-management/",
      destination: "https://www.korcomptenz.com",
      permanent: true,
    },
    {
      source: "/sap/sap-merger-and-acquisition/",
      destination:
        "https://www.korcomptenz.com/sap/sap-merger-and-acquisition-consulting",
      permanent: true,
    },
    {
      source: "/solution-accelerators/",
      destination: "https://www.korcomptenz.com/kor-solution-accelerators",
      permanent: true,
    },
    {
      source: "/who-we-are/",
      destination: "https://www.korcomptenz.com/about-us",
      permanent: true,
    },
    {
      source: "/client-success/",
      destination: "https://www.korcomptenz.com/case-studies",
      permanent: true,
    },
    {
      source: "/grant-management/faqs/",
      destination:
        "https://www.korcomptenz.com/whitepaper/KORSmartGrants365.pdf",
      permanent: true,
    },
    {
      source: "/kor-bank-iq",
      destination:
        "https://www.korcomptenz.com/ai-assisted-retail-banking-microsoft-fabric",
      permanent: true,
    },
    {
      source: "/korcares/",
      destination: "https://www.korcomptenz.com/kor-cares",
      permanent: true,
    },
    {
      source: "/logistics/",
      destination:
        "https://www.korcomptenz.com/industries/logistics-and-transportation",
      permanent: true,
    },
    {
      source: "/manufacturing/",
      destination: "https://www.korcomptenz.com/industries/manufacturing",
      permanent: true,
    },
    {
      source: "/medical-devices/",
      destination:
        "https://www.korcomptenz.com/industries/manufacturing/medical-devices",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Quickbooks-to-Business-Central-migration.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Quickbooks-to-Business-Central-migration.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Benefits-of-Next-Generation-Field-Service-Solutions.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Benefits-of-Next-Generation-Field-Service-Solutions.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Microsoft-Dynamics-365-Commerce-Comparison.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Microsoft-Dynamics-365-Commerce-Comparison.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Salesforce-Sales-Cloud.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Salesforce-Sales-Cloud.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/More-than-one-way-to-make-your-business-mobile.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/More-than-one-way-to-make-your-business-mobile.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Why-your-Business-needs-Marketing-Automation.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Why-your-Business-needs-Marketing-Automation.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Kentico-Xperience-Quickstart-Guide.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Kentico-Xperience-Quickstart-Guide.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/How-to-choose-right-Content-Management-System.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/How-to-choose-right-Content-Management-System.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Envision-your-modern-workplace.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Envision-your-modern-workplace.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/productive-remote-work-for-nonprofit.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/productive-remote-work-for-nonprofit.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/SFRA-Commerce.pdf",
      destination: "https://www.korcomptenz.com/whitepaper/SFRA-Commerce.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Salesforce-Lightning-Apps.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Salesforce-Lightning-Apps.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Connected-Retail.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Connected-Retail.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Analytics-and-AI.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Analytics-and-AI.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Design-Thinking-for-App-Modernization.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Design-Thinking-for-App-Modernization.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Digital-Transformation-and-Maturity.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Digital-Transformation-and-Maturity.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/App-Rationalization-Modernization.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/App-Rationalization-Modernization.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Analytics-for-Medical-Devices.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Analytics-for-Medical-Devices.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/SupplyChain-for-Medical-Devices.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/SupplyChain-for-Medical-Devices.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Patient-Provider-Experience-for-Medical-Devices.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Patient-Provider-Experience-for-Medical-Devices.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/ERP-Analytics.pdf",
      destination: "https://www.korcomptenz.com/whitepaper/ERP-Analytics.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/EDI.pdf",
      destination: "https://www.korcomptenz.com/whitepaper/EDI.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Retail-with-MSD365.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Retail-with-MSD365.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Traditional-vs-Cloud-ERP.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Traditional-vs-Cloud-ERP.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/MES-ERP-Integration.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/MES-ERP-Integration.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Maximizing-CRM-Potential-with-Artificial-Intelligence.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Maximizing-CRM-Potential-with-Artificial-Intelligence.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Get-More-Leads-Convert-Faster-with-Marketing-Automation.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Get-More-Leads-Convert-Faster-with-Marketing-Automation.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Salesforce-Einstein-Copilot-vs-Microsoft-Copilot.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Salesforce-Einstein-Copilot-vs-Microsoft-Copilot.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Kentico-Vs-AWM-Analysis.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Kentico-Vs-AWM-Analysis.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/AI-Readiness-Assessment.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/AI-Readiness-Assessment.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Microsoft-Dynamics-vs-Salesforce-CRM-Comparison-Guide-2024.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Microsoft-Dynamics-vs-Salesforce-CRM-Comparison-Guide-2024.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Digital-Content-Creation-Management-Trends-2024.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Digital-Content-Creation-Management-Trends-2024.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Strengthen-Financial-Trust-Personalized-Marketing.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Strengthen-Financial-Trust-Personalized-Marketing.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/How-to-migrate-from-Salesforce-to-Microsoft-Dynamics-365.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/How-to-migrate-from-Salesforce-to-Microsoft-Dynamics-365.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Migrating-GP-to-Dynamics-365-Business-Central-Guide.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Migrating-GP-to-Dynamics-365-Business-Central-Guide.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Microsoft365-Copilot.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Microsoft365-Copilot.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/AI-Next-Gen-Tech-Transform-Business.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/AI-Next-Gen-Tech-Transform-Business.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Salesforce-Agentforce-Whitepaper.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Salesforce-Agentforce-Whitepaper.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/SAP-Migration-Methodology.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/SAP-Migration-Methodology.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/SAP-Signavio-Process-Excellence.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/SAP-Signavio-Process-Excellence.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/SAP-Extended-Warehouse-Management.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/SAP-Extended-Warehouse-Management.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Healthcare-Cybersecurity.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Healthcare-Cybersecurity.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Why-Microsoft-Dynamics-365-Finance-and-Operation-is-the-Smarter-Choice-Over-SAP-S4HANA-for-SAP-ECC-Migrations.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Why-Microsoft-Dynamics-365-Finance-and-Operation-is-the-Smarter-Choice-Over-SAP-S4HANA-for-SAP-ECC-Migrations.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Healthcare-Digital-Transformation-Technology-Partner.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Healthcare-Digital-Transformation-Technology-Partner.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Agentic-AI-Healthcare-Transformation.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Agentic-AI-Healthcare-Transformation.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Customer-Experience-Cost-Optimization.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Customer-Experience-Cost-Optimization.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/The-ERP-CRM-Ecommerce-Ecosystem-That-Pays-for-Itself.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/The-ERP-CRM-Ecommerce-Ecosystem-That-Pays-for-Itself.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Agentic-AI-for-Smart-Warehousing.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Agentic-AI-for-Smart-Warehousing.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Microsoft-Dynamics-vs-Salesforce-CRM.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Microsoft-Dynamics-vs-Salesforce-CRM.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/IT-Managed-Services.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/IT-Managed-Services.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/AI-Powered-Application-Modernization.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/AI-Powered-Application-Modernization.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/whitepaper/Transforming-Customer-Service-with-Microsoft-Copilot.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Transforming-Customer-Service-with-Microsoft-Copilot.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/AgenticBizApps.pdf",
      destination: "https://www.korcomptenz.com/whitepaper/AgenticBizApps.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/brochure/is-power-automate-right-for-your-organization.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/is-power-automate-right-for-your-organization.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Kor-Uncovering-Power-App-Opportunities.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Kor-Uncovering-Power-App-Opportunities.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Microsoft-Managed-Services-and-Solutions.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Microsoft-Managed-Services-and-Solutions.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/complete-salesforce-ecosystem-support.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/complete-salesforce-ecosystem-support.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/corporate-brochure.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/corporate-brochure.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Product-configurator-addon.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Product-configurator-addon.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Quality-control-management-add-on.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Quality-control-management-add-on.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/fleet-management-solution.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/fleet-management-solution.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/brochure/EduUniv-a-complete-solution-for-educational-institutions.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/EduUniv-a-complete-solution-for-educational-institutions.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/brochure/Minimize-downtime-with-secured-Infrastructure-management.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Minimize-downtime-with-secured-Infrastructure-management.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Azure-Cloud-Managed-Solutions.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Azure-Cloud-Managed-Solutions.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/brochure/Transform-your-data-into-intelligent-actions-with-limitless-analytics.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Transform-your-data-into-intelligent-actions-with-limitless-analytics.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Grant-Management.pdf",
      destination: "https://www.korcomptenz.com/brochure/Grant-Management.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Education-Industry-Solution.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Education-Industry-Solution.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Automative-Industry-Accelerator.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Automative-Industry-Accelerator.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Telecommunication-Industry-Accelerator.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Telecommunication-Industry-Accelerator.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Full-Stack-Solutions.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Full-Stack-Solutions.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Complete-Cloud-Competence.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Complete-Cloud-Competence.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Connected-Retail-Solutions.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Connected-Retail-Solutions.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Supply-Chain-Optimization.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Supply-Chain-Optimization.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/ERP-Advisory.pdf",
      destination: "https://www.korcomptenz.com/brochure/ERP-Advisory.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Data-and-Analytics.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Data-and-Analytics.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Retail-POS.pdf",
      destination: "https://www.korcomptenz.com/brochure/Retail-POS.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Cloud-Migration-BFSI.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Cloud-Migration-BFSI.pdf",
      permanent: true,
    },
    {
      source: "/assets/whitepaper/Intelligent-Supply-Chain.pdf",
      destination:
        "https://www.korcomptenz.com/whitepaper/Intelligent-Supply-Chain.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Choosing-Between-CMS-and-DXP-Guide.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Choosing-Between-CMS-and-DXP-Guide.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/AI-First-Approach.pdf",
      destination: "https://www.korcomptenz.com/brochure/AI-First-Approach.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Supply-Chain-Management.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Supply-Chain-Management.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/brochure/Enterprise-Content-Management-Services-Brochure.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Enterprise-Content-Management-Services-Brochure.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Digital-Transformation-with-SAP-Solutions.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Digital-Transformation-with-SAP-Solutions.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Cybersecurity-Advisory-Managed-Services.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Cybersecurity-Advisory-Managed-Services.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/SAP-Application-Managed-Services-AMS.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/SAP-Application-Managed-Services-AMS.pdf",
      permanent: true,
    },
    {
      source: "/assets/brochure/Microsoft-Dynamics-365-Solutions.pdf",
      destination:
        "https://www.korcomptenz.com/brochure/Microsoft-Dynamics-365-Solutions.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Microsoft-teams-the-hub-for-teamwork-in-office-365.pdf",
      destination:
        "https://www.korcomptenz.com/infographic/Microsoft-teams-the-hub-for-teamwork-in-office-365.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Leveraging-cloud-email-in-Financial-service-industry.pdf",
      destination:
        "https://www.korcomptenz.com/infographic/Leveraging-cloud-email-in-Financial-service-industry.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Modernize-your-Microsoft-workload-with-Azure.pdf",
      destination:
        "https://www.korcomptenz.com/infographic/Modernize-your-Microsoft-workload-with-Azure.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Microsoft-Teams-and-Office-365-Integrations.pdf",
      destination:
        "https://www.korcomptenz.com/infographic/Microsoft-Teams-and-Office-365-Integrations.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Leveraging-Microsoft-Teams-in-Human-Resource.pdf",
      destination:
        "https://www.korcomptenz.com/infographic/Leveraging-Microsoft-Teams-in-Human-Resource.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Leveraging-Microsoft-Teams-for-a-Role-in-Compliance.pdf",
      destination:
        "https://www.korcomptenz.com/infographic/Leveraging-Microsoft-Teams-for-a-Role-in-Compliance.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Leveraging-Microsoft-Teams-in-Healthcare.pdf",
      destination:
        "https://www.korcomptenz.com/infographic/Leveraging-Microsoft-Teams-in-Healthcare.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/Leveraging-Microsoft-Teams-for-your-Finance-Department.pdf",
      destination:
        "https://www.korcomptenz.com/infographic/Leveraging-Microsoft-Teams-for-your-Finance-Department.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/infographic/How-Marketing-can-Leverage-Microsoft-Teams.pdf",
      destination:
        "https://www.korcomptenz.com/infographic/How-Marketing-can-Leverage-Microsoft-Teams.pdf",
      permanent: true,
    },
    {
      source: "/assets/infographic/Leveraging-Microsoft-Teams-in-Sales.pdf",
      destination:
        "https://www.korcomptenz.com/infographic/Leveraging-Microsoft-Teams-in-Sales.pdf",
      permanent: true,
    },
    {
      source: "/assets/infographic/Azure-Machine-Learning.pdf",
      destination:
        "https://www.korcomptenz.com/infographic/Azure-Machine-Learning.pdf",
      permanent: true,
    },
    {
      source: "/assets/infographic/Better-Value-With-Kentico.pdf",
      destination:
        "https://www.korcomptenz.com/infographic/Better-Value-With-Kentico.pdf",
      permanent: true,
    },
    {
      source: "/assets/infographic/Order-Management-System-Benefits.pdf",
      destination:
        "https://www.korcomptenz.com/infographic/Order-Management-System-Benefits.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/The-benefits-of-aligning-sales-and-marketing.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/The-benefits-of-aligning-sales-and-marketing.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/How-CDP-supports-a-seamless-privacy-compliance-posture.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/How-CDP-supports-a-seamless-privacy-compliance-posture.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Four-Ways-Data-Helps-B2B-Personalize-at-Scale.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Four-Ways-Data-Helps-B2B-Personalize-at-Scale.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/How-microsoft-is-redefining-B2B-eCommerce.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/How-microsoft-is-redefining-B2B-eCommerce.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Bring-Apps-and-Automation-to-Microsoft-Teams-with-Power-Platform.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Bring-Apps-and-Automation-to-Microsoft-Teams-with-Power-Platform.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Top-Ways-Marketing-Can-Help-Sales-Succeed.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Top-Ways-Marketing-Can-Help-Sales-Succeed.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/How-blockchain-will-transform-the-modern-supply-chain.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/How-blockchain-will-transform-the-modern-supply-chain.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Modernize-Your-Field-Service-with-Mixed-Reality.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Modernize-Your-Field-Service-with-Mixed-Reality.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/The-Power-of-Relationship-Selling.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/The-Power-of-Relationship-Selling.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Five-innovative-ways-to-modernize-their-field-service.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Five-innovative-ways-to-modernize-their-field-service.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Digital-Transformation-in-Sales.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Digital-Transformation-in-Sales.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Thinking-ERP.pdf",
      destination: "https://www.korcomptenz.com/ebook/Thinking-ERP.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Guide-for-replacing-accounting-software.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Guide-for-replacing-accounting-software.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/enable-corporate-agility-with-dynamics-365.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/enable-corporate-agility-with-dynamics-365.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Migrate-to-the-cloud-today.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Migrate-to-the-cloud-today.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Five-Benefits-of-Moving-to-the-Cloud-Now.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Five-Benefits-of-Moving-to-the-Cloud-Now.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Understanding-cloud-migration-strategies.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Understanding-cloud-migration-strategies.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/9-Myths-About-Moving-to-the-Cloud.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/9-Myths-About-Moving-to-the-Cloud.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Microsoft-Services-Predictive-Maintenance-Manufacturing.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Microsoft-Services-Predictive-Maintenance-Manufacturing.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Digital-Transformation-in-Education-using-Predictive-Analytics.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Digital-Transformation-in-Education-using-Predictive-Analytics.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/The-IoT-Guide-for-Business-Leaders.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/The-IoT-Guide-for-Business-Leaders.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/IoT-in-manufacturing.pdf",
      destination: "https://www.korcomptenz.com/ebook/IoT-in-manufacturing.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Things-to-know-about-the-state-of-IoT.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Things-to-know-about-the-state-of-IoT.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Delight-Your-Customer-in-Just-Three-Steps.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Delight-Your-Customer-in-Just-Three-Steps.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/D365-Business-Central-your-business-management-solution.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/D365-Business-Central-your-business-management-solution.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Turn-Event-Attendees-into-Loyal-Customers.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Turn-Event-Attendees-into-Loyal-Customers.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Modernize-Your-Web-Apps-with-Microsoft-Azure.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Modernize-Your-Web-Apps-with-Microsoft-Azure.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Dynamics-CRM-to-Dynamics-365-Sales-feature-comparison.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Dynamics-CRM-to-Dynamics-365-Sales-feature-comparison.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Serverless-apps-Architecture-patterns-and-Azure-implementation.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Serverless-apps-Architecture-patterns-and-Azure-implementation.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/Containerized-App-Lifecycle-with-Microsoft-Platform.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Containerized-App-Lifecycle-with-Microsoft-Platform.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Azure-Security-Center.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/Azure-Security-Center.pdf",
      permanent: true,
    },
    {
      source: "/assets/ebook/Azure-Stack.pdf",
      destination: "https://www.korcomptenz.com/ebook/Azure-Stack.pdf",
      permanent: true,
    },
    {
      source:
        "/assets/ebook/ebook-for-banking-and-financial-services-leaders.pdf",
      destination:
        "https://www.korcomptenz.com/ebook/ebook-for-banking-and-financial-services-leaders.pdf",
      permanent: true,
    },
    {
      source: "/case-studies/transforming-operations-trailer-chassis-leasing",
      destination:
        "https://www.korcomptenz.com/case-studies/mobile-application-case-studies",
      permanent: true,
    },
    {
      source: "/case-studies/edi-upgrade-global-grill-manufacturer",
      destination:
        "https://www.korcomptenz.com/case-studies/edi-transformation-for-manufacturer-case-study",
      permanent: true,
    },
    {
      source:
        "/case-studies/nav-to-d365-business-central-cloud-construction-giant",
      destination:
        "https://www.korcomptenz.com/case-studies/erp-migration-construction-dynamics365-case-study",
      permanent: true,
    },
    {
      source:
        "/case-studies/leading-phonotics-manufacturer-acheived-seamless-reporting-with-ms-fabric",
      destination:
        "https://www.korcomptenz.com/case-studies/ai-analytics-reporting-photonics-case-study",
      permanent: true,
    },
    {
      source:
        "/case-studies/design-thinking-to-reimagine-a-mission-critical-custom-application",
      destination:
        "https://www.korcomptenz.com/case-studies/cloud-claims-management-manufacturing-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/rescuing-salesforce-expansion-automation",
      destination: "https://www.korcomptenz.com/",
      permanent: true,
    },
    {
      source:
        "/case-studies/integration-of-two-salesforce-organizations-to-improve-operational-excellence-and-customer-service",
      destination:
        "https://www.korcomptenz.com/case-studies/salesforce-healthcare-data-unification-case-study",
      permanent: true,
    },
    {
      source:
        "/case-studies/greater-roi-with-lower-tco-by-migrating-to-microsoft-azure",
      destination:
        "https://www.korcomptenz.com/case-studies/erp-cloud-migration-waste-management-case-study",
      permanent: true,
    },
    {
      source:
        "/case-studies/healthcare-app-that-tracks-wellness-and-fitness-activities",
      destination:
        "https://www.korcomptenz.com/case-studies/healthcare-wellness-app-case-study",
      permanent: true,
    },
    {
      source:
        "/case-studies/automating-manual-processes-with-a-dynamics-erp-implementation-to-boost-operational-performance",
      destination:
        "https://www.korcomptenz.com/case-studies/orthopedic-erp-implementation-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/power-apps-for-human-resources-management",
      destination:
        "https://www.korcomptenz.com/case-studies/hr-power-apps-transformation-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/improve-customer-experience-with-field-service",
      destination:
        "https://www.korcomptenz.com/case-studies/water-services-dynamics-365-transformation-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/korcomptenz-power-apps-portal-case-study",
      destination:
        "https://www.korcomptenz.com/case-studies/cold-chain-case-management-portal-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/salesforce-solutions-case-study",
      destination:
        "https://www.korcomptenz.com/case-studies/salesforce-optimization-disease-management-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/quality-control-management",
      destination:
        "https://www.korcomptenz.com/case-studies/erp-quality-automation-logistics-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/retail-digital-transformation-case-study",
      destination:
        "https://www.korcomptenz.com/case-studies/retail-crm-erp-unification-dynamics-365-case-study",
      permanent: true,
    },
    {
      source: "/case-studies/sports-fitness-center-salesforce-case-study",
      destination:
        "https://www.korcomptenz.com/case-studies/salesforce-crm-optimization-sports-wellness-case-study",
      permanent: true,
    },
    {
      source: "/korcomptenz-at-microsoft-fabric-community-conference-2026",
      destination:
        "https://www.korcomptenz.com/events/korcomptenz-at-microsoft-fabric-community-conference-2026",
      permanent: true,
    },

    //24/2/2026

    {
      source: "/blog/5-ad-tech-investments-to-make-in-your-advertising-agency",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/5-pain-points-a-unified-microsoft-dynamics-365-retail-management-system-solves-instantly",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/5-signs-you-need-a-new-microsoft-dynamics-crm-partner",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/5-top-erp-trends-in-2023-and-beyond",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/5-ways-to-achieve-student-success-with-data",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/6-key-success-factors-adobe-experience-manager-implementation",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/7-reasons-why-to-invest-in-web-design",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/ai-in-food-industry",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/ai-in-hospitality-industry",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/api-testing-services",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/artificial-intelligence-as-a-service-in-the-cloud",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/azure-hosting",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/azure-migration-and-modernization-scenarios",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/azure-migration-and-modernization-solution",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/benefits-of-cloud-native-applications",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/best-data-visualization-tools-software",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/best-practices-for-successful-database-migration-to-oracle-cloud",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/can-your-business-benefit-from-a-37-increase-in-revenue-korcomptenz-blog",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/cloud-migration-strategies",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/cloud-solutions",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/critical-questions-assessing-commerce-platform",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/crm-consulting-sales-success",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/crm-consulting-services-lead-management",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/developing-your-mobile-app",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/disaster-recovery-solutions",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/dynamics-ax-upgrade",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/dynamics-retail-solutions",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },

    {
      source: "/blog/edi-in-logistics",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/enterprise-mobility-solutions",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/erp-data-migration",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/erp-implementation-rescue-transforming-challenges-into-success",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/erp-rescue-implementation-getting-project-back-on-track",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/fortifying-finance-power-of-secure-virtual-desktop-infrastructure",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/freshworks",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/getting-started-with-salesforce-einstein-ai",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/helpdesk-support-options",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/honeypot-cybersecurity-guide",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/how-can-mes-and-erp-integration-help-you-achieve-industry-capabilities",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/how-marketers-spend-their-money",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/how-to-maximize-your-it-roi",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/how-website-drives-traffic",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/implementing-dynamics-365-finance-and-operations",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/ios-android",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/is-automation-the-answer-to-my-resource-needs",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/is-the-future-of-the-fashion-industry-in-the-hands-of-ai-technology",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },

    {
      source: "/blog/managed-services-provider",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/marketing-on-the-internet-of-things",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/mautic",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/microsoft-dynamics-365-ce-the-game-changer-for-bfsi-customer-engagement",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-dynamics-365-for-retail",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-dynamics-365-pricing-guide",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-dynamics-nav-2018",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-onedrive",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-power-app-power-platform",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-sharepoint",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-teams",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-teams-for-professionals",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/microsoft-teams-integrations",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/modernize-legacy-apps-with-microservices-containerization",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/oracle-cloud-applications-revolutionalize-business-operations",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/oracle-integration-features-challenges-benefits-best-practices",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/our-web-and-mobile-technologies",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/performance-tuning-for-dynamics-ax",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },

    {
      source: "/blog/quick-start-guide-on-kentico",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/retail-analytics-transform-planning-pricing-customer-experiences",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/rpa-not-just-for-billion-dollar-companies",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/salesforce-crm-solutions-unlock-growth",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/salesforce-for-wealth-management",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/salesforce-implementation-partners",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/salesforce-integration-services",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/salesforce-or-microsoft-dynamics-365",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/salesforce-simple-flexible-platform",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/sap-application-management-services",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },

    {
      source: "/blog/smart-speaker-technology",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/strengthen-business-devsecops-development-and-security",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/supply-chain-disruptions-and-how-to-overcome-them",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/tag/dynamics-365-business-central",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/the-future-of-cloud-security-top-trends-to-watch-in-2024-and-beyond",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/the-industry-leading-crm",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/top-10-advantages-of-sap-implementation",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/top-10-web-security-issues",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },

    {
      source: "/blog/top-reasons-to-choose-microsoft-dynamics-365",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/trends-in-b2b-e-commerce",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/understanding-tcp-ip-osi-model-layers",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/web-security-standards",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },

    {
      source: "/blog/what-is-augmented-reality",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/why-have-mobile-applications",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source:
        "/blog/why-should-you-implement-intelligent-security-for-the-modern-workplace",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/why-upgrade-dynamics-gp-to-bc",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/wordpress",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/wordpress-vs-drupal",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/blog/wordpress-vs-drupal",
      destination: "https://www.korcomptenz.com/insights/blog",
      permanent: false,
    },
    {
      source: "/appsource/privacy-policy",
      destination: "https://www.korcomptenz.com/privacy-policy",
      permanent: false,
    },
    {
      source: "/careers",
      destination: "https://www.korcomptenz.com/career",
      permanent: false,
    },
    {
      source: "/oracle",
      destination: "https://www.korcomptenz.com",
      permanent: false,
    },
    {
      source: "/oracle/analytics",
      destination: "https://www.korcomptenz.com",
      permanent: false,
    },
    {
      source: "/oracle/financials",
      destination: "https://www.korcomptenz.com",
      permanent: false,
    },
    {
      source: "/oracle/oracle-cloud-erp",
      destination: "https://www.korcomptenz.com",
      permanent: false,
    },
    {
      source: "/oracle/oracle-cloud-manufacturing",
      destination: "https://www.korcomptenz.com",
      permanent: false,
    },
    {
      source: "/oracle/oracle-supply-chain-management",
      destination: "https://www.korcomptenz.com",
      permanent: false,
    },
    {
      source: "/sap/sap-merger-and-acquisition",
      destination:
        "https://www.korcomptenz.com/sap/sap-merger-and-acquisition-consulting",
      permanent: false,
    },
    {
      source: "/solution-accelerators",
      destination: "https://www.korcomptenz.com/kor-solution-accelerators",
      permanent: false,
    },
    {
      source: "/who-we-are",
      destination: "https://www.korcomptenz.com/about-us",
      permanent: false,
    },
    {
      source: "/client-success",
      destination: "https://www.korcomptenz.com/case-studies",
      permanent: false,
    },
    {
      source: "/grant-management/faqs",
      destination:
        "https://www.korcomptenz.com/whitepaper/KORSmartGrants365.pdf",
      permanent: false,
    },
    {
      source: "/kor-bank-iq",
      destination:
        "https://www.korcomptenz.com/ai-assisted-retail-banking-microsoft-fabric",
      permanent: false,
    },
    {
      source: "/korcares",
      destination: "https://www.korcomptenz.com/kor-cares",
      permanent: false,
    },
    {
      source: "/logistics",
      destination:
        "https://www.korcomptenz.com/industries/logistics-and-transportation",
      permanent: false,
    },
    {
      source: "/manufacturing",
      destination: "https://www.korcomptenz.com/industries/manufacturing",
      permanent: false,
    },
    {
      source: "/medical-devices",
      destination:
        "https://www.korcomptenz.com/industries/manufacturing/medical-devices",
      permanent: false,
    },

    //25.02.2026??

    {
      source: "/cloud/ai-powered-cloud-managed-services",
      destination:
        "https://www.korcomptenz.com/cloud/ai-powered-infrastructure-managed-services",
      permanent: true,
    },
    {
      source: "/salesforce/salesforce-rescue-and-rapid-response",
      destination: "https://www.korcomptenz.com/crm/crm-implementation-rescue",
      permanent: true,
    },

    //05.03.2026
    {
      source: "/microsoft-dynamics-365-business-central-product-configurator",
      destination:
        "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-business-central-product-configurator",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-365-business-central-quality-control",
      destination:
        "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-business-central-quality-control",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-365-customer-engagement",
      destination:
        "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-customer-engagement",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-365-customer-insights",
      destination:
        "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-customer-insights",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-365-managed-services",
      destination:
        "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-managed-services",
      permanent: true,
    },
    {
      source:
        "/microsoft-dynamics-365/microsoft-dynamics-365-erp-advisory-and-consulting",
      destination:
        "https://www.korcomptenz.com/erp/erp-advisory-and-consulting-services",
      permanent: true,
    },
    {
      source: "/cloud/cloud-managed-services",
      destination:
        "https://www.korcomptenz.com/cloud/ai-powered-infrastructure-managed-services",
      permanent: true,
    },
    {
      source: "/cloud/cloud-migration-services",
      destination:
        "https://www.korcomptenz.com/cloud/ai-powered-cloud-migration-services",
      permanent: true,
    },
    {
      source: "/cloud/enterprise-analytics-cloud-services",
      destination: "https://www.korcomptenz.com/modern-cloud-data-services",
      permanent: true,
    },
    //11.3.2026

    {
      source: "/salesforce-einstein-ai-and-analytics-services",
      destination:
        "https://www.korcomptenz.com/salesforce/salesforce-einstein-ai-and-analytics",
      permanent: true,
    },
    {
      source: "/banking-and-financial-services",
      destination:
        "https://www.korcomptenz.com/industries/banking-and-financial-services",
      permanent: true,
    },
    {
      source: "/case-studies/salesforce-crm-construction-materials-case-study",
      destination: "https://www.korcomptenz.com/case-studies",
      permanent: true,
    },
    {
      source: "/healthcare",
      destination: "https://www.korcomptenz.com/industries/healthcare",
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
        "https://www.korcomptenz.com/ai-assisted-retail-banking-microsoft-fabric",
      permanent: true,
    },
    {
      source: "/logistics",
      destination:
        "https://www.korcomptenz.com/industries/logistics-and-transportation",
      permanent: true,
    },
    {
      source: "/crm-consulting-services",
      destination:
        "https://www.korcomptenz.com/crm-advisory-and-consulting-services",
      permanent: true,
    },
    {
      source: "/fashion-and-retail",
      destination: "https://www.korcomptenz.com/industries/retail",
      permanent: true,
    },
    {
      source: "/fashion-and-retail/microsoft-dynamics-365-for-retail",
      destination:
        "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-unified-commerce",
      permanent: true,
    },
    {
      source: "/fashion-and-retail/k3-pebblestone",
      destination: "https://www.korcomptenz.com",
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
      destination: "https://www.korcomptenz.com/book-consultation/",
      permanent: true,
    },
    {
      source: "/microsoft-dynamics-solutions/book-a-free-demo",
      destination: "https://www.korcomptenz.com/book-consultation",
      permanent: true,
    },
    {
      source: "/microsoft-fabric-ai-reporting-cloud-manufacturing",
      destination: "https://www.korcomptenz.com/enterprise-ai-platform",
      permanent: true,
    },


    //24.03.2026
    {
      source: "/product-configurator-for-dynamics-365-business-central",
      destination: "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-business-central-product-configurator",
      permanent: true,
    },

    //08/4/2026
  {
    source: "/kor-smartforge",
    destination: "https://www.korcomptenz.com/enterprise-ai-platform",
    permanent: true,
  },
  {
    source: "/kor-esgenius",
    destination: "https://www.korcomptenz.com/demo-days-drive-esg-compliance-and-business-growth",
    permanent: true,
  },
  {
    source: "/case-study/transforming-operations-trailer-chassis-leasing",
    destination: "https://www.korcomptenz.com/case-studies/mobile-application-case-studies",
    permanent: true,
  },
  {
    source: "/case-study/mobile-application-case-studies",
    destination: "https://www.korcomptenz.com/case-studies/mobile-application-case-studies",
    permanent: true,
  },
  {
    source: "/case-study/modern-digital-banking-solution",
    destination: "https://www.korcomptenz.com/case-studies/digital-experience-retail-banking-case-study",
    permanent: true,
  },
  {
    source: "/case-study/digital-experience-retail-banking-case-study",
    destination: "https://www.korcomptenz.com/case-studies/digital-experience-retail-banking-case-study",
    permanent: true,
  },
  {
    source: "/case-study/edi-upgrade-global-grill-manufacturer",
    destination: "https://www.korcomptenz.com/case-studies/edi-transformation-for-manufacturer-case-study",
    permanent: true,
  },
  {
    source: "/case-study/edi-transformation-for-manufacturer-case-study",
    destination: "https://www.korcomptenz.com/case-studies/edi-transformation-for-manufacturer-case-study",
    permanent: true,
  },
  {
    source: "/case-study/sap-slo-carve-in-for-process-industry",
    destination: "https://www.korcomptenz.com/case-studies/sap-slo-carve-in-for-process-industry",
    permanent: true,
  },
  {
    source: "/case-study/boosting-efficiency-savings-scalability",
    destination: "https://www.korcomptenz.com/case-studies/azure-cost-optimization-engineering-case-study",
    permanent: true,
  },
  {
    source: "/case-study/azure-cost-optimization-engineering-case-study",
    destination: "https://www.korcomptenz.com/case-studies/azure-cost-optimization-engineering-case-study",
    permanent: true,
  },
  {
    source: "/case-study/cloud-infrastructure-manufacturing",
    destination: "https://www.korcomptenz.com/case-studies/cloud-iot-analytics-manufacturing-case-study",
    permanent: true,
  },
  {
    source: "/case-study/cloud-iot-analytics-manufacturing-case-study",
    destination: "https://www.korcomptenz.com/case-studies/cloud-iot-analytics-manufacturing-case-study",
    permanent: true,
  },
  {
    source: "/case-study/salesforce-crm-for-financial-services",
    destination: "https://www.korcomptenz.com/case-studies/salesforce-crm-retail-banking-case-study",
    permanent: true,
  },
  {
    source: "/case-study/salesforce-crm-retail-banking-case-study",
    destination: "https://www.korcomptenz.com/case-studies/salesforce-crm-retail-banking-case-study",
    permanent: true,
  },
  {
    source: "/case-study/nav-to-d365-business-central-cloud-construction-giant",
    destination: "https://www.korcomptenz.com/case-studies/erp-migration-construction-dynamics365-case-study",
    permanent: true,
  },
  {
    source: "/case-study/erp-migration-construction-dynamics365-case-study",
    destination: "https://www.korcomptenz.com/case-studies/erp-migration-construction-dynamics365-case-study",
    permanent: true,
  },
  {
    source: "/case-study/leading-phonotics-manufacturer-acheived-seamless-reporting-with-ms-fabric",
    destination: "https://www.korcomptenz.com/case-studies/ai-analytics-reporting-photonics-case-study",
    permanent: true,
  },
  {
    source: "/case-study/ai-analytics-reporting-photonics-case-study",
    destination: "https://www.korcomptenz.com/case-studies/ai-analytics-reporting-photonics-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-365-fo-optical-equipment-manufacturer",
    destination: "https://www.korcomptenz.com/case-studies/salesforce-field-service-manufacturing-case-study",
    permanent: true,
  },
  {
    source: "/case-study/salesforce-field-service-manufacturing-case-study",
    destination: "https://www.korcomptenz.com/case-study/salesforce-field-service-manufacturing-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-365-fo-optical-equipment-manufacturer",
    destination: "https://www.korcomptenz.com/case-studies/erp-implementation-optical-manufacturing-case-study",
    permanent: true,
  },
  {
    source: "/case-study/erp-implementation-optical-manufacturing-case-study",
    destination: "https://www.korcomptenz.com/case-studies/erp-implementation-optical-manufacturing-case-study",
    permanent: true,
  },
  {
    source: "/case-study/rapid-erp-implementation-for-grill-manufacturer",
    destination: "https://www.korcomptenz.com/case-studies/erp-turnaround-manufacturing-dynamics365-case-study",
    permanent: true,
  },
  {
    source: "/case-study/erp-turnaround-manufacturing-dynamics365-case-study",
    destination: "https://www.korcomptenz.com/case-studies/erp-turnaround-manufacturing-dynamics365-case-study",
    permanent: true,
  },
  {
    source: "/case-study/erp-implementation-and-integration-for-foam-manufacturer",
    destination: "https://www.korcomptenz.com/case-studies/erp-implementation-foam-manufacturing-case-study",
    permanent: true,
  },
  {
    source: "/case-study/erp-implementation-foam-manufacturing-case-study",
    destination: "https://www.korcomptenz.com/case-studies/erp-implementation-foam-manufacturing-case-study",
    permanent: true,
  },
  {
    source: "/case-study/streamlining-retail-and-fashion-workflows-with-microsoft-dynamics-365-fo",
    destination: "https://www.korcomptenz.com/case-studies/erp-support-fashion-retail-case-study",
    permanent: true,
  },
  {
    source: "/case-study/erp-support-fashion-retail-case-study",
    destination: "https://www.korcomptenz.com/case-studies/erp-support-fashion-retail-case-study",
    permanent: true,
  },
  {
    source: "/case-study/salesforce-transformation-business-units-automation",
    destination: "https://www.korcomptenz.com/case-studies/salesforce-automation-construction-distribution-case-study",
    permanent: true,
  },
  {
    source: "/case-study/salesforce-automation-construction-distribution-case-study",
    destination: "https://www.korcomptenz.com/case-studies/salesforce-automation-construction-distribution-case-study",
    permanent: true,
  },
  {
    source: "/case-study/product-health-reporting",
    destination: "https://www.korcomptenz.com/case-studies/data-infrastructure-modernization-carpet-manufacturing-case-study",
    permanent: true,
  },
  {
    source: "/case-study/data-infrastructure-modernization-carpet-manufacturing-case-study",
    destination: "https://www.korcomptenz.com/case-studies/data-infrastructure-modernization-carpet-manufacturing-case-study",
    permanent: true,
  },
  {
    source: "/case-study/leveraging-kentico-xperience-13-to-replace-a-legacy-application",
    destination: "https://www.korcomptenz.com/case-studies/kentico-website-implementation-travel-industry-case-study",
    permanent: true,
  },
  {
    source: "/case-study/kentico-website-implementation-travel-industry-case-study",
    destination: "https://www.korcomptenz.com/case-studies/kentico-website-implementation-travel-industry-case-study",
    permanent: true,
  },
  {
    source: "/case-study/improving-customer-experience-effciency-aftermarket-suspensions-client",
    destination: "https://www.korcomptenz.com/case-studies/improving-customer-experience-effciency-aftermarket-suspensions-client",
    permanent: true,
  },
  {
    source: "/case-study/tranforming-user-experience-customer-portal-task-automation-for-utility-giant",
    destination: "https://www.korcomptenz.com/case-studies/utility-customer-portal-modernization-case-study",
    permanent: true,
  },
  {
    source: "/case-study/utility-customer-portal-modernization-case-study",
    destination: "https://www.korcomptenz.com/case-studies/utility-customer-portal-modernization-case-study",
    permanent: true,
  },
  {
    source: "/case-study/comprehensive-support-services-for-automotive-leader",
    destination: "https://www.korcomptenz.com/case-studies/automotive-erp-modernization-ax2009-case-study",
    permanent: true,
  },
  {
    source: "/case-study/automotive-erp-modernization-ax2009-case-study",
    destination: "https://www.korcomptenz.com/case-studies/automotive-erp-modernization-ax2009-case-study",
    permanent: true,
  },
  {
    source: "/case-study/robust-ecommerce-platform-for-dental-device-manufacturer",
    destination: "https://www.korcomptenz.com/case-studies/dental-ecommerce-platform-integration-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dental-ecommerce-platform-integration-case-study",
    destination: "https://www.korcomptenz.com/case-studies/dental-ecommerce-platform-integration-case-study",
    permanent: true,
  },
  {
    source: "/case-study/advanced-web-portal-development-for-enhanced-engagement",
    destination: "https://www.korcomptenz.com/case-studies/global-youth-film-festival-portal-case-study",
    permanent: true,
  },
  {
    source: "/case-study/global-youth-film-festival-portal-case-study",
    destination: "https://www.korcomptenz.com/case-studies/global-youth-film-festival-portal-case-study",
    permanent: true,
  },
  {
    source: "/case-study/customer-experience-kentico",
    destination: "https://www.korcomptenz.com/case-studies/kentico-flooring-digital-experience-case-study",
    permanent: true,
  },
  {
    source: "/case-study/kentico-flooring-digital-experience-case-study",
    destination: "https://www.korcomptenz.com/case-studies/kentico-flooring-digital-experience-case-study",
    permanent: true,
  },
  {
    source: "/case-study/custom-application-construction-industry",
    destination: "https://www.korcomptenz.com/case-studies/smart-contract-app-construction-d365-case-study",
    permanent: true,
  },
  {
    source: "/case-study/smart-contract-app-construction-d365-case-study",
    destination: "https://www.korcomptenz.com/case-studies/smart-contract-app-construction-d365-case-study",
    permanent: true,
  },
  {
    source: "/case-study/website-redesign-services-for-healthcare-business",
    destination: "https://www.korcomptenz.com/case-studies/healthcare-website-revamp-fqhc-case-study",
    permanent: true,
  },
  {
    source: "/case-study/healthcare-website-revamp-fqhc-case-study",
    destination: "https://www.korcomptenz.com/case-studies/healthcare-website-revamp-fqhc-case-study",
    permanent: true,
  },
  {
    source: "/case-study/design-thinking-to-reimagine-a-mission-critical-custom-application",
    destination: "https://www.korcomptenz.com/case-studies/cloud-claims-management-manufacturing-case-study",
    permanent: true,
  },
  {
    source: "/case-study/cloud-claims-management-manufacturing-case-study",
    destination: "https://www.korcomptenz.com/case-studies/cloud-claims-management-manufacturing-case-study",
    permanent: true,
  },
  {
    source: "/case-study/integration-of-two-salesforce-organizations-to-improve-operational-excellence-and-customer-service",
    destination: "https://www.korcomptenz.com/case-studies/salesforce-healthcare-data-unification-case-study",
    permanent: true,
  },
  {
    source: "/case-study/salesforce-healthcare-data-unification-case-study",
    destination: "https://www.korcomptenz.com/case-studies/salesforce-healthcare-data-unification-case-study",
    permanent: true,
  },
  {
    source: "/case-study/greater-roi-with-lower-tco-by-migrating-to-microsoft-azure",
    destination: "https://www.korcomptenz.com/case-studies/erp-cloud-migration-waste-management-case-study",
    permanent: true,
  },
  {
    source: "/case-study/erp-cloud-migration-waste-management-case-study",
    destination: "https://www.korcomptenz.com/case-studies/erp-cloud-migration-waste-management-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-365-finance-and-operations-in-fashion-retail",
    destination: "https://www.korcomptenz.com/case-studies/fashion-retail-erp-implementation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/fashion-retail-erp-implementation-case-study",
    destination: "https://www.korcomptenz.com/case-studies/fashion-retail-erp-implementation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/healthcare-app-that-tracks-wellness-and-fitness-activities",
    destination: "https://www.korcomptenz.com/case-studies/healthcare-wellness-app-case-study",
    permanent: true,
  },
  {
    source: "/case-study/healthcare-wellness-app-case-study",
    destination: "https://www.korcomptenz.com/case-studies/healthcare-wellness-app-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-365-in-fashion-manufacturing",
    destination: "https://www.korcomptenz.com/case-studies/luxury-textile-erp-crm-implementation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/luxury-textile-erp-crm-implementation-case-study",
    destination: "https://www.korcomptenz.com/case-studies/luxury-textile-erp-crm-implementation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/automating-manual-processes-with-a-dynamics-ax-implementation-to-boost-operational-performance",
    destination: "https://www.korcomptenz.com/case-studies/orthopedic-erp-implementation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/orthopedic-erp-implementation-case-study",
    destination: "https://www.korcomptenz.com/case-studies/orthopedic-erp-implementation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/power-apps-for-human-resources-management",
    destination: "https://www.korcomptenz.com/case-studies/hr-power-apps-transformation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/hr-power-apps-transformation-case-study",
    destination: "https://www.korcomptenz.com/case-studies/hr-power-apps-transformation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/improve-customer-experience-with-field-service",
    destination: "https://www.korcomptenz.com/case-studies/water-services-dynamics-365-transformation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/water-services-dynamics-365-transformation-case-study",
    destination: "https://www.korcomptenz.com/case-studies/water-services-dynamics-365-transformation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/korcomptenz-power-apps-portal-case-study",
    destination: "https://www.korcomptenz.com/case-studies/cold-chain-case-management-portal-case-study",
    permanent: true,
  },
  {
    source: "/case-study/periodontal-mobile-app",
    destination: "https://www.korcomptenz.com/case-studies/oral-health-mobile-app-diagnosis-case-study",
    permanent: true,
  },
  {
    source: "/case-study/oral-health-mobile-app-diagnosis-case-study",
    destination: "https://www.korcomptenz.com/case-studies/oral-health-mobile-app-diagnosis-case-study",
    permanent: true,
  },
  {
    source: "/case-study/patient-survey-software",
    destination: "https://www.korcomptenz.com/case-studies/healthcare-survey-app-modernization-case-study",
    permanent: true,
  },
  {
    source: "/case-study/healthcare-survey-app-modernization-case-study",
    destination: "https://www.korcomptenz.com/case-studies/healthcare-survey-app-modernization-case-study",
    permanent: true,
  },
  {
    source: "/case-study/salesforce-solutions-case-study",
    destination: "https://www.korcomptenz.com/case-studies/salesforce-optimization-disease-management-case-study",
    permanent: true,
  },
  {
    source: "/case-study/salesforce-optimization-disease-management-case-study",
    destination: "https://www.korcomptenz.com/case-studies/salesforce-optimization-disease-management-case-study",
    permanent: true,
  },
  {
    source: "/case-study/quality-control-management",
    destination: "https://www.korcomptenz.com/case-studies/erp-quality-automation-logistics-case-study",
    permanent: true,
  },
  {
    source: "/case-study/erp-quality-automation-logistics-case-study",
    destination: "https://www.korcomptenz.com/case-studies/erp-quality-automation-logistics-case-study",
    permanent: true,
  },
  {
    source: "/case-study/salesforce-online-onboarding-case-study",
    destination: "https://www.korcomptenz.com/case-studies/ira-onboarding-automation-salesforce-case-study",
    permanent: true,
  },
  {
    source: "/case-studies/ira-onboarding-automation-salesforce-case-study",
    destination: "https://www.korcomptenz.com/case-studies/ira-onboarding-automation-salesforce-case-study",
    permanent: true,
  },
  {
    source: "/case-study/budget-control-customization-to-effectively-monitor-expenditure-and-avoid-overpaying",
    destination: "https://www.korcomptenz.com/case-studies/nonprofit-erp-modernization-business-central-case-study",
    permanent: true,
  },
  {
    source: "/case-study/nonprofit-erp-modernization-business-central-case-study",
    destination: "https://www.korcomptenz.com/case-studies/nonprofit-erp-modernization-business-central-case-study",
    permanent: true,
  },
  {
    source: "/case-study/microsoft-dynamics-ax-support",
    destination: "https://www.korcomptenz.com/case-studies/global-retail-erp-support-dynamics-ax-case-study",
    permanent: true,
  },
  {
    source: "/case-study/global-retail-erp-support-dynamics-ax-case-study",
    destination: "https://www.korcomptenz.com/case-studies/global-retail-erp-support-dynamics-ax-case-study",
    permanent: true,
  },
  {
    source: "/case-study/retail-digital-transformation-case-study",
    destination: "https://www.korcomptenz.com/case-studies/retail-crm-erp-unification-dynamics-365-case-study",
    permanent: true,
  },
  {
    source: "/case-study/retail-crm-erp-unification-dynamics-365-case-study",
    destination: "https://www.korcomptenz.com/case-studies/retail-crm-erp-unification-dynamics-365-case-study",
    permanent: true,
  },
  {
    source: "/case-study/sports-fitness-center-salesforce-case-study",
    destination: "https://www.korcomptenz.com/case-studies/salesforce-crm-optimization-sports-wellness-case-study",
    permanent: true,
  },
  {
    source: "/case-study/salesforce-crm-optimization-sports-wellness-case-study",
    destination: "https://www.korcomptenz.com/case-studies/salesforce-crm-optimization-sports-wellness-case-study",
    permanent: true,
  },
  {
    source: "/case-study/product-configurator-for-microsoft-dynamics-nav",
    destination: "https://www.korcomptenz.com/case-studies/nav-product-configurator-commercial-printing-case-study",
    permanent: true,
  },
  {
    source: "/case-study/nav-product-configurator-commercial-printing-case-study",
    destination: "https://www.korcomptenz.com/case-studies/nav-product-configurator-commercial-printing-case-study",
    permanent: true,
  },
  {
    source: "/case-study/education-client-boosts-sales-and-marketing-with-microsoft-dynamics-365",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-event-donor-platform-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-365-event-donor-platform-case-study",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-event-donor-platform-case-study",
    permanent: true,
  },
  {
    source: "/case-study/optimizing-ware-house",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-retail-warehouse-optimization-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-365-retail-warehouse-optimization-case-study",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-retail-warehouse-optimization-case-study",
    permanent: true,
  },
  {
    source: "/case-study/sage-to-dynamics-365-finance-and-operations",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-warehouse-automation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-365-warehouse-automation-case-study",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-warehouse-automation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/sales-commission-process-automation-boosted-revenue-sales-morale",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-sales-commission-automation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-365-sales-commission-automation-case-study",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-sales-commission-automation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-crm-upgrade-and-marketing-features-implementation",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-crm-marketing-cloud-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-365-crm-marketing-cloud-case-study",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-crm-marketing-cloud-case-study",
    permanent: true,
  },
  {
    source: "/case-study/generate-proactive-insights-with-azure-synapse-analytics-and-power-bi",
    destination: "https://www.korcomptenz.com/case-studies/azure-synapse-d365-analytics-case-study",
    permanent: true,
  },
  {
    source: "/case-study/azure-synapse-d365-analytics-case-study",
    destination: "https://www.korcomptenz.com/case-studies/azure-synapse-d365-analytics-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-365-business-central-customization",
    destination: "https://www.korcomptenz.com/case-studies/d365-business-central-seafood-erp-automation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/d365-business-central-seafood-erp-automation-case-study",
    destination: "https://www.korcomptenz.com/case-studies/d365-business-central-seafood-erp-automation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/microsoft-cloud-solution-provider",
    destination: "https://www.korcomptenz.com/case-studies/azure-migration-nonprofit-it-modernization-case-study",
    permanent: true,
  },
  {
    source: "/case-study/azure-migration-nonprofit-it-modernization-case-study",
    destination: "https://www.korcomptenz.com/case-studies/azure-migration-nonprofit-it-modernization-case-study",
    permanent: true,
  },
  {
    source: "/case-study/enterprise-level-infra-managed-services-for-fashion-brand",
    destination: "https://www.korcomptenz.com/case-studies/it-managed-services-ecommerce-infrastructure-case-study",
    permanent: true,
  },
  {
    source: "/case-study/it-managed-services-ecommerce-infrastructure-case-study",
    destination: "https://www.korcomptenz.com/case-studies/it-managed-services-ecommerce-infrastructure-case-study",
    permanent: true,
  },
  {
    source: "/case-study/extending-salesforce-capabilities-with-custom-lightning-apps",
    destination: "https://www.korcomptenz.com/case-studies/salesforce-lightning-manufacturing-workflow-case-study",
    permanent: true,
  },
  {
    source: "/case-study/salesforce-lightning-manufacturing-workflow-case-study",
    destination: "https://www.korcomptenz.com/case-studies/salesforce-lightning-manufacturing-workflow-case-study",
    permanent: true,
  },
  {
    source: "/case-study/an-always-on-dynamics-365-support-services-boosts-operational-efficiency",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-seafood-brand-transformation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-365-seafood-brand-transformation-case-study",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-seafood-brand-transformation-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-ax-ecommerce-integration",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-integration-for-manufacturer-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-365-integration-for-manufacturer-case-study",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-integration-for-manufacturer-case-study",
    permanent: true,
  },
  {
    source: "/case-study/predictive-analytics-insights-for-better-vehicle-maintenance-and-customer-service",
    destination: "https://www.korcomptenz.com/case-studies/predictive-analytics-cold-chain-logistics-case-study",
    permanent: true,
  },
  {
    source: "/case-study/predictive-analytics-cold-chain-logistics-case-study",
    destination: "https://www.korcomptenz.com/case-studies/predictive-analytics-cold-chain-logistics-case-study",
    permanent: true,
  },
  {
    source: "/case-study/integrations-with-microsoft-dynamics-365-business-central",
    destination: "https://www.korcomptenz.com/case-studies/staffing-workflow-automation-dynamics-365-case-study",
    permanent: true,
  },
  {
    source: "/case-study/staffing-workflow-automation-dynamics-365-case-study",
    destination: "https://www.korcomptenz.com/case-studies/staffing-workflow-automation-dynamics-365-case-study",
    permanent: true,
  },
  {
    source: "/case-study/ensure-vital-control-over-inventory-traceability-operations-and-efficiency",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-inventory-optimization-case-study",
    permanent: true,
  },
  {
    source: "/case-study/dynamics-365-inventory-optimization-case-study",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-inventory-optimization-case-study",
    permanent: true,
  },
  {
    source: "/case-study/faster-month-end-closings-from-quickbooks-to-dynamics-365-erp-migration",
    destination: "https://www.korcomptenz.com/case-studies/faster-month-end-closings-from-quickbooks-to-dynamics-365-erp-migration",
    permanent: true,
  },
  {
    source: "/case-study/d365-implementation-optical-equipment-manufacturer",
    destination: "https://www.korcomptenz.com/case-studies/d365-implementation-optical-equipment-manufacturer",
    permanent: true,
  },
  {
    source: "/case-study/reimagining-the-enterprise-for-purpose-and-performance",
    destination: "https://www.korcomptenz.com/case-studies/reimagining-the-enterprise-for-purpose-and-performance",
    permanent: true,
  },
  {
    source: "/case-study/sage-to-dynamics-365-fo-migration-saudi-oil-gas",
    destination: "https://www.korcomptenz.com/case-studies/sage-to-dynamics-365-fo-migration-saudi-oil-gas",
    permanent: true,
  },
  {
    source: "/case-study/ai-powered-bank-analytics-transformation",
    destination: "https://www.korcomptenz.com/case-studies/ai-powered-bank-analytics-transformation",
    permanent: true,
  },
  {
    source: "/case-study/chemical-manufacturer-crm-modernization",
    destination: "https://www.korcomptenz.com/case-studies/chemical-manufacturer-crm-modernization",
    permanent: true,
  },
  {
    source: "/sap/sap-questionnaire/",
    destination: "https://www.korcomptenz.com/sap",
    permanent: true,
  },
  {
    source: "/erp-edi-integration/",
    destination: "https://www.korcomptenz.com/erp/erp-edi-integration",
    permanent: true,
  },
  {
    source: "/microsoft-dynamics-solutions/book-a-consultation/",
    destination: "https://www.korcomptenz.com/contact-us",
    permanent: true,
  },
  {
    source: "/microsoft-dynamics-solutions/book-a-free-demo/",
    destination: "https://www.korcomptenz.com/contact-us",
    permanent: true,
  },
  {
    source: "/$",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/>",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/15/19/22/23",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/178",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/au",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/au/2025/04/23",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/au/awards-and-recognitions",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/au/page/80",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/au/playbook/supply-chain-optimization-solutions-for-intelligent-supply-chains",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/au/progressive-web-app-development",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/au/software-development/qa-testing",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/author/admin",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/ca/app-development",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/ca/digital-workplace-services",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/ca/page/2",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/education",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/en/education",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/en_AU",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/en_au",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/identity-access-management.html",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/microsoft-sharepoint",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/migration-to-Office365",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/page/2",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/page/20",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/page/33",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/page/37",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/page/44",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/page/5",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/page/6",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/page/61",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/page/76",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/page/8",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/pega",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/recruitment-process-outsourcing",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/sitecore",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/web-solutions",
    destination: "https://www.korcomptenz.com",
    permanent: true,
  },
  {
    source: "/ae/case-studies/dynamics-365-inventory-optimization-case-study",
    destination: "https://www.korcomptenz.com/case-studies/dynamics-365-inventory-optimization-case-study",
    permanent: true,
  },
  {
    source: "/internet-of-things",
    destination: "https://www.korcomptenz.com/artificial-intelligence/internet-of-things-iot-services",
    permanent: true,
  },
  {
    source: "/au/artificial-intelligence/microsoft-fabric",
    destination: "https://www.korcomptenz.com/artificial-intelligence/microsoft-fabric",
    permanent: true,
  },
  {
    source: "/artificial-intelligence/responsible-ai-integration",
    destination: "https://www.korcomptenz.com/artificial-intelligence/responsible-ai-solutions",
    permanent: true,
  },
  {
    source: "/au/artificial-intelligence/responsible-ai-integration",
    destination: "https://www.korcomptenz.com/artificial-intelligence/responsible-ai-solutions",
    permanent: true,
  },
  {
    source: "/ca/artificial-intelligence/responsible-ai-integration",
    destination: "https://www.korcomptenz.com/artificial-intelligence/responsible-ai-solutions",
    permanent: true,
  },
  {
    source: "/smb-sales-marketing-clickdimensions",
    destination: "https://www.korcomptenz.com/blog/evaluating-enterprise-crm-solutions-smb-guide",
    permanent: true,
  },
  {
    source: "/quick-service-restaurant",
    destination: "https://www.korcomptenz.com/blog/how-analytics-and-digital-tecnologies-ensure-restaurant-growth",
    permanent: true,
  },
  {
    source: "/quick-service-restaurants",
    destination: "https://www.korcomptenz.com/blog/how-analytics-and-digital-tecnologies-ensure-restaurant-growth",
    permanent: true,
  },
  {
    source: "/ae/erp/erp-free-consultation",
    destination: "https://www.korcomptenz.com/blog/how-to-choose-erp-system",
    permanent: true,
  },
  {
    source: "/microsoft-power-platform/microsoft-power-apps",
    destination: "https://www.korcomptenz.com/blog/microsoft-power-apps-pricing-licensing",
    permanent: true,
  },
  {
    source: "/artificial-intelligence/robotic-process-automation-rpa-services",
    destination: "https://www.korcomptenz.com/blog/sap-robotic-process-automation-rpa",
    permanent: true,
  },
  {
    source: "/ax-upgrade-to-d365",
    destination: "https://www.korcomptenz.com/microsoft-dynamics-365/upgrade-ax-to-dynamics-365",
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
    destination: "https://www.korcomptenz.com/blog/what-is-a-local-area-network",
    permanent: true,
  },
  {
    source: "/permanent-hiring",
    destination: "https://www.korcomptenz.com/career",
    permanent: true,
  },
  {
    source: "/au/case-study-old/retail-digital-transformation-case-study",
    destination: "https://www.korcomptenz.com/case-studies/retail-crm-erp-unification-dynamics-365-case-study",
    permanent: true,
  },
  {
    source: "/ca/case-study-old/rapid-erp-implementation-for-grill-manufacturer",
    destination: "https://www.korcomptenz.com/case-studies/erp-turnaround-manufacturing-dynamics365-case-study",
    permanent: true,
  },
  {
    source: "/case-study-old/boosting-efficiency-savings-scalability",
    destination: "https://www.korcomptenz.com/case-studies/azure-cost-optimization-engineering-case-study",
    permanent: true,
  },
  {
    source: "/case-study-old/transforming-operations-trailer-chassis-leasing",
    destination: "https://www.korcomptenz.com/case-studies/mobile-application-case-studies",
    permanent: true,
  },
  {
    source: "/en_CA/case-study/rigorous-testing-optical-manufacturer-quality-assurance",
    destination: "https://www.korcomptenz.com/case-studies",
    permanent: true,
  },
  {
    source: "/ca/case-studies/edi-transformation-for-manufacturer-case-study",
    destination: "https://www.korcomptenz.com/case-studies/edi-transformation-for-manufacturer-case-study",
    permanent: true,
  },
  {
    source: "/case-studies/ai-cloud-migration",
    destination: "https://www.korcomptenz.com/case-studies/erp-cloud-migration-waste-management-case-study",
    permanent: true,
  },
  {
    source: "/au/case-study/cloud-servicesservices",
    destination: "https://www.korcomptenz.com/case-study/cloud-case-studies",
    permanent: true,
  },
  {
    source: "/au/case-study-old/microsoft-cloud-solution-provider",
    destination: "https://www.korcomptenz.com/case-study/cloud-case-studies",
    permanent: true,
  },
  {
    source: "/case-study/enterprise-applications-case-studies/page/2",
    destination: "https://www.korcomptenz.com/case-study/enterprise-applications-case-studies",
    permanent: true,
  },
  {
    source: "/case-study/enterprise-applications-case-studies/page/4",
    destination: "https://www.korcomptenz.com/case-study/enterprise-applications-case-studies",
    permanent: true,
  },
  {
    source: "/upgrading-to-azure-Is-as-easy-as-1-2-12",
    destination: "https://www.korcomptenz.com/case-study/microsoft-azure-case-studies",
    permanent: true,
  },
  {
    source: "/case-study/microsoft-dynamics-365-case-studies/page/3",
    destination: "https://www.korcomptenz.com/case-study/microsoft-dynamics-365-case-studies",
    permanent: true,
  },
  {
    source: "/microsoft-dynamics-solutions/success-stories",
    destination: "https://www.korcomptenz.com/microsoft-dynamics-solutions/brochures/",
    permanent: true,
  },
  {
    source: "/case-study/microsoft-fabric-case-studies/feed",
    destination: "https://www.korcomptenz.com/case-study/microsoft-fabric-case-studies",
    permanent: true,
  },
  {
    source: "/case-study-old/leading-phonotics-manufacturer-acheived-seamless-reporting-with-ms-fabric",
    destination: "https://www.korcomptenz.com/case-studies/ai-analytics-reporting-photonics-case-study",
    permanent: true,
  },
  {
    source: "/ae/case-study/others-case-studies",
    destination: "https://www.korcomptenz.com/case-study/others-case-study",
    permanent: true,
  },
  {
    source: "/sap/brochures-success-stories",
    destination: "https://www.korcomptenz.com/case-study/sap-case-studies",
    permanent: true,
  },
  {
    source: "/case-study-old/sap-slo-carve-in-for-process-industry",
    destination: "https://www.korcomptenz.com/case-studies/sap-slo-carve-in-for-process-industry",
    permanent: true,
  },
  {
    source: "/ca/cloud/cloud-migration-services",
    destination: "https://www.korcomptenz.com/cloud/ai-powered-cloud-migration-services",
    permanent: true,
  },
  {
    source: "/ca/cloud/ai-powered-cloud-managed-services",
    destination: "https://www.korcomptenz.com/cloud/ai-powered-infrastructure-managed-services",
    permanent: true,
  },
  {
    source: "/sap-on-microsoft-azure",
    destination: "https://www.korcomptenz.com/en/newsroom-and-events",
    permanent: true,
  },
  {
    source: "/cloud/cloud-application-modernization-services",
    destination: "https://www.korcomptenz.com/cloud/cloud-modernization-services",
    permanent: true,
  },
  {
    source: "/cloud/cyber-security-services",
    destination: "https://www.korcomptenz.com/cloud/cyber-secruity-services",
    permanent: true,
  },
  {
    source: "/au/salesforce/salesforce-rescue-and-rapid-response",
    destination: "https://www.korcomptenz.com/crm/crm-implementation-rescue",
    permanent: true,
  },
  {
    source: "/crm-rescue-and-rapid-response-solutions",
    destination: "https://www.korcomptenz.com/crm/crm-implementation-rescue",
    permanent: true,
  },
  {
    source: "/au/edi-consulting-services",
    destination: "https://www.korcomptenz.com/edi-consulting-services",
    permanent: true,
  },
  {
    source: "/ae/education/eduuniv",
    destination: "https://www.korcomptenz.com/education/eduuniv",
    permanent: true,
  },
  {
    source: "/ae/microsoft-dynamics-365/microsoft-dynamics-365-erp-advisory-and-consulting/feed",
    destination: "https://www.korcomptenz.com/erp/erp-advisory-and-consulting-services",
    permanent: true,
  },
  {
    source: "/ca/erp-solution",
    destination: "https://www.korcomptenz.com/erp/erp-advisory-and-consulting-services",
    permanent: true,
  },
  {
    source: "/en_au/erp",
    destination: "https://www.korcomptenz.com/erp/erp-advisory-and-consulting-services",
    permanent: true,
  },
  {
    source: "/enterprise-resource-planning-erp-solutions",
    destination: "https://www.korcomptenz.com/erp/erp-advisory-and-consulting-services",
    permanent: true,
  },
  {
    source: "/erp",
    destination: "https://www.korcomptenz.com/erp/erp-advisory-and-consulting-services",
    permanent: true,
  },
  {
    source: "/erp/erp-free-consultation",
    destination: "https://www.korcomptenz.com/erp/erp-advisory-and-consulting-services",
    permanent: true,
  },
  {
    source: "/erp-advisory-and-consulting-services",
    destination: "https://www.korcomptenz.com/erp/erp-advisory-and-consulting-services",
    permanent: true,
  },
  {
    source: "/erp-implementation-rescue",
    destination: "https://www.korcomptenz.com/erp/erp-implementation-rescue",
    permanent: true,
  },
  {
    source: "/upgrade-and-migration",
    destination: "https://www.korcomptenz.com/erp/erp-migration-and-upgrade-services",
    permanent: true,
  },
  {
    source: "/en/newsroom-and-events",
    destination: "https://www.korcomptenz.com/events",
    permanent: true,
  },
  {
    source: "/korcomptenz-kentico-11",
    destination: "https://www.korcomptenz.com/cms/kentico",
    permanent: true,
  },
  {
    source: "/banking-and-financial-services",
    destination: "https://www.korcomptenz.com/industries/banking-and-financial-services",
    permanent: true,
  },
  {
    source: "/banking-and-financial-services/digital-banking-financial-services",
    destination: "https://campaigns.korcomptenz.com/digital-banking-suite",
    permanent: true,
  },
  {
    source: "/healthcare-digital-solutions",
    destination: "https://www.korcomptenz.com/industries/healthcare",
    permanent: true,
  },
  {
    source: "/portfolio-tags/manufacturing",
    destination: "https://www.korcomptenz.com/industries/manufacturing",
    permanent: true,
  },
  {
    source: "/automotive",
    destination: "https://www.korcomptenz.com/industries/manufacturing/automotive",
    permanent: true,
  },
  {
    source: "/en_au/medical-devices",
    destination: "https://www.korcomptenz.com/industries/manufacturing/medical-devices",
    permanent: true,
  },
  {
    source: "/au/microsoft-dynamics-365-for-fashion-retail",
    destination: "https://www.korcomptenz.com/industries/retail",
    permanent: true,
  },
  {
    source: "/retail-fashion-industry-solutions",
    destination: "https://www.korcomptenz.com/industries/retail",
    permanent: true,
  },
  {
    source: "/au/insights/page/5",
    destination: "https://www.korcomptenz.com/insights",
    permanent: true,
  },
  {
    source: "/resource",
    destination: "https://www.korcomptenz.com/insights",
    permanent: true,
  },
  {
    source: "/resource/page/6",
    destination: "https://www.korcomptenz.com/insights",
    permanent: true,
  },
  {
    source: "/resource-webinars",
    destination: "https://www.korcomptenz.com/insights/webinar",
    permanent: true,
  },
  {
    source: "/ai-driven-insights-transform-business",
    destination: "https://www.korcomptenz.com/artificial-intelligence/ai-readiness-assessments-strategies",
    permanent: true,
  },
  {
    source: "/benefits-of-office-365-for-business",
    destination: "https://www.korcomptenz.com/insights/blog",
    permanent: true,
  },
  {
    source: "/insights/page/48",
    destination: "https://www.korcomptenz.com/insights/blog",
    permanent: true,
  },
  {
    source: "/au/whitepaper/page/5",
    destination: "https://www.korcomptenz.com/insights/whitepaper",
    permanent: true,
  },
  {
    source: "/ca/whitepaper/agentic-ai-healthcare-transformation",
    destination: "https://www.korcomptenz.com/insights/whitepaper",
    permanent: true,
  },
  {
    source: "/ca/insurance",
    destination: "https://www.korcomptenz.com/insurance",
    permanent: true,
  },
  {
    source: "/en/insurance",
    destination: "https://www.korcomptenz.com/insurance",
    permanent: true,
  },
  {
    source: "/korcares-flyers",
    destination: "https://www.korcomptenz.com/kor-cares",
    permanent: true,
  },
  {
    source: "/microsoft-dynamics-solutions/book-a-free-demo",
    destination: "https://www.korcomptenz.com/contact-us",
    permanent: true,
  },
  {
    source: "/microsoft-dynamics",
    destination: "https://www.korcomptenz.com/microsoft-dynamics-365",
    permanent: true,
  },
  {
    source: "/ms-dynamics365",
    destination: "https://www.korcomptenz.com/microsoft-dynamics-365",
    permanent: true,
  },
  {
    source: "/advanced-warehouse-management",
    destination: "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-advanced-warehouse-management",
    permanent: true,
  },
  {
    source: "/en/microsoft-dynamics-365/microsoft-dynamics-365-business-central",
    destination: "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-business-central",
    permanent: true,
  },
  {
    source: "/erp/microsoft-dynamics-365/microsoft-dynamics-365-business-central",
    destination: "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-business-central",
    permanent: true,
  },
  {
    source: "/en/microsoft-dynamics-365/microsoft-dynamics-365-business-central-product-configurator",
    destination: "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-business-central-product-configurator",
    permanent: true,
  },
  {
    source: "/quality-control-for-dynamics-365-business-central-trk=products_details_guest_primary_call_to_action",
    destination: "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-business-central-quality-control",
    permanent: true,
  },
  {
    source: "/microsoft-dynamics-365-customer-engagement-ce-crm",
    destination: "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-customer-engagement",
    permanent: true,
  },
  {
    source: "/microsoft-dynamics-365-customer-service",
    destination: "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-customer-service",
    permanent: true,
  },
  {
    source: "/microsoft-dynamics-365-finance-and-operations",
    destination: "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-finance-and-operations",
    permanent: true,
  },
  {
    source: "/microsoft-dynamics-365-sales",
    destination: "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-sales",
    permanent: true,
  },
  {
    source: "/ae/microsoft-power-platform",
    destination: "https://www.korcomptenz.com/microsoft-power-platform",
    permanent: true,
  },
  {
    source: "/ca/microsoft-power-apps-solutions-and-services",
    destination: "https://www.korcomptenz.com/microsoft-power-platform",
    permanent: true,
  },
  {
    source: "/microsoft-power-bi-integration-implementation-services",
    destination: "https://www.korcomptenz.com/microsoft-power-platform/microsoft-power-bi",
    permanent: true,
  },
  {
    source: "/cloud/enterprise-analytics-cloud-services",
    destination: "https://www.korcomptenz.com/modern-cloud-data-services",
    permanent: true,
  },
  {
    source: "/november-newsletter",
    destination: "https://www.korcomptenz.com/newsletter",
    permanent: true,
  },
  {
    source: "/october-newsletter",
    destination: "https://www.korcomptenz.com/newsletter",
    permanent: true,
  },
  {
    source: "/september-newsletter",
    destination: "https://www.korcomptenz.com/newsletter",
    permanent: true,
  },
  {
    source: "/au/newsroom/korcomptenz-iso-9001-certification-quality-excellence",
    destination: "https://www.korcomptenz.com/newsroom/korcomptenz-iso-9001-certification-quality-excellence",
    permanent: true,
  },
  {
    source: "/au/newsroom/korcomptenz-named-contender-in-isg-provider-lens-for-ai-services-and-data-fabric-2025-report",
    destination: "https://www.korcomptenz.com/newsroom/korcomptenz-iso-iec-27001-certification-security",
    permanent: true,
  },
  {
    source: "/newsroom-and-events/sap-sapphire-2024",
    destination: "https://www.korcomptenz.com/newsroom/sap-sapphire-2024",
    permanent: true,
  },
  {
    source: "/newsroom-and-events/sap-sapphire-2025",
    destination: "https://www.korcomptenz.com/newsroom/sap-sapphire-2025",
    permanent: true,
  },
  {
    source: "/press-release/korcomptenz-expands-chennai-office-ai-center",
    destination: "https://www.korcomptenz.com/newsroom/korcomptenz-expands-chennai-office-ai-center",
    permanent: true,
  },
  {
    source: "/awards-and-recognitions/korcomptenz-named-contender-in-isg-provider-lens-for-ai-services-and-data-fabric-2025-report",
    destination: "https://www.korcomptenz.com/newsroom/korcomptenz-named-contender-in-isg-provider-lens-for-ai-services-and-data-fabric-2025-report",
    permanent: true,
  },
  {
    source: "/non-profit-sector-solutions",
    destination: "https://www.korcomptenz.com/nonprofit-sectors",
    permanent: true,
  },
  {
    source: "/au/podcast/ep-04-serverless-analytics",
    destination: "https://www.korcomptenz.com/podcast/ep-04-serverless-analytics",
    permanent: true,
  },
  {
    source: "/en/salesforce/salesforce-marketing-cloud",
    destination: "https://www.korcomptenz.com/salesforce/salesforce-marketing-cloud",
    permanent: true,
  },
  {
    source: "/salesforce-consulting",
    destination: "https://www.korcomptenz.com/salesforce/salesforce-consulting-services",
    permanent: true,
  },
  {
    source: "/salesforce-consulting-services",
    destination: "https://www.korcomptenz.com/salesforce/salesforce-consulting-services",
    permanent: true,
  },
  {
    source: "/salesforce-integration",
    destination: "https://www.korcomptenz.com/salesforce/salesforce-consulting-services",
    permanent: true,
  },
  {
    source: "/au/salesforce/salesforce-einstein-ai-and-analytics",
    destination: "https://www.korcomptenz.com/salesforce/salesforce-einstein-ai-and-analytics",
    permanent: true,
  },
  {
    source: "/salesforce-marketing-cloud",
    destination: "https://www.korcomptenz.com/salesforce/salesforce-marketing-cloud",
    permanent: true,
  },
  {
    source: "/ae/salesforce-sales-cloud-solutions",
    destination: "https://www.korcomptenz.com/salesforce/salesforce-sales-cloud",
    permanent: true,
  },
  {
    source: "/ae/sap/grow-with-sap",
    destination: "https://www.korcomptenz.com/sap/grow-with-sap",
    permanent: true,
  },
  {
    source: "/sap-s4hana-implemenation-services",
    destination: "https://www.korcomptenz.com/sap/sap-s4hana-implemenation-services",
    permanent: true,
  },
  {
    source: "/rise-with-sap",
    destination: "https://www.korcomptenz.com/sap/rise-with-sap",
    permanent: true,
  },
  {
    source: "/sap/sap-private-cloud",
    destination: "https://www.korcomptenz.com/sap/sap-business-suite",
    permanent: true,
  },
  {
    source: "/sap/sap-consulting-services",
    destination: "https://www.korcomptenz.com/sap/sap-consulting-services",
    permanent: true,
  },
  {
    source: "/sap-integrated-business-planning",
    destination: "/sap/sap-ibp-services",
    permanent: true,
  },
  {
    source: "/supply-chain-management",
    destination: "https://www.korcomptenz.com/supply-chain-management",
    permanent: true,
  },
  {
    source: "/webinar/cloud-azure-synapse-analytics-services",
    destination: "https://www.korcomptenz.com/webinar/cloud-azure-synapse-analytics-services",
    permanent: true,
  },
  {
    source: "/webinar/prevailing-through-disruption-with-rapid-adoption-of-technologies",
    destination: "https://www.korcomptenz.com/webinar/prevailing-through-disruption-with-rapid-adoption-of-technologies",
    permanent: true,
  },
  {
    source: "/web-stories/5-reasons-to-move-to-the-public-cloud-with-grow-with-sap",
    destination: "https://www.korcomptenz.com/webstories/5-reasons-to-move-to-the-public-cloud-with-grow-with-sap",
    permanent: true,
  },
  {
    source: "/web-stories/why-sap-erp-is-key-to-growing-your-business-smarter",
    destination: "https://www.korcomptenz.com/webstories/eight-ways-sap-erp-benefits-your-busines",
    permanent: true,
  },
  {
    source: "/au/whitepaper/driving-innovation-how-ai-and-next-generation-technologies-can-transform-your-business",
    destination: "https://www.korcomptenz.com/whitepaper/AI-Next-Gen-Tech-Transform-Business.pdf",
    permanent: true,
  },
  {
    source: "/au/whitepaper/healthcare-cybersecurity",
    destination: "https://www.korcomptenz.com/whitepaper/Healthcare-Cybersecurity.pdf",
    permanent: true,
  },
  {
    source: "/ca/cms/shopify-development",
    destination: "https://www.korcomptenz.com/cms/shopify-development/",
    permanent: true,
  },
  {
    source: "/ae/whitepaper/microsoft-dynamics-vs-salesforce-crm",
    destination: "https://www.korcomptenz.com/whitepaper/Microsoft-Dynamics-vs-Salesforce-CRM.pdf",
    permanent: true,
  },
  {
    source: "/ae/whitepaper/why-microsoft-dynamics-365-finance-and-operation-is-the-smarter-choice-over-sap-s4hana-for-sap-ecc-migrations",
    destination: "https://www.korcomptenz.com/whitepaper/Why-Microsoft-Dynamics-365-Finance-and-Operation-is-the-Smarter-Choice-Over-SAP-S4HANA-for-SAP-ECC-Migrations.pdf",
    permanent: true,
  },

  ],
};

export default nextConfig;
