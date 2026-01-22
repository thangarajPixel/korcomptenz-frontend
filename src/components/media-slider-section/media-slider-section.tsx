import MediaSlider from "./_utils/media-slider";

const MediaSliderSection = ({ data }: { data: MediaSliderSectionType }) => {
  return (
    <section
      className="container mx-auto"
      data-debug="about-us.media-slider-section"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
        {data?.title}
      </h2>
      <MediaSlider data={data} />
    </section>
  );
};

export default MediaSliderSection;
