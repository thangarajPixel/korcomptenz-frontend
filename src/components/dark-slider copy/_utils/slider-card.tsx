import KorcomptenzImage from "@/components/korcomptenz-image";
import ButtonLink from "@/components/ui/button-link";
import { DangerousHtml } from "@/components/ui/dangerous-html";

import React from "react";

interface Props {
  slide: {
    image1: ImageType;
    image2: ImageType;
    isTarget: boolean;
    buttonText: string;
    buttonLink: string;
    description: string;
    imageText: string;
    id: string;
  };
}

const DigitialSliderCard: React.FC<Props> = ({ slide }) => {
  return (
    <div className="w-full max-w-sm bg-[#f7f8f8] rounded-xl overflow-hidden ">
      {/* Image section */}
      <div className="relative">
        <KorcomptenzImage
          src={slide.image2}
          width={400}
          height={250}
          className="w-full h-[220px] object-cover"
        />

        {slide.imageText && (
          <span className="absolute top-4 right-4 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {slide.imageText}
          </span>
        )}
        {slide.image1 && (
          <div className=" absolute  bg-white z-10 bottom-4  left-4 flex items-center gap-2  ">
            <KorcomptenzImage
              src={slide.image1}
              width={100}
              height={100}
              className="object-cover object-right"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className=" relative  flex flex-col gap-4 py-5">
        {/* Logo */}

        {/* Description */}
        <DangerousHtml
          html={slide.description}
          className="text-foreground text-md md:text-lg leading-7.5"
        />

        {/* CTA */}

        {slide.buttonText && (
          <ButtonLink
            link={slide?.buttonLink || "#"}
            isTargetNew={slide?.isTarget ? true : false}
            buttonProps={{
              variant: "ghost",
              className:
                "text-primary hover:text-primary hover:bg-transparent p-0 text-md",
              arrow: true,
            }}
          >
            {slide?.buttonText}
          </ButtonLink>
        )}
      </div>
    </div>
  );
};

export default DigitialSliderCard;
