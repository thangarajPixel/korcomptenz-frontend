"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function BreadcrumbSchema() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // FAQ Schema for ERP Advisory URL
  if (pathname.includes("/erp/erp-advisory-and-consulting-services")) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How do you guide ERP strategy and vendor selection ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We run a structured , vendor-agnostic process capability mapping ,fit-gap ,TCO modelling, reference architecture and scenario-based demos scored against business KPIs-so you choose the platform that maximizes ROI with the least change debt (For many clients this includes Microsoft Dynamics 365 F&SCM evaluations)."
          }
        },
        {
          "@type": "Question",
          "name": "How do you link ERP to the P&L (not just \"IT Metrics\")",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Every requirement is tied to a financial lever-working capital (DSO/DPO) , margin, SG&A per order, OTIF, scrap/rework We instrument dashboards to Finance validates gains and we re-prioritize the roadmap based on realized details each quarter."
          }
        },
        {
          "@type": "Question",
          "name": "How do you de-risk implementation or rescue a struggling program ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We establish outcome based governance right-size scope into phases run upfront data quality sprint and embed change leadership with business ownership for turnarounds we do a 3-4 week health check (scope, data, integrations, testing) and re-baseline plan, budget and value ."
          }
        },
        {
          "@type": "Question",
          "name": "What's Your integration and data strategy across ERP, CRM and analytics ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "API-first and event-driven for real-time moments governed pipelines for analytics. We define canonical models/MDM, unify telemetry into BI and ensure ERP talks cleanly to CRM, eCommerce ,WMS/TMS and shop-floor/IoT-so leaders get a single source of truth and faster decision."
          }
        },
        {
          "@type": "Question",
          "name": "Cloud ERP or on-prem How do we decide ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We assess compliance , latency and cost profiles then model TCO vs Agility Cloud ERP often wins on scale and time-to-value hybrid can bridge constraints , Either way, we design for portability security and exit options to avoid lock-in."
          }
        },
        {
          "@type": "Question",
          "name": "How do You ensure adoption sticks after go-live ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Role-based enablement in-flow guidance ,super-user networks and incentives tied to KPI lift- not just training hours Post-go-live we run a continuous-improvement  backlog (release hygiene, enhancements) so benefits compound rather than decay."
          }
        },
        {
          "@type": "Question",
          "name": "What operating model and support do we need post-implementation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A product-line CoE with shared platforms, outcome SLAs, and 24×7 AMS to stabilize, optimize, and evolve. We pair this with FinOps-style cost governance (for cloud ERP) and a quarterly value review to keep spend aligned to business impact. Cloud ERP often wins on scale and time-to-value; hybrid can bridge constraints. Either way, we design for portability, security, and exit options to avoid lock-in."
          }
        }
      ]
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    );
  }

  // Breadcrumb Schema for Microsoft Dynamics URL
  if (pathname.includes("/microsoft-dynamics-365/microsoft-dynamics-365-finance-and-operations")) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.korcomptenz.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Microsoft Dynamics 365",
          "item": "https://www.korcomptenz.com/microsoft-dynamics-365"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Microsoft Dynamics 365 Finance and Operations",
          "item": "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-finance-and-operations"
        }
      ]
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    );
  }

  return null;
}
