import InsightCasePdfSection from "../asset";
type Props = {
  params: Promise<{ slug: string[] }>;
};
export default async function Page({ params }: Props) {
  return <InsightCasePdfSection params={params} />;
}
