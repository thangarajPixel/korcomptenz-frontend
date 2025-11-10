import React from "react";
import { cn } from "@/lib/utils";

const SplitDivider = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={cn("flex items-center lg:gap-44 gap-10 text-center w-full", className)}>
      <div className={cn("h-1 flex-1 bg-primary")} />
      {children}
      <div className={cn("h-1 flex-1 bg-primary")} />
    </div>
  );
};

export default SplitDivider;
