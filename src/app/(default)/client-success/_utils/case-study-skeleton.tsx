import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // optional helper


export const CaseStudyCardSkeleton = () => {
  return (
    <motion.article
      className={cn(
        "group relative bg-card p-3 flex flex-col transition-colors rounded-2xl "
      )}
    >
      {/* Image Section */}
      <motion.div className="relative rounded-4xl overflow-hidden">
        <div className="absolute left-3 top-3 flex flex-wrap gap-2 z-10">
          <div className={cn("h-6 w-24 rounded-full animate-pulse bg-gray-300")} />
          <div className={cn("h-6 w-32 rounded-full animate-pulse bg-gray-300")} />
        </div>

        <div
          className={cn(
            "relative w-full h-[300px] rounded-4xl animate-pulse bg-gray-200"
          )}
        />
      </motion.div>

      {/* Title */}
      <div className="mt-4 space-y-2">
        <div className={cn("h-6 w-3/4 bg-gray-300 rounded animate-pulse")} />
        <div className={cn("h-6 w-1/2 bg-gray-300 rounded animate-pulse")} />
      </div>

      {/* Description */}
      <div className="mt-5 space-y-2">
        <div className={cn("h-4 bg-gray-200 rounded w-full animate-pulse")} />
        <div className={cn("h-4 bg-gray-200 rounded w-11/12 animate-pulse")} />
        <div className={cn("h-4 bg-gray-200 rounded w-10/12 animate-pulse")} />
      </div>

      {/* Button */}
      <div className={cn("mt-5 h-5 w-28 bg-gray-300 rounded animate-pulse")} />
    </motion.article>
  );
};
