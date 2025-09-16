"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { jsonData } from "@/utils/helper";
import KorcomptenzImage from "../korcomptenz-image";

// infer type from jsonData.content
type ContentItem = {
  label: string;
  heading: string;
  subheading: string;
  image?: string;
};

export function AnimatedTabsHero({ className }: { className?: string }) {
  const content: ContentItem[] = jsonData.content;

  // default to first tab
  const [value, setValue] = React.useState<string>(content[0].label);

  // get currently selected content
  const activeContent = content.find((c) => c.label === value) || content[0];

  return (
    <section className={cn("my- md:my-0", className)}>
      {/* Top rounded segmented tabs */}
      <div className="relative lg:pt-[130px] md:pt-[80px]">
        <Tabs
          value={value}
          onValueChange={(v) => setValue(v)}
          className="container-md "
        >
          <TabsList
            className={cn(
              "mb-12 relative lg:h-[80px] md:h-[60px] h-[44px] sm:h-16 grid max-w-5xl grid-cols-5 overflow-hidden rounded-2xl",
              "bg-secondary p-0 shadow-none border-none !ml-0"
            )}
          >
            {content.map((t) => (
              <TabsTrigger
                key={t.label}
                value={t.label}
                className={cn(
                  "relative !cursor-pointer h-full z-10 text-white  rounded-none lg:px-6 px-2 py-3 shadow-none border-none  text-md sm:text-base font-semibold ",
                  "transition-all duration-200 hover:bg-secondary-foreground hover:text-secondary  data-[state=active]:bg-secondary data-[state=active]:text-secondary data-[state=inactive]:opacity-85"
                )}
              >
                <span className="z-50 md:text-5xl  text-[12px] ">{t.label}</span>
                {value === t.label && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{ type: "spring", stiffness: 120, damping: 20, duration: 0.45 }}
                    className={cn("absolute inset-0 z-0   bg-secondary-foreground",
                      // index === 1 && "rounded-l-md", index === TABS.length - 2 && "rounded-r-md"
                    )}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="h-0.5 w-2/4 bg-secondary absolute top-5 sm:top-7 md:top-27 lg:top-42 right-0" />
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
            className="space-y-3"
          >
            <h1 className="text-pretty lg:text-9xl text-6xl font-semibold leading-tight text-custom-gray md:text-8xl">
              {activeContent.heading}
            </h1>
            <p className="max-w-xl text-pretty text-lg text-custom-gray py-3">
              {activeContent.subheading}
            </p>
            <Button
              size="xl"
              arrow={true}
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
            <KorcomptenzImage
              src={activeContent.image || "/placeholder.svg"}
              alt={activeContent.label}
              className="h-fit w-full rounded-xl object-contain"
              width={1000}
              height={1000}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AnimatedTabsHero;
