import { cache } from "react";
import InsightCasePdfSection from "../asset";
import { getAssetPDFPage } from "@/services";
import { generatePageMetadata } from "@/utils/metadata";

const getBlogPdfCache = cache(getAssetPDFPage);
type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const fullSlug = slug.join("/");
  const data = await getBlogPdfCache({ id: fullSlug });

  return generatePageMetadata({
    title: data?.seo?.title,
    description: data?.seo?.description,
    path: `/asset/${fullSlug}`,
    image: data?.image?.url,
  });
}

export default async function Page({ params }: Props) {
  return <InsightCasePdfSection params={params} />;
}
