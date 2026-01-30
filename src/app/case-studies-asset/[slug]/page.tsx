"use client";

import React from "react";
import { PdfViewSection } from "@/components/pdf-view-section";

export default function Page() {
  const [blobUrl, setBlobUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    const slug = localStorage.getItem("caseStudySlug");

    if (slug) {
      setBlobUrl(slug);

      // ✅ clear after successful read
      localStorage.removeItem("caseStudySlug");
    }
  }, []);

  if (!blobUrl) {
    return null;
  }

  return <PdfViewSection blobUrl={blobUrl} />;
}
