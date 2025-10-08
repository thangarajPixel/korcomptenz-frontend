"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import KorcomptenzImage from "@/components/korcomptenz-image";

const testimonials = [
  {
    id: 1,
    title: "Customer appreciation",
    quote:
      '"On our behalf I would like to thank you for everything you have done to get us live. I don\'t say this lightly when I say that this has been the best go live implementation of my career."',
    author: "John Smith",
    role: "CTO",
    backgroundImage:
      "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Rectangle_125_9e211318b6.png?updatedAt=2025-10-06T10%3A36%3A26.767Z",
    sideImage:
      "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Mask_group_d0abfd8491.png?updatedAt=2025-10-06T10%3A36%3A26.672Z",
  },
  {
    id: 2,
    title: "Outstanding support",
    quote:
      '"The level of dedication and expertise shown throughout the project was exceptional. Our team couldn\'t be happier with the results and ongoing partnership."',
    author: "Sarah Johnson",
    role: "Project Manager",
    backgroundImage:
      "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Rectangle_125_9e211318b6.png?updatedAt=2025-10-06T10%3A36%3A26.767Z",
    sideImage:
      "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Mask_group_d0abfd8491.png?updatedAt=2025-10-06T10%3A36%3A26.672Z",
  },
  {
    id: 3,
    title: "Exceeded expectations",
    quote:
      '"From initial planning to final deployment, every phase was handled with professionalism. This collaboration has set a new standard for our future projects."',
    author: "Michael Chen",
    role: "VP of Engineering",
    backgroundImage:
      "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Rectangle_125_9e211318b6.png?updatedAt=2025-10-06T10%3A36%3A26.767Z",
    sideImage:
      "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Mask_group_d0abfd8491.png?updatedAt=2025-10-06T10%3A36%3A26.672Z",
  },
];

export default function ClientTestimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Card className="container-md bg-[#C9F5FF]">
      <div className="relative z-10">
        {currentTestimonial.sideImage && (
          <div className="absolute right-8 top-8 w-32 h-32 opacity-20">
            <KorcomptenzImage
              src={currentTestimonial.sideImage}
              fill
              className="object-contain"
            />
          </div>
        )}

        {/* Carousel content */}
        <div className="relative p-12">
          <div className="space-y-6">
            <h2 className="text-5xl font-semibold text-muted">
              {currentTestimonial.title}
            </h2>
            <blockquote className="text-6xl text-muted leading-relaxed">
              {currentTestimonial.quote}
            </blockquote>
          </div>

          {/* Navigation dots */}
          <div className="flex gap-2 mt-8 justify-end">
            {testimonials.map((_, index) => (
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
