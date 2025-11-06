"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import KorcomptenzImage from "../korcomptenz-image";
import Link from "next/link";

export function AnimatedTabsHero({
  className,
  content,
}: {
  className?: string;
  content: ServicesSectionType[];
}) {
  const [value, setValue] = React.useState<string>(content?.[0]?.label);

  const activeContent =
    content?.find((c) => c?.label === value) || content?.[0];

  return (
    <section
      className={cn("my- md:my-0", className)}
      data-debug={"home.services-section"}
    >
      {/* Top rounded segmented tabs */}
      <div className="relative">
        <Tabs
          value={value}
          onValueChange={(v) => setValue(v)}
          className="container-md mb-12 "
        >
          <TabsList
            className={cn(
              "relative lg:h-[80px] md:h-[60px] h-[44px] sm:h-16 grid max-w-5xl grid-cols-5 overflow-hidden rounded-2xl",
              "bg-secondary p-0 shadow-none border-none !ml-0 flex w-full"
            )}
          >
            {content?.map((t) => (
              <TabsTrigger
                key={t?.label}
                value={t?.label}
                className={cn(
                  "relative !cursor-pointer h-full z-10 text-white  rounded-none lg:px-6 px-2 py-3 shadow-none border-none  text-md sm:text-base font-semibold ",
                  "transition-all duration-200 hover:bg-secondary-foreground hover:text-secondary  data-[state=active]:bg-secondary data-[state=active]:text-secondary data-[state=inactive]:opacity-85"
                )}
              >
                <span className="z-50 text-xs md:text-5xl truncate md:whitespace-normal block md:inline-block max-w-[5ch] md:max-w-none">
                  {t?.label}
                </span>

                {value === t?.label && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 20,
                      duration: 0.45,
                    }}
                    className={cn(
                      "absolute inset-0 z-0   bg-secondary-foreground"
                      // index === 1 && "rounded-l-md", index === TABS.length - 2 && "rounded-r-md"
                    )}
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="h-1 w-2/4 bg-secondary absolute top-1/2 right-0" />
      </div>
      {/* Two‑column hero; content slides from right into center on tab change */}
      <div className="relative container-md overflow-hidden flex flex-col-reverse justify-between items-center gap-4  lg:flex-row">
        <AnimatePresence mode="wait">
          <motion.div
            key={`active-content-${value}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3, ease: [0.22, 0.36, 0.22, 1] }}
            className="space-y-3 w-full flex flex-col-reverse lg:flex-row"
          >
            <div className="space-y-3  w-full lg:w-1/2  ">
              <h1 className="text-pretty lg:text-9xl text-6xl font-semibold leading-tight text-custom-gray md:text-8xl">
                {activeContent?.heading}
              </h1>
              <p className="max-w-xl text-pretty text-lg text-custom-gray py-3">
                {activeContent?.description}
              </p>
              <Link href={activeContent?.link || "#"}>
                <Button size="xl" arrow={true}>
                  {activeContent?.buttonText}
                </Button>
              </Link>
            </div>
            <div className="flex-1">
              <KorcomptenzImage
                src={activeContent?.image}
                className="h-full w-full rounded-xl object-contain"
                width={1000}
                height={1000}
                priority={true}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default AnimatedTabsHero;
