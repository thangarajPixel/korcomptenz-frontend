import React from 'react'
import { cn } from "@/lib/utils";

const SplitDivider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex items-center gap-44 w-full">
      <div
        className={cn(
          'h-1 flex-1 bg-primary'
        )}
      />
      {children}
      <div
        className={cn(
          'h-1 flex-1 bg-primary'
        )}
      />
    </div>
  )
}

export default SplitDivider