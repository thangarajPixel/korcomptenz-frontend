"use client";
import * as React from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const scrollbarHide = `
  .scroll-hide::-webkit-scrollbar { display: none; }
  .scroll-hide { -ms-overflow-style: none; scrollbar-width: none; }
`;

export function InsightNavbar({
  categoryAllLabel,
  category,
}: {
  categoryAllLabel: string;
  category?: { label: string; id: number; slug: string }[];
}) {
  const router = useRouter();
  const pathname = usePathname();

  const currentSlug = pathname.split("/")[2] || categoryAllLabel;
  const [value, setValue] = React.useState(currentSlug);

  React.useEffect(() => {
    setValue(currentSlug);
  }, [currentSlug]);

  const tabs = category;

  const goTo = (val: string) => {
    setValue(val);
    router.push(`/insights/${val === categoryAllLabel ? "#" : val}`, {
      scroll: false,
    });
  };

  return (
    <section className="py-5">
      <style>{scrollbarHide}</style>

      <Tabs value={value} onValueChange={goTo}>
        <TabsList
          className={cn(
            "relative lg:h-[50px] sm:h-16",
            "bg-secondary p-0 shadow-none border-none !ml-0 flex w-full",
            "overflow-x-auto overflow-y-hidden whitespace-nowrap scroll-hide"
          )}
        >
          {/* ⭐ category ALL */}
          <TabsTrigger
            key="all"
            value={categoryAllLabel}
            className={cn(
              "relative !cursor-pointer h-full z-10 text-white rounded-none lg:px-6 px-2 py-3 shadow-none border-none text-md sm:text-base font-semibold",
              "transition-all duration-200 hover:bg-secondary-foreground hover:text-secondary",
              "data-[state=active]:bg-secondary data-[state=active]:text-secondary data-[state=inactive]:opacity-85"
            )}
          >
            <span className="z-50 text-xs md:text-xl leading-normal">
              {categoryAllLabel}
            </span>

            {/* {value === categoryAllLabel && (
              <motion.div
                layoutId="active-pill"
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="absolute inset-0 z-0 bg-secondary-foreground"
              />
            )} */}
          </TabsTrigger>

          {/* ⭐ MAP ITEMS */}
          {tabs?.map((t) => (
            <TabsTrigger
              key={t?.label}
              value={t?.slug}
              className={cn(
                "relative !cursor-pointer h-full z-10 text-white rounded-none lg:px-6 px-2 py-3 shadow-none border-none text-md sm:text-base font-semibold",
                "transition-all duration-200 hover:bg-secondary-foreground hover:text-secondary",
                "data-[state=active]:bg-secondary data-[state=active]:text-secondary data-[state=inactive]:opacity-85"
              )}
            >
              <span className="z-50 text-xs md:text-xl leading-normal">
                {t?.label}
              </span>

              {/* {value === t?.slug && (
                <motion.div
                  layoutId="active-pill"
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className="absolute inset-0 z-0 bg-secondary-foreground"
                />
              )} */}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </section>
  );
}
