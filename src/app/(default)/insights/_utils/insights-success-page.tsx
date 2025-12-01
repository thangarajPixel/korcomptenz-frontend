import {
  getCaseStudyList,
  getCaseStudySearchPage,
  getInsightsPage,
} from "@/services";
import { INITIAL_PAGINATION } from "@/utils/helper";
import React, { cache } from "react";
import Insights from "./insights";

const getInsightsPageCache = cache(getInsightsPage);

const InsightsSuccessPage = async ({ slug }: { slug?: string }) => {
  const [data, initialData, search] = await Promise.all([
    getInsightsPageCache(),
    getCaseStudyList({
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
