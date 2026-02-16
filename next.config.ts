import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
  ],
};

export default nextConfig;
