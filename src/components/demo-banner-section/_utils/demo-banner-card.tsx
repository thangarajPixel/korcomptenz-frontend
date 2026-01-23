import KorcomptenzImage from "@/components/korcomptenz-image";
import { Button } from "@/components/ui/button";
import ButtonLink from "@/components/ui/button-link";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";
import React from "react";

const DemoBannerCard = ({
  data,
  item,
  className,
}: {
  data: BannerSectionType;
  className?: string;
  isFirst?: boolean;
  item?: DemoBannerDetailsType;
}) => {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Desktop View */}
      <div
        className={cn(
          "relative w-full hidden lg:block",
          data?.isListPage ? "min-h-[60vh]" : "min-h-[80vh]",
        )}
      >
        {/* Background image */}
        <KorcomptenzImage
          src={data?.image}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-[5]" />

        {/* ✅ Centered + Responsive container */}
        <div className="absolute inset-0 z-10 flex items-center py-10">
          <div className="container-md  flex flex-col gap-2 px-6 md:px-10 ">
            <h1 className="text-4xl md:text-7xl max-w-2xl font-semibold text-white leading-12 mt-5">
              {data?.title}
            </h1>

            {data?.description && (
              <DangerousHtml
                className="text-3xl md:text-5xl leading-tight font-semibold text-white my-4  max-w-2xl"
                html={data?.description}
              />
            )}
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
            {data?.bannerCaption && (
              <p className="text-base md:text-lg text-white max-w-xl leading-relaxed mb-5 ">
                {data?.bannerCaption}
              </p>
            )}
          </div>
        </div>
      </div>
      {item?.bannerInfo && (
        <div className="bg-muted hidden lg:block py-5">
          <div className="flex container-md justify-evenly">
            <h1 className="text-white font-semibold text-6xl">
              {" "}
              {item?.bannerInfo?.title}
            </h1>
            {item?.bannerInfo?.details.map((detail, index) => (
              <div className="flex gap-2" key={index}>
                <KorcomptenzImage src={detail?.icon} width={45} height={45} />
                <p
                  key={index}
                  className="text-white text-xl font-semibold mt-2"
                >
                  {detail?.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Mobile View */}
      <div className="lg:hidden w-full h-auto overflow-hidden ">
        <KorcomptenzImage
          src={data?.imageMobile || data?.image}
          width={1000}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>{" "}
      {item?.bannerInfo && (
        <div className="bg-muted lg:hidden flex w-full ">
          <div className="grid container-md justify-start gap-1">
            <h1 className="text-white font-normal text-4xl">
              {" "}
              {item?.bannerInfo?.title}
            </h1>
            {item?.bannerInfo?.details.map((detail, index) => (
              <div className="flex gap-2" key={index}>
                <KorcomptenzImage src={detail?.icon} width={20} height={20} />
                <p key={index} className="text-white text-md font-normal ">
                  {detail?.info}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="lg:hidden container-md flex flex-col gap-6 p-6 md:p-8">
        {data?.logoMobile ? (
          <KorcomptenzImage
            src={data.logoMobile}
            width={300}
            height={200}
            className="w-[250px] md:w-[300px] h-auto object-contain opacity-80 mb-2"
          />
        ) : (
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            {data?.title}
          </h1>
        )}
        {data?.description && (
          <DangerousHtml
            className="text-3xl md:text-5xl leading-tight font-semibold text-foreground max-w-2xl"
            html={data?.description}
          />
        )}
        {data?.buttonText && (
          <Button
            size="lg"
            arrow
            className="variant:default px-6 md:px-8 py-6 md:py-8 text-xl md:text-2xl rounded-full"
          >
            {data?.buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

export default DemoBannerCard;
