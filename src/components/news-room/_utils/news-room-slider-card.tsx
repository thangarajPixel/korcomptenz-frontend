import KorcomptenzImage from "@/components/korcomptenz-image";

import React from "react";

interface Props {
  slide: NewsRoomSliderCardType;
}

const NewsRoomSliderCard: React.FC<Props> = ({ slide }) => {
  return (
    <div className="flex-shrink-0 w-full h-full ">
      <div className="bg-white overflow-hidden h-full flex flex-col">
        {/* IMAGE */}
        <div className="w-full">
          <KorcomptenzImage
            src={slide.image}
            width={800}
            height={500}
            className="w-full h-56 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsRoomSliderCard;
