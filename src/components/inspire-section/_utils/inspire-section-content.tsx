"use client";

import { useState } from "react";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";
import ButtonLink from "@/components/ui/button-link";

function isYouTube(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be");
}

function isVimeo(url: string) {
  return url.includes("vimeo.com");
}

function getVideoEmbed(url: string) {
  if (isYouTube(url)) {
    const id = url.match(/(?:v=|youtu\.be\/)([^&]+)/)?.[1];
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  }

  if (isVimeo(url)) {
    const id = url.split("/").pop();
    return `https://player.vimeo.com/video/${id}?autoplay=1`;
  }

  return url;
}

type InspireCardType = InspireSectionType["list"][number];

export const InspireSectionContent = ({
  card,
  className,
  topClassName,
}: {
  card: InspireCardType;
  className?: string;
  topClassName?: string;
}) => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
      <div className={cn("p-6", topClassName)}>
        {card.title && (
          <h3
            className={cn("text-3xl md:text-4xl font-semibold mb-4", className)}
          >
            {card.title}
          </h3>
        )}

        <DangerousHtml
          html={card.description}
          className="md:text-lg text-md mb-4"
        />

        {card?.buttonText &&
          (card?.isvideopopup ? (
            <button onClick={() => setOpenVideo(true)}>
              <ButtonLink
                link="#"
                buttonProps={{
                  arrow: true,
                  className: "mt-6",
                  size: "xl",
                }}
              >
                {card?.buttonText || "Click Here"}
              </ButtonLink>
            </button>
          ) : (
            <ButtonLink
              link={card?.link || "#"}
              isTargetNew={card?.targetblank}
              buttonProps={{
                size: "xl",
                arrow: true,
              }}
            >
              {card?.buttonText}
            </ButtonLink>
          ))}
      </div>

      {card?.isvideopopup && openVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpenVideo(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenVideo(false)}
              className="absolute top-3 right-3 z-10 text-white text-3xl"
            >
              ×
            </button>

            {isYouTube(card.VideoLink) || isVimeo(card.VideoLink) ? (
              <iframe
                src={getVideoEmbed(card.VideoLink)}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            ) : (
              <video
                src={card.VideoLink}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
