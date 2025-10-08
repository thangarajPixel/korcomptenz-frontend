"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import KorcomptenzImage from "@/components/korcomptenz-image";
import type { CaseStudyTestimonial } from "@/types/global-types";

export default function ClientTestimonial({
  data,
}: {
  data: CaseStudyTestimonial[];
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

  const currentTestimonial = data[currentIndex];

  return (
    <Card className="container-md bg-[#C9F5FF]">
      <div className="relative z-10">
        <div className="absolute right-8 top-8 w-32 h-32 ">
          <KorcomptenzImage
            src="https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Mask_group_d0abfd8491.png?updatedAt=2025-10-06T10%3A36%3A26.672Z"
            className="object-contain"
            width={500}
            height={500}
          />
        </div>

        {/* Carousel content */}
        <div className="relative p-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-semibold text-muted">
              {currentTestimonial.title}
            </h2>
            <blockquote className="text-6xl text-muted leading-relaxed">
              {currentTestimonial.description}
            </blockquote>
          </div>

          {/* Navigation dots */}
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
        </div>
      </div>
    </Card>
  );
}
