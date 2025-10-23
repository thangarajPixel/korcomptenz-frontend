import React from "react";
import { Button } from "@/components/ui/button";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";

const StickyTitleCard = ({ data }: { data: GlobalFieldType }) => {
  const {
    title,
    description,
    image,
    buttonText,
    logo,
    secondaryDescription,
    mainImage,
  } = data;

  return (
    <div className="bg-light-gray rounded-4xl  relative overflow-hidden min-h-[280px]">
      {/* Content */}
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-start  p-8 ">
          {logo && (
            <div>
              <KorcomptenzImage src={logo} width={172} height={172} />
            </div>
          )}

          <h3 className=" text-foreground text-6xl md:text-7xl font-bold leading-tight">
            {title}
          </h3>
          {description && (
            <DangerousHtml
              html={description}
              className={cn(
                image?.url &&
                  "text-foreground text-md pr-10  md:text-lg leading-4xl mb-8 max-w-xs"
              )}
            />
          )}
          {mainImage && (
            <div className="lg:flex tems-center justify-center mb-5">
              <KorcomptenzImage src={mainImage} width={400} height={200} />
            </div>
          )}
          {secondaryDescription && (
            <DangerousHtml
              html={secondaryDescription}
              className={cn(
                image?.url &&
                  "text-foreground text-md pr-10  md:text-lg leading-4xl mb-8 max-w-xs"
              )}
            />
          )}

          {buttonText && (
            <Button
              size="xl"
              className="flex w-[150px] md:w-[200px] mb-10 mr-4 lg:mb-0"
              arrow={true}
            >
              {buttonText}
            </Button>
          )}
        </div>

        {/*Desktop Button */}
        {image && (
          <div className="hidden lg:flex -ml-10 pt-10  pb-0 ">
            {/* Illustration */}
            <div className="flex absolute -right-0 -bottom-0 justify-end items-end">
              <KorcomptenzImage
                className={cn(
                  `w-full object-cover p-0`,
                  image?.height > 300
                    ? "size-2/3"
                    : image?.height >= 200
                    ? "h-[200px]"
                    : image?.height >= 100
                    ? "h-[150px]"
                    : "h-[90px]"
                )}
                width={image?.width}
                height={image?.height}
                src={image}
              />
            </div>
          </div>
        )}
        {/*Mobile Button */}
      </div>
      {image && (
        <div className="relative lg:hidden ">
          {/* Illustration */}
          <div className="flex absolute -right-0 -bottom-0 justify-end items-end  ">
            <KorcomptenzImage
              className="w-full object-cover p-0 h-28"
              width={image?.width}
              height={image?.height}
              src={image}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default StickyTitleCard;
