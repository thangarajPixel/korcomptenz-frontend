import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";
import React from "react";

interface Slide {
  id: number;
  image: ImageType;

  title: string;
  description: string;
}

interface Props {
  slide: Slide;
  isSwap?: boolean;
}

const SliderCard: React.FC<Props> = ({ slide, isSwap }) => {
  return (
    <div
      className={cn(
        "flex-shrink-0 w-full h-full  ",
        isSwap && "sm:justify-start justify-center flex"
      )}
    >
      <div className="bg-foreground rounded-3xl p-5 h-full w-3/4 md:w-full flex flex-col justify-between">
        <div className="flex flex-col gap-2 md:gap-5">
          <div className="flex justify-end gap-2">
            <KorcomptenzImage
              className="w-12 h-12 object-contain"
              width={48}
              height={48}
              src={slide?.image}
            />
          </div>
          <h3 className="text-white text-xl md:text-4xl font-normal whitespace-pre-wrap pr-6 ">
            {slide?.title}
          </h3>
          <DangerousHtml
            html={slide?.description}
            className="text-gray-300 text-md md:text-lg leading-relaxed pr-6 [&>ul]:ml-7"
          />
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
