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
      data-debug={"page-componets.banner-section-list"}
    >
      {BannerSectionData?.length < 2 ? (
        <DemoBannerCard data={BannerSectionData[0]} />
      ) : (
        <CardSwiper>
          {BannerSectionData?.map((data) => (
            <DemoBannerCard
              key={`banner-card-${data?.id}`}
              data={data}
              className="embla__custom_slide"
            />
          ))}
        </CardSwiper>
      )}
    </section>
  );
};

export default DemoBannerSection;
