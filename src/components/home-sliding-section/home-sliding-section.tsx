"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { DangerousHtml } from "../ui/dangerous-html";
import ButtonLink from "../ui/button-link";
import KorcomptenzImage from "../korcomptenz-image";

export type SliderEntryType = {
  id?: number;
  Title?: string;
  Description?: string;
  image?: string;
  swap?: boolean;
  buttonText?: string;
  buttonLink?: string;
  isTarget?: boolean;
  isVideoLink?: boolean;
};

/**
 * Works out how to embed a video URL — YouTube, Vimeo, or a direct/internal
 * file (mp4, Strapi upload, etc). Falls back to treating it as a direct
 * video source if it doesn't match a known provider.
 */
function getVideoEmbed(url: string): {
  type: "youtube" | "vimeo" | "file";
  src: string;
} {
  const youtubeMatch = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  if (youtubeMatch) {
    return {
      type: "youtube",
      src: `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`,
    };
  }

  const vimeoMatch = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vimeoMatch) {
    return {
      type: "vimeo",
      src: `https://player.vimeo.com/video/${vimeoMatch[1]}?autoplay=1`,
    };
  }

  return { type: "file", src: url };
}

export type HomeSlidingSectionType = {
  Title?: string;
  BackroundColor?: string;
  boxBorder?: boolean;
  ArrowPosition?: "left" | "right" | "center";
  SliderEntries?: SliderEntryType[];
};

const arrowPositionClass: Record<string, string> = {
  left: "justify-start",
  right: "justify-end",
  center: "justify-center",
};

const HomeSlidingSection = ({ data }: { data: HomeSlidingSectionType }) => {
  const entries = (data?.SliderEntries || []).filter(
    (entry) => entry?.Title || entry?.Description || entry?.image,
  );
  const total = entries.length;

  const [current, setCurrent] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (!activeVideo) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeVideo]);

  const goTo = useCallback(
    (index: number) => {
      if (total === 0) return;
      setCurrent(index < 0 ? total - 1 : index >= total ? 0 : index);
    },
    [total],
  );

  const restart = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    if (total < 2) return;
    autoplayRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1 >= total ? 0 : prev + 1));
    }, 5000);
  }, [total]);

  useEffect(() => {
    restart();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [restart]);

  const handleNext = () => {
    goTo(current + 1);
    restart();
  };

  const handlePrevious = () => {
    goTo(current - 1);
    restart();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const distance = e.changedTouches[0].clientX - touchStartX.current;
    if (distance < -50) handleNext();
    if (distance > 50) handlePrevious();
  };

  if (total === 0) return null;

  return (
    <section
      className="w-full flex flex-col items-center justify-center py-16 px-4 md:py-20 md:px-8"
      style={{ backgroundColor: data?.BackroundColor || "#000000" }}
    >
      {data?.Title && (
        <div className="container-md w-full mb-4">
          <DangerousHtml
            html={data.Title}
            className="block text-[13px] tracking-wider uppercase text-[#9a9a9a]"
          />
        </div>
      )}

      <div
        className={`relative w-full max-w-[1840px] overflow-hidden bg-black ${
          data?.boxBorder
            ? "border border-[#292929]"
            : "border border-transparent"
        }`}
        onMouseEnter={() =>
          autoplayRef.current && clearInterval(autoplayRef.current)
        }
        onMouseLeave={restart}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {entries.map((entry, index) => (
            <div
              key={entry.id ?? index}
              className={`min-w-full w-full flex flex-col lg:items-center bg-black p-6 md:p-9 lg:p-11 ${
                entry.swap ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {entry.image && (
                <div className="w-full lg:w-[44%] lg:flex-[0_0_44%] flex flex-col gap-4">
                  <div className="relative w-full h-[280px] md:h-[460px] lg:h-auto overflow-hidden">
                    <KorcomptenzImage
                      src={entry.image}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />

                    {entry.isVideoLink && entry.buttonLink && (
                      <button
                        type="button"
                        aria-label={entry.buttonText || "Play video"}
                        onClick={() => setActiveVideo(entry.buttonLink!)}
                        className="absolute right-[4%] bottom-[7%] z-10 flex h-[52px] w-[52px] items-center justify-center rounded-full border-0 bg-[#2fb58f] p-0 cursor-pointer transition-transform duration-300 hover:scale-110
                          after:content-[''] after:block after:w-0 after:h-0 after:ml-1 after:border-t-[9px] after:border-t-transparent after:border-b-[9px] after:border-b-transparent after:border-l-[14px] after:border-l-white"
                      />
                    )}
                  </div>

                  {/* Non-video CTA now sits under the image, not under the description. */}
                  {entry.buttonText && !entry.isVideoLink && (
                    <ButtonLink
                      link={entry.buttonLink || "#"}
                      isTargetNew={entry.isTarget}
                      buttonProps={{ size: "xl", arrow: true }}
                    >
                      {entry.buttonText}
                    </ButtonLink>
                  )}
                </div>
              )}

              <div
                className={`w-full ${
                  entry.image ? "lg:w-[56%] lg:flex-[0_0_56%]" : "lg:w-full"
                } flex flex-col justify-center pt-8 pb-8 lg:pb-0 lg:py-0 lg:px-[5%]`}
              >
                {entry.Title && (
                  <DangerousHtml
                    as="h1"
                    html={entry.Title}
                    className="text-white font-semibold leading-[1.12] tracking-[-1px] md:tracking-[-2px] text-[31px] md:text-[44px] lg:text-[64px] mb-4"
                  />
                )}

                {entry.Description && (
                  <DangerousHtml
                    html={entry.Description}
                    className="max-w-[900px] text-[13px] md:text-[14px] lg:text-base leading-[1.55] text-[#ddd] mb-6 lg:mb-8 [&_p]:mb-3 [&_p:last-child]:mb-0"
                  />
                )}

                {/* No description-column CTA anymore — see the image column above:
                    video slides get the play button, non-video slides get the
                    text/link button, both now placed under the image. */}
              </div>
            </div>
          ))}
        </div>

        {total > 1 && (
          <div
            className={`flex items-center gap-3 md:gap-4 border-t border-[#1c1c1c] px-4 py-4 md:px-8 md:py-5 lg:px-11 lg:py-6 ${
              arrowPositionClass[data?.ArrowPosition || "right"]
            }`}
          >
            <button
              type="button"
              aria-label="Previous slide"
              onClick={handlePrevious}
              className="group relative w-[55px] h-10 lg:w-[65px] lg:h-[45px] bg-transparent border-none cursor-pointer transition-transform duration-300 hover:-translate-x-2
                before:content-[''] before:absolute before:w-[42px] lg:before:w-[52px] before:h-[2px] lg:before:h-[3px] before:top-[19px] lg:before:top-[21px] before:left-[7px] before:bg-[#104d41] before:transition-colors before:duration-300 group-hover:before:bg-white
                after:content-[''] after:absolute after:w-3.5 after:h-3.5 lg:after:w-[17px] lg:after:h-[17px] after:top-[13px] after:left-[7px] after:border-t-2 lg:after:border-t-[3px] after:border-r-2 lg:after:border-r-[3px] after:border-[#104d41] after:-rotate-[135deg] after:transition-colors after:duration-300 group-hover:after:border-white"
            />
            <button
              type="button"
              aria-label="Next slide"
              onClick={handleNext}
              className="group relative w-[55px] h-10 lg:w-[65px] lg:h-[45px] bg-transparent border-none cursor-pointer transition-transform duration-300 hover:translate-x-2
                before:content-[''] before:absolute before:w-[42px] lg:before:w-[52px] before:h-[2px] lg:before:h-[3px] before:top-[19px] lg:before:top-[21px] before:left-[7px] before:bg-[#3bbf9b] before:transition-colors before:duration-300 group-hover:before:bg-white
                after:content-[''] after:absolute after:w-3.5 after:h-3.5 lg:after:w-[17px] lg:after:h-[17px] after:top-[13px] after:right-[7px] after:border-t-2 lg:after:border-t-[3px] after:border-r-2 lg:after:border-r-[3px] after:border-[#3bbf9b] after:rotate-45 after:transition-colors after:duration-300 group-hover:after:border-white"
            />
          </div>
        )}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 px-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 md:top-2 md:-right-10 text-white text-3xl leading-none cursor-pointer"
            >
              &times;
            </button>

            {(() => {
              const embed = getVideoEmbed(activeVideo);
              if (embed.type === "file") {
                return (
                  <video
                    src={embed.src}
                    controls
                    autoPlay
                    className="w-full h-full"
                  />
                );
              }
              return (
                <iframe
                  src={embed.src}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Video player"
                />
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeSlidingSection;
