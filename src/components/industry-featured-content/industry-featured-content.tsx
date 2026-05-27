"use client";

import React from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import ButtonLink from "../ui/button-link";
import KorcomptenzImage from "../korcomptenz-image";
import { VideoPopup } from "../video-popup";

const IndustryFeaturedContent = ({
  data,
}: {
  data: IndustryFeaturedContentType;
}) => {
  const [isVideoOpen, setIsVideoOpen] = React.useState<{
    open: boolean;
    link: string | null;
  }>({
    open: false,
    link: null,
  });

  const firstCard = data?.list?.find((item) => item?.isFirstCard);
  const otherCards = data?.list?.filter((item) => !item?.isFirstCard) || [];

  const cards = firstCard ? [firstCard, ...otherCards] : data?.list || [];

  return (
    <section className="container-md ">
      {/* Heading */}

      <div className="max-w-5xl ">
        {data?.subHeading && (
          <DangerousHtml
            className="text-[24px] leading-[28px] font-semibold text-foreground"
            html={data?.subHeading}
          />
        )}

        {data?.title && (
          <DangerousHtml
            as="h2"
            html={data?.title}
            className="text-[#020202]"
          />
        )}

        {data?.description && (
          <DangerousHtml
            html={data?.description}
            className="text-[#242424] text-base md:text-lg leading-7 break-words"
          />
        )}
      </div>

      {/* Cards */}
      <div className="mt-5 grid grid-cols-1 gap-[1px] md:grid-cols-2 lg:grid-cols-4">
        {cards.map((item, index) => {
          const isHero = item?.isFirstCard;
          const isVideo = item?.linkType?.toLowerCase() === "video";
          const buttonTextColor =
            item?.buttonColor?.toLowerCase() === "blue"
              ? "text-[#23A1EF]"
              : item?.buttonColor?.toLowerCase() === "black"
                ? "text-[#444444]"
                : "text-white";
          const backgroundStyle = !isHero
            ? item?.isBgImage && item?.bgImage?.url
              ? {
                  backgroundImage: `url(${item.bgImage.url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : {
                  backgroundColor: item?.bgColor || "#FFFFFF",
                }
            : {
                backgroundColor: item?.bgColor || "#323941",
              };

          return (
            <div
              key={item?.id || index}
              className={`relative overflow-hidden ${
                isHero ? "lg:col-span-2 min-h-[360px]" : "min-h-[360px] p-6"
              }`}
              style={backgroundStyle}
            >
              {/* ================= HERO CARD ================= */}
              {isHero ? (
                <>
                  {/* Background Image */}
                  {item?.bgImage?.url && (
                    <div className="absolute inset-0">
                      <KorcomptenzImage
                        src={item.bgImage}
                        alt=""
                        width={1200}
                        height={700}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/35" />

                  {/* Content */}
                  <div className="relative z-10 flex h-full flex-col justify-end p-8 lg:p-10">
                    <DangerousHtml
                      html={item?.title}
                      className="text-[#00A3FF] text-[22px] font-semibold leading-[32px]"
                    />

                    {item?.description && (
                      <DangerousHtml
                        html={item.description}
                        className="mt-3 max-w-[520px] text-white text-md md:text-lg leading-7.5"
                      />
                    )}

                    <div className="">
                      {isVideo ? (
                        <button
                          onClick={() =>
                            setIsVideoOpen({
                              link: item?.buttonLink || "#",
                              open: true,
                            })
                          }
                          className="font-medium text-[#00A3FF] hover:underline"
                        >
                          {item?.buttonText || "Play Video"}
                        </button>
                      ) : (
                        <ButtonLink
                          link={item?.buttonLink || "#"}
                          isTargetNew={item?.isTarget}
                          buttonProps={{
                            arrow: true,
                            className:
                              " bg-transparent hover:bg-transparent text-white  hover:text-white  border-none hover:border-none -ml-3",
                          }}
                        >
                          {item?.buttonText || "Read More"}
                        </ButtonLink>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Overlay for image background cards */}
                  {item?.isBgImage && (
                    <div className="absolute inset-0 bg-black/25" />
                  )}

                  <div className="relative z-10 flex h-full flex-col">
                    {/* Title */}
                    <DangerousHtml
                      html={item?.title}
                      className={`text-[22px]  font-semibold leading-[32px] ${
                        item?.isBgImage ? "text-white" : "text-[#242424]"
                      }`}
                    />

                    {/* Image */}
                    {item?.image?.url && (
                      <div
                        className={`relative my-4 ${isVideo ? "cursor-pointer" : ""}`}
                        onClick={() =>
                          isVideo
                            ? setIsVideoOpen({
                                link: item?.buttonLink || "#",
                                open: true,
                              })
                            : undefined
                        }
                      >
                        <KorcomptenzImage
                          src={item.image}
                          alt={item?.title || ""}
                          width={400}
                          height={250}
                          className="h-[120px] w-[250px] md:h-[120px] md:w-full rounded-lg object-cover"
                        />

                        {isVideo && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-white/20 ">
                              <img
                                src="/assets/play-button.png"
                                alt="Play"
                                className="h-6 w-6"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Description */}
                    {item?.description && (
                      <DangerousHtml
                        html={item.description}
                        className={`mt-3 text-md md:text-lg leading-7.5 ${
                          item?.isBgImage ? "text-white" : "text-[#242424]"
                        }`}
                      />
                    )}

                    {/* CTA */}
                    <div className="mt-auto ">
                      {isVideo ? (
                        <button
                          onClick={() =>
                            setIsVideoOpen({
                              link: item?.buttonLink || "#",
                              open: true,
                            })
                          }
                          className={`font-medium ${buttonTextColor} hover:underline cursor-pointer`}
                        >
                          {item?.buttonText || "Play Video"}
                        </button>
                      ) : (
                        <ButtonLink
                          link={item?.buttonLink || "#"}
                          isTargetNew={item?.isTarget}
                          buttonProps={{
                            className: `bg-transparent border-none -ml-3 cursor-pointer ${buttonTextColor} hover:bg-transparent hover:text-${buttonTextColor.replace("text-", "")} hover:border-none`,
                          }}
                        >
                          {item?.buttonText || "Read More"}
                        </ButtonLink>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <VideoPopup
        isOpen={isVideoOpen.open}
        onClose={() =>
          setIsVideoOpen({
            link: null,
            open: false,
          })
        }
        videoSrc={isVideoOpen.link || ""}
      />
    </section>
  );
};

export default IndustryFeaturedContent;
