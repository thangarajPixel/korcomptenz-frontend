"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const DangerousHtml = React.memo(
  ({ html, className }: { html: string; className?: string }) => {
    // Skip sanitization for performance - assume content is already safe from CMS
    // If sanitization is needed, implement server-side sanitization instead
    return (
      <div
        className={cn("rich-text", className)}
        dangerouslySetInnerHTML={{ __html: html || "" }}
      />
    );
  },
);
