"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import { cn } from "@/lib/utils";
import { APP_CONFIG } from "@/utils/app-config";
import { motion } from "motion/react";

export type InsightCardType = {
  id: string;
  title: string;
  image: ImageType;
  alt: string;
  className?: string;
  category: string;
};

export function InsightCard({
  title,
  image,
  className,
  category,
}: InsightCardType) {
  return (
    <motion.article
      className={cn(
        "group relative bg-card p-3   transition-colors",
        className
      )}
      // initial={{ opacity: 0, y: 22 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div className="relative rounded-4xl">
        <span className=" mx-3 my-5  pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-white/90 px-5 py-2 text-md font-medium text-black ring-1 ring-gray-200 backdrop-blur">
          {category}
        </span>

        <div className="relative aspect-[4/3] w-full rounded-4xl">
          <KorcomptenzImage
            src={
              image?.url
                ? APP_CONFIG.APP_URL_IMAGE + image?.url
                : "/placeholder.svg"
            }
            alt={image?.alternativeText}
            // fill
            height={1000}
            width={1000}
            // sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 33vw"
            className=" size-full rounded-4xl"
            priority={false}
          />
        </div>
      </motion.div>

      <p className="mt-4 left-0 top-0 max-w-fit text-start lg:text-5xl text-3xl  font-semibold leading-7 lg:leading-10 ">
        {title}
      </p>
    </motion.article>
  );
}
