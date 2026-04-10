import { cache } from "react";
import InsightCasePdfSection from "../asset";
import { getAssetPDFPage } from "@/services";


const getBlogPdfCache = cache(getAssetPDFPage);
type Props = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
    const fullSlug = slug.join("/");
  const data = await getBlogPdfCache({ id: fullSlug });
  
  return {
    title: data?.seo?.title || fullSlug,
    description: data?.seo?.description || "",
    alternates: {
      canonical: "/asset/" + fullSlug,
    },
  };
}



export default async function Page({ params }: Props) {
  
  return <InsightCasePdfSection params={params} />;
}
