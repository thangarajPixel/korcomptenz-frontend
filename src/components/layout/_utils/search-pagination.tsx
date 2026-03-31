"use client";

import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchPaginationProps {
  page: number;
  pageCount: number;
  total: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
}

const PAGE_SIZE_OPTIONS = [10, 20, 50];

export function SearchPagination({
  page, pageCount, total, pageSize, onPageChange, onPageSizeChange,
}: SearchPaginationProps) {
  if (pageCount <= 1 && total <= pageSize) return null;

  const getPages = (): (number | "...")[] => {
    if (pageCount <= 7) return Array.from({ length: pageCount }, (_, i) => i + 1);
    const pages: (number | "...")[] = [1];
    if (page > 3) pages.push("...");
    for (let i = Math.max(2, page - 1); i <= Math.min(pageCount - 1, page + 1); i++) pages.push(i);
    if (page < pageCount - 2) pages.push("...");
    pages.push(pageCount);
    return pages;
  };

  const btn = "flex items-center justify-center w-8 h-8 rounded border text-xs font-medium transition-colors";
  const active = "bg-primary text-white border-primary";
  const inactive = "border-border text-muted-foreground bg-white hover:border-primary hover:text-primary";
  const disabled = "opacity-40 cursor-not-allowed pointer-events-none";

  return (
    <div className="flex flex-col items-center gap-3 mt-6 pt-4 border-t border-border md:flex-row md:justify-between">
      {/* Page controls */}
      <div className="flex items-center gap-1">
        <button onClick={() => onPageChange(1)} disabled={page === 1}
          className={cn(btn, inactive, page === 1 && disabled)} aria-label="First page">
          <ChevronsLeft className="h-3.5 w-3.5" />
        </button>
        <button onClick={() => onPageChange(page - 1)} disabled={page === 1}
          className={cn(btn, inactive, page === 1 && disabled)} aria-label="Previous page">
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>

        {/* Desktop: full page list — Mobile: only current page */}
        <div className="hidden md:flex items-center gap-1">
          {getPages().map((p, i) =>
            p === "..." ? (
              <span key={`e-${i}`} className="w-8 h-8 flex items-center justify-center text-xs text-muted-foreground">...</span>
            ) : (
              <button key={p} onClick={() => onPageChange(p)} className={cn(btn, p === page ? active : inactive)}>{p}</button>
            )
          )}
        </div>
        {/* Mobile: current / total */}
        <span className="md:hidden px-3 py-1 text-xs text-muted-foreground">
          {page} / {pageCount}
        </span>

        <button onClick={() => onPageChange(page + 1)} disabled={page === pageCount}
          className={cn(btn, inactive, page === pageCount && disabled)} aria-label="Next page">
          <ChevronRight className="h-3.5 w-3.5" />
        </button>
        <button onClick={() => onPageChange(pageCount)} disabled={page === pageCount}
          className={cn(btn, inactive, page === pageCount && disabled)} aria-label="Last page">
          <ChevronsRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Showing X of Y */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span>Showing</span>
        {onPageSizeChange ? (
          <div className="relative">
            <select value={pageSize} onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="appearance-none border border-border rounded px-2 py-1 pr-6 text-xs bg-white text-foreground cursor-pointer focus:outline-none focus:border-primary">
              {PAGE_SIZE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <ChevronDown className="absolute right-1.5 top-1/2 -translate-y-1/2 h-3 w-3 pointer-events-none text-muted-foreground" />
          </div>
        ) : (
          <span className="font-medium text-foreground">{pageSize}</span>
        )}
        <span>of {total} Entries</span>
      </div>
    </div>
  );
}
