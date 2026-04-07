"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { Search, X, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useGlobalSearchHook } from "@/services/hook";
import { useDebounce } from "@/utils/custom-hooks";
import { SearchPagination } from "./search-pagination";

function getItemHref(item: GlobalSearchItem): string {
  if (item.type === "page") return item.slug;
  if (item.type === "case-study") return `/case-studies/${item.slug}`;
  if (item.category === "Blog") return `/blog/${item.slug}`;
  return `/${item.slug}`;
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

function getButtonLabel(category: string): string {
  return category === "Whitepaper" ? "Download Now" : "View Details";
}

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
  navbarHeight?: number;
}

export function SearchModal({ open, onClose, navbarHeight = 100 }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [page, setPage] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const debouncedQuery = useDebounce(query, 400);

  // category sent to API — "All" means no category filter
  const apiCategory = activeTab === "All" ? undefined : activeTab;

  const { data, isFetching } = useGlobalSearchHook({
    query: debouncedQuery,
    page,
    pageSize: 10,
    category: apiCategory,
  });

  // Reset page when query or tab changes
  useEffect(() => { setPage(1); }, [debouncedQuery, activeTab]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 80);
      setQuery("");
      setActiveTab("All");
      setPage(1);
    }
  }, [open]);

  useEffect(() => {
    const handler = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleTabChange = useCallback((label: string) => {
    setActiveTab(label);
  }, []);

  const items = data?.data ?? [];
  const tabs = data?.meta?.tabs ?? [];
  const pagination = data?.meta?.pagination;
  const total = data?.meta?.total ?? 0;
  const showResults = debouncedQuery.length > 1;

  return (
    <>
      {/* Backdrop below navbar */}
      <div
        style={{
          top: navbarHeight,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.2s ease",
        }}
        className="fixed inset-x-0 bottom-0 z-40 bg-black/30"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        style={{
          top: navbarHeight,
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-10px)",
          pointerEvents: open ? "auto" : "none",
          visibility: open ? "visible" : "hidden",
          transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
        }}
        className="fixed inset-x-0 z-50 bg-[#f5f5f5] shadow-xl"
      >
        <div
          className="overflow-y-auto"
          style={{ maxHeight: `calc(100vh - ${navbarHeight}px)` }}
        >
          <div className="container-nav py-5">

            {/* Search bar row */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex flex-1 items-center gap-2 border border-border rounded-md px-4 py-2.5 bg-white">
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="flex-1 outline-none text-sm text-foreground placeholder:text-muted-foreground bg-transparent"
                />
                <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              </div>
              {/* Most Recent */}
              <div className="hidden md:flex items-center justify-between gap-2 border border-border rounded-md px-4 py-2.5 bg-white text-sm text-muted-foreground min-w-[150px] cursor-default select-none">
                Most Recent
                <ChevronRight className="h-4 w-4 rotate-90 shrink-0" />
              </div>
              <button
                onClick={onClose}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Tabs */}
            {showResults && tabs.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap mb-5">
                {tabs.map((tab) => (
                  <button
                    key={tab.label}
                    onClick={() => handleTabChange(tab.label)}
                    className={cn(
                      "flex items-center gap-1 px-4 py-1.5 rounded-full border text-sm font-medium transition-all whitespace-nowrap",
                      activeTab === tab.label
                        ? "bg-primary text-white border-primary"
                        : "border-primary text-primary bg-white hover:bg-primary/5",
                    )}
                  >
                    {tab.label} ({tab.count})
                    {activeTab === tab.label && <X className="h-3 w-3 ml-1" />}
                  </button>
                ))}
              </div>
            )}

            {/* Loading */}
            {isFetching && (
              <div className="py-10 text-center text-sm text-muted-foreground">
                Searching...
              </div>
            )}

            {/* No results */}
            {!isFetching && showResults && items.length === 0 && (
              <div className="py-10 text-center text-sm text-muted-foreground">
                No results found for &quot;{debouncedQuery}&quot;
              </div>
            )}

            {/* Results list */}
            {!isFetching && items.length > 0 && (
              <>
                <div className="space-y-3">
                  {items.map((item) => {
                    const hasImage = !!item.image?.url;
                    const isBlog = item.category === "Blog";
                    const btnLabel = getButtonLabel(item.category);

                    return (
                      <Link
                        key={item.id}
                        href={getItemHref(item)}
                        onClick={onClose}
                        className="flex items-stretch rounded-xl overflow-hidden bg-white border border-border/60 shadow-sm hover:shadow-md transition-shadow group"
                      >
                        {/* Text */}
                        <div className="flex-1 min-w-0 p-5 flex flex-col justify-between gap-3">
                          <div>
                            <h3 className={cn(
                              "text-sm font-bold line-clamp-2 transition-colors",
                              isBlog
                                ? "text-primary"
                                : "text-foreground group-hover:text-primary",
                            )}>
                              {item.title}
                            </h3>
                            {item.description && (
                              <p className="text-xs text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
                                {item.description}
                              </p>
                            )}
                          </div>

                          {/* Badges + button */}
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <div className="flex items-center gap-2">
                              <span className="text-xs px-3 py-1 rounded-full bg-primary/15 text-primary font-semibold">
                                {item.category}
                              </span>
                              {item.date && (
                                <span className="text-xs px-3 py-1 rounded-full border border-border text-muted-foreground bg-white">
                                  {formatDate(item.date)}
                                </span>
                              )}
                            </div>
                            <span className="flex items-center gap-1 text-xs font-semibold text-white bg-primary px-4 py-2 rounded-full whitespace-nowrap shrink-0">
                              {btnLabel}
                              <ChevronRight className="h-3.5 w-3.5" />
                            </span>
                          </div>
                        </div>

                        {/* Image */}
                        {hasImage && (
                          <div className="relative w-44 shrink-0 self-stretch">
                            <Image
                              src={item.image!.url}
                              alt={item.image!.alt ?? item.title}
                              fill
                              className="object-cover"
                              sizes="176px"
                            />
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* Pagination */}
                {pagination && (
                  <SearchPagination
                    page={pagination.page}
                    pageCount={pagination.pageCount}
                    total={total}
                    pageSize={pagination.pageSize}
                    onPageChange={setPage}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
