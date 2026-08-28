"use client";

import React from "react";
import DOMPurify from "dompurify";
import { cn } from "@/lib/utils";
import { useIsomorphicLayoutEffect } from "@/utils/custom-hooks";

type DangerousHtmlProps = {
  html: string;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3";
};

export const DangerousHtml = React.memo(
  ({ html, className, as: Tag = "div" }: DangerousHtmlProps) => {
    const [cleanHtml, setCleanHtml] = React.useState("");

    // Sanitizing is client-only (DOMPurify needs a DOM, unavailable during
    // SSR), so the server and first client render still both output "".
    // useIsomorphicLayoutEffect runs synchronously before the browser paints
    // (instead of useEffect's post-paint timing), so the sanitized content
    // is already in place by the first visible frame — no separate "empty,
    // then pop in" frame for the Layout Instability API to score as a shift.
    useIsomorphicLayoutEffect(() => {
      if (typeof window === "undefined") return;
      setCleanHtml(DOMPurify.sanitize(html || ""));
    }, [html]);

    return (
      <Tag
        className={cn(
          "rich-text",
          "[&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mb-4",
          "[&_h4]:text-xl [&_h4]:font-semibold [&_h4]:mb-3",
          className,
        )}
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    );
  },
);
