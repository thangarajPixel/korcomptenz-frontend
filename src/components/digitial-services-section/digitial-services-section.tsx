"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import KorcomptenzImage from "../korcomptenz-image";

import { DangerousHtml } from "../ui/dangerous-html";

export function DigitalServiceSection({
  className,
  content,
}: {
  className?: string;
  content: DigitialServicesSectionType;
}) {
  const [value, setValue] = React.useState<string>(content?.list?.[0]?.label);

  const activeContent =
    content?.list?.find((c) => c?.label === value) || content?.list?.[0];

  return (
    <section
      className={cn("my- md:my-0 container-md", className)}
      data-debug={"home.services-section"}
    >
      <div className="mb-5">
        <h2 className="font-bold text-foreground leading-10 lg:leading-12 max-w-5xl">
          {content?.title}
        </h2>

        <DangerousHtml
          html={content?.description}
          className="max-w-5xl text-pretty text-lg text-custom-gray py-3"
        />
      </div>
      {/* Top rounded segmented tabs */}
      <div className="relative">
        <Tabs
          value={value}
          onValueChange={(v) => setValue(v)}
          className=" mb-6 bg-bla "
        >
          <TabsList
            className={cn(
              "relative  md:h-15 h-11 sm:h-16 grid max-w-5xl grid-cols-5 overflow-hidden rounded-2xl",
              "bg-secondary p-0 shadow-none border-none ml-0! flex md:w-1/2 w-full",
            )}
          >
            {content?.list?.map((t) => (
              <TabsTrigger
                key={t?.label}
                value={t?.label}
                className={cn(
                  "relative cursor-pointer! h-full z-10 text-white  rounded-none lg:px-6 px-2 py-3 shadow-none border-none  text-md sm:text-base font-semibold ",
                  "transition-all duration-200 hover:bg-secondary-foreground hover:text-secondary  data-[state=active]:bg-secondary data-[state=active]:text-secondary data-[state=inactive]:opacity-85",
                )}
              >
                <span
                  className={cn(
                    "z-50 text-xs  truncate block md:inline-block max-w-[5ch] md:max-w-none leading-normal",
                    activeContent?.label === t.label
                      ? "block text-xs md:text-3xl whitespace-normal max-w-none"
                      : "block text-xs md:text-3xl truncate max-w-[5ch]",
                  )}
                >
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
                      "absolute inset-0 z-0 bg-secondary-foreground",
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
      <div className="relative overflow-hidden flex flex-col-reverse justify-between items-center gap-4  lg:flex-row">
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
              <h2 className="text-pretty lg:text-9xl text-6xl font-semibold leading-tight text-custom-gray md:text-8xl  ">
                {activeContent?.heading}
              </h2>

              <DangerousHtml
                html={activeContent?.description}
                className="max-w-xl text-pretty text-lg text-custom-gray py-3 leading-7.5"
              />
            </div>
            <div className="flex-1">
              <KorcomptenzImage
                src={activeContent?.image}
                className="h-full w-full rounded-3xl object-cover mb-4"
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

export default DigitalServiceSection;
