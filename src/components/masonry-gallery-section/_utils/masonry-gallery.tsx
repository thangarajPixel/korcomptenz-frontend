"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { VideoPopup } from "@/components/video-popup";
import { cn } from "@/lib/utils";
import React from "react";

const MasonryGallery = ({ data }: { data: MasonryGallerySectionType }) => {
  const [isVideoOpen, setIsVideoOpen] = React.useState<{
    open: boolean;
    link: string | null;
  }>({
    open: false,
    link: null,
  });

  return (
    <React.Fragment >
      <Carousel className="w-full mb-5">
        <div className="flex mb-5  justify-between w-full">
          <div />
          <h2 className="text-7xl text-center font-bold  text-foreground">
            {data?.title}{" "}
            <span className="text-primary">{data?.highLightText}</span>
          </h2>
          <div className="flex items-center ">
            <CarouselPrevious
              className="relative top-1/2 -left-5 hover:bg-primary hover:text-white size-9"
              variant={"default"}
              fontSize="size-4"
            />
            <CarouselNext
              className="relative top-1/2 right-0 hover:bg-primary hover:text-white size-9"
              variant={"default"}
              fontSize="size-4"
            />
          </div>
        </div>
        <CarouselContent firstItemClassName="rounded-none">
          {data?.list?.map((value) => (
            <CarouselItem
              key={`value-${value?.id}`}
              className=" md:basis-1/2 lg:basis-1/3 flex flex-col gap-4"
            >
              {value?.column?.map((item) => (
                <div
                  key={`item-${item?.id}`}
                  className={cn(item?.isVideo && "cursor-pointer")}
                  onClick={() => {
                    item?.isVideo && setIsVideoOpen({
                      open: true,
                      link: item?.videoLink || null,
                    })
                  }
                  }
                >
                  <KorcomptenzImage
                    src={item?.image}
                    className="h-auto max-w-full object-cover object-center"
                    width={1000}
                    height={1000}
                  />
                </div>
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {isVideoOpen.open && isVideoOpen.link && (
        <VideoPopup
          isOpen={isVideoOpen.open}
          onClose={() => {
            setIsVideoOpen({ link: null, open: false });
          }}
          videoSrc={isVideoOpen.link || ""}
        />
      )}
    </React.Fragment>
  );
};

export default MasonryGallery;
