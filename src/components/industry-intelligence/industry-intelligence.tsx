import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { DangerousHtml } from "../ui/dangerous-html";
import IndustrySliderCard from "./_utils/industry-slider-card";

const IndustryIntelligence = ({ data }: { data: IndustryIntelligenceType }) => {

  let length = data?.list?.length || 0;
  return (
    <section className="container-md py-10 lg:py-16">
      {/* Heading Section */}
      <div className="space-y-2 max-w-5xl">
        {/* Sub Heading */}
        <DangerousHtml
          className="text-[24px] leading-[28px] font-semibold font-foreground"
          html={data?.subHeading}
        />

        {/* Main Title */}
        <DangerousHtml as="h2" html={data?.title} className="text-foreground" />

        {/* Description */}
        <DangerousHtml
          html={data?.description}
          className="text-[#242424] text-base md:text-lg leading-7 break-words"
        />
      </div>

      <div></div>
      <Carousel data-debug={"page-componets.dark-slider-list"}>
        <div className={"flex flex-col gap-4  md:px-0 "}>
          <div className={cn("md:px-10 ")}>
            <CarouselContent firstItemClassName="rounded-none">
              {data?.list?.map((slide, index) => (
                <CarouselItem
                  key={index}
                  className={cn(
                    "   pl-4 pr-1 relative   md:max-w-[33%] rounded-none ",
                  )}
                >
                  <IndustrySliderCard slide={slide} />
                </CarouselItem>
              ))}
            </CarouselContent>
{length >0 &&(
            <div className="hidden lg:flex">
              <CarouselPrevious
                fontSize="size-8"
                className={cn(
                  "hidden md:flex absolute -left-2 top-1/3 -translate-y-1/2 z-10 bg-primary !rounded-full hover:bg-white  text-white hover:text-primary hover:border-b-primary border-primary w-10 h-10 ",
                )}
              />
              <CarouselNext
                fontSize="size-8"
                className={cn(
                  "hidden md:flex absolute -right-2 top-1/3 -translate-y-1/2 z-10 bg-primary !rounded-full hover:bg-white  text-white hover:text-primary hover:border-b-primary border-primary w-10 h-10 ",
                )}
              />
            </div>)}
          
          </div>
        </div>
        {length > 0 &&(
        <div className="flex lg:hidden w-full justify-center items-center gap-4 mt-8">
          <CarouselPrevious
            className="relative left-0 hover:bg-primary hover:text-white size-12"
            variant={"default"}
          />
          <CarouselNext
            className="relative left-0 hover:bg-primary hover:text-white size-12"
            variant={"default"}
          />
        </div>)}
      </Carousel>
    </section>
  );
};

export default IndustryIntelligence;
