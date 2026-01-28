import KorcomptenzImage from "@/components/korcomptenz-image";
import ButtonLink from "@/components/ui/button-link";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
      <>
        <div
          className={cn(
            "relative w-full md:h-[513px] h-full overflow-hidden hidden lg:block rounded-4xl",
            data?.footer && "rounded-b-none",
            data?.customFooter && "rounded-b-none",
          )}
        >
          <KorcomptenzImage
            src={data?.image}
            fill
            className="w-full h-full object-cover object-right  "
          />
          <div className="absolute inset-0 [background:linear-gradient(to_right,rgba(0,0,0,0.9)_5%,rgba(0,0,0,0)_70%)] z-[5]  " />
          {data?.logo ? (
            <div className=" absolute top-0 left-10 p-4 md:p-8 z-10 w-full h-full flex flex-col gap-6 justify-center items-start">
              <KorcomptenzImage
                src={data?.logo}
                width={300}
                height={200}
                className="w-20 md:w-[200px] h-auto object-contain mb-2 md:mb-4"
              />
              <h1 className="text-9xl font-semibold leading-14 text-white ">
                {data?.title}
              </h1>
              {data?.description && (
                <DangerousHtml
                  className=" text-3xl md:text-5xl md:text-white   max-w-md"
                  html={data?.description}
                />
              )}

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
                " absolute top-0 left-10 p-10 z-10 w-5/8 h-full flex flex-col gap-2 justify-center items-start max-w-2xl ",
              )}
            >
              {!isFirst ? (
                <h1 className="text-9xl font-semibold leading-14 text-white  ">
                  {data?.title}
                </h1>
              ) : (
                <h1 className="text-8xl font-semibold leading-14 text-white ">
                  {data?.title}
                </h1>
              )}
              {data?.description && (
                <DangerousHtml
                  className="text-3xl md:text-5xl leading-tight font-normal text-white mb-4 md:mb-4 "
                  html={data?.description}
                />
              )}

              <div className="flex flex-row gap-4">
                {data?.buttonText && (
                  <ButtonLink
                    link={data?.link || "#"}
                    buttonProps={{
                      arrow: true,
                      className: "varient:default",
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
        {data?.footer && (
          <div className="bg-muted hidden lg:block py-5 rounded-b-3xl">
            <div className="flex container-md justify-evenly">
              <KorcomptenzImage
                src={data?.footer?.logo}
                width={200}
                height={200}
              />
              <DangerousHtml
                html={data?.footer?.description}
                className="text-white text-xl font-semibold mt-2"
              />
            </div>
          </div>
        )}
        {data?.customFooter && (
          <div className="hidden lg:block">
            <div
              className="  overflow-hidden"
              style={{
                backgroundImage: `url(${data?.customFooter?.backgroundImage?.url})`,
                backgroundRepeat: "repeat-x",
                backgroundSize: "auto 24px",
                height: "24px",
              }}
            ></div>

            <div className="bg-[#2b2b2b] flex items-center h-[90px] relative">
              {/* LEFT ARROW SECTION */}
              <div
                className="flex items-center px-6 h-full text-white  text-3xl font-medium  pl-10"
                style={{
                  backgroundImage: `url(${data?.customFooter?.image?.url})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                  minWidth: "220px",
                }}
              >
                Quick Links
              </div>

              {/* LINKS */}
              <ul className="flex w-full items-center text-white text-base font-medium">
                {data?.customFooter?.list?.map((item, index) => (
                  <li
                    key={item.id}
                    className="flex flex-1 items-center justify-center gap-2"
                  >
                    {/* Divider (not last item) */}
                    {index !== data.customFooter.list.length && (
                      <span className="h-15 w-[3px] bg-primary " />
                    )}

                    <Link href={item.link || "#"}>
                      <span className="text-balance text-lg leading-7.5 text-center">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
      {/* Mobile view */}
      <div
        className={cn(
          "w-full lg:hidden overflow-hidden ",
          data?.customFooter ? "rounded-t-4xl" : "rounded-4xl",
        )}
      >
        {/* Image */}
        <div
          className={cn(
            "w-full h-auto aspect-square overflow-hidden",
            data?.footer ? "rounded-t-4xl" : "rounded-4xl",
            data?.customFooter ? "rounded-t-4xl" : "rounded-4xl",
          )}
        >
          <KorcomptenzImage
            src={data?.imageMobile}
            width={1000}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Footer */}
        {data?.footer && (
          <div className="bg-muted py-5 rounded-b-4xl">
            <div className="grid container-md justify-evenly items-center">
              <KorcomptenzImage
                src={data?.footer?.logo}
                width={200}
                height={200}
              />
              <DangerousHtml
                html={data?.footer?.description}
                className="text-white text-xl font-normal mt-2"
              />
            </div>
          </div>
        )}

        {data?.customFooter && (
          <div className="lg:hidden bg-[#2b2b2b] px-5 py-6">
            {/* Title */}
            <div className="text-white text-xl font-semibold mb-4">
              Quick Links
            </div>

            {/* Links */}
            <ul className="grid grid-cols-2 gap-y-4 gap-x-6">
              {data?.customFooter?.list?.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.link || "#"}
                    className="block text-white text-base capitalize leading-6"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="gap-6 justify-center items-start py-4 md:px-8 md:pt-8 w-full lg:hidden  h-full">
        {data?.logoMobile ? (
          <KorcomptenzImage
            src={data?.logoMobile}
            width={300}
            height={200}
            className="w-[300px] h-auto object-contain mb-2 md:mb-4 opacity-65"
          />
        ) : (
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-2 md:mb-4">
            {data?.title}
          </h1>
        )}
        {data?.description && (
          <DangerousHtml
            className="text-lg md:text-base [&>span]:!text-black mb-4 md:mb-8 lg:max-w-md w-full"
            html={data?.description}
          />
        )}

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
