import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import NewsRoomSliderCard from "./news-room-slider-card";

const NewsRoomSlider = ({
  manuelSliderData,
}: {
  manuelSliderData: NewsRoomSliderType;
}) => {
  return (
    <Carousel
      className="container-md  "
      data-debug={"page-componets.dark-slider-list"}
    >
      <div className={"flex flex-col gap-4  "}>
        <div className={cn("px-5 lg:px-10 ")}>
          <CarouselContent firstItemClassName="rounded-none">
            {manuelSliderData?.list?.map((slide, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  "   pl-4 pr-1 relative   md:max-w-[33%] rounded-none "
                )}
              >
                <NewsRoomSliderCard slide={slide} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden lg:flex">
            <CarouselPrevious
              className="left-0 top-1/2 size-16 bg-white text-black hover:border-white"
              variant={"default"}
            />
            <CarouselNext
              className="right-0 top-1/2 bg-white text-black size-16 hover:border-white"
              variant={"default"}
            />
          </div>
          <div className="flex lg:hidden ">
            <CarouselPrevious
              className="left-0 top-1/2 size-8 hover:bg-primary hover:text-white "
              variant={"default"}
            />
            <CarouselNext
              className="right-0 top-1/2 hover:bg-primary hover:text-white size-8"
              variant={"default"}
            />
          </div>
        </div>
      </div>
      {/* <div className="flex lg:hidden w-full justify-center items-center gap-4 mt-8">
        <CarouselPrevious
          className="relative left-0 hover:bg-primary hover:text-white size-12"
          variant={"default"}
        />
        <CarouselNext
          className="relative left-0 hover:bg-primary hover:text-white size-12"
          variant={"default"}
        />
      </div> */}
    </Carousel>
  );
};

export default NewsRoomSlider;
