"use client"

import useEmblaCarousel from "embla-carousel-react"
import { useEffect } from "react"
import { useAnimation, motion } from "motion/react"
import { InsightCard, type InsightCardType } from "./insight-cards"
import { cn } from "@/lib/utils"


export default function InsightsMobileCarousel({ items }: { items: InsightCardType[] }) {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps",
    loop: true,
  })
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.45 } })
  }, [controls])

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={controls} className="block md:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 pl-4">
          {items.map((item) => (
            <div key={item.title} className={cn("min-w-[78%] max-w-[78%] pr-1 relative")}>
              <InsightCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
