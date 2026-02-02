import { getBlogPage } from "@/services";
import { cache } from "react";
import PdfViewSection from "../pdf-view-section";

type Props = {
  params: Promise<{ slug: string }>;
};

const getPageServiceCache = cache(getBlogPage);

export default async function InsightPdfSection({ params }: Props) {
  const { slug } = await params;
  const data = await getPageServiceCache({ id: slug });
  const blobUrl = data?.attachment?.url;

  return <PdfViewSection blobUrl={blobUrl} />;
}
