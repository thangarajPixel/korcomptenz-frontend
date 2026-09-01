import React from "react";
import DOMPurify from "isomorphic-dompurify";
import { cn } from "@/lib/utils";

type DangerousHtmlProps = {
  html: string;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3";
};

// No "use client": sanitizing here runs during the server render itself
// (isomorphic-dompurify uses a jsdom-backed DOMPurify on the server, the
// same dompurify already used elsewhere in this project in the browser),
// so the sanitized markup is part of the HTML Next.js emits — crawlers
// that don't execute JavaScript see the real content, not an empty
// container waiting for a client effect to fill it in.
export const DangerousHtml = React.memo(
  ({ html, className, as: Tag = "div" }: DangerousHtmlProps) => {
    const cleanHtml = DOMPurify.sanitize(html || "");

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
