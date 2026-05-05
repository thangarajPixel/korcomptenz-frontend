import React, { cache } from "react";
import ClientSuccessPage from "./_utils/client-success-page";
import { getCaseStudiesPage } from "@/services";
import { generatePageMetadata } from "@/utils/metadata";

const getCaseStudiesPageCache = cache(getCaseStudiesPage);
export async function generateMetadata() {
  const data = await getCaseStudiesPageCache();

  return generatePageMetadata({
    title: data?.seo?.title,
    description: data?.seo?.description,
    path: "/case-studies",
  });
}

const Page = async () => {
  return <ClientSuccessPage />;
};

export default Page;
