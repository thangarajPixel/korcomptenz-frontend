import KorcomptenzImage from "@/components/korcomptenz-image";
import ButtonLink from "@/components/ui/button-link";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";

import React from "react";

const BannerCard = ({
  data,
  className,
  isFirst = false,
}: {
  data: BannerSectionType;
  className?: string;
  isFirst?: boolean;
}) => {
  return (
    <div className={cn(className)}>
      {/* Desktop view */}
      <div className="relative w-full md:h-[513px] h-full overflow-hidden rounded-4xl hidden lg:block  ">
        <KorcomptenzImage
          src={data?.image}
          width={1000}
          height={800}
          className="w-full h-full object-cover rounded-4xl "
        />
        <div className="absolute inset-0 [background:linear-gradient(to_right,rgba(0,0,0,0.9)_5%,rgba(0,0,0,0)_70%)] z-[5] rounded-4xl" />
        {data?.logo ? (
          <div className=" absolute top-30 left-10 p-4 md:p-8 z-10 w-full h-full flex flex-col gap-6 justify-center items-start">
            <KorcomptenzImage
              src={data?.logo}
              width={300}
              height={200}
              className="w-20 md:w-[300px] h-auto object-contain mb-2 md:mb-4"
            />
            <h1 className="text-9xl font-semibold leading-14 text-white ">
              {data?.title}
            </h1>
            <DangerousHtml
              className=" text-lg md:text-base md:text-white   max-w-md"
              html={data?.description}
            />
            <div className="flex flex-row  gap-4">
              {data?.buttonText && (
                <ButtonLink
                  link={data?.link || "#"}
                  buttonProps={{
                    arrow: true,
                    className: "hover:bg-transparent ",
                    size: "xl",
                  }}
                >
                  {data?.buttonText}
                </ButtonLink>
              )}
              {data?.secondButton && (
                <ButtonLink
                  link={data?.secondLink || "#"}
                  buttonProps={{
                    arrow: true,
                    className:
                      "hover:bg-transparent hover:border hover:border-primary ",
                    size: "xl",
                    variant: "white",
                  }}
                >
                  {data?.secondButton}
                </ButtonLink>
              )}
            </div>
          </div>
        ) : (
          <div
            className={cn(
              " absolute top-0 left-10 p-10 z-10 w-5/8 h-full flex flex-col gap-2 justify-center items-start "
            )}
          >
            {!isFirst ? (
              <h2 className="text-9xl font-semibold leading-14 text-white ">
                {data?.title}
              </h2>
            ) : (
              <h1 className="text-9xl font-semibold leading-14 text-white ">
                {data?.title}
              </h1>
            )}
            {data?.description && (
              <DangerousHtml
                className="text-lg md:text-base text-white mb-4 md:mb-4 "
                html={data?.description}
              />
            )}

            <div className="flex flex-row gap-4">
              {data?.buttonText && (
                <ButtonLink
                  link={data?.link || "#"}
                  buttonProps={{
                    arrow: true,
                    className: "hover:bg-transparent ",
                    size: "xl",
                  }}
                >
                  {data?.buttonText}
                </ButtonLink>
              )}
              {data?.secondButton && (
                <ButtonLink
                  link={data?.secondLink || "#"}
                  buttonProps={{
                    arrow: true,
                    className:
                      "hover:bg-transparent hover:border hover:border-primary ",
                    size: "xl",
                    variant: "white",
                  }}
                >
                  {data?.secondButton}
                </ButtonLink>
              )}
            </div>
            <p className="text-lg md:text-base md:text-white  mb-4 md:mb-4 ">
              {data?.bannerCaption}
            </p>
          </div>
        )}
      </div>

      {/* Mobile view */}
      <div className="w-full h-auto aspect-square overflow-hidden rounded-4xl lg:hidden items-center justify-center">
        <KorcomptenzImage
          src={data?.imageMobile}
          width={1000}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="gap-6 justify-center items-start p-4 md:p-8 w-full lg:hidden  h-full">
        {data?.logoMobile ? (
          <KorcomptenzImage
            src={data?.logoMobile}
            width={300}
            height={200}
            className="w-[300px] h-auto object-contain mb-2 md:mb-4 opacity-65"
          />
        ) : (
          <h2 className="text-4xl font-bold text-foreground mb-2 md:mb-4">
            {data?.title}
          </h2>
        )}

        <DangerousHtml
          className="text-lg md:text-base [&>span]:!text-black mb-4 md:mb-8 lg:max-w-md w-full"
          html={data?.description}
        />
        <div className="flex flex-row gap-4 mb-3">
          {data?.buttonText && (
            <ButtonLink
              link={data?.link || "#"}
              buttonProps={{
                arrow: true,
                size: "xl",
              }}
            >
              {data?.buttonText}
            </ButtonLink>
          )}
          {data?.secondButton && (
            <ButtonLink
              link={data?.secondLink || "#"}
              buttonProps={{
                arrow: true,
                className: "border border-primary ",
                size: "xl",
                variant: "white",
              }}
            >
              {data?.secondButton}
            </ButtonLink>
          )}
        </div>
        <p className="text-lg md:text-base [&>span]:!text-black mb-4 md:mb-8 lg:max-w-md w-full">
          {data?.bannerCaption}
        </p>
      </div>
    </div>
  );
};

export default BannerCard;
