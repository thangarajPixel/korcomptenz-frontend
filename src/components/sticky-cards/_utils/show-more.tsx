"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { DangerousHtml } from "@/components/ui/dangerous-html";

const ReadMoreHtml = ({ html }: { html: string }) => {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    // Use ResizeObserver to avoid forced reflows
    const resizeObserver = new ResizeObserver(() => {
      // Batch DOM reads
      requestAnimationFrame(() => {
        setShowToggle(el.scrollHeight > el.clientHeight);
      });
    });

    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [html]);

  return (
    <div>
      <div
        ref={contentRef}
        className={cn(
          "text-custom-black-1 text-lg md:text-xl leading-relaxed",
          !expanded && "line-clamp-6",
        )}
      >
        <DangerousHtml html={html} />
      </div>

      {showToggle && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-primary font-medium hover:underline"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default ReadMoreHtml;
