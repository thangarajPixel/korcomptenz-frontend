"use client";
import KorcomptenzImage from "@/components/korcomptenz-image";
import ButtonLink from "@/components/ui/button-link";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const colSpanMap: Record<string, string> = {
  "col-span-1": "grid-cols-1",
  "col-span-2": "grid-cols-2",
  "col-span-3": "grid-cols-3",
  "col-span-4": "grid-cols-4",
  "col-span-5": "grid-cols-5",
  "col-span-6": "grid-cols-6",
};

const IndustryBannerCard = ({
  data,
  className,
}: {
  data: BannerSectionType;
  className?: string;
}) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  const gridCols =
    (data?.noofcolumns && colSpanMap[data.noofcolumns]) ||
    (data?.list?.length ? `grid-cols-${data.list.length}` : "grid-cols-4");

  const buttonHref = data?.buttonLink || data?.link || "#";

  return (
    <div className={cn(className)}>
      {/* ── Desktop ── */}
      {isDesktop ? (
        <>
          {/* Hero card */}
          <div
            className={cn(
              "relative w-full md:h-[513px] h-full overflow-hidden hidden lg:block overflow-hidden"
            )}
          >
            <KorcomptenzImage
              src={data?.image}
              fill
              loading="eager"
              className="w-full h-full object-cover object-right"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 [background:linear-gradient(to_right,rgba(0,0,0,0.9)_5%,rgba(0,0,0,0)_70%)] z-5" />

            {/* Text content */}
            <div className="absolute top-0 left-10 p-10 z-10 w-5/8 h-full flex flex-col  justify-center items-start max-w-3xl">
              {data?.subtitle && (
                <span className="text-white font-bold md:text-[25px] ">
                  {data.subtitle}
                </span>
              )}

              <DangerousHtml
                as="h1"
                html={data?.title}
                className="text-white"
              />

              {data?.description && (
                <DangerousHtml
                  className="text-[22px] md:text-[28px] leading-[35px] font-normal text-white mt-3"
                  html={data.description}
                />
              )}

              <div className="flex flex-row gap-4 mt-3">
                {data?.buttonText && (
                  <ButtonLink
                    link={buttonHref}
                    isTargetNew={data?.isTarget ? true : false}
                    buttonProps={{
                      arrow: true,
                      className: "hover:bg-transparent",
                      size: "xl",
                    }}
                  >
                    {data.buttonText}
                  </ButtonLink>
                )}
              </div>
            </div>
          </div>

          {/* Footer bar */}
          {data?.isHasFooter && data?.list && data.list.length > 0 && (
            <div className="hidden lg:block bg-[#2b2b2b]  px-16">
              <ul className={cn("grid", gridCols)}>
                {data.list.map((item) => (
                  <li key={item.id} className="h-full">
                    <a
                      href={item?.buttonLink || "#"}
                      className="flex items-center gap-3 px-2 py-1"
                    >
                      {item?.image && (
                        <KorcomptenzImage
                          src={item.image}
                          width={40}
                          height={40}
                          className="w-15 h-24 object-contain shrink-0  mb-0.5"
                        />
                      )}
                      <div className="grid ">
                        {item?.title && (
                          <DangerousHtml
                            html={item.title}
                            className="text-white text-[16px] font-semibold leading-[16px] "
                          />
                        )}
                        {item?.description && (
                          <DangerousHtml
                            html={item.description}
                            className="text-white/70 text-[16px] leading-[16px] **:text-white/70!"
                          />
                        )}
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <>
          {/* ── Mobile ── */}
          <div
            className={cn(
              "w-full lg:hidden overflow-hidden",
             
            )}
          >
            {/* Banner image with overlaid text */}
            <div
              className={cn(
                "relative w-full overflow-hidden",
                
              )}
            >
              <KorcomptenzImage
                src={data?.imageMobile}
                width={1000}
                height={800}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 [background:linear-gradient(to_top,rgba(0,0,0,0.85)_40%,rgba(0,0,0,0.2)_100%)] z-5" />

              {/* Overlaid text content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col gap-3 p-5">
                {data?.logoMobile ? (
                  <KorcomptenzImage
                    src={data.logoMobile}
                    width={300}
                    height={200}
                    className="w-[200px] h-auto object-contain opacity-65"
                  />
                ) : null}

                {data?.subtitle && (
                  <span className="text-white font-bold text-[18px]  self-start">
                    {data.subtitle}
                  </span>
                )}

                <DangerousHtml
                  html={data?.title}
                  as="h1"
                  className="text-2xl font-semibold leading-tight text-white"
                />

                {data?.description && (
                  <DangerousHtml
                    className="text-[18px] leading-7 font-normal text-white/90 **:text-white!"
                    html={data.description}
                  />
                )}

                <div className="flex flex-col gap-3">
                  {data?.buttonText && (
                    <ButtonLink
                      link={buttonHref}
                      isTargetNew={data?.isTarget ? true : false}
                      buttonProps={{ arrow: true, size: "xl" }}
                    >
                      {data.buttonText}
                    </ButtonLink>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile footer bar */}
            {data?.isHasFooter && data?.list && data.list.length > 0 && (
              <div className="bg-[#2b2b2b]  px-4 py-5">
                <ul className="grid grid-cols-1 gap-4">
                  {data.list.map((item) => (
                    <li key={item.id} className="flex items-center gap-2">
                      {item?.image && (
                        <KorcomptenzImage
                          src={item.image}
                          width={32}
                          height={32}
                          className="w-12 h-15 object-contain shrink-0 invert"
                        />
                      )}
                      <div className="grid ">
                        {item?.title && (
                          <DangerousHtml
                            html={item.title}
                            className="text-white text-[16px] font-bold leading-[18px] mt-2 "
                          />
                        )}
                        {item?.description && (
                          <DangerousHtml
                            html={item.description}
                            className="text-white text-[16px] leading-[18px] font-normal -mt-2"
                          />
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default IndustryBannerCard;
