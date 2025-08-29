"use client"

import * as React from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

type TabKey = "microsoft" | "sap" | "salesforce" | "servicenow"

const TABS: { key: TabKey; label: string }[] = [
  { key: "microsoft", label: "Microsoft" },
  { key: "sap", label: "SAP" },
  { key: "salesforce", label: "Salesforce" },
  { key: "servicenow", label: "Service Now" },
]

const CONTENT: Record<TabKey, { heading: string; subheading: string, image?: string }> = {
  microsoft: {
    heading: "Solutions across Microsoft product suite",
    subheading: "Microsoft technologies can transform how you operate and the outcomes you achieve. As a trusted Microsoft, we ensure this transformation happens without a hiccup so your business can be more agile, fast, and productive.",
    image: "/assets/home/microsoft.png",
  },
  sap: {
    heading: "Making the SAP eco-system run for you",
    subheading: "SAP is powerful but only when it's aligned with your goals. As a trusted SAP Sales and Services Partner, we help you get more value, faster. Whether you're moving to S/4HANA, embracing RISE with SAP, or building on BTP, we simplify complexity and accelerate outcomes.",
    image: "/assets/home/sap.png",
  },
  salesforce: {
    heading: "Driving deeper customer engagements with Salesforce",
    subheading: "Unlock faster value through smarter customer engagement and streamlined processes. From implementation to integration, we ensure rapid deployment with measurable outcomes that enhance customer experiences, sales performance, and ROI.",
    image: "/assets/home/salesforce.png",
  },
  servicenow: {
    heading: "Accelerate work on ServiceNow",
    subheading: "Digitize workflows, automate service delivery, and gain visibility with a secure platform.",
    image: "/assets/home/sap.png",
  },
}

export function AnimatedTabsHero({ className }: { className?: string }) {
  const [value, setValue] = React.useState<TabKey>("microsoft")

  return (
    <section className={cn("container  mx-auto max-w-5xl px-4 sm:px-6 my-5 md:my-0", className)}>
      {/* Top rounded segmented tabs */}
      <Tabs value={value} onValueChange={(v) => setValue(v as TabKey)} className="relative px-2 mx-auto md:mx-0 md:w-full">
        <TabsList
          className={cn(
            "mb-12 relative h-12 sm:h-16 grid max-w-3xl grid-cols-4 overflow-hidden rounded-md",
            "container mx-auto px-4",
            "bg-[#5b3ff9] p-0 shadow-sm border border-[#5b3ff9]/30 !ml-0"
          )}
        >
          {TABS.map((t) => (
            <TabsTrigger
              key={t.key}
              value={t.key}
              className={cn(
                "relative z-10 rounded-md px-6 py-2 text-xs sm:text-base font-semibold text-white transition",
                "data-[state=active]:bg-secondary-foreground data-[state=active]:text-secondary data-[state=inactive]:opacity-85"
              )}
            >
              <span className="z-50">{t.label}</span>
              {value === t.key && (
                <motion.div
                  layoutId="active-pill"
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className="absolute inset-0 z-0 rounded-md bg-secondary-foreground"
                />
              )}
            </TabsTrigger>
          ))}
        </TabsList>
        <div className="h-0.5 w-2/4 bg-[#5b3ff9] absolute top-1/4 right-0"></div>
      </Tabs>

      {/* Two‑column hero; content slides from right into center on tab change */}
      <div className="relative container mx-auto flex flex-col-reverse max-w-5xl items-center gap-10 lg:flex-row px-4 sm:px-6">
        {/* Left copy */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`copy-${value}`}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h1 className="text-pretty text-3xl font-semibold leading-tight text-gray-900 md:text-4xl">
              {CONTENT[value].heading}
            </h1>
            <p className="max-w-xl text-pretty text-gray-600">{CONTENT[value].subheading}</p>
            <Button
              size="lg"
              className="h-12 rounded-full bg-[#16a085] px-6 text-base font-semibold text-white hover:bg-[#129072]"
            >
              Know More
              <span aria-hidden="true" className="ml-2">
                ›
              </span>
            </Button>
          </motion.div>
        </AnimatePresence>

        {/* Right visual */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`art-${value}`}
            initial={{ opacity: 0, x: 120 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >

            {/* Photo placeholder matching composition */}
            <img
              src={CONTENT[value].image}
              alt="Team collaborating on a laptop"
              className="h-fit w-full rounded-xl object-contain shadow-lg"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default AnimatedTabsHero
