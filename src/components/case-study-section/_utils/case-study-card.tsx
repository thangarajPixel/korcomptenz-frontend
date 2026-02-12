"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import ButtonLink from "@/components/ui/button-link";
import { cn } from "@/lib/utils";

import { motion } from "framer-motion";

export function CaseStudyCard({ data }: { data: CaseStudyData }) {
  return (
    <motion.article
      className={cn(
        "group relative bg-card p-3   flex flex-col  transition-colors",
      )}
    >
      <motion.div className="relative  rounded-4xl">
        <div className="absolute left-3 top-3 flex flex-wrap gap-2 z-10">
          {/* Industry chip */}
          {data?.case_industries?.length > 0 && (
            <span className="rounded-full px-4 py-1 text-sm font-medium text-white bg-secondary">
              {data?.case_industries
                .map((industry) => industry.label)
                .join(", ")}
            </span>
          )}

          {/* Service + Technology chip */}
          {/* {(data?.services?.length > 0 || data?.technologies?.length > 0) && (
            <span className="rounded-full px-4 py-1 text-sm font-medium text-white bg-primary">
              {[...data.services, ...data.technologies]
                .map((item) => item.label)
                .join(", ")}
            </span>
          )} */}
        </div>

        <div className="relative  w-full rounded-4xl h-80">
          <KorcomptenzImage
            src={data?.heroSection?.image}
            height={431}
            width={323}
            className="size-full object-cover rounded-4xl"
            priority={false}
          />
        </div>
      </motion.div>

      <h3 className="mt-4 left-0 line-clamp-2 top-0 max-w-fit text-start lg:text-5xl text-3xl flex-1  font-semibold leading-7 lg:leading-10 text-black ">
        {data?.title || data?.heroSection?.title}
      </h3>
      <p className="text-lg text-black font-normal mb-5 mt-5 line-clamp-3 ">
        {data?.heroSection?.description}
      </p>
      <ButtonLink
        link={`/case-studies/${data?.slug}`}
        buttonProps={{
          arrow: true,
          variant: "ghost",
          className:
            "text-primary hover:text-primary justify-start  hover:bg-transparent p-[-2px]",
        }}
      >
        {data?.heroSection?.buttonText}
      </ButtonLink>
    </motion.article>
  );
}
