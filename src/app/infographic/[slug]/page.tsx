import { InsightPdfSection } from "@/components/pdf-view-section";
type Props = {
  params: Promise<{ slug: string }>;
};
export default async function Page({ params }: Props) {
  return <InsightPdfSection params={params} />;
}
