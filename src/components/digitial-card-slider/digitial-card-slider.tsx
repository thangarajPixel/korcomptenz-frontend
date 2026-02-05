"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

import KorcomptenzImage from "../korcomptenz-image";

import { DangerousHtml } from "../ui/dangerous-html";
import { Button } from "../ui/button";
import Link from "next/link";

export function DigitialCardSlider({
  className,
  content,
}: {
  className?: string;
  content: DigitialServicesSectionType;
}) {
  const [value, setValue] = React.useState<string>(content?.list?.[0]?.title);

  const activeContent =
    content?.list?.find((c) => c?.title === value) || content?.list?.[0];

  return (
    <section
      className={cn("my- md:my-0  bg-[#F7F8F8] py-10", className)}
      data-debug={"home.services-section"}
      id="kor-solution"
    >
      <div className="container-md">
        <div className="mb-4">
          <h2 className="font-bold text-foreground leading-10 lg:leading-12 max-w-5xl">
            {content?.title}
          </h2>
        </div>
        {/* Top rounded segmented tabs */}
        <div className="relative">
          <Tabs
            value={value}
            onValueChange={(v) => setValue(v)}
            className="  bg-bla "
          >
            <TabsList className={cn("flex flex-wrap gap-4  bg-[#F7F8F8]")}>
              {content?.list?.map((t) => (
                <TabsTrigger
                  key={t?.title}
                  value={t?.title}
                  className={cn(
                    // wrapper
                    "group relative cursor-pointer",
                    "h-[71px] w-[163px]",
                    "rounded-lg",

                    // layout
                    "flex items-center justify-center",

                    // border
                    "border-2 border-primary",

                    // background + animation
                    "bg-[#F7F8F8]",
                    "transition-all duration-300 ease-in-out",

                    "transition-all duration-400 ease-in-out",

                    // hover
                    "hover:bg-[#AFC3B6]",

                    // active
                    "data-[state=active]:bg-light-gray",

                    // inactive
                    "data-[state=inactive]:opacity-85",
                  )}
                >
                  <KorcomptenzImage
                    src={t?.image}
                    width={100}
                    height={60}
                    priority
                    className={cn(
                      "object-contain",
                      "transition-all duration-300 ease-in-out",

                      // 👇 invert WEBP on hover
                      "group-hover:invert",
                      "group-hover:brightness-0",
                      "group-hover:contrast-200",

                      // 👇 stay inverted when active
                      "data-[state=active]:invert",
                      "data-[state=active]:brightness-0",
                      "data-[state=active]:contrast-200",
                    )}
                  />
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        {/* Two‑column hero; content slides from right into center on tab change */}
        <div className="relative  overflow-hidden flex flex-col-reverse justify-between items-center gap-4  lg:flex-row mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={`active-content-${value}`}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, ease: [0.22, 0.36, 0.22, 1] }}
              className=" w-full flex flex-col-reverse lg:flex-row"
            >
              <div className="space-y-3  md:p-5  w-full  ">
                <h5 className=" lg:text-[24px] text-2xl font-semibold leading-tight text-foreground md:text-8xl ">
                  {activeContent?.title}
                </h5>

                <DangerousHtml
                  html={activeContent?.description}
                  className=" text-pretty text-lg leading-7 text-custom-gray"
                />
                {activeContent?.buttonText && (
                  <Link
                    href={activeContent?.link || "#"}
                    target={activeContent?.isTarget ? "_blank" : "_self"}
                  >
                    <Button size="xl" arrow>
                      {activeContent?.buttonText}
                    </Button>
                  </Link>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default DigitialCardSlider;
