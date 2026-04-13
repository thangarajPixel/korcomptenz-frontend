import type { MetadataRoute } from "next";
import {
  getCaseStudyList,
  getNewsroomPage,
  getEventListPage,
  getNewsletterPage,
  getInsightsList,
} from "@/services";


const BASE_URL = "https://www.korcomptenz.com";

// Static routes with their priorities
const staticRoutes = [
  { url: "/", priority: 1, changeFrequency: "daily" as const },
  { url: "/about-us", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/career", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/contact-us", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/case-studies", priority: 0.9, changeFrequency: "daily" as const },
  { url: "/events", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/newsletter", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/newsroom", priority: 0.9, changeFrequency: "daily" as const },
  
  // AI & Analytics
  { url: "/ai-analytics-and-automation", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/artificial-intelligence/ai-augmented-analytics-decision-making", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/artificial-intelligence/ai-driven-enterprise-management", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/artificial-intelligence/ai-readiness-assessments-strategies", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/artificial-intelligence/internet-of-things-iot-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/artificial-intelligence/microsoft-365-copilot", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/artificial-intelligence/microsoft-fabric", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/artificial-intelligence/responsible-ai-solutions", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/artificial-intelligence/salesforce-agentforce", priority: 0.9, changeFrequency: "weekly" as const },
  
  // Cloud Services
  { url: "/cloud/ai-powered-cloud-managed-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/cloud/ai-powered-cloud-migration-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/cloud/cloud-azure-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/cloud/cloud-modernization-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/cloud/cloud-transformation-and-automation", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/cloud/cloud-value-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/cloud/cyber-secruity-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/cloud/hybrid-cloud-services", priority: 0.9, changeFrequency: "weekly" as const },
  
  // CMS
  { url: "/cms/drupal-development", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/cms/wordpress-development", priority: 0.9, changeFrequency: "weekly" as const },
  
  // CRM & ERP
  { url: "/crm-advisory-and-consulting-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/digital-transformation-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/erp/erp-advisory-and-consulting-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/erp/erp-implementation-rescue", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/erp/erp-migration-and-upgrade-services", priority: 0.9, changeFrequency: "weekly" as const },
  
  // E-commerce
  { url: "/ecommerce/adobe-experience-manager", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/ecommerce/k360-ecommerce-suite", priority: 0.9, changeFrequency: "weekly" as const },
  
  // Microsoft Dynamics 365
  { url: "/microsoft-dynamics-365", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/microsoft-dynamics-365/microsoft-dynamics-365-business-central", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/microsoft-dynamics-365/microsoft-dynamics-365-customer-service", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/microsoft-dynamics-365/microsoft-dynamics-365-field-service", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/microsoft-dynamics-365/microsoft-dynamics-365-finance-and-operations", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/microsoft-dynamics-365/microsoft-dynamics-365-sales", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/microsoft-dynamics-365/microsoft-dynamics-365-supply-chain-management-services", priority: 0.9, changeFrequency: "weekly" as const },
  
  // Microsoft
  { url: "/microsoft", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/microsoft/azure-ai-foundry-agentic-ai-solutions", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/microsoft/azure-databricks-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/microsoft-power-platform/microsoft-power-bi", priority: 0.9, changeFrequency: "weekly" as const },
  
  // Salesforce
  { url: "/salesforce/salesforce-data-cloud", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/salesforce/salesforce-einstein-ai-and-analytics", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/salesforce/salesforce-field-service-lighting", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/salesforce/salesforce-marketing-cloud", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/salesforce/salesforce-sales-cloud", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/salesforce/salesforce-service-cloud", priority: 0.9, changeFrequency: "weekly" as const },
  
  // SAP
  { url: "/sap", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/sap/grow-with-sap", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/sap/rise-with-sap", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/sap/sap-application-managed-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/sap/sap-btp-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/sap/sap-business-suite", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/sap/sap-consulting-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/sap/sap-joule-ai", priority: 0.9, changeFrequency: "weekly" as const },
  
  // ServiceNow
  { url: "/servicenow", priority: 0.9, changeFrequency: "weekly" as const },
  
  // Other Services
  { url: "/it-consulting-advisory-services", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/supply-chain-management", priority: 0.9, changeFrequency: "weekly" as const },
  { url: "/nonprofit-sectors", priority: 0.9, changeFrequency: "weekly" as const },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Fetch dynamic data
    const [caseStudies, newsroom, events, newsletters, insights] = await Promise.all([
      getCaseStudyList({
        params: {
          pagination: { page: 1, pageSize: 1000, pageCount: 1, total: 1000 },
          sort: ["createdAt:desc"],
        },
      }).catch(() => ({ results: [] })),
      getNewsroomPage().catch(() => ({ listData: [] })),
      getEventListPage().catch(() => ({ listData: [] })),
      getNewsletterPage().catch(() => ({ listData: [] })),
      getInsightsList({
        params: {
          pagination: { page: 1, pageSize: 1000, pageCount: 1, total: 1000 },
          sort: ["createdAt:desc"],
        },
      }).catch(() => ({ results: [] })),
    ]);

    // Build static routes
    const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
      url: `${BASE_URL}${route.url}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));

    // Build case study routes
    const caseStudyEntries: MetadataRoute.Sitemap =
      caseStudies?.results?.map((study) => ({
        url: `${BASE_URL}/case-studies/${study.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })) || [];

    // Build newsroom routes
    const newsroomEntries: MetadataRoute.Sitemap =
      newsroom?.listData?.map((news) => ({
        url: `${BASE_URL}/newsroom/${news.slug}`,
        lastModified: news.publishedAt ? new Date(news.publishedAt) : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })) || [];

    // Build event routes
    const eventEntries: MetadataRoute.Sitemap =
      events?.listData?.map((event) => ({
        url: `${BASE_URL}/events/${event.slug}`,
        lastModified: event.publishedAt ? new Date(event.publishedAt) : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      })) || [];

    // Build newsletter routes
    const newsletterEntries: MetadataRoute.Sitemap =
      newsletters?.listData?.map((newsletter) => ({
        url: `${BASE_URL}/newsletter/${newsletter.slug}`,
        lastModified: newsletter.publishedAt ? new Date(newsletter.publishedAt) : new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      })) || [];

    // Build insight/blog routes
    const insightEntries: MetadataRoute.Sitemap =
      insights?.results?.map((insight) => ({
        url: `${BASE_URL}/blog/${insight.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      })) || [];

    return [
      ...staticEntries,
      ...caseStudyEntries,
      ...newsroomEntries,
      ...eventEntries,
      ...newsletterEntries,
      ...insightEntries,
    ];
  } catch {
    // Return at least the static routes if dynamic fetching fails
    return staticRoutes.map((route) => ({
      url: `${BASE_URL}${route.url}`,
      lastModified: new Date(),
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }));
  }
}
