import { cache } from "react";
import InsightsSuccessPage from "./_utils/insights-success-page";
import { getInsightsPage } from "@/services";
import { generatePageMetadata } from "@/utils/metadata";

const getInsightsPageCache = cache(getInsightsPage);

export async function generateMetadata() {
  const data = await getInsightsPageCache();

  return generatePageMetadata({
    title: data?.seo?.title,
    description: data?.seo?.description,
    path: "/insights",
  });
}

const Page = async () => {
  return <InsightsSuccessPage />;
};

export default Page;
