import React, { cache } from "react";

import CaseStudies from "./_utils/case-studies";
import { getCaseStudiesPage, getCaseStudyList } from "@/services";
import { INITIAL_PAGINATION } from "@/utils/helper";

const getCaseStudiesPageCache = cache(getCaseStudiesPage);
const Page = async () => {
  const [data, initialData] = await Promise.all([getCaseStudiesPageCache(), getCaseStudyList({ params: { pagination: INITIAL_PAGINATION } })]);

  return <CaseStudies data={data} initialData={initialData} />;
};

export default Page;
