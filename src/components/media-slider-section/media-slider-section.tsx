import React from "react";
import MediaSlider from "./_utils/media-slider";

const MediaSliderSection = ({ data }: { data: MediaSliderSectionType }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-foreground">
        {data?.title}
      </h1>
      <MediaSlider data={data} />
    </div>
  );
};

export default MediaSliderSection;
