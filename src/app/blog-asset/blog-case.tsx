import { PdfViewSection } from "@/components/pdf-view-section";
import { getBlogPDFPage } from "@/services";
import { cache } from "react";
// hide
type Props = {
  params: Promise<{ slug: string }>;
};

const getBlogPdfCache = cache(getBlogPDFPage);

export default async function BlogePdfSection({ params }: Props) {
  const { slug } = await params;

  const data = await getBlogPdfCache({ id: slug });

  const blobUrl = data;

  return <PdfViewSection blobUrl={blobUrl} />;
}
