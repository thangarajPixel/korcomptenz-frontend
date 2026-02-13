import { InsightPdfSection } from "@/components/pdf-view-section";
import { getBlogPage } from "@/services";
import { cache } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

const getPageServiceCache = cache(getBlogPage);

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const data = await getPageServiceCache({ id: slug });
  return {
    title: data?.seo?.title || slug,
    description: data?.seo?.description || "",
    alternates: {
      canonical: "/infographic/" + slug,
    },
  };
}

export default async function Page({ params }: Props) {
  return <InsightPdfSection params={params} />;
}
