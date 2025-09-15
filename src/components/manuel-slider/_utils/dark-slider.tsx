import KorcomptenzImage from "@/components/korcomptenz-image";
import React from "react";

interface Slide {
  id: number;
  image: string;
  alt: string;
  title: string;
  description: string;
}

interface Props {
  slide: Slide;
}

const ManuelSliderCard: React.FC<Props> = ({ slide }) => {
  return (
    <div className="flex-shrink-0 w-full">
      <div className="bg-foreground rounded-3xl p-8 h-[400px] md:h-[476px] w-full flex flex-col justify-between">
        <div className="flex flex-col gap-2 md:gap-5">
          <div className="flex justify-end gap-2">
            <KorcomptenzImage
              className="w-12 h-12 object-contain"
              width={48}
              height={48}
              src={slide.image}
              alt={slide.alt}
            />
          </div>
          <h3 className="text-white text:medium md:text-2xl font-normal mb-6">
            {slide.title}
          </h3>

          <p className="text-gray-300 text-[14px] md:text-sm leading-relaxed">
            {slide.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManuelSliderCard;
