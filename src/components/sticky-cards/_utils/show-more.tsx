"use";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { DangerousHtml } from "@/components/ui/dangerous-html";

const ReadMoreHtml = ({ html }: { html: string }) => {
  const [expanded, setExpanded] = useState(false);
  const [showToggle, setShowToggle] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      const el = contentRef.current;
      // Detect overflow (real rendered height)
      setShowToggle(el.scrollHeight > el.clientHeight);
    }
  }, [html]);

  return (
    <div>
      <div
        ref={contentRef}
        className={cn(
          "text-custom-black-1 text-lg md:text-xl leading-relaxed",
          !expanded && "line-clamp-6"
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
