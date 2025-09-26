import React from "react";
import CardSwiper from "../ui/card-swiper";
import BannerCard from "./_utils/banner-card";

const BannerSection = ({ BannerSectionData }: { BannerSectionData: BannerSectionType[] }) => {

  return (
    <section className="container-md mt-10" data-debug={"page-componets.banner-section-list"}>
      {BannerSectionData?.length < 2 ? (
        <BannerCard data={BannerSectionData[0]} />
      ) : (
        <CardSwiper>
          {BannerSectionData?.map((data) => (
            <BannerCard key={`banner-card-${data?.id}`} data={data} className="embla__custom_slide" />
          ))}
        </CardSwiper>
      )}
    </section>
  );
};

export default BannerSection;