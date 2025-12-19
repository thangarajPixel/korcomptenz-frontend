"use client";
import React from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

import { useFilterInsightHook } from "@/services";

import { InsightNavbar } from "./insight-navbar";

type FilterType = "service" | "technology";

type FilterBarProps = {
  filterLabel: FilterLabelType[];
  onFilterChange?: (filters: { [key: string]: string[] }) => void;
  popularFilter?: PopularFilterType;
  onSortChange?: (sort: string) => void;
  categoryAllLabel?: string;
  category?: {
    label: string;
    id: number;
    slug: string;
  }[];
};

const defaultFilter = {
  service: [],
  technology: [],
};

const FilterLabel = ({ label, count }: { label: string; count?: number }) => {
  return (
    <DropdownMenuTrigger asChild>
      <Button variant="filter" className="gap-2 bg-transparent h-12">
        {label}
        {typeof count === "number" && count > 0 && (
          <div className="ml-5">
            <span className="flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-primary rounded-full">
              {count}
            </span>
          </div>
        )}
        <ChevronDown className="w-4 h-4 opacity-50 ms-5" />
      </Button>
    </DropdownMenuTrigger>
  );
};

export function InsightsSuccessFilter({
  onFilterChange,
  filterLabel,
  popularFilter,
  onSortChange,
  category,

  categoryAllLabel,
}: FilterBarProps) {
  const { data } = useFilterInsightHook({});

  const [filter, setFilter] = React.useState<{
    service: string[];
    technology: string[];
  }>(defaultFilter);

  const handleFilterChange = React.useCallback(
    (type: FilterType, value: string, checked: boolean) => {
      setFilter((prev) => {
        const filtered = checked
          ? [...prev[type], value]
          : prev[type].filter((id) => id !== value);

        const filterData = {
          ...prev,
          [type]: filtered,
        };

        // 🔥 Convert keys before sending
        const mappedFilterData = {
          services: filterData.service,
          technologies: filterData.technology,
        };

        onFilterChange?.(mappedFilterData);

        return filterData;
      });
    },
    []
  );

  const handleResetFilter = () => {
    setFilter(defaultFilter);
    onFilterChange?.({
      service: [],
      technology: [],
    });
  };

  const hasActiveFilters =
    filter.technology.length > 0 || filter.service.length > 0;

  return (
    <section>
      <InsightNavbar
        category={category}
        categoryAllLabel={categoryAllLabel ?? ""}
      />
      <div className="flex items-center gap-3 lg:py-4  bg-background">
        <div className="flex items-center gap-3 flex-1 flex-wrap">
          {filterLabel.map((label) => (
            <DropdownMenu key={label?.filterKey}>
              <FilterLabel
                label={label.label}
                count={filter?.[label?.filterKey as FilterType]?.length ?? 0}
              />
              <DropdownMenuContent className="overflow-y-auto dropdown-items" align="start">
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-3">
                    {data?.filterData?.[label.filterKey as FilterType]?.map(
                      (item) => (
                        <label
                          key={item.id}
                          className="flex items-center gap-3 cursor-pointer hover:bg-accent/50 rounded-md transition-colors"
                        >
                          <Checkbox
                            checked={filter?.[
                              label.filterKey as FilterType
                            ]?.includes(item.id)}
                            onCheckedChange={(checked) =>
                              handleFilterChange(
                                label.filterKey as FilterType,
                                item.id,
                                checked as boolean
                              )
                            }
                          />

                          <span className="text-lg truncate">{item.label}</span>
                        </label>
                      )
                    )}
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          ))}

          {/* Clear Filter Button */}
          {hasActiveFilters && (
            <Button
              variant="ghost"
              onClick={handleResetFilter}
              className="text-muted-foreground hover:text-foreground"
            >
              {popularFilter?.resetButtonText || "reset"}
            </Button>
          )}
        </div>

        {/* Sort Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2 bg-transparent text-lg">
              {popularFilter?.label}
              <ChevronDown className="w-4 h-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {popularFilter?.popularFilterList.map((item) => (
              <button
                key={`sort-${item.id}`}
                className="w-full text-left px-3 py-2 cursor-pointer rounded-md text-sm hover:bg-accent transition-colors"
                onClick={() => onSortChange?.(item.sort)}
              >
                {item.label}
              </button>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
}
