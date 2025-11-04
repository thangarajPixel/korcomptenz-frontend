"use client"

import React from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import CardSwiper from "@/components/ui/card-swiper"


type CarouselSlide = {
  id: string
  title: string
  description: string
  image: string
  playIcon?: boolean
}

const slides: CarouselSlide[] = [
  {
    id: "1",
    title: "Korcompetenz",
    description: "Building the Future of Expert-Led Transformation for Impact-Led Transformation",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Sp4wX28b4EECxJPjYY4z9P2TCzjk7G.png",
  },
  {
    id: "2",
    title: "Team Collaboration",
    description: "Working together for success",
    image: "/team-meeting-office.png",
    playIcon: true,
  },
  {
    id: "3",
    title: "Innovation",
    description: "Driving digital transformation",
    image: "/people-working-on-project.jpg",
  },
  {
    id: "4",
    title: "Leadership",
    description: "Expert-led decision making",
    image: "/business-meeting-collaboration.png",
  },
  {
    id: "5",
    title: "Impact",
    description: "Making a difference together",
    image: "/team-celebrating-success.jpg",
  },
]
const MediaSlider = () => {
  const [api, setApi] = React.useState<CarouselApi>()


  const onThumbClick = (index: number) => {
    api?.scrollTo(index)

  }

  // React.useEffect(() => {
  //   if (!api) {
  //     return
  //   }
  //   api.on("select", () => {
  //     // Do something on select.
  //     console.log(api.selectedScrollSnap())
  //   })
  // }, [api])


  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <Carousel className="w-full " setApi={setApi}>
        <CarouselContent >
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="aspect-video relative">
              <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />

              <div className="absolute inset-0 bottom-0 sm:bottom-4 flex items-end justify-center">
                <div className="bg-primary opacity-80 p-8 w-full sm:w-3/4 rounded-md">
                  <h2 className="text-white text-center text-2xl md:text-3xl font-semibold text-balance">
                    {slide.description}
                  </h2>
                </div>
              </div>

              {/* Play icon if needed */}
              {slide.playIcon && (
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                    <svg className="w-7 h-7 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </button>
              )}
            </CarouselItem>
          ))}

        </CarouselContent>
        <CarouselPrevious className="-left-5 hover:bg-primary hover:text-white size-12" variant={'default'} />
        <CarouselNext className="-right-5 hover:bg-primary hover:text-white size-12" variant={'default'} />
      </Carousel>
      <div className="relative mt-4">
        <div className="overflow-hidden">
          <div className="flex gap-4">
            <CardSwiper
              disableAutoSlide
            >
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => onThumbClick(index)}
                  className={`flex-[0_0_40%] md:flex-[0_0_22%] min-w-0 rounded-2xl overflow-hidden transition-all duration-200 `}>
                  <img src={slide.image || "/placeholder.svg"} alt={slide.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </CardSwiper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MediaSlider