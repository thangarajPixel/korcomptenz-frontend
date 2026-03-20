import KorcomptenzImage from "@/components/korcomptenz-image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const ImageCarousel = ({
  images = [],
  theme,
}: {
  images: {
    mobileImage: ImageType;
    image: ImageType;
    id: string;
  }[];
  theme: string;
}) => {
  return (
    <Carousel autoPlay autoPlayDelay={3000} className="relative">
      {/* Desktop arrows (left & right center) */}
      <CarouselPrevious
        fontSize="size-12"
        className={cn(
          "hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-transparent border-none ",

          theme === "dark"
            ? "text-white hover:text-white"
            : "text-black hover-text-black",
        )}
      />
      <CarouselNext
        fontSize="size-12"
        className={cn(
          "hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-transparent border-none ",
          theme === "dark"
            ? "text-white hover:text-white"
            : "text-black hover-text-black",
        )}
      />

      <CarouselContent>
        {images?.map((item, index) => (
          <CarouselItem
            key={item?.id || index}
            className="flex items-center justify-center"
          >
            {/* Desktop Image */}
            <div className="hidden lg:flex items-center justify-center w-full">
              {item?.image && (
                <KorcomptenzImage
                  src={item.image}
                  width={item.image.width || 500}
                  height={item.image.height || 500}
                  className="object-contain"
                />
              )}
            </div>

            {/* Mobile Image */}
            <div className="lg:hidden w-full flex justify-center">
              {(item?.mobileImage || item?.image) && (
                <KorcomptenzImage
                  src={item?.mobileImage ? item.mobileImage : item.image}
                  width={320}
                  height={320}
                  className="object-contain"
                />
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex lg:hidden w-full justify-center items-center gap-4 ">
        <CarouselPrevious
          className="relative left-0 top-10 hover:bg-primary hover:text-white size-12"
          variant={"default"}
        />
        <CarouselNext
          className="relative left-0  top-10 hover:bg-primary hover:text-white size-12"
          variant={"default"}
        />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
