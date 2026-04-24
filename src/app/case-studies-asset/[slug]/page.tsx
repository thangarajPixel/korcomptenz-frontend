import InsightCasePdfSection from "../insight-case";
import { getBlogPage } from "@/services";
import { cache } from "react";
import { generatePageMetadata } from "@/utils/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

const getPageServiceCache = cache(getBlogPage);

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = await getPageServiceCache({ id: slug });
  return generatePageMetadata({
    title: data?.seo?.title,
    description: data?.seo?.description,
    path: `/case-studies-asset/${slug}`,
    image: data?.heroSection?.image?.url,
  });
}

export default async function Page({ params }: Props) {
  return <InsightCasePdfSection params={params} />;
}
