import React from "react";
import { Button } from "@/components/ui/button";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";
import Link from "next/link";

const StickyTitleCard = ({ data }: { data: GlobalFieldType }) => {
  const {
    title,
    description,
    image,
    buttonText,
    logo,
    secondaryDescription,
    position = "corner"
  } = data;

  return (
    <div className="bg-light-gray rounded-4xl  relative overflow-hidden min-h-[280px]">
      {/* Content */}
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-start gap-6 p-8 ">
          {logo && (
            <div>
              <KorcomptenzImage src={logo} width={172} height={172} />
            </div>
          )}

          <h3 className=" text-foreground text-6xl  font-bold leading-tight">
            {title}
          </h3>
          {description && (
            <div className="flex flex-row gap-4">
              <DangerousHtml
                html={description}
                className={cn(
                  image?.url &&
                  "text-foreground text-md pr-10  md:text-lg leading-4xl z-10 w-full",
                  position !== "main" && "lg:max-w-xs max-w-none"
                )}
              />
              {position === "side" && image && (
                <div className="flex items-center justify-center ">
                  <KorcomptenzImage src={image} className="object-contain max-h-60" width={400} height={200} />
                </div>
              )}
            </div>
          )}



          {position === "main" && image && (
            <div className="flex items-center justify-center ">
              <KorcomptenzImage src={image} className=" object-contain max-h-60" width={400} height={200} />
            </div>
          )}
          {secondaryDescription && (
            <DangerousHtml
              html={secondaryDescription}
              className={cn(
                image?.url &&
                "text-foreground text-md pr-10  md:text-lg leading-4xl z-10  max-full"
              )}
            />
          )}

          {buttonText && (
            <Link href={data?.link || "#"}>
              <Button
                size="xl"
                // className="flex w-[150px] md:w-[200px] mb-10 mr-4 lg:mb-0"
                arrow={true}
              >
                {buttonText}
              </Button>
            </Link>
          )}
        </div>

        {/*Desktop Button */}
        {position === "corner" && image && (
          <div className="hidden lg:flex pt-10  pb-0 ">
            {/* Illustration */}
            <div className="flex absolute bottom-0 right-0 justify-end items-end w-[200px] h-[230px] ">
              <KorcomptenzImage
                className={cn(
                  ` rounded-tl-4xl  p-0 `,
                  // image?.height > 300
                  //   ? "size-2/3"
                  //   : image?.height >= 200
                  //     ? "h-[200px]"
                  //     : image?.height >= 100
                  //       ? "h-[150px]"
                  //       : "h-[90px]"
                )}
                width={500}
                // fill
                height={500}
                src={image}
              />
            </div>
          </div>
        )}
        {/*Mobile Button */}
      </div>
      {position === "corner" && image && (
        <div className="relative lg:hidden ">
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
