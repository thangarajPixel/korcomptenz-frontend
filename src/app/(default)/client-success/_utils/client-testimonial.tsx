"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";

export default function ClientTestimonial({
  data,
}: {
  data: TestimonialType[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = data[currentIndex] || data;

  return (
    <Card className="container-md mb-5 relative bg-[#C9F5FF]">
      <div className="absolute inset-0 flex justify-end pointer-events-none">
        <KorcomptenzImage
          src="https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/mask_group_f6a2b0c60c.png"
          fill
          className="object-contain object-right opacity-30"
        />
      </div>
      {/* Carousel content */}
      <div className="relative lg:p-12">
        <div className="space-y-6">
          <h2 className="text-5xl font-semibold text-muted">
            {currentTestimonial?.title}
          </h2>
          {/* <blockquote className="text-6xl text-muted leading-relaxed">
            {currentTestimonial?.description}
          </blockquote> */}
          <DangerousHtml
            html={currentTestimonial?.description}
            className="lg:text-6xl text-xl text-muted leading-12"
          />
        </div>

        {/* Navigation dots */}
        {data.length > 1 && (
          <div className="flex gap-2 mt-8 justify-end">
            {data.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3  transition-all duration-300 cursor-pointer",
                  index === currentIndex
                    ? "bg-slate-800"
                    : "bg-slate-300 hover:bg-slate-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
