import React from "react";
import CardSwiper from "../ui/card-swiper";
import DemoBannerCard from "./_utils/demo-banner-card";

const DemoBannerSection = ({ item }: { item: BannerItemType }) => {
  return (
    <section className="w-full" data-debug={"demo-page.demo-banner-list"}>
      {item?.list?.length < 2 ? (
        <div>
          <DemoBannerCard data={item?.list?.[0]} item={item?.demoDetails} />
        </div>
      ) : (
        <CardSwiper>
          {item?.list?.map((data, index) => (
            <DemoBannerCard
              key={`banner-card-${data?.id}`}
              item={item?.demoDetails}
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
