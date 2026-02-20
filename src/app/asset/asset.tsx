import { PdfViewSection } from "@/components/pdf-view-section";
import { getAssetPDFPage } from "@/services";
import { cache } from "react";

const getBlogPdfCache = cache(getAssetPDFPage);
type Props = {
  params: Promise<{ slug: string[] }>;
};
export default async function BlogePdfSection({ params }: Props) {
  const { slug } = await params;

  const fullSlug = slug.join("/");

  const data = await getBlogPdfCache({
    id: fullSlug,
  });

  return <PdfViewSection blobUrl={data} />;
}
