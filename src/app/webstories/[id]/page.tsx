import React, { cache } from "react";
import StatusCarousel from "../_utils/status-slider";
import { getBlogPage } from "@/services";
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

  const data = await getBlogPageCache({ id });

  let compileArray = data?.webStories;
  compileArray?.unshift({
    id: 0,
    title: data?.title,
    description: "",
    image: data?.heroSection?.image,
    buttonText: "",
    link: "",
    buttonLink: "",
  });

  return (
    <>
      {data?.seo?.title === "not-found" ? (
        <div className="pb-10 md:pb-24">
          <NotFound data={data?.list?.[0]} />
        </div>
      ) : (
        <StatusCarousel carouselData={compileArray} />
      )}
    </>
  );
};

export default Page;
