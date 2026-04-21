import { headers } from "next/headers";

export async function BreadcrumbSchema() {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";

  /* ================= HOME PAGE – VIDEO ================= */
  if (pathname === "/") {
    const homeVideoSchema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Discover Expert-Led Transformation with Korcomptenz",
      description:
        "Korcomptenz is a technology solutions partner with global delivery capabilities, helping mid-market and enterprise organizations modernize and grow across Microsoft and other leading platforms. We specialize in ERP and CRM transformation, cloud modernization, data & analytics, AI-led automation, IoT, and digital engineering—bringing strategy and execution together to deliver measurable outcomes. Our work has also been recognized by leading analyst firms, including ISG and Forrester.",
      thumbnailUrl:
        "https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/Video_Thumbnail_af745dd455.png",
      uploadDate: "2025-12-30",
      duration: "PT1M16S",
      embedUrl: "https://youtu.be/zGpncr3-Uy8",
    };

    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeVideoSchema),
        }}
      />
    );
  }

  /* ========== MICROSOFT DYNAMICS 365 – VIDEO ========== */
  if (pathname === "/microsoft-dynamics-365") {
    const mdVideoSchema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "A CIO's Perspective: From Transformation to Tangible ROI",
      description:
        "In this strategic PSS session with our SMEs during Community Summit 2025, a veteran CIO joins our Korcomptenz team to dive deep into what truly matters when evaluating modern platforms, navigating transformation, and extracting ROI from technology investments.",
      thumbnailUrl:
        "https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/ROI_Video_Thumbnail_5fd2ce9b30.webp",
      uploadDate: "2025-11-11",
      duration: "PT3M5S",
      embedUrl: "https://youtu.be/D3z3MfkkDRA",
    };

    return (
      <script
        type="VideoObject"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mdVideoSchema),
        }}
      />
    );
  }

  /* ========== FINANCE & OPERATIONS – BREADCRUMB ========== */
  if (
    pathname.includes(
      "/microsoft-dynamics-365/microsoft-dynamics-365-finance-and-operations",
    )
  ) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.korcomptenz.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Microsoft Dynamics 365",
          item: "https://www.korcomptenz.com/microsoft-dynamics-365",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Microsoft Dynamics 365 Finance and Operations",
          item: "https://www.korcomptenz.com/microsoft-dynamics-365/microsoft-dynamics-365-finance-and-operations",
        },
      ],
    };

    return (
      <script
        type="VideoObject"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    );
  }

  return null;
}
