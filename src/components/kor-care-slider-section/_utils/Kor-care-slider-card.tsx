import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import React from "react";

interface Slide {
  id: number;
  image: ImageType;
  buttonText?: string;
  title: string;
  description: string;
}

interface Props {
  slide: Slide;
}

const KorCareSliderCard: React.FC<Props> = ({ slide }) => {
  return (
    <div className="flex-shrink-0 w-full h-full">
      <div className="bg-white rounded-3xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] overflow-hidden h-full flex flex-col">
        {/* IMAGE */}
        <div className="w-full">
          <KorcomptenzImage
            src={slide.image}
            width={800}
            height={500}
            className="w-full h-56 object-cover"
          />
        </div>

        {/* CONTENT */}
        <div className="lg:p-4 p-4 space-y-2">
          {/* CATEGORY TEXT (buttonText) */}
          {slide.buttonText && (
            <p className="text-primary font-semibold text-sm">
              {slide.buttonText}
            </p>
          )}

          {/* TITLE */}
          <h3 className="text-3xl font-semibold text-foreground leading-7">
            {slide.title}
          </h3>

          {/* DESCRIPTION */}
          <DangerousHtml
            html={slide.description}
            className="text-foreground text-md leading-6 break-words font-normal"
          />
        </div>
      </div>
    </div>
  );
};

export default KorCareSliderCard;
