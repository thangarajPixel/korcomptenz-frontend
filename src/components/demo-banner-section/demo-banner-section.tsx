import React from "react";
import CardSwiper from "../ui/card-swiper";
import DemoBannerCard from "./_utils/demo-banner-card";

const DemoBannerSection = ({
  BannerSectionData,
}: {
  BannerSectionData: BannerSectionType[];
}) => {
  return (
    <section
      className="w-full"
      data-debug={"demo-page.demo-banner-list"}
    >
      {BannerSectionData?.length < 2 ? (
        <DemoBannerCard data={BannerSectionData[0]} isFirst />
      ) : (
        <CardSwiper>
          {BannerSectionData?.map((data, index) => (
            <DemoBannerCard
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

export default DemoBannerSection;
