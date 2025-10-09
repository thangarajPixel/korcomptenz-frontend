import React, { cache } from "react";

import CaseStudies from "./_utils/case-studies";
import { getCaseStudiesPage } from "@/services";

const getCaseStudiesPageCache = cache(getCaseStudiesPage);
const Page = async () => {
  const data = await getCaseStudiesPageCache();

  return <CaseStudies data={data} />;
};

export default Page;
