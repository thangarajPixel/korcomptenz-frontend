'use client';

import { useCallback, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { jsonData } from '@/utils/helper';
import { useRouter } from 'next/navigation';
import Banner from './_utils/banner';

const SlidingSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const slides = jsonData.slides;

  const changeSlide = useCallback(
    (index: number) => {
      if (isTransitioning) {
        return;
      }

      setIsTransitioning(true);
      setCurrentSlide(index);

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1000); // Match this with the CSS transition duration
    },
    [isTransitioning],
  );

  const nextSlide = useCallback(() => {
    const nextIndex = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    changeSlide(nextIndex);
  }, [changeSlide, currentSlide, slides?.length]);


  const handleClick = (cta: string) => {
    if (cta === 'Buy now') {
      router.push('/products/guitar');
    } else if (cta === 'Learn more') {
      router.push('/privacy-policy');
    }
  };

  useEffect(() => {
    // Auto-advance slides every 8 seconds
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isTransitioning, currentSlide, nextSlide]);
  return (
    <section className="flex h-screen max-h-[1930px] flex-col overflow-hidden">
      <Banner currentSlide={currentSlide} />
      <div className="z-20 flex flex-1 items-center justify-between px-4">
        {/* Center Content */}
        <div className="xs:justify-items-center  container mx-auto mb-32 flex size-full items-end  ">
          <div className="flex max-w-2xl flex-col ">
            {slides?.map((slide, index) => (
              <div
                key={`background-slide-${index}`}
                className={`transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                  }`}
              >
                {currentSlide === index && (
                  <div className="flex flex-col items-start space-y-4   sm:space-y-6">
                    <h1 className="text-2xl text-white sm:text-4xl md:text-5xl lg:text-6xl">
                      {slide?.title}
                      {' '}
                      <span className="font-headline text-primary">
                        {slide?.highlightPart1}
                      </span>
                      <br />
                      <span className="font-headline text-primary">
                        {slide?.highlightPart2}
                      </span>
                    </h1>
                    <p className="max-w-[45.625rem] font-headline text-sm leading-[15px]  text-white sm:text-lg sm:leading-none">
                      {slide?.description}
                    </p>
                    <Button
                      className="font-sans text-base font-normal text-white sm:text-lg"
                      onClick={() => handleClick(slide?.cta)}
                    >
                      {slide?.cta}
                    </Button>

                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SlidingSection