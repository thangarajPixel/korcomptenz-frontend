import { PdfViewSection } from "@/components/pdf-view-section";
import { getAssetPDFPage } from "@/services";
import { cache } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

const getBlogPdfCache = cache(getAssetPDFPage);

export default async function BlogePdfSection({ params }: Props) {
  const { slug } = await params;

  const data = await getBlogPdfCache({ id: slug });

  const blobUrl = data;

  return <PdfViewSection blobUrl={blobUrl} />;
}
