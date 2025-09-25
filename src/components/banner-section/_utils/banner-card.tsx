import KorcomptenzImage from "@/components/korcomptenz-image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

const BannerCard = ({
  data,
  className,
}: {
  data: {
    id: number;
    imageMobile: ImageType;
    image: ImageType;
    alt: string;
    logo?: ImageType;
    logoMobile?: ImageType;
    altMobile?: ImageType;
    title: string;
    buttonText: string;
    description: string;
  };
  className?: string;
}) => {
  return (
    <div className={cn(className)}>
      {/* Desktop view */}
      <div className="relative w-full md:h-[513px] h-full overflow-hidden rounded-4xl hidden lg:block">
        <KorcomptenzImage
          src={data.image}
          width={1000}
          height={800}
          className="w-full h-full object-cover rounded-4xl"
        />

        {data.logo ? (
          <div className=" absolute top-30 left-10 p-4 md:p-8 z-10 w-full h-full flex flex-col gap-6 justify-center items-start">
            <KorcomptenzImage
              src={data.logo}
              width={300}
              height={200}
              className="w-20 md:w-[300px] h-auto object-contain mb-2 md:mb-4"
            />
            <p className="text-lg md:text-base text-white mb-4 md:mb-8 max-w-md">
              {data.description}
            </p>
          </div>
        ) : (
          <div className=" absolute top-0 left-10 p-18 z-10 w-5/8 h-full flex flex-col gap-6 justify-center items-start">
            <h2 className="text-9xl font-semibold leading-14 text-white mb-4">
              {data.title}
            </h2>
            <p className="text-lg md:text-base text-white mb-4 md:mb-8 max-w-md">
              {data.description}
            </p>
            {data.buttonText && (
              <Button
                size="lg"
                arrow={true}
                className="variant:default px-8 py-2 text-4xl rounded-full "
              >
                {data?.buttonText}
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Mobile view */}
      <div className="w-full h-auto aspect-square overflow-hidden rounded-4xl lg:hidden items-center justify-center">
        <KorcomptenzImage
          src={data.imageMobile}
          width={1000}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="gap-6 justify-center items-start p-4 md:p-8 w-full lg:hidden  h-full">
        {data.logoMobile ? (
          <KorcomptenzImage
            src={data.logoMobile}
            width={300}
            height={200}
            className="w-[300px] h-auto object-contain mb-2 md:mb-4 opacity-65"
          />
        ) : (
          <h2 className="text-4xl font-bold text-foreground mb-2 md:mb-4">
            {data.title}
          </h2>
        )}
        <p className="text-lg font-medium text-foreground mb-4 md:mb-8 max-w-md">
          {data.description}
        </p>
          {data.buttonText && (
              <Button
                size="lg"
                arrow={true}
                className="variant:default px-8 py-8 text-4xl rounded-full "
              >
                {data?.buttonText}
              </Button>
            )}
      </div>
    </div>
  );
};

export default BannerCard;
