import React from "react";
import { Button } from "@/components/ui/button";
import KorcomptenzImage from "@/components/korcomptenz-image";

const StickyTitleCard = ({ data }: { data: GlobalFieldType }) => {
  const { title, description, image, buttonText } = data;
  return (
    <div className="bg-light-gray rounded-4xl  relative overflow-hidden min-h-[280px] ">
      {/* Content */}
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-start  p-8 ">
          <h3 className="text-foreground text-6xl md:text-7xl font-bold mb-4 leading-tight">
            {title}
          </h3>
          <p className="text-foreground text-md pr-10  md:text-lg leading-4xl mb-8 max-w-xs">
            {description}
          </p>

          <Button
            size="xl"
            className="flex w-[150px] md:w-[200px] mb-10 mr-4 lg:mb-0"
            arrow={true}
          >
            {buttonText}
          </Button>
        </div>

        {/*Desktop Button */}
        <div className="hidden lg:flex -ml-10 pt-10  pb-0 ">
          {/* Illustration */}
          {image && (
            <div className="flex absolute -right-0 -bottom-0 justify-end items-end">
              <KorcomptenzImage
                className={`w-full object-cover p-0 ${image?.height > 300
                  ? "h-[300px]"
                  : image?.height >= 200
                    ? "h-[200px]"
                    : image?.height >= 100
                      ? "h-[150px]"
                      : "h-[90px]"
                  }`}
                width={image?.width}
                height={image?.height}
                src={image}
              />
            </div>
          )}
        </div>
        {/*Mobile Button */}
      </div>
      <div className="relative lg:hidden ">
        {/* Illustration */}
        {image && (
          <div className="flex absolute -right-0 -bottom-0 justify-end items-end  ">
            <KorcomptenzImage
              className="w-full object-cover p-0"
              width={image?.width}
              height={image?.height}
              src={image}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StickyTitleCard;
