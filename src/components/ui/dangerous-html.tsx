'use client'
import React from 'react'
import "./ui.css";
import { cn } from '@/lib/utils';
import * as DOMPurifyModule from 'dompurify';

const DOMPurify = DOMPurifyModule.default || DOMPurifyModule;

const DangerousHtml = ({ html, className }: { html: string, className?: string }) => {
  const clean = DOMPurify?.sanitize(html || "");
  return (
    <div className={cn("rich-text", className)} dangerouslySetInnerHTML={{ __html: clean }} />
  )
}

export default DangerousHtml