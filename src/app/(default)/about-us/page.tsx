import GlobalPage from "@/components/global-page";
import { getAboutUs } from "@/services";
import React, { cache } from "react";
// import MapSection from "@/components/map-section";
// import OurStory from "@/components/our-story";
// import ContentShowcaseSection from "@/components/content-showcase-section";
// import PeopleShowcaseSection from "@/components/people-showcase-section";
// import StatsSection from "@/components/stats-section";
// import MediaSliderSection from "@/components/media-slider-section";
// import MasonryGallerySection from "@/components/masonry-gallery-section/masonry-gallery-section";

const getAboutUsCache = cache(getAboutUs);
export default async function AboutUsPage() {
  const data = await getAboutUsCache();

  return (
    <div className="flex flex-col gap-16 md:gap-32">
      <GlobalPage data={data?.list} />
    </div>
  );
}
