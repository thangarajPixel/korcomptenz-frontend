import React from "react";
import { Button } from "@/components/ui/button";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { APP_CONFIG } from "@/utils/app-config";

const StickyTitleCard = ({ data }: { data: GlobalFieldType }) => {
 
  const { title, description, image, buttonText } = data;
  return (
    <div className="bg-light-gray rounded-4xl p-6 md:p-8 relative overflow-hidden min-h-[280px] flex flex-col justify-between">
      {/* Content */}
      <div className="flex-1">
        <h3 className="text-foreground text-6xl md:text-7xl font-bold mb-4 leading-tight">
          {title}
        </h3>
        <p className="text-foreground text-md  md:text-lg leading-4xl mb-8 max-w-xs">
          {description}
        </p>
      </div>

      {/*Desktop Button */}
      <div className=" hidden lg:flex  flex-row justify-between">
        <div className="flex justify-start items-center">
          <Button size="xl" arrow={true}>
            {buttonText}
          </Button>
        </div>

        {/* Illustration */}
        {image && (
          <div className="flex justify-end items-end  ">
            <KorcomptenzImage
              className="w-full h-[150px] md:h-[200px] object-contain p-0"
              width={150}
              height={150}
              src={
                image?.url
                  ? APP_CONFIG.APP_URL_IMAGE + image?.url
                  : "/placeholder.svg"
              }
              alt={image?.alternativeText}
            />
          </div>
        )}
      </div>
      {/*Mobile Button */}

      <div className="relative lg:hidden ">
        <Button size="xl" arrow={true} className="mb-20">
          Know More
        </Button>

        {/* Illustration */}
        {image && (
          <div className="flex absolute -right-10 -bottom-10 justify-end items-end aspect-square ">
            <KorcomptenzImage
              className="w-full h-[150px] md:h-[200px] object-contain p-0"
              width={150}
              height={150}
              src={image}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StickyTitleCard;
