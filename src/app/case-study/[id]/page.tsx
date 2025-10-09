import React, { cache } from "react";
import CaseStudy from "./_utils/case-study";
import { getCaseStudyService } from "@/services";

type Props = {
  params: Promise<{ id: string }>;
};

const getCaseStudySingleCache = cache(getCaseStudyService);

const Page = async ({ params }: Props) => {
  const { id: slug } = await params;
  const data = await getCaseStudySingleCache({ slug });

  return <CaseStudy data={data} />;
};

export default Page;
