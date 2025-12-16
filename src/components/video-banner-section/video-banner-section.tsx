import VideoBannerCard from "./_utils/video-banner-card";

const VideoBannerSection = ({ item }: { item: VideoBannerItemType }) => {
  return (
    <section className="w-full" data-debug={"demo-page.demo-banner-list"}>
      <div>
        <VideoBannerCard data={item} />
      </div>
    </section>
  );
};

export default VideoBannerSection;
