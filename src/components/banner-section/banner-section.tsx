import BannerCard from "./_utils/banner-card";
import CardSwiperArrow from "./_utils/card-swiper-arrow";

const BannerSection = ({
  BannerSectionData,
}: {
  BannerSectionData: BannerSectionType[];
}) => {
  return (
    <section
      className="container-md mt-2 lg:mt-10"
      data-debug={"page-componets.banner-section-list"}
    >
      {BannerSectionData?.length < 2 ? (
        <BannerCard data={BannerSectionData[0]} isPriority={true} />
      ) : (
        <CardSwiperArrow>
          {BannerSectionData?.map((data, index) => (
            <BannerCard
              key={`banner-card-${data?.id}`}
              data={data}
              className="embla__custom_slide"
              isPriority={index === 0}
            />
          ))}
        </CardSwiperArrow>
      )}
    </section>
  );
};

export default BannerSection;
