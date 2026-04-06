"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import {
  Search,
  X,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useGlobalSearchHook } from "@/services/hook";
import { useDebounce } from "@/utils/custom-hooks";
import { SearchPagination } from "@/components/layout/_utils/search-pagination";
import { DangerousHtml } from "@/components/ui/dangerous-html";

// Category → URL prefix: explicit overrides + dynamic fallback (lowercase, spaces→hyphens)
function getItemHref(item: GlobalSearchItem): string {
  if (item.thirdpartyLink) return item.thirdpartyLink;
  if (!item.slug && item.buttonLink) return item.buttonLink;
  if (item.type === "demo" && item.buttonLink) return item.buttonLink;
  if (item.type === "event" && item.buttonLink) return item.buttonLink;

  const slug = item.slug;
  if (item.type === "page" || item.type === "single-page") {
    const clean = slug.startsWith("/") ? slug : `/${slug}`;
    return clean.replace(/^\/pages\//, "/");
  }

  const overrides: Record<string, string> = {
    "Case Studies": "/case-studies/",
    Blog: "/blog/",
    "Web Stories": "/webstories/",
    Webstories: "/webstories/",
  };

  if (overrides[item.category]) return `${overrides[item.category]}${slug}`;

  const prefix =
    "/" +
    item.category
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "") +
    "/";

  return `${prefix}${slug}`;
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return "";
  // Handle formats like "2026-03-25 12PM to 12.30PM" — extract date part only
  const datePart = dateStr.split(" ")[0];
  const d = new Date(datePart);
  if (isNaN(d.getTime())) return "";
  const day = String(d.getDate()).padStart(2, "0");
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

const DOWNLOAD_CATEGORIES = new Set([
  "Whitepaper",
  "Infographic",
  "Brochure",
  "eBook",
]);

function getButtonLabel(category: string): string {
  return DOWNLOAD_CATEGORIES.has(category) ? "Download Now" : "View Details";
}

const SORT_OPTIONS: { label: string; value: "newest" | "oldest" }[] = [
  { label: "Most Recent", value: "newest" },
  { label: "Oldest First", value: "oldest" },
];

export default function SearchPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState<"newest" | "oldest">("newest");
  const [sortOpen, setSortOpen] = useState(false);
  const [frozenTabs, setFrozenTabs] = useState<GlobalSearchTab[]>([]);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  // Restore search state from sessionStorage on back navigation
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("search_state");
      if (saved) {
        const s = JSON.parse(saved) as {
          query: string;
          tab: string;
          page: number;
        };
        setQuery(s.query ?? "");
        setActiveTab(s.tab ?? "All");
        setPage(s.page ?? 1);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const debouncedQuery = useDebounce(query, 400);
  const apiCategory = activeTab === "All" ? undefined : activeTab;

  const { data, isFetching } = useGlobalSearchHook({
    query: debouncedQuery,
    page,
    pageSize,
    category: apiCategory,
    sort,
  });

  useEffect(() => {
    if (activeTab === "All" && data?.meta?.tabs && data.meta.tabs.length > 0) {
      setFrozenTabs(data.meta.tabs);
    }
  }, [data?.meta?.tabs, activeTab]);

  useEffect(() => {
    setFrozenTabs([]);
  }, [debouncedQuery]);

  // Check scroll position for both arrows
  useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    const check = () => {
      setCanScrollLeft(el.scrollLeft > 2);
      setCanScrollRight(el.scrollWidth > el.clientWidth + el.scrollLeft + 2);
    };
    check();
    el.addEventListener("scroll", check);
    window.addEventListener("resize", check);
    return () => {
      el.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [frozenTabs, data?.meta?.tabs]);

  const scrollTabs = (dir: "left" | "right") => {
    tabsRef.current?.scrollBy({
      left: dir === "right" ? 200 : -200,
      behavior: "smooth",
    });
  };

  const handleTabChange = useCallback((label: string) => {
    setActiveTab(label);
    setPage(1);
  }, []);

  const handleQueryChange = useCallback((val: string) => {
    setQuery(val);
    setPage(1);
    setActiveTab("All");
  }, []);

  // Save state to sessionStorage for back-button restore
  useEffect(() => {
    if (query) {
      sessionStorage.setItem(
        "search_state",
        JSON.stringify({ query, tab: activeTab, page }),
      );
    }
  }, [query, activeTab, page]);

  const handlePageSizeChange = useCallback((size: number) => {
    setPageSize(size);
    setPage(1);
  }, []);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!sortOpen) return;
    const handler = () => setSortOpen(false);
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [sortOpen]);

  const items = data?.data ?? [];
  const tabs = frozenTabs.length > 0 ? frozenTabs : (data?.meta?.tabs ?? []);
  const pagination = data?.meta?.pagination;
  const total = data?.meta?.total ?? 0;
  const showResults = debouncedQuery.length > 1;
  const currentSort = SORT_OPTIONS.find((o) => o.value === sort)!;

  return (
    <div className="min-h-screen">
      <div className="container-md py-8 md:py-10">
        {/* Search bar + sort */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex flex-1 items-center border border-[#d1d5db] rounded-lg px-4 py-3 bg-white gap-3">
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Search..."
              className="flex-1 outline-none text-[15px] text-foreground placeholder:text-[#9ca3af] bg-transparent"
            />
            {query ? (
              <button
                onClick={() => handleQueryChange("")}
                className="text-[#9ca3af] hover:text-foreground transition-colors shrink-0"
              >
                <X className="h-[18px] w-[18px]" />
              </button>
            ) : (
              <Search className="h-[18px] w-[18px] text-[#9ca3af] shrink-0" />
            )}
          </div>

          <div
            className="relative hidden md:block shrink-0"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSortOpen((o) => !o)}
              className="flex items-center justify-between gap-3 border border-[#d1d5db] rounded-lg px-4 py-3 bg-white text-[14px] text-foreground min-w-[160px] hover:border-primary/60 transition-colors"
            >
              {currentSort.label}
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-[#9ca3af] transition-transform shrink-0",
                  sortOpen && "rotate-180",
                )}
              />
            </button>
            {sortOpen && (
              <div className="absolute top-full mt-1 right-0 w-full bg-white border border-[#d1d5db] rounded-lg shadow-lg z-10 overflow-hidden">
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    onMouseDown={(e) => {
                      e.preventDefault(); // prevent blur before click
                      setSort(opt.value);
                      setPage(1);
                      setSortOpen(false);
                    }}
                    className={cn(
                      "w-full text-left px-4 py-2.5 text-[14px] transition-colors hover:bg-primary/5 cursor-pointer",
                      sort === opt.value
                        ? "text-primary font-semibold"
                        : "text-foreground",
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Tabs — horizontal scroll with arrows */}
        {showResults && tabs.length > 0 && (
          <div className="flex items-center gap-2 mb-6">
            {canScrollLeft && (
              <button
                onClick={() => scrollTabs("left")}
                className="shrink-0 w-9 h-9 rounded-full bg-primary text-white flex cursor-pointer items-center justify-center hover:bg-primary/90 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
            )}
            <div
              ref={tabsRef}
              className="flex items-center gap-4 overflow-x-auto flex-nowrap"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => handleTabChange(tab.label)}
                  className={cn(
                    "flex items-center gap-1.5 px-8 py-3 rounded-full border text-[17px] font-normal transition-all whitespace-nowrap shrink-0 cursor-pointer",
                    activeTab === tab.label
                      ? "bg-primary text-white border-primary"
                      : "border-primary text-primary bg-white hover:bg-primary/5",
                  )}
                >
                  {tab.label} ({tab.count})
                  {activeTab === tab.label && <X className="h-3 w-3" />}
                </button>
              ))}
            </div>
            {canScrollRight && (
              <button
                onClick={() => scrollTabs("right")}
                className="shrink-0 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        )}

        {/* Loading */}
        {isFetching && (
          <div className="py-20 text-center text-[14px] text-[#6b7280]">
            Searching...
          </div>
        )}

        {/* No results */}
        {!isFetching && showResults && items.length === 0 && (
          <div className="py-20 text-center text-[14px] text-[#6b7280]">
            No results found for &quot;{debouncedQuery}&quot;
          </div>
        )}

        {/* Placeholder */}
        {!showResults && !isFetching && (
          <div className="py-20 text-center text-[14px] text-[#6b7280]">
            Start typing to search...
          </div>
        )}

        {/* Results */}
        {!isFetching && items.length > 0 && (
          <>
            <div className="flex flex-col gap-3 bg-[#F3F7F4] p-0 md:p-10 rounded-2xl ">
              {items.map((item) => {
                const hasImage = !!item.image?.url;
                const isPage =
                  item.type === "page" || item.type === "single-page";
                const btnLabel = getButtonLabel(item.category);

                // Pages with no description — banner style card
                if (isPage && !item.description) {
                  return (
                    <Link
                      key={item.id}
                      href={getItemHref(item)}
                      target={item.isTarget ? "_blank" : undefined}
                      rel={item.isTarget ? "noopener noreferrer" : undefined}
                      className="flex items-center rounded-2xl overflow-hidden bg-white border border-[#e5e7eb] hover:shadow-md transition-shadow group px-6 py-5 gap-4"
                    >
                      {/* Green left accent bar */}
                      <div className="w-1 self-stretch rounded-full bg-primary shrink-0" />
                      <h3 className="flex-1 text-[22px] md:text-[28px] font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {item.bannerTitle || item.title}
                      </h3>
                      <span className="inline-flex items-center gap-1.5 text-[17px] font-normal text-white bg-primary px-5 py-3 rounded-full whitespace-nowrap shrink-0 group-hover:bg-primary/90 transition-colors">
                        {btnLabel}
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </Link>
                  );
                }

                return (
                  <Link
                    key={item.id}
                    href={getItemHref(item)}
                    target={item.isTarget ? "_blank" : undefined}
                    rel={item.isTarget ? "noopener noreferrer" : undefined}
                    className="flex items-stretch rounded-2xl overflow-hidden bg-white border border-[#e5e7eb] hover:shadow-md transition-shadow group"
                  >
                    {/* Text content */}
                    <div className="grid md:flex-1 min-w-0 px-3 md:px-6 py-5 md:flex md:flex-col justify-between gap-4">
                      <div>
                        <h3 className="text-[22px] md:text-[28px] leading-8.5 font-semibold line-clamp-2 transition-colors text-foreground hover:text-primary">
                          {item.bannerTitle || item.title}
                        </h3>
                        {item.description && (
                          <DangerousHtml
                            html={item.description}
                            className="text-md md:text-lg leading-7.5 text-foreground mt-2 line-clamp-3 font-medium"
                          />
                        )}
                      </div>

                      {/* Badges + CTA */}
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-3">
                        <div className="flex items-center justify-center md:justify-start gap-2 shrink-0">
                          <span className="text-[17px] px-5 py-2 rounded-2xl bg-[#26A17C59] text-black font-medium whitespace-nowrap">
                            {item.category}
                          </span>
                          {item.date &&
                            item.type !== "page" &&
                            item.type !== "single-page" && (
                              <span className="text-[17px] text-foreground px-4 py-2 rounded-2xl bg-[#F1F1F1] font-medium whitespace-nowrap">
                                {formatDate(item.date)}
                              </span>
                            )}
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-[17px] font-normal text-white bg-primary px-5 py-3 rounded-full whitespace-nowrap shrink-0 group-hover:bg-primary/90 transition-colors self-start md:self-auto mx-auto md:mx-0">
                          {btnLabel}
                          <ChevronRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>

                    {/* Image — shown for all types that have one */}
                    {hasImage && (
                      <div className="relative w-[180px] shrink-0 self-stretch hidden md:block">
                        <Image
                          src={item.image!.url}
                          alt={item.image!.alt ?? item.title}
                          fill
                          className="object-cover"
                          sizes="180px"
                        />
                      </div>
                    )}
                  </Link>
                );
              })}
            </div>

            {pagination && (
              <SearchPagination
                page={pagination.page}
                pageCount={pagination.pageCount}
                total={total}
                pageSize={pageSize}
                onPageChange={(p) => { setPage(p); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                onPageSizeChange={(s) => { handlePageSizeChange(s); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
