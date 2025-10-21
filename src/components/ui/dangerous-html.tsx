'use client'

import React from 'react'
import './ui.css'
import { cn } from '@/lib/utils'

export const DangerousHtml = React.memo(
  ({ html, className }: { html: string; className?: string }) => {
    const [cleanHtml, setCleanHtml] = React.useState("Loading...")

    React.useEffect(() => {
      let active = true
      const sanitize = async () => {
        const DOMPurify = (await import('dompurify')).default
        if (typeof window !== 'undefined' && active) {
          setCleanHtml(DOMPurify.sanitize(html || ''))
        }
      }
      sanitize()
      return () => {
        active = false
      }
    }, [html])

    return (
      <div
        className={cn('rich-text', className)}
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />
    )
  }
)
