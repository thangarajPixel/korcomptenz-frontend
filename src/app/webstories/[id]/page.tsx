import React, { cache } from "react";
import StatusCarousel from "../_utils/status-slider";
import { getBlogPage } from "@/services";
type Props = {
  params: Promise<{ id: string }>;
};

const getBlogPageCache = cache(getBlogPage);

const Page = async ({ params }: Props) => {
  const { id } = await params;

  const data = await getBlogPageCache({ id });

  let compileArray = data?.webStories;
  compileArray.unshift({
    id: 0,
    title: data?.title,
    description: "",
    image: data?.heroSection?.image,
    buttonText: "",
    link: "",
    buttonLink: "",
  });

  return <StatusCarousel carouselData={compileArray} />;
};

export default Page;
