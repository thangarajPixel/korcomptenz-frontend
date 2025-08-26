'use client';

import React, { useEffect, useRef, useState } from 'react';


import KorcomptenzImage from '@/components/korcomptenz-image';

type BannerProps = {
  currentSlide: number;
};

export default function Banner({ currentSlide }: BannerProps) {
  const [activeMedia, setActiveMedia] = useState(currentSlide);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [, setIsImageLoaded] = useState(false);

  const videoSources = [
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80',
      alt: 'Nature landscape',
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveMedia(currentSlide);

      const item = videoSources[currentSlide];
      if (item?.type === 'video' && videoRefs.current[currentSlide]) {
        videoRefs.current[currentSlide]?.play().catch((error) => {
          console.error('Error playing video:', error);
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    if (videoSources[currentSlide]?.type === 'image') {
      setIsImageLoaded(false);
    }
  }, [currentSlide]);

  return (
    <div className="absolute inset-0 z-0 bg-black">
      <div className="absolute inset-0 z-10 bg-black/50" />

      {videoSources.map((item, index) => (
        <div
          key={`media-background-${index + 1}`}
          className={`absolute inset-0 transition-opacity duration-1000 ${activeMedia === index ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="absolute inset-0 size-full" >
            <KorcomptenzImage
              src={item.src}
              alt={item.alt || `slide-${index}`}
              fill
              className="object-cover"
              onLoad={() => {
                if (index === currentSlide) {
                  setIsImageLoaded(true);
                }
              }}
              priority={index === currentSlide}
            />
          </div>

        </div>
      ))}
    </div>
  );
}
