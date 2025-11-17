"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { VideoPopup } from "@/components/video-popup";
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
    <div>
      <Carousel className="w-full">
        <div className="flex mb-5  justify-between w-full">
          <div />
          <h2 className="text-6xl text-center font-bold  text-foreground">
            Featured Content
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
                  onClick={() =>
                    setIsVideoOpen({
                      open: true,
                      link: item?.videoLink || null,
                    })
                  }
                >
                  <img
                    className="h-auto max-w-full  object-cover object-center"
                    src={item?.image?.url}
                    alt="gallery-photo"
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
    </div>
  );
};

export default MasonryGallery;
