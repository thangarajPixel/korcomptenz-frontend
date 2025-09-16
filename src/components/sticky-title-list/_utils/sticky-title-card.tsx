import React from "react";
import { Button } from "@/components/ui/button";
import KorcomptenzImage from "@/components/korcomptenz-image";

const StickyTitleCard = ({ data }: { data: GlobalFieldType }) => {
  const { title, description, image } = data;
  return (
    <div className="bg-light-gray rounded-4xl p-6 md:p-8 relative overflow-hidden min-h-[280px] flex flex-col justify-between">
      {/* Content */}
      <div className="flex-1">
        <h3 className="text-gray-900 text-2xl font-bold mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-gray-700 text-base leading-relaxed mb-8 max-w-xs">
          {description}
        </p>
      </div>

      {/* Button */}
      <div className="hidden md:block">
        <div className="flex justify-start">
          <Button size="xl" arrow={true} >
            Know More
          </Button>
        </div>

        {/* Illustration */}
        {image && (
          <div className="absolute bottom-8 right-10 ">
            <KorcomptenzImage
              className="w-full h-[200px]object-contain"
              width={150}
              height={150}
              src={image}
            />
          </div>

        )}
      </div>
      <div>
        <div className="md:hidden flex flex-col">
          <div className="flex justify-start">
            <Button size="lg" arrow={true}  className="mb-20">
              Know More
            </Button>
          </div>
         {image && (
          <div className="absolute bottom-4 right-2 ">
            <KorcomptenzImage
              className="w-full h-full object-contain"
              width={150}
              height={150}
              src={image}
            />
          </div>

        )}
        </div>
      </div>
    </div>
  );
};

export default StickyTitleCard;
