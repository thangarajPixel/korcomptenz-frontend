"use client"

import { useRef, useEffect } from "react"
import { motion, useMotionValue, useTransform, animate } from "motion/react"
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
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-1, 1], [-6, 6])
  const rotateY = useTransform(mx, [-1, 1], [6, -6])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const px = (e.clientX - r.left) / r.width
      const py = (e.clientY - r.top) / r.height
      mx.set((px - 0.5) * 2)
      my.set((py - 0.5) * 2)
    }
    const reset = () => {
      animate(mx, 0, { duration: 0.25 })
      animate(my, 0, { duration: 0.25 })
    }
    el.addEventListener("pointermove", onMove)
    el.addEventListener("pointerleave", reset)
    el.addEventListener("pointerup", reset)
    return () => {
      el.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerleave", reset)
      el.removeEventListener("pointerup", reset)
    }
  }, [mx, my])

  return (
    <motion.article
      ref={ref}
      className={cn(
        "group relative bg-card p-3   transition-colors",
        "hover:ring-black/10",
        className,
      )}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div
        className="relative overflow-hidden rounded-5xl"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <span className=" mx-3 my-5  pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-white/90 px-5 py-2 text-xs font-medium text-[#000000] ring-1 ring-gray-200 backdrop-blur">
          {category}
        </span>

        <div className="relative aspect-[4/3] w-full rounded-5xl">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={alt}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 will-change-transform group-hover:scale-[1.03]"
            priority={false}
          />
        </div>
      </motion.div>


      <h3 className="mt-4 text-start text-xl  font-semibold leading-10 text-[#000000]">{title}</h3>
    </motion.article>
  )
}
