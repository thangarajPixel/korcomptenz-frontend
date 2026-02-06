import React, { cache } from "react";
import PodcastSection from "../_utils/podcast-section";
import SubscribeSection from "../_utils/subscribe-section";
import { getBlogPage, getInsightPage } from "@/services";
import NotFound from "@/components/not-found";

type Props = {
  params: Promise<{ id: string }>;
};

const getBlogPageCache = cache(getBlogPage);

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const data = await getBlogPageCache({ id });

  return {
    title: data?.seo?.title || "Career",
    description: data?.seo?.description || "",
  };
}
const Page = async ({ params }: Props) => {
  const { id } = await params;
  const [data, essential] = await Promise.all([
    getBlogPageCache({ id }),
    getInsightPage(),
  ]);

  return (
    <React.Fragment>
      {data?.seo?.title === "not-found" ? (
        <div className="pb-10 md:pb-24">
          <NotFound data={data?.list?.[0]} />
        </div>
      ) : (
        <>
          <PodcastSection data={data} />
          <SubscribeSection
            data={data}
            essential={essential?.podcastPlatForm}
          />
        </>
      )}
    </React.Fragment>
  );
};
export default Page;
