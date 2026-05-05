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
  try {
    const { id } = await params;
    const data = await getBlogPageCache({ id });
    return {
      title: data?.seo?.title || "Podcast",
      description: data?.seo?.description || "",
      alternates: { canonical: "/podcast/" + id },
    };
  } catch {
    return { title: "Podcast" };
  }
}

const Page = async ({ params }: Props) => {
  const { id } = await params;

  try {
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
            <SubscribeSection data={data} essential={essential?.podcastPlatForm} />
          </>
        )}
      </React.Fragment>
    );
  } catch {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-destructive">Error loading page. Please try again later.</p>
      </div>
    );
  }
};

export default Page;
