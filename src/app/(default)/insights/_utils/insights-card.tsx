"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import ButtonLink from "@/components/ui/button-link";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

export function InsightCard({ data }: { data: CaseStudyData & { category?: { slug: string } } }) {

  const getLink = React.useCallback(() => {
    switch (data?.content) {
      case "blog":
        return `/blog/${data?.slug}`;
      case "podcast":
        return `/podcast/${data?.slug}`;
      case "file":
        // return data?.attachment?.url;
        return `/${data?.category?.slug}/${data?.slug}`;
      case "web-stories":
        return `/webstories/${data?.slug}`;
      case "post-webinar":
        return `/webinar/${data?.slug}`;
      case "pre-webinar":
        return `/webinar/${data?.slug}`;
      default:
        return null;
    }
  }, [data]);
  return (
    <motion.article
      className={cn(
        "group relative bg-card p-3 flex flex-col  transition-colors"
      )}
    >
      <motion.div className="relative  rounded-4xl">
        <div className="absolute left-3 top-3 flex flex-wrap gap-2 z-10">
          {/* Industry chip */}
          {data?.services?.length > 0 && (
            <span className="rounded-full px-4 py-1 text-sm font-medium text-white bg-secondary">
              {[...data.services].map((item) => item.label).join(", ")}
            </span>
          )}

          {/* Service + Technology chip */}
          {data?.technologies?.length > 0 && (
            <span className="rounded-full px-4 py-1 text-sm font-medium text-white bg-primary">
              {[...data.technologies].map((item) => item.label).join(", ")}
            </span>
          )}
        </div>

        <div className="relative  w-full rounded-4xl h-80">
          <KorcomptenzImage
            src={data?.featureImage}
            height={431}
            width={323}
            className="size-full object-cover rounded-4xl"
          />
        </div>
      </motion.div>

      <h2 title={data?.title || data?.heroSection?.title} className="mt-4 left-0 line-clamp-2 top-0 max-w-fit text-start lg:text-5xl text-3xl flex-1  font-semibold leading-7 lg:leading-10 text-black ">
        {data?.title || data?.heroSection?.title}
      </h2>
      <p title={data?.heroSection?.description} className="text-lg text-black font-normal mb-5 mt-5 line-clamp-3 ">
        {data?.heroSection?.description}
      </p>
      <ButtonLink
        link={getLink() || "#"}
        isTargetNew={!!data?.attachment?.url}
        buttonProps={{
          arrow: true,
          variant: "ghost",
          className:
            "text-primary hover:text-primary justify-start  hover:bg-transparent p-[-2px]",
        }}
      >
        {data?.content === "file" ? "Download" : data?.heroSection?.buttonText}
      </ButtonLink>
    </motion.article>
  );
}
