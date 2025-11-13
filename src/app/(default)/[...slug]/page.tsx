import React from "react";
import { cache } from "react";
import { getPageService } from "@/services";
import GlobalPage from "@/components/global-page";

type Props = {
  params: Promise<{ slug: string[] }>;
};

const getPageServiceCache = cache(getPageService);

export async function generateMetadata({
  params,
}: Props) {
  const { slug } = await params;
  const data = await getPageServiceCache({ slug })
  return {
    title: data?.seo?.title || slug.join(" "),
    description: data?.seo?.description || "",
  }
}

const Page = async ({ params }: Props) => {
  const { slug } = await params;
  const data = await getPageServiceCache({ slug });

  return (
    <div className="flex flex-col  lg:gap-28">
      <GlobalPage data={data?.list} />
    </div>
  );
};

export default Page;