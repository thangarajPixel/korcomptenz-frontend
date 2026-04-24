import React, { cache } from "react";

import InsightsSuccessPage from "../_utils/insights-success-page";
import { getInsightsPage } from "@/services";
import { generatePageMetadata } from "@/utils/metadata";

const getInsightsPageCache = cache(getInsightsPage);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getInsightsPageCache();

  const matchedItem = data?.category?.find((item) => item?.slug === slug);

  return generatePageMetadata({
    title: matchedItem?.seo?.title || data?.seo?.title,
    description: matchedItem?.seo?.description || data?.seo?.description,
    path: `/insights/${slug}`,
    image: (matchedItem as { image1?: { url: string } })?.image1?.url,
  });
}
const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return <InsightsSuccessPage slug={slug} />;
};

export default Page;
