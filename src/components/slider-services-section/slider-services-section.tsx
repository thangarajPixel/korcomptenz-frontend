"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { DangerousHtml } from "../ui/dangerous-html";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

type SubItem = {
  id: number;
  title: string;
  description: string;
  image?: ImageType;
};

type TabItem = {
  id: number;
  title: string;
  sublist: SubItem[];
};

type Props = {
  content: {
    id: number;
    tablist: TabItem[];
  };
};

export function SliderServiceSection({ content }: Props) {
  const tablist = content?.tablist || [];

  const [value, setValue] = React.useState<string>(tablist?.[0]?.title || "");

  const activeTab = tablist.find((tab) => tab?.title === value) || tablist[0];

  return (
    <section className="my-10">
      {/* ---------------- Tabs ---------------- */}
      <div className="relative">
        <Tabs
          value={value}
          onValueChange={setValue}
          className="container-md mb-12"
        >
          <TabsList
            className={cn(
              "relative lg:h-20 md:h-25 h-11 sm:h-16 grid  grid-cols-5 overflow-hidden rounded-2xl",
              "bg-secondary p-0 shadow-none border-none ml-0! flex w-full",
            )}
          >
            {tablist.map((tab) => (
              <TabsTrigger
                key={tab?.id}
                value={tab?.title}
                className={cn(
                  "relative cursor-pointer! h-full z-10 text-white  rounded-none lg:px-6 px-2 py-3 shadow-none border-none  text-md sm:text-base font-semibold ",
                  "transition-all duration-200 hover:bg-secondary-foreground hover:text-secondary  data-[state=active]:bg-secondary data-[state=active]:text-secondary data-[state=inactive]:opacity-85",
                )}
              >
                <span
                  className={cn(
                    "z-50 text-xs md:text-5xl truncate block md:inline-block max-w-[5ch] md:max-w-none leading-normal",
                    activeTab?.title === tab?.title
                      ? "block text-xs md:text-5xl whitespace-normal max-w-none"
                      : "block text-xs md:text-5xl truncate max-w-[5ch]",
                  )}
                >
                  {tab.title}
                </span>
                {value === tab?.title && (
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
      </div>

      {/* ---------------- Sublist Content ---------------- */}
      <div className="container-md mt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
          >
            <Carousel autoPlay autoPlayDelay={3000}>
              {/* Arrows Desktop */}
              <CarouselPrevious
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 size-10  bg-primary text-white"
                variant="default"
              />
              <CarouselNext
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 size-10 bg-primary text-white"
                variant="default"
              />

              <CarouselContent className="ml-2">
                {activeTab?.sublist?.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="basis-full md:basis-1/2 lg:basis-1/3 px-16"
                  >
                    <div className="space-y-4">
                      {item?.image && (
                        <img
                          src={item?.image?.url}
                          alt={item?.title}
                          className="h-16 w-16 object-contain"
                        />
                      )}

                      <h3 className="text-xl font-semibold">{item?.title}</h3>

                      <DangerousHtml
                        html={item?.description}
                        className="text-md md:text-lg text-foreground leading-7.5"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Arrows Mobile */}
              <div className="flex lg:hidden w-full justify-center items-center gap-4 mt-6">
                <CarouselPrevious
                  className="relative left-0 hover:bg-primary hover:text-white size-12"
                  variant="default"
                />
                <CarouselNext
                  className="relative left-0 hover:bg-primary hover:text-white size-12"
                  variant="default"
                />
              </div>
            </Carousel>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default SliderServiceSection;
