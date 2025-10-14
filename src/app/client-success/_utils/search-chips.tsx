import React from "react";
import { cn } from "@/lib/utils";
import { SearchIcon } from "../../../../public/svg/all-svg";
import { useCaseStudySearchHook } from "@/services";

export default function SearchChips({
  onChange,
  search,
}: {
  onChange: (filters: { [key: string]: string[] }) => void;
  search?: FilterListType[];
}) {
  const [chips, setChips] = React.useState<(FilterListType & { from?: string })[]>([]);
  const { data } = useCaseStudySearchHook({
    options: {
      initialData: search
    }
  });

  const handleToggle = React.useCallback(
    (chip: FilterListType & { from?: string }) => {
      setChips((prev) => {
        const isSelected = !prev?.some(
          (c) => c.id === chip.id && c.from === chip.from
        );
        const newChips = isSelected
          ? [...prev, chip]
          : prev.filter((c) => !(c.id === chip.id && c.from === chip.from));

        onChange(
          newChips.reduce((acc, value) => {
            const key = value.from || "";
            if (!acc[key]) acc[key] = [];
            acc[key].push(value.id);
            return acc;
          }, {} as { [key: string]: string[] })
        );

        return newChips;
      });
    },
    [onChange]
  );

  const nonSelectedChips = data?.filter((c) => !chips?.some((chip) => chip.id === c.id && chip.from === c.from));

  return (
    <div className="space-y-4">
      {/* Search bar */}
      <form role="search" className="w-full">
        <label htmlFor="search" className="sr-only">
          Search case studies
        </label>
        <div className="flex items-center gap-3 bg-card border border-input rounded-2xl px-4 md:px-6 py-3 md:py-4">
          {/* Active chips inside the search field (limit to 1 + summary) */}
          {chips?.[0] && (<div className="flex items-center gap-2">
            <button
              key={`${chips?.[0]?.id}-${chips?.[0]?.from}-item-search-list`}
              type="button"
              onClick={() => handleToggle(chips?.[0])}
              className="whitespace-nowrap inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm cursor-pointer"
              // aria-pressed={chips?.[0]?.selected}
              aria-label={`${chips?.[0]?.label} selected. Remove`}
            >
              {chips?.[0]?.label}
              <svg
                width="14"
                height="14"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M6 6l8 8M14 6l-8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {(chips?.length && chips?.length > 1) && (
              <span
                className="whitespace-nowrap inline-flex items-center rounded-full border border-input bg-primary text-primary-foreground px-3 py-1.5 text-sm cursor-pointer"
                aria-label={`${chips?.length - 1} more selected`}
              >
                +{chips?.length - 1} selected
              </span>
            )}
          </div>)}

          <input
            id="search"
            placeholder="Search"
            className="min-w-0 flex-1 bg-transparent outline-none text-base md:text-lg placeholder:text-foreground"
          />

          {/* Search icon button */}
          <button
            className="inline-flex items-center justify-center rounded-full text-foreground  size-10"
            aria-label="Search"
          >
            <SearchIcon />
          </button>
        </div>
      </form>

      {/* Suggested chips */}
      <div className="flex flex-wrap items-center gap-3">
        {nonSelectedChips?.map((c) => (
          <button
            key={`${c.id}-${c.from}-item-list`}
            type="button"
            onClick={() => handleToggle(c)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm cursor-pointer",
              "border border-input bg-primary text-primary-foreground "
            )}
            aria-pressed={chips?.some((chip) => chip.id === c.id && chip.from === c.from)}
          >
            {c.label}
            {/* Plus icon */}
            <svg
              width="14"
              height="14"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 4v12M4 10h12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
