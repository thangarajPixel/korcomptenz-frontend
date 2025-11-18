"use client";
import { InsightCard } from "./_utils/insight-cards";
import InsightsMobileCarousel from "./_utils/insight-mobile-carousel";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import SplitDivider from "../ui/split-divider";
import ButtonLink from "../ui/button-link";

export default function InsightsSection({
  insights,
}: {
  insights: InsightsSectionType;
}) {
  return (
    <section data-debug={"page-componets.insights-section"}>
      {insights?.title && (
        <SplitDivider>
          <motion.h2
            id="insights-heading"
            className="text-pretty lg:text-9xl text-6xl font-semibold text-gray-900 break-words md:text-7xl "
          >
            {insights?.title}
          </motion.h2>
        </SplitDivider>
      )}
      <div aria-labelledby="insights-heading" className="container-md mt-7">
        <div className="flex flex-col items-center gap-6 text-center md:gap-8">
          <InsightsMobileCarousel items={insights?.list} />
          <motion.div
            className="md:flex flex-row  items-center justify-center hidden"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            <ButtonLink
              href={insights?.buttonLink || "#"}
              buttonProps={{
                size: "xl",
                arrow: true,
                className: "variant:default px-8 py-2 text-4xl rounded-full inline-flex",
              }}
            >
              {insights?.buttontext}
            </ButtonLink>
          </motion.div>
          <motion.div
            className="hidden w-full grid-cols-3 gap-6 md:grid rounded-4xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {insights?.list.map((item, index) => (
              <InsightCard
                {...item}
                key={`insights-item-${item.id}`}
                className={cn(
                  "relative ",
                  (index + 1) % 2 === 0 ? "top-0" : "top-[-40px] "
                )}
              />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="container-md flex justify-start md:hidden w-full"
          >
            <ButtonLink
              href={insights?.buttonLink || "#"}
              buttonProps={{
                size: "lg",
                arrow: true,
                className: "variant:default px-8 py-2 text-4xl rounded-full inline-flex",
              }}
            >
              {insights?.buttontext}
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
