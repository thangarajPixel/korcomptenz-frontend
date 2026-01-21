"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ExpandableHtml from "./show-more";
import { VideoPopup } from "@/components/video-popup";

const StickyTitleCard = ({ data }: { data: GlobalFieldType }) => {
  const {
    title,
    description,
    image,
    buttonText,
    logo,
    secondaryDescription,
    position = "corner",
  } = data;
  const [isVideoOpen, setIsVideoOpen] = React.useState<{
    open: boolean;
    link: string | null;
  }>({
    open: false,
    link: null,
  });
  return (
    <div className="bg-light-gray rounded-4xl  relative overflow-hidden min-h-[280px]">
      {/* Content */}
      <div className="flex flex-row lg:flex-row md:flex-col gap-4">
        <div className="flex flex-col justify-start gap-6 p-8 ">
          {logo && (
            <div>
              <KorcomptenzImage src={logo} width={172} height={172} />
            </div>
          )}

          <h3 className=" text-foreground  text-5xl  md:text-6xl font-bold leading-tight">
            {title}
          </h3>
          {description && (
            <div className="flex flex-row gap-4">
              <ExpandableHtml
                html={description}
                className={cn(
                  image?.url &&
                    "text-foreground text-md md:text-lg leading-4xl z-10 w-full [&>ul]:ml-7",
                  position !== "main" && "lg:max-w-xs max-w-none",
                )}
              />

              {position === "side" && image && (
                <div className="flex items-center justify-center w-[150px] h-[200px] ">
                  <KorcomptenzImage
                    src={image}
                    className="object-contain max-h-60"
                    width={400}
                    height={200}
                  />
                </div>
              )}
            </div>
          )}

          {position === "main" && image && (
            <div className="flex items-center justify-left ">
              <KorcomptenzImage
                src={image}
                className=" object-contain max-h-60"
                width={400}
                height={200}
              />
            </div>
          )}
          {secondaryDescription && (
            <DangerousHtml
              html={secondaryDescription}
              className={cn(
                image?.url &&
                  "text-foreground text-md pr-10  md:text-lg leading-4xl z-10  max-full",
              )}
            />
          )}

          {buttonText &&
            (data?.IsVideo ? (
              <Button
                size="xl"
                arrow
                onClick={() =>
                  setIsVideoOpen({ link: data.link || "", open: true })
                }
              >
                {buttonText}
              </Button>
            ) : (
              <Link href={data?.link || "#"}>
                <Button size="xl" arrow>
                  {buttonText}
                </Button>
              </Link>
            ))}
        </div>

        {/*Desktop Button */}
        {position === "corner" && image && (
          <div className="hidden lg:flex pt-10  pb-0 ">
            {/* Illustration */}
            <div className="flex absolute bottom-7.5 right-7.5 justify-end items-end w-[150px] h-[200px] ">
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
                width={300}
                // fill
                height={300}
                src={image}
              />
            </div>
          </div>
        )}
        {/*Mobile Button */}
      </div>
      {position === "corner" && image && (
        <div className="relative lg:hidden ">
          <div className="flex   justify-end items-end  ">
            <KorcomptenzImage
              className=" object-cover p-0 w-40"
              width={image?.width}
              height={image?.height}
              src={image}
            />
          </div>
        </div>
      )}

      <VideoPopup
        isOpen={isVideoOpen.open}
        onClose={() => {
          setIsVideoOpen({ link: null, open: false });
        }}
        videoSrc={data.link || ""}
      />
    </div>
  );
};

export default StickyTitleCard;
