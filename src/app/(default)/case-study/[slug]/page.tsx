import ClientSuccessPage from "../../case-studies/_utils/client-success-page";
import { getCaseStudyList } from "@/services";
import { INITIAL_PAGINATION } from "@/utils/helper";
import { generatePageMetadata } from "@/utils/metadata";
import type { Metadata } from "next";
import { cache } from "react";

const getCaseStudyListCache = cache(getCaseStudyList);

type PageProps = {
  params: Promise<{ slug?: string }>; // string not string[]
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const data = await getCaseStudyListCache({
    params: {
      pagination: INITIAL_PAGINATION,
      sort: ["createdAt:desc"],
      slug,
    },
  });

  if (slug && data) {
    const matchedItem =
      data?.service?.find((item: { slug: string }) => item?.slug === slug) ||
      data?.technology?.find((item: { slug: string }) => item?.slug === slug);

    if (matchedItem?.seo) {
      return generatePageMetadata({
        title: matchedItem.seo.title,
        description: matchedItem.seo.description,
        path: `/case-study/${slug}`,
        image: (matchedItem as { image?: { url: string } })?.image?.url,
      });
    }
  }

  return generatePageMetadata({ path: "/case-study" });
}
const Page = async ({ params }: PageProps) => {
  const { slug } = await params;

  return <ClientSuccessPage slug={slug} />;
};

export default Page;
