import React from 'react'
import "./ui.css";
import { cn } from '@/lib/utils';

const DangerousHtml = ({ html, className }: { html: string, className?: string }) => {
  return (
    <div className={cn("rich-text", className)} dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default DangerousHtml