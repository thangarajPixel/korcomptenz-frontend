import KorcomptenzImage from "@/components/korcomptenz-image";
import ButtonLink from "@/components/ui/button-link";
import { DangerousHtml } from "@/components/ui/dangerous-html";

import React from "react";

interface Props {
  slide: {
    id: string;
    title: string;
    description: string;
    image: ImageType;
    buttonText: string;
    buttonLink: string;
    isTarget: boolean;
    linkType: string;
  };
}

const IndustrySliderCard: React.FC<Props> = ({ slide }) => {
  return (
    <div className="flex-shrink-0 w-full h-full mt-3">
      <div className="relative">
        {/* IMAGE */}
        <KorcomptenzImage
          src={slide?.image}
          width={800}
          height={500}
          className="w-full h-[250px]  object-cover rounded-[20px]"
        />

        {/* OVERLAP CONTENT BOX */}
        <div className="relative z-10 bg-white rounded-[18px] shadow-lg mx-2 md:mx-10 -mt-10 px-5 py-4 mb-10">
          {/* TITLE */}

          {slide?.title && (
            <DangerousHtml
              html={slide?.title}
              className="text-[16px] md:text-[16px] font-semibold text-[#242424] leading-[1.3]"
            />
          )}

          {/* DESCRIPTION */}
          {slide?.description &&(<DangerousHtml
            html={slide?.description}
            className="text-[15px]  md:text-[16px] text-[#4B4B4B] leading-6 -mt-1 "
          />)}
          

          {/* BUTTON */}
          {slide?.buttonText && (
            <div className="flex justify-end ">
              <ButtonLink
                link={slide?.buttonLink || "#"}
                isTargetNew={slide?.isTarget}
                buttonProps={{ className: "text-[15px] md:text-[16px]! text-white", arrow: true }}
              >
                {slide?.buttonText}
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default IndustrySliderCard;
