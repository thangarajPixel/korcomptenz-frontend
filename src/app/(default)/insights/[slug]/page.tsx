import React, { cache } from "react";

import InsightsSuccessPage from "../_utils/insights-success-page";
import { getInsightsPage } from "@/services";
const getInsightsPageCache = cache(getInsightsPage);

export async function generateMetadata() {
  const data = await getInsightsPageCache();

  return {
    title: data?.seo?.title || "Home",
    description: data?.seo?.description || "",
    alternates: {
      canonical: "/insights",
    },
  };
}
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return <InsightsSuccessPage slug={slug} />;
};

export default Page;
