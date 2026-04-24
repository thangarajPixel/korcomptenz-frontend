import {
  getCaseStudiesPage,
  getCaseStudyList,
  getCaseStudySearchPage,
} from "@/services";
import { INITIAL_PAGINATION } from "@/utils/helper";
import { cache } from "react";
import CaseStudies from "./case-studies";

// SSG Configuration: Pre-render at build time, revalidate every hour
export const revalidate = 3600; // ISR: 1 hour

const getCaseStudiesPageCache = cache(getCaseStudiesPage);

const ClientSuccessPage = async ({ slug }: { slug?: string }) => {
  const [data, initialData, search] = await Promise.all([
    getCaseStudiesPageCache(),
    getCaseStudyList({
      params: {
        pagination: INITIAL_PAGINATION,
        sort: ["createdAt:desc"],
        slug,
      },
    }),
    getCaseStudySearchPage({}),
  ]);

  return <CaseStudies data={data} initialData={initialData} search={search} />;
};

export default ClientSuccessPage;
