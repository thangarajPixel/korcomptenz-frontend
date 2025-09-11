'use client'
import React from 'react'
import ManuelSliderCard from './_utils/manuel-slider-card'
import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'

const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const ManuelSlider = () => {
  const [emblaRef] = useEmblaCarousel({
    // align: "start",
    dragFree: true,
    containScroll: "keepSnaps",
    loop: true,

    // watchSlides: true,
    slides: 'always',
  })

  return (
    <div>
      <div className="flex justify-center">
        <div className="space-y-8 w-1/2 ">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-balance">
            Our services ensure that you have a connected and efficient ecosystem
          </h2>

          {/* Navigation dots and arrows */}
          <div className="flex items-center gap-4">
            <Button
              // variant="outline"
              size="icon"
              // onClick={prevSlide}
              className="rounded-full "
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              // variant="outline"
              size="icon"
              // onClick={nextSlide}
              className="rounded-full"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <section className="">
          <div ref={emblaRef} className=" overflow-hidden">
            <div className=" flex flex-row">
              {SLIDES.map((slide) => (
                <div key={slide} className="min-w-[78%] max-w-[78%] pr-1 relative">
                  <ManuelSliderCard />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ManuelSlider