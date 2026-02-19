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

  // useEffect(() => {
  //   const el = ref.current;
  //   if (!el) return;

  //   setExpanded(false);

  //   const checkOverflow = () => {
  //     if (!el) return;
  //     const isOverflowing = el.scrollHeight > el.clientHeight + 2;
  //     setShowToggle(isOverflowing);
  //   };

  //   // Initial check
  //   checkOverflow();

  //   // Observe size changes
  //   const resizeObserver = new ResizeObserver(() => {
  //     checkOverflow();
  //   });

  //   resizeObserver.observe(el);

  //   // Re-check when tab becomes active again
  //   const onVisibilityChange = () => {
  //     if (!document.hidden) {
  //       requestAnimationFrame(checkOverflow);
  //     }
  //   };

  //   document.addEventListener("visibilitychange", onVisibilityChange);

  //   return () => {
  //     resizeObserver.disconnect();
  //     document.removeEventListener("visibilitychange", onVisibilityChange);
  //   };
  // }, [html]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setExpanded(false);
    setShowToggle(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          if (el) {
            const isOverflowing = el.scrollHeight > el.clientHeight + 5;
            setShowToggle(isOverflowing);
          }
        }, 0);
      });
    });
  }, [html]);
  return (
    <div>
      <div ref={ref} className={cn(!expanded && "line-clamp-4")}>
        <DangerousHtml
          html={html}
          className={cn(
            className,
            "[&>ul]:list-disc [&>ul]:",
            "[&>ol]:list-decimal [&>ol]:",
          )}
        />
      </div>
      {showToggle && (
        <button
          onClick={() => setExpanded((v) => !v)}
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
