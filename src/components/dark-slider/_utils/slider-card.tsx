import KorcomptenzImage from "@/components/korcomptenz-image";
import React from "react";

interface Slide {
  id: number;
  image: ImageType;

  title: string;
  description: string;
}

interface Props {
  slide: Slide;
}

const SliderCard: React.FC<Props> = ({ slide }) => {
  return (
    <div className="flex-shrink-0 w-full">
      <div className="bg-foreground rounded-3xl p-8 h-[400px] md:h-[476px] w-full flex flex-col justify-between">
        <div className="flex flex-col gap-2 md:gap-5">
          <div className="flex justify-end gap-2">
            <KorcomptenzImage
              className="w-12 h-12 object-contain"
              width={48}
              height={48}
              src={slide?.image}
            />
          </div>
          <h3 className="text-white text:medium md:text-6xl font-normal whitespace-pre-wrap pr-6 mb-6">
            {slide?.title}
          </h3>

          <p className="text-gray-300 text-xs md:text-lg leading-relaxed pr-6">
            {slide?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
