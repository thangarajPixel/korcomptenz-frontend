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
    <section className="container-md py-10 lg:py-16">
      {/* Heading */}
      <div className="max-w-5xl space-y-2">
        <DangerousHtml
          className="text-[24px] leading-[28px] font-semibold text-foreground"
          html={data?.subHeading}
        />

        <DangerousHtml
          as="h2"
          html={data?.title}
          className="text-foreground"
        />

        {data?.description && (
          <DangerousHtml
            html={data?.description}
            className="text-[#242424] text-base md:text-lg leading-7 break-words"
          />
        )}
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 gap-[1px] bg-[#D9D9D9] md:grid-cols-2 lg:grid-cols-4">
        {cards.map((item, index) => {
          const isHero = item?.isFirstCard;
          const isVideo =
            item?.linkType?.toLowerCase() === "video";

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
                isHero
                  ? "lg:col-span-2 min-h-[360px]"
                  : "min-h-[360px] p-6"
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
                      className="text-[#00A3FF] text-[22px] lg:text-[26px] font-semibold leading-[32px]"
                    />

                    {item?.description && (
                      <DangerousHtml
                        html={item.description}
                        className="mt-3 max-w-[520px] text-white text-[15px] leading-7"
                      />
                    )}

                    <div className="pt-5">
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
                            className: "text-[#00A3FF]",
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
                      className={`font-semibold text-xl ${
                        item?.isBgImage
                          ? "text-white"
                          : "text-[#242424]"
                      }`}
                    />

                    {/* Image */}
                    {item?.image?.url && (
                      <div
                        className={`my-4 ${
                          isVideo ? "cursor-pointer" : ""
                        }`}
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
                          className="h-[120px] w-full rounded-lg object-cover"
                        />
                      </div>
                    )}

                    {/* Description */}
                    {item?.description && (
                      <DangerousHtml
                        html={item.description}
                        className={`mt-3 text-sm leading-6 ${
                          item?.isBgImage
                            ? "text-white"
                            : "text-[#242424]"
                        }`}
                      />
                    )}

                    {/* CTA */}
                    <div className="mt-auto pt-6">
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
                            className: "text-[#00A3FF]",
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