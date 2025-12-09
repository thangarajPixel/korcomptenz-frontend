import React, { cache } from "react";
import StatusCarousel from "../_utils/status-slider";
import { getBlogPage } from "@/services";
type Props = {
  params: Promise<{ id: string }>;
};

const getBlogPageCache = cache(getBlogPage);

const Page = async ({ params }: Props) => {
  const { id } = await params;

  const [data] = await Promise.all([
    getBlogPageCache({ id }),
    // getInsightPage(),
  ]);

  return (
    <div>
      <StatusCarousel carouselData={data?.webStories} />
    </div>
  );
};

export default Page;
