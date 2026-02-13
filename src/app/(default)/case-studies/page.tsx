import React, { cache } from "react";
import ClientSuccessPage from "./_utils/client-success-page";
import { getCaseStudiesPage } from "@/services";

const getCaseStudiesPageCache = cache(getCaseStudiesPage);
export async function generateMetadata() {
  const data = await getCaseStudiesPageCache();

  return {
    title: data?.seo?.title || "Career",
    description: data?.seo?.description || "",
    alternates: {
      canonical: "/case-studies",
    },
  };
}

const Page = async () => {
  return <ClientSuccessPage />;
};

export default Page;
