import React, { cache } from "react";
import CaseStudy from "./_utils/case-study";
import { getCaseStudyPage, getCaseStudyService } from "@/services";

type Props = {
  params: Promise<{ id: string }>;
};

const getCaseStudySingleCache = cache(getCaseStudyService);

export async function generateMetadata({
  params,
}: Props) {
  const { id: slug } = await params;
  const data = await getCaseStudySingleCache({ slug })
  return {
    title: data?.caseStudy?.seo?.title || slug,
    description: data?.caseStudy?.seo?.description || "",
  }
}
const Page = async ({ params }: Props) => {
  const { id: slug } = await params;
  const [data, essential] = await Promise.all([
    getCaseStudySingleCache({ slug }),
    getCaseStudyPage()
  ]);

  return <CaseStudy data={data} essential={essential} />;
};

export default Page;
