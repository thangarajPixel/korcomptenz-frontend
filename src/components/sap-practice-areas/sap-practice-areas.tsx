"use client";
import { InsightCard } from "./_utils/insight-cards";
import InsightsMobileCarousel from "./_utils/insight-mobile-carousel";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import ButtonLink from "../ui/button-link";

export default function SAPPracticeAreas({
  data,
}: {
  data: SAPPracticeAreasType;
}) {
  return (
    <section
      data-debug={"page-componets.sap-practice-areas"}
      className="font-sans"
    >
      <div aria-labelledby="insights-heading" className="container-md mt-7">
        {data?.subtext && (
          <div className="inline-block px-4 py-1 text-sm border border-gray-300 rounded-full mb-4 text-gray-700">
            {data.subtext}
          </div>
        )}
        {/* Title */}
        {data?.title && (
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            {data.title}
          </h2>
        )}
        <div className="flex flex-col items-center gap-6 text-center md:gap-8">
          <InsightsMobileCarousel items={data?.gridlisting} />
          <motion.div
            className="md:flex flex-row  items-center justify-center hidden"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            {" "}
            {data?.buttontext && (
              <ButtonLink
                link={data?.buttonLink || "#"}
                buttonProps={{
                  size: "xl",
                  arrow: true,
                  className:
                    "variant:default px-8 py-2 text-4xl rounded-full inline-flex",
                }}
              >
                {data?.buttontext}
              </ButtonLink>
            )}
          </motion.div>
          <motion.div
            className="hidden w-full grid-cols-3 gap-6 md:grid rounded-4xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            {data?.gridlisting.map((item, index) => (
              <InsightCard
                {...item}
                key={`insights-item-${item.id}`}
                className={cn(
                  "relative ",
                  (index + 1) % 2 === 0 ? "top-0" : "top-0",
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
            {data?.buttontext && (
              <ButtonLink
                link={data?.buttonLink || "#"}
                buttonProps={{
                  size: "lg",
                  arrow: true,
                  className:
                    "variant:default px-8 py-2 text-4xl rounded-full inline-flex",
                }}
              >
                {data?.buttontext}
              </ButtonLink>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
