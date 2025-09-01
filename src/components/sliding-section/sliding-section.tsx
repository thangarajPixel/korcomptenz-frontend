"use client"

import React from "react"
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react"

import { Button } from "@/components/ui/button"
import { jsonData } from "@/utils/helper"
import KorcomptenzImage from "../korcomptenz-image"


export default function SlidingSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  })
  const [_, setSelectedIndex] = React.useState(0)

  const onInit = React.useCallback((emblaApi?: UseEmblaCarouselType[1]) => {
    setSelectedIndex(emblaApi?.selectedScrollSnap() || 0)
  }, [])

  const onSelect = React.useCallback((emblaApi?: UseEmblaCarouselType[1]) => {
    setSelectedIndex(emblaApi?.selectedScrollSnap() || 0)
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onInit()
    onSelect()
    emblaApi.on("reInit", onInit)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  React.useEffect(() => {
    if (!emblaApi) return

    const autoSlide = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000)

    return () => clearInterval(autoSlide)
  }, [emblaApi])

  return (
    <section className="w-full rounded-none">
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {jsonData.slides.map((slide) => (
              <div key={slide.id} className="flex-[0_0_100%] min-w-0">
                <div className="relative aspect-[16/9] w-full md:h-auto h-[calc(100vh-100px)] lg:h-[calc(100vh-100px)]">
                  <KorcomptenzImage
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.alt}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0  flex items-center">
                    <div className="container mx-auto px-6 md:px-12">
                      <div className="max-w-2xl text-white">
                        {/* <div className="text-sm font-medium text-green-400 mb-2 tracking-wide uppercase">
                          {slide.subtitle}
                        </div> */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-balance">
                          {slide.title}
                        </h2>
                        <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed text-pretty">
                          {slide.description}
                        </p>
                        <Button
                          size="xl"
                          variant='white'
                        >
                          {slide.buttonText}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
