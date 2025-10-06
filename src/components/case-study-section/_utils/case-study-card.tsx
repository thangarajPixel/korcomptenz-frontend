"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { motion } from "motion/react";

export type CaseStudyCardType = {
  id: string;
  title: string;
  image: ImageType;
  className?: string;
  category: string;
  description: string;
  buttonText: string;
  industry?: string[];
  service?: string[];
  technology?: string[];
};

export function CaseStudyCard({
  title,
  image,
  className,

  description,
  buttonText,
  industry = [],
  service = [],
  technology = [],
}: CaseStudyCardType) {
  return (
    <motion.article
      className={cn(
        "group relative bg-card p-3 flex flex-col  transition-colors",
        className
      )}
    >
      <motion.div className="relative  rounded-4xl">
        <div className="absolute left-3 top-3 flex flex-wrap gap-2 z-10">
          {/* Industry chip */}
          {industry.length > 0 && (
            <span className="rounded-full px-4 py-1 text-sm font-medium text-white bg-secondary">
              {industry.join(", ")}
            </span>
          )}

          {/* Service + Technology chip */}
          {(service.length > 0 || technology.length > 0) && (
            <span className="rounded-full px-4 py-1 text-sm font-medium text-white bg-primary">
              {[...service, ...technology].join(", ")}
            </span>
          )}
        </div>

        <div className="relative  w-full rounded-4xl">
          <KorcomptenzImage
            src={image}
            height={431}
            width={323}
            className=" size-full rounded-4xl"
            priority={false}
          />
        </div>
      </motion.div>

      <h2 className="mt-4 left-0 line-clamp-2 top-0 max-w-fit text-start lg:text-5xl text-3xl flex-1  font-semibold leading-7 lg:leading-10 text-black ">
        {title}
      </h2>
      <p className="text-lg text-black font-normal mb-5 line-clamp-3 ">
        {description}
      </p>
      <Button className="flex-1">{buttonText}</Button>
    </motion.article>
  );
}
