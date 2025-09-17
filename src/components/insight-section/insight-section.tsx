"use client"

import { InsightCard, } from "./_utils/insight-cards"
import InsightsMobileCarousel from "./_utils/insight-mobile-carousel"
import Link from "next/link"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"


// const insights: InsightCardType[] = [
//   {
//     id: "1",
//     title: "Unlocking Agentic AI",
//     category: "Blog",
//     imageSrc: "/assets/home/6d93e01234b06061627de2e22e4fdce3e8166833.jpg",

//     alt: ""
//   },
//   {
//     id: "2",
//     title: "Achieving Process Excellence with SAP",
//     category: "Whitepaper",
//     imageSrc: "/assets/home/e0dcec7d57469242884ca2941e49dfaa255aa9fd.jpg",

//     alt: ""
//   },
//   {
//     id: "3",
//     title: "Azure stack",
//     category: "E-Book",
//     imageSrc: "/assets/home/6dc93a4dd03a487291f22843c0f97b56dc453aed.jpg",
//     alt: ""
//   },
// ]

export default function InsightsSection({insights}: {insights:InsightsSectionType}) {

  return (
    <section aria-labelledby="insights-heading" className="px-0 container-md ">
      <div className="flex flex-col items-center gap-6 text-center md:gap-8   ">
        <motion.h2
          id="insights-heading"
          className="text-pretty lg:text-9xl text-6xl font-semibold text-gray-900 md:text-7xl "
        >
         {insights.title}
        </motion.h2>
        <InsightsMobileCarousel items={insights.items} />
        <motion.div
          className="md:flex flex-row  items-center justify-center hidden "
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          <Link
            href="#"
          >
            <Button size="xl" arrow={true} className=" variant:default px-8 py-2 text-4xl rounded-full inline-flex">
            {insights.buttonLabel}
            </Button>
          </Link>
        </motion.div>
        <motion.div
          className="hidden w-full grid-cols-3 gap-6 md:grid rounded-4xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          {insights.items.map((item, index) => (
            <InsightCard key={item.id} {...item} className={cn('relative', (index + 1) % 2 === 0 ? "top-0" : "top-[-40px] ")} />
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="container-md flex justify-start md:hidden w-full"
        >
          <Link href="#" >
            <Button size="lg" arrow={true}>
         {insights.buttonLabel}
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
