import { InsightPdfSection } from "@/components/pdf-view-section";
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
    path: `/infographic/${slug}`,
    image: data?.heroSection?.image?.url,
  });
}

export default async function Page({ params }: Props) {
  return <InsightPdfSection params={params} />;
}
