import React from "react";
import { DigitialAboutSection } from "../digitial-about-section";
import { DigitialCardSlider } from "../digitial-card-slider";

const CombinedAboutCardSlider = ({ data }: { data: DigitialCombinedType }) => {
  return (
    <div>
      <DigitialAboutSection data={data?.digitalAbout} />
      {data?.digitalCardSlider && (
        <DigitialCardSlider content={data?.digitalCardSlider} />
      )}
    </div>
  );
};

export default CombinedAboutCardSlider;
