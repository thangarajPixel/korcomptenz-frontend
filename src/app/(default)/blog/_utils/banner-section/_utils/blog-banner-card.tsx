import KorcomptenzImage from "@/components/korcomptenz-image";

import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";

import React from "react";
import BreadcrumbFromUrl from "./breadcrumbs";

const BlogBannerCard = ({
  data,
  className,
  tableTitle,
}: {
  data: InsightItem;
  className?: string;
  tableTitle: string;
}) => {
  return (
    <div className={cn(className)}>
      {/* Desktop view */}
      <div className="relative w-full md:h-[513px] h-full overflow-hidden rounded-4xl hidden lg:block  ">
        <KorcomptenzImage
          src={data?.heroSection?.image}
          width={1000}
          height={800}
          className="w-full h-full object-cover rounded-4xl "
        />

        <div className="absolute inset-0 [background:linear-gradient(to_right,rgba(0,0,0,0.9)_5%,rgba(0,0,0,0)_70%)] z-[5] rounded-4xl" />

        <div
          className={cn(
            " absolute top-0 left-10 p-5 z-10 w-5/8 h-full flex flex-col gap-6 justify-between  ",
          )}
        >
          {" "}
          <p className="text-white text-2xl">
            <BreadcrumbFromUrl slug={data?.slug} />
          </p>
          <div className="grid justify-between gap-10">
            <h1 className="text-7xl font-semibold leading-14 text-white mb-4 max-w-lg">
              {data?.title}
            </h1>

            <p className="text-3xl md:text-5xl leading-tight font-normal text-white mb-4 md:mb-8 max-w-lg">
              {tableTitle}{" "}
            </p>

            {/* <div className="flex flex-row gap-4">
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
              </div> */}
          </div>
        </div>
      </div>

      {/* Mobile view */}
      <div className="w-full h-auto aspect-square overflow-hidden rounded-4xl lg:hidden items-center justify-center">
        <KorcomptenzImage
          src={data?.heroSection?.imageMobile}
          width={1000}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="gap-6 justify-center items-start p-4 md:p-8 w-full lg:hidden  h-full">
        <h1 className="text-4xl font-bold text-foreground mb-2 md:mb-4">
          {data?.title}
        </h1>

        <DangerousHtml
          className="text-lg md:text-base [&>span]:!text-black mb-4 md:mb-8 max-w-md"
          html={data?.heroSection?.description}
        />
        {/* <div className="flex flex-row gap-4">
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
        </div> */}
      </div>
    </div>
  );
};

export default BlogBannerCard;
