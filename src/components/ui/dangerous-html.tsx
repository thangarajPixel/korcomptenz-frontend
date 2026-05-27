"use client";

import React from "react";
import { cn } from "@/lib/utils";

type DangerousHtmlProps = {
  html: string;
  className?: string;
  as?: "div" | "h1" | "h2"|"h3";
};

export const DangerousHtml = React.memo(
  ({ html, className, as: Tag = "div" }: DangerousHtmlProps) => {
    const [cleanHtml, setCleanHtml] = React.useState("");

    React.useEffect(() => {
      let active = true;

      const sanitize = async () => {
        const DOMPurify = (await import("dompurify")).default;

        if (typeof window !== "undefined" && active) {
          setCleanHtml(DOMPurify.sanitize(html || ""));
        }
      };

      sanitize();

      return () => {
        active = false;
      };
    }, [html]);

    return (
      <Tag
        className={cn("rich-text", className)}
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    );
  },
);
