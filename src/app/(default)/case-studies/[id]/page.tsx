import { cache } from "react";
import CaseStudy from "./_utils/case-study";
import { getCaseStudyPage, getCaseStudyService } from "@/services";
import NotFound from "@/components/not-found";
import { generatePageMetadata } from "@/utils/metadata";

type Props = {
  params: Promise<{ id: string }>;
};

// SSG Configuration: Pre-render at build time, revalidate every hour
export const revalidate = 3600; // ISR: 1 hour

const getCaseStudySingleCache = cache(getCaseStudyService);

export async function generateMetadata({ params }: Props) {
  const { id: slug } = await params;
  const data = await getCaseStudySingleCache({ slug });

  return generatePageMetadata({
    title: data?.seo?.title,
    description: data?.seo?.description,
    path: `/case-studies/${slug}`,
    image: data?.heroSection?.image?.url,
  });
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
