import CardSwiperArrow from "../banner-section/_utils/card-swiper-arrow";
import IndustryBannerCard from "./_utils/industry-banner-card";


const IndustryBannerSection = ({
  BannerSectionData,
}: {
  BannerSectionData: BannerSectionType[];
}) => {
  return (
    <section
      className=""
      data-debug={"page-componets.banking-financial-banner"}
    >
      {BannerSectionData?.length < 2 ? (
        <IndustryBannerCard data={BannerSectionData[0]} />
      ) : (
        <CardSwiperArrow>
          {BannerSectionData?.map((data) => (
            <IndustryBannerCard
              key={`banner-card-${data?.id}`}
              data={data}
              className="embla__custom_slide"
              
            />
          ))}
        </CardSwiperArrow>
      )}
    </section>
  );
};

export default IndustryBannerSection;
