import { PdfViewSection } from "@/components/pdf-view-section";
import { getCaseStudyPDFPage } from "@/services";
import { cache } from "react";
// hide
type Props = {
  params: Promise<{ slug: string }>;
};

const getPageServiceCache = cache(getCaseStudyPDFPage);

export default async function InsightCasePdfSection({ params }: Props) {
  const { slug } = await params;

  const data = await getPageServiceCache({ id: slug });

  const blobUrl = data;

  return <PdfViewSection blobUrl={blobUrl} />;
}
