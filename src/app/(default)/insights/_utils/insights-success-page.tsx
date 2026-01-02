import {
  getCaseStudySearchPage,
  getInsightsList,
  getInsightsPage,
} from "@/services";
import { INITIAL_PAGINATION } from "@/utils/helper";
import React, { cache } from "react";
import Insights from "./insights";

const getInsightsPageCache = cache(getInsightsPage);

export async function generateMetadata() {
  const data = await getInsightsPageCache();

  return {
    title: data?.seo?.title || "Insights",
    description: data?.seo?.description || "",
  };
}

const InsightsSuccessPage = async ({ slug }: { slug?: string }) => {
  const [data, initialData, search] = await Promise.all([
    getInsightsPageCache(),
    getInsightsList({
      params: {
        pagination: INITIAL_PAGINATION,
        sort: ["createdAt:desc"],
        slug,
      },
    }),
    getCaseStudySearchPage({}),
  ]);

  return <Insights data={data} initialData={initialData} search={search} />;
};

export default InsightsSuccessPage;
