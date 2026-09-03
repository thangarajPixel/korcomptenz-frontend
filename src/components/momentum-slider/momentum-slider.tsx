"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { DangerousHtml } from "../ui/dangerous-html";

const GAP = 24; // px — matches gap-6 (mobile). Use 40 for md:gap-10 if you want it responsive too.

const MomentumSlider = ({
  momentumData,
}: {
  momentumData: MomentumSliderType;
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);

  const cards = momentumData?.Cards ?? [];

  const getVisibleCards = () => {
    if (typeof window === "undefined") return 3;
    if (window.innerWidth <= 767) return 1;
    if (window.innerWidth <= 1100) return 2;
    return 3;
  };

  const maxIndex = Math.max(0, cards.length - visibleCards);
  const totalSlides = maxIndex + 1;

  // Recompute visibleCards + real pixel cardWidth from the actual container
  const recalc = useCallback(() => {
    const vc = getVisibleCards();
    setVisibleCards(vc);
    setCurrentIndex((prev) => Math.min(prev, Math.max(0, cards.length - vc)));

    if (sliderRef.current) {
      const containerWidth = sliderRef.current.offsetWidth;
      const width = (containerWidth - GAP * (vc - 1)) / vc;
      setCardWidth(width);
    }
  }, [cards.length]);

  useEffect(() => {
    recalc();
    const resizeObserver = new ResizeObserver(() => recalc());
    if (sliderRef.current) resizeObserver.observe(sliderRef.current);
    window.addEventListener("resize", recalc);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", recalc);
    };
  }, [recalc]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !cardWidth) return;
    const move = currentIndex * (cardWidth + GAP);
    track.style.transform = `translateX(-${move}px)`;
  }, [currentIndex, cardWidth]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;
    diff > 0 ? handleNext() : handlePrev();
  };

  //  if (!cards.length) return null;

  return (
    <section
      className="container-md"
      data-debug={"page-componets.momentum-slider"}
    >
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-6">
        <div>
          {momentumData?.subtitle && (
            <h6 className="font-normal text-primary mb-2 uppercase">
              {momentumData?.subtitle}
            </h6>
          )}
          {momentumData?.title && (
            <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-2">
              {momentumData?.title}
            </h2>
          )}
          {momentumData?.description && (
            <p className="text-xl text-foreground mt-2">
              {momentumData?.description}
            </p>
          )}
        </div>

        <div className="flex items-center gap-4 shrink-0 mt-2">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={handlePrev}
            className="text-4xl font-light text-primary/40 hover:text-primary transition"
          >
            ←
          </button>
          <div className="flex items-center gap-2 text-sm font-semibold text-primary min-w-[55px] justify-center">
            <span>{String(currentIndex + 1).padStart(2, "0")}</span>
            <span>{String(cards.length).padStart(2, "0")}</span>
          </div>
          <button
            type="button"
            aria-label="Next slide"
            onClick={handleNext}
            className="text-4xl font-light text-primary hover:translate-x-1 transition"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={sliderRef}
        className="w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-in-out"
          style={{ gap: `${GAP}px` }}
        >
          {cards.map((card, index) => (
            <article
              key={`momentum-card-item-${card?.id}`}
              className="relative flex-none h-[540px] overflow-hidden rounded-3xl bg-neutral-800 isolate"
              style={{ width: cardWidth ? `${cardWidth}px` : "100%" }}
            >
              {card?.image && (
                <KorcomptenzImage
                  src={card?.image}
                  width={700}
                  height={540}
                  className="absolute inset-0 w-full h-full object-cover -z-30"
                />
              )}
              <div className="absolute inset-0 -z-20 bg-gradient-to-b from-black/5 via-black/30 to-black/90" />

              <div className="absolute top-6 left-5 w-14 h-14 rounded-full bg-neutral-600 flex items-center justify-center text-white text-base font-semibold z-10">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="absolute left-7 right-7 bottom-10 z-10">
                {card?.title && (
                  <h3 className="text-white text-2xl font-semibold mb-4">
                    {card?.title}
                  </h3>
                )}
                {card?.description && (
                  <DangerousHtml
                    html={card?.description}
                    className="text-white text-base max-w-[460px]"
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="flex md:hidden justify-center items-center gap-2 mt-5">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <span
            key={`momentum-dot-${i}`}
            onClick={() => setCurrentIndex(i)}
            className={`h-[7px] rounded-full bg-neutral-300 transition-all cursor-pointer ${
              i === currentIndex ? "w-6 bg-primary" : "w-[7px]"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default MomentumSlider;
