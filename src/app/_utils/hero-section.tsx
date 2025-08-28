"use client"

import useEmblaCarousel from "embla-carousel-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/assets/banner/banner-1.png",
    alt: "Digital Manufacturing Solutions",
    title: "Transform Your Manufacturing",
    subtitle: "Industry 4.0 Solutions",
    description:
      "Leverage advanced digital technologies to optimize production, reduce downtime, and enhance operational efficiency across your manufacturing processes.",
    buttonText: "Learn More",
    buttonAction: "#manufacturing",
  },
  {
    id: 2,
    image: "/assets/banner/banner-2.png",
    alt: "Innovation Technology",
    title: "Future-Ready Innovation",
    subtitle: "Next-Gen Technology",
    description:
      "Embrace cutting-edge solutions that drive innovation and position your business at the forefront of technological advancement.",
    buttonText: "Explore Innovation",
    buttonAction: "#innovation",
  },
  {
    id: 3,
    image: "/assets/banner/banner-3.png",
    alt: "Supply Chain Management",
    title: "Optimize Supply Chain",
    subtitle: "Smart Logistics Solutions",
    description:
      "Streamline your supply chain operations with intelligent systems that provide real-time visibility and predictive analytics.",
    buttonText: "Discover Solutions",
    buttonAction: "#supply-chain",
  },
  {
    id: 4,
    image: "/assets/banner/banner-4.png",
    alt: "Digital Mobility Solutions",
    title: "Enable Digital Mobility",
    subtitle: "Anywhere, Anytime Access",
    description:
      "Empower your workforce with mobile-first solutions that enable productivity and collaboration from anywhere in the world.",
    buttonText: "Get Started",
    buttonAction: "#mobility",
  },
]

export function HeroSection() {
  const [emblaRef] = useEmblaCarousel({ loop: true })

  return (
    <section className="w-full rounded-none">
      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide) => (
              <div key={slide.id} className="flex-[0_0_100%] min-w-0">
                <div className="relative aspect-[16/9] w-full h-[calc(100vh-65px)]">
                  <img
                    src={slide.image || "/placeholder.svg"}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center">
                    <div className="container mx-auto px-6 md:px-12">
                      <div className="max-w-2xl text-white">
                        <div className="text-sm font-medium text-green-400 mb-2 tracking-wide uppercase">
                          {slide.subtitle}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight text-balance">
                          {slide.title}
                        </h2>
                        <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed text-pretty">
                          {slide.description}
                        </p>
                        <Button
                          size="lg"
                          className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3 text-base"
                          onClick={() => (window.location.href = slide.buttonAction)}
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
