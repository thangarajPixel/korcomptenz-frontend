"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { DangerousHtml } from "@/components/ui/dangerous-html";

const ExpandableHtml = ({
  html,
  className,
}: {
  html: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reset state when html changes
    setExpanded(false);
    setShowToggle(false);

    // Use multiple animation frames + setTimeout to ensure content is fully rendered
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (el) {
            // Add small tolerance (5px) for browser rendering differences
            const isOverflowing = el.scrollHeight > el.clientHeight + 5;
            setShowToggle(isOverflowing);
          }
        }, 0);
      });
    });
  }, [html]);

  return (
    <div>
      <div ref={ref} className={cn(!expanded && "line-clamp-6")}>
        <DangerousHtml
          html={html}
          className={cn(
            className,
            "[&>ul]:list-disc [&>ul]:",
            "[&>ol]:list-decimal [&>ol]:"
          )}
        />
      </div>
      {showToggle && (
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-2 text-primary font-medium hover:underline cursor-pointer bg-transparent border-none"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ExpandableHtml;
