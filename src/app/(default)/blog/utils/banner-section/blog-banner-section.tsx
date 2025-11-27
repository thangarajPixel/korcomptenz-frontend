import React from "react";

import CardSwiper from "@/components/ui/card-swiper";
import BlogBannerCard from "./_utils/blog-banner-card";

const BlogBannerSection = ({
  BannerSectionData,
}: {
  BannerSectionData: BannerSectionType[];
}) => {
  return (
    <section
      className="container-md mt-10"
      data-debug={"page-componets.banner-section-list"}
    >
      {BannerSectionData?.length < 2 ? (
        <BlogBannerCard data={BannerSectionData[0]} isFirst />
      ) : (
        <CardSwiper>
          {BannerSectionData?.map((data, index) => (
            <BlogBannerCard
              key={`banner-card-${data?.id}`}
              data={data}
              className="embla__custom_slide"
              isFirst={index === 0}
            />
          ))}
        </CardSwiper>
      )}
    </section>
  );
};

export default BlogBannerSection;
