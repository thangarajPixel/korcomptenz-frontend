import { getBlogPage } from "@/services";
import { cache } from "react";

type Props = {
  params: Promise<{ slug: string }>;
};

const getPageServiceCache = cache(getBlogPage);

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;
  const data = await getPageServiceCache({ id: slug })
  return {
    title: data?.seo?.title || slug,
    description: data?.seo?.description || "",
  }
}

export default async function BlobPage({ params }: Props) {
  const { slug } = await params;

  const data = await getPageServiceCache({ id: slug });
  const blobUrl = data?.attachment?.url;

  return (
    <iframe
      src={blobUrl}
      className="w-full h-screen"
    />
  );
}