import React, { cache } from "react";
import CaseStudy from "./_utils/case-study";
import { getCaseStudyService } from "@/services";

type Props = {
  params: { id: string };
};

const getCaseStudySingleCache = cache(getCaseStudyService);

const Page = async ({ params }: Props) => {
  const { id } = await params;
  const slug = id;
  const data = await getCaseStudySingleCache({ slug });

  return (
    <div>
      <CaseStudy data={data} />
    </div>
  );
};

export default Page;
