"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

type Chip = {
  id: string
  label: string
  selected?: boolean
}

const initialChips: Chip[] = [
  { id: "d365", label: "Dynamics 365", selected: true },
  { id: "bc", label: "Business Central" },
  { id: "finops", label: "Finance & Operation" },
  { id: "supply", label: "Supply Chain" },
]

export default function SearchChips() {
  const [chips, setChips] = useState<Chip[]>(initialChips)

  const toggle = (id: string) => {
    setChips((prev) => prev.map((c) => (c.id === id ? { ...c, selected: !c.selected } : c)))
  }

  const selected = chips.filter((c) => c.selected)
  const visibleSelected = selected.slice(0, 1)
  const extraCount = Math.max(selected.length - visibleSelected.length, 0)

  return (
    <div className="space-y-4">
      {/* Search bar */}
      <form role="search" className="w-full">
        <label htmlFor="search" className="sr-only">
          Search case studies
        </label>
        <div className="flex items-center gap-3 bg-card border border-input rounded-full px-4 md:px-6 py-3 md:py-4">
          {/* Active chips inside the search field (limit to 1 + summary) */}
          <div className="flex items-center gap-2">
            {visibleSelected.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => toggle(c.id)}
                className="whitespace-nowrap inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm"
                aria-pressed={c.selected}
                aria-label={`${c.label} selected. Remove`}
              >
                {c.label}
                {/* X icon */}
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            ))}
            {extraCount > 0 && (
              <span
                className="whitespace-nowrap inline-flex items-center rounded-full border border-input bg-primary text-primary-foreground px-3 py-1.5 text-sm"
                aria-label={`${extraCount} more selected`}
              >
                +{extraCount} selected
              </span>
            )}
          </div>

          <input
            id="search"
            name="q"
            placeholder="Search case studies"
            className="min-w-0 flex-1 bg-transparent outline-none text-base md:text-lg placeholder:text-muted-foreground/70"
          />

          {/* Search icon button */}
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground hover:text-primary-foreground border border-input size-10"
            aria-label="Search"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </form>

      {/* Suggested chips */}
      <div className="flex flex-wrap items-center gap-3">
        {chips
          .filter((c) => !c.selected)
          .map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => toggle(c.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm",
                "border border-input bg-primary text-primary-foreground ",
              )}
              aria-pressed={c.selected}
            >
              {c.label}
              {/* Plus icon */}
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          ))}
      </div>
    </div>
  )
}
