"use client"

import * as React from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { jsonData } from '@/utils/helper'
import KorcomptenzImage from "../korcomptenz-image"


type TabKey = "microsoft" | "sap" | "salesforce" | "servicenow" | "aws"

const TABS: { key: TabKey; label: string }[] = [
  { key: "microsoft", label: "Microsoft" },
  { key: "sap", label: "SAP" },
  { key: "salesforce", label: "Salesforce" },
  { key: "servicenow", label: "Service Now" },
  { key: "aws", label: "AWS" },
]

// const CONTENT: Record<TabKey, { heading: string; subheading: string, image?: string }> = {
//   microsoft: {
//     heading: "Solutions across Microsoft product suite",
//     subheading: "Microsoft technologies can transform how you operate and the outcomes you achieve. As a trusted Microsoft, we ensure this transformation happens without a hiccup so your business can be more agile, fast, and productive.",
//     image: "/assets/home/microsoft.png",
//   },
//   sap: {
//     heading: "Making the SAP eco-system run for you",
//     subheading: "SAP is powerful but only when it's aligned with your goals. As a trusted SAP Sales and Services Partner, we help you get more value, faster. Whether you're moving to S/4HANA, embracing RISE with SAP, or building on BTP, we simplify complexity and accelerate outcomes.",
//     image: "/assets/home/sap.png",
//   },
//   salesforce: {
//     heading: "Driving deeper customer engagements with Salesforce",
//     subheading: "Unlock faster value through smarter customer engagement and streamlined processes. From implementation to integration, we ensure rapid deployment with measurable outcomes that enhance customer experiences, sales performance, and ROI.",
//     image: "/assets/home/salesforce.png",
//   },
//   servicenow: {
//     heading: "Accelerate work on ServiceNow",
//     subheading: "Digitize workflows, automate service delivery, and gain visibility with a secure platform.",
//     image: "/assets/home/sap.png",
//   },
//   aws: {
//     heading: "Accelerate work on AWS",
//     subheading: "Leverage the power of AWS to drive innovation and efficiency in your organization.",
//     image: "/assets/home/sap.png",
//   }
// }

export function AnimatedTabsHero({ className }: { className?: string }) {
  const [value, setValue] = React.useState<TabKey>("microsoft")

  return (
    <section className={cn("my- md:my-0", className)}>
      {/* Top rounded segmented tabs */}
      <div className="relative lg:pt-[130px] md:pt-[80px]">
        <Tabs value={value} onValueChange={(v) => setValue(v as TabKey)} className="container-md ">
          <TabsList
            className={cn(
              "mb-12 relative lg:h-[80px] md:h-[60px] line-clamp-1  h-[44px]  sm:h-16 grid max-w-5xl s-10 grid-cols-5 overflow-hidden rounded-2xl",

              "bg-secondary p-0 shadow-none border-none !ml-0"
            )}
          >
            {TABS.map((t) => (
              <TabsTrigger
                key={t.key}
                value={t.key}
                className={cn(
                  "relative !cursor-pointer  z-10 rounded-none lg:px-6 px-2 py-2 shadow-none border-none  text-xs sm:text-base font-semibold text-white transition",
                  "data-[state=active]:bg-secondary-foreground data-[state=active]:text-secondary data-[state=inactive]:opacity-85"
                )}
              >
                <span className="z-50 md:text-xl text-[12px] ">{t.label}</span>
                {value === t.key && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="absolute inset-0 z-0  rounded-md bg-secondary-foreground"
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="h-0.5 w-2/4 bg-secondary absolute top-5 md:top-27 lg:top-42 right-0" />
      </div>
      {/* Two‑column hero; content slides from right into center on tab change */}
      <div className="relative container-md  flex flex-col-reverse justify-between items-center gap-4  lg:flex-row">
        <AnimatePresence mode="wait">
          <motion.div
            key={`copy-${value}`}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3 "
          >
            <h1 className="text-pretty lg:text-5xl text-2xl font-semibold leading-tight text-custom-gray md:text-4xl">
              {jsonData.content[value].heading} 
            </h1>
            <p className="max-w-xl text-pretty text-sm text-custom-gray py-3">{jsonData.content[value].subheading}</p>
            <Button
              size="xl"
              arrow={true}

              className="rounded-full bg-[#16a085] px-6   variant:default"
            >
              Know More

            </Button>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={`art-${value}`}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-full w-full lg:w-3/4"
          >

            {/* Photo placeholder matching composition */}
            <KorcomptenzImage
              src={jsonData.content[value].image}
              alt="Team collaborating on a laptop"
              className="h-fit w-full  rounded-xl object-contain "
              width={1000}
              height={1000}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default AnimatedTabsHero
