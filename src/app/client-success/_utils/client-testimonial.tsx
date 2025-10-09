"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import KorcomptenzImage from "@/components/korcomptenz-image";

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

  const currentTestimonial = data[currentIndex];

  return (
    <Card className="container-md relative bg-[#C9F5FF]">
      <div className="absolute right-0 top-0 w-36 h-36 ">
        <KorcomptenzImage
          src="https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/mask_group_f6a2b0c60c.png"
          className="object-contain"
          width={1000}
          height={1000}
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
    </Card>
  );
}
