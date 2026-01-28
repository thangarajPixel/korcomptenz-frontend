"use client";
import KorcomptenzImage from "@/components/korcomptenz-image";

import ButtonLink from "@/components/ui/button-link";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";

const NewsRoomBuild = ({
  buildData,
}: {
  buildData: BuildConnectSectionType;
}) => {
  return (
    <section data-debug="page-componets.build-data" id="our-mission-and-vision">
      <div className="container-md  ">
        <div className={cn("grid grid-cols-1 lg:grid-cols-[60%_40%] gap-x-10")}>
          <div
            className={cn("lg:px-5 space-y-3 ", buildData?.isSwap && "order-2")}
          >
            {!buildData?.isSwap && (
              <h2 className="text-6xl md:text-8xl font-bold text-foreground leading-10 lg:leading-14">
                {buildData?.title}
              </h2>
            )}
            {buildData?.description && (
              <DangerousHtml
                html={buildData?.description}
                className="text-xs md:text-2xl text-foreground leading-7 break-words"
              />
            )}
            {buildData?.listDescription && (
              <div className="flex flex-col items-start">
                {buildData?.listDescription.map((item, index) => (
                  <div key={index} className="flex gap-3 justify-end">
                    {/* Blue arrow icon */}
                    <div className="flex-shrink-0 pt-2">
                      <KorcomptenzImage
                        src="/assets/thumbnail_arrow_f6130cd06d.png"
                        width={24}
                        height={24}
                      />
                    </div>

                    {/* Benefit text */}
                    <DangerousHtml
                      html={item?.description}
                      className="text-gray-700 text-2xl font-sans leading-relaxed mb-5"
                    />
                  </div>
                ))}
              </div>
            )}
            {buildData?.button?.text && (
              <ButtonLink
                link={buildData?.button?.link || "#"}
                buttonProps={{
                  size: "xl",
                  arrow: true,
                  className: "items-center",
                }}
              >
                <span className="w-42 md:w-full truncate">
                  {buildData?.button?.text || "Watch Now"}
                </span>
              </ButtonLink>
            )}
          </div>

          <div className="relative">
            <div className="sticky top-24 right-0 p-5 hidden lg:block">
              <KorcomptenzImage
                src={buildData?.image}
                width={400}
                height={400}
                className=" object-cover "
              />
            </div>

            {/* Mobile (normal scroll) */}
            <div className="p-5 lg:hidden">
              <KorcomptenzImage
                src={buildData?.image}
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-4xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsRoomBuild;
