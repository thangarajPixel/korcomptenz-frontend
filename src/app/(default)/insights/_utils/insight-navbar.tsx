"use client";
import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const content = [
  { label: "All Resources" },
  { label: "Whitepapers" },
  { label: "Blogs" },
  { label: "eBooks" },
  { label: "Brochures" },
  { label: "Infographics" },
  { label: "Webinars" },
  { label: "Podcasts" },
  { label: "Webstories" },
];

export function InsightNavbar() {
  const [value, setValue] = React.useState<string>(content?.[0]?.label);

  return (
    <section className="container-lg">
      <div className="relative">
        <Tabs value={value} onValueChange={(v) => setValue(v)} className="">
          <TabsList
            className={cn(
              "relative lg:h-[50px] sm:h-16",
              "bg-secondary p-0 shadow-none border-none !ml-0 flex w-full",
              "overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide"
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
                <span className="z-50 text-xs md:text-xl  block md:inline-block max-w-[5ch] md:max-w-none leading-normal">
                  {t?.label}
                </span>

                {value === t?.label && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{
                      type: "spring",
                      stiffness: 120,
                      damping: 20,
                    }}
                    className="absolute inset-0 z-0 bg-secondary-foreground "
                  />
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
}

export default InsightNavbar;
