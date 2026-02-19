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
  const expandedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    setExpanded(false);
    expandedRef.current = false;
    setShowToggle(false);

    const checkOverflow = () => {
      if (!el || expandedRef.current) return;

      // Temporarily remove clamp to measure true height
      el.classList.remove("line-clamp-4");
      const fullHeight = el.scrollHeight;
      el.classList.add("line-clamp-4");
      const clampedHeight = el.clientHeight;

      setShowToggle(fullHeight > clampedHeight + 5);
    };

    const observer = new ResizeObserver(() => {
      checkOverflow();
    });

    observer.observe(el);

    const onVisibilityChange = () => {
      if (!document.hidden) checkOverflow();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    requestAnimationFrame(checkOverflow);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [html]);

  const handleToggle = () => {
    setExpanded((v) => {
      expandedRef.current = !v;
      return !v;
    });
  };

  return (
    <div>
      <div ref={ref} className={cn(!expanded && "line-clamp-4")}>
        <DangerousHtml
          html={html}
          className={cn(className, "[&>ul]:list-disc", "[&>ol]:list-decimal")}
        />
      </div>
      {showToggle && (
        <button
          onClick={handleToggle}
          className="mt-2 inline-flex items-center
            bg-gradient-to-r from-[#1F849F] to-[#6AC494]
            bg-clip-text text-transparent
            border border-transparent
            transition-all duration-300 text-[17px] font-medium"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};

export default ExpandableHtml;
