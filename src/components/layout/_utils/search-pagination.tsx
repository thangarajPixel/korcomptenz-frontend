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
  page,
  pageCount,
  total,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: SearchPaginationProps) {
  if (pageCount <= 1 && total <= pageSize) return null;

  // Build page list: 1 2 3 ... 10
  const getPages = (): (number | "...")[] => {
    if (pageCount <= 7) {
      return Array.from({ length: pageCount }, (_, i) => i + 1);
    }
    const pages: (number | "...")[] = [1];
    if (page > 3) pages.push("...");
    const start = Math.max(2, page - 1);
    const end = Math.min(pageCount - 1, page + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (page < pageCount - 2) pages.push("...");
    pages.push(pageCount);
    return pages;
  };

  const btnBase =
    "flex items-center justify-center w-8 h-8 rounded border text-xs font-medium transition-colors";
  const btnActive = "bg-primary text-white border-primary";
  const btnInactive =
    "border-border text-muted-foreground bg-white hover:border-primary hover:text-primary";
  const btnDisabled = "opacity-40 cursor-not-allowed pointer-events-none";

  return (
    <div className="flex items-center justify-between mt-6 pt-4 border-t border-border flex-wrap gap-3">
      {/* Left: pagination controls */}
      <div className="flex items-center gap-1">
        {/* First */}
        <button
          onClick={() => onPageChange(1)}
          disabled={page === 1}
          className={cn(btnBase, btnInactive, page === 1 && btnDisabled)}
          aria-label="First page"
        >
          <ChevronsLeft className="h-3.5 w-3.5" />
        </button>

        {/* Prev */}
        <button
          onClick={() => onPageChange(page - 1)}
          disabled={page === 1}
          className={cn(btnBase, btnInactive, page === 1 && btnDisabled)}
          aria-label="Previous page"
        >
          <ChevronLeft className="h-3.5 w-3.5" />
        </button>

        {/* Page numbers */}
        {getPages().map((p, i) =>
          p === "..." ? (
            <span
              key={`ellipsis-${i}`}
              className="w-8 h-8 flex items-center justify-center text-xs text-muted-foreground"
            >
              ...
            </span>
          ) : (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={cn(btnBase, p === page ? btnActive : btnInactive)}
            >
              {p}
            </button>
          ),
        )}

        {/* Next */}
        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === pageCount}
          className={cn(btnBase, btnInactive, page === pageCount && btnDisabled)}
          aria-label="Next page"
        >
          <ChevronRight className="h-3.5 w-3.5" />
        </button>

        {/* Last */}
        <button
          onClick={() => onPageChange(pageCount)}
          disabled={page === pageCount}
          className={cn(btnBase, btnInactive, page === pageCount && btnDisabled)}
          aria-label="Last page"
        >
          <ChevronsRight className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Right: showing X of Y + page size */}
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span>Showing</span>
        {onPageSizeChange ? (
          <div className="relative">
            <select
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
              className="appearance-none border border-border rounded px-2 py-1 pr-6 text-xs bg-white text-foreground cursor-pointer focus:outline-none focus:border-primary"
            >
              {PAGE_SIZE_OPTIONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
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
