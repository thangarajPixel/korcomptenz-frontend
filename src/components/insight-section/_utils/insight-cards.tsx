"use client"

import { motion } from "motion/react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export type InsightCardType = {
  id: string
  title: string
  imageSrc: string
  alt: string
  className?: string
  category: string
}

export function InsightCard({ title, imageSrc, alt, className, category }: InsightCardType) {

  return (
    <motion.article
      className={cn(
        "group relative bg-card p-3   transition-colors",
        className,
      )}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="relative rounded-4xl"
      >
        <span className=" mx-3 my-5  pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-white/90 px-5 py-2 text-xs font-medium text-[#000000] ring-1 ring-gray-200 backdrop-blur">
          {category}
        </span>

        <div className="relative aspect-[4/3] w-full rounded-4xl">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={alt}
            // fill
            height={1000}
            width={1000}
            // sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
            className=" size-full rounded-4xl"
            priority={false}
          />
        </div>
      </motion.div>
      <div className="relative h-[100px]">
      <p className="mt-4 left-0 top-0 max-w-full text-start lg:text-xl text-[18px] sm:text-[20px] font-semibold leading-10 ">{title}</p>

      </div>
    </motion.article>
  )
}
