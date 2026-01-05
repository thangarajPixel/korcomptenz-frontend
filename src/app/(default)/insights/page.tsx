import { cache } from "react";
import InsightsSuccessPage from "./_utils/insights-success-page";
import { getInsightsPage } from "@/services";

const getInsightsPageCache = cache(getInsightsPage);

export async function generateMetadata() {
  const data = await getInsightsPageCache();

  return {
    title: data?.seo?.title || "Insights",
    description: data?.seo?.description || "",
  };
}

const Page = async () => {
  return <InsightsSuccessPage />;
};

export default Page;
