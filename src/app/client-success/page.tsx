import React, { cache } from "react";
import { getCaseStudiesService } from "@/services";
import CaseStudies from "./_utils/case-studies";

const getCaseStudiesCache = cache(getCaseStudiesService);
const Page = async () => {
  const data = await getCaseStudiesCache();

  return <CaseStudies data={data} />;
};

export default Page;
