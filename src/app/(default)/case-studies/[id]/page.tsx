import React, { cache } from "react";
import CaseStudy from "./_utils/case-study";
import { getCaseStudyPage, getCaseStudyService } from "@/services";
import NotFound from "@/components/not-found";

type Props = {
  params: Promise<{ id: string }>;
};
export const dynamic = "force-dynamic";
const getCaseStudySingleCache = cache(getCaseStudyService);

export async function generateMetadata({ params }: Props) {
  const { id: slug } = await params;
  const data = await getCaseStudySingleCache({ slug });

  return {
    title: data?.seo?.title || slug,
    description: data?.seo?.description || "",
  };
}
const Page = async ({ params }: Props) => {
  const { id: slug } = await params;
  const [data, essential] = await Promise.all([
    getCaseStudySingleCache({ slug }),
    getCaseStudyPage(),
  ]);

  return (
    <div>
      {data?.seo?.title === "not-found" ? (
        <div className="pb-10 md:pb-24">
          <NotFound data={data?.list?.[0]} />
        </div>
      ) : (
        <CaseStudy data={data} essential={essential} />
      )}
    </div>
  );
};

export default Page;
