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
import Link from "next/link";
import { useFilterCaseStudyHook } from "@/services";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { cn } from "@/lib/utils";

type FilterType = "industries" | "businessOutcomes" | "region";

type FilterBarProps = {
  filterLabel: FilterLabelType[];
  onFilterChange?: (filters: {
    [key: string]: string[];
  }) => void;
  popularFilter?: PopularFilterType;
};

const defaultFilter = {
  industries: [],
  businessOutcomes: [],
  region: [],
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

export function ClientSuccessFilter({
  onFilterChange,
  filterLabel,
  popularFilter,
}: FilterBarProps) {
  const { data } = useFilterCaseStudyHook({});

  const [filter, setFilter] = React.useState<{
    industries: string[];
    businessOutcomes: string[];
    region: string[];
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
        onFilterChange?.(filterData);
        return filterData;
      });
    },
    [filter]
  );

  const handleResetFilter = () => {
    setFilter(defaultFilter);
    onFilterChange?.({
      industries: [],
      businessOutcomes: [],
      region: [],
    });
  };

  const hasActiveFilters =
    filter.industries.length > 0 ||
    filter.businessOutcomes.length > 0 ||
    filter.region.length > 0;

  return (
    <div className="flex items-center gap-3 lg:py-4  bg-background">
      <div className="flex items-center gap-3 flex-1 flex-wrap">
        {filterLabel.map((label) => (
          <DropdownMenu key={label?.filterKey}>
            <FilterLabel
              label={label.label}
              count={
                label.isMultiple
                  ? filter?.[label?.filterKey as FilterType]?.length ?? 0
                  : undefined
              }
            />
            <DropdownMenuContent className="overflow-y-auto" align="start">
              <div className="p-4">
                {!label.isMultiple ? (
                  // ✅ Custom grid layout for designed dropdowns (e.g., Technology)
                  <div className={label.isDesignedDropdown ? "grid grid-cols-4 gap-3" : "space-y-3"}>
                    {data?.[label.filterKey]?.map((tech) => (
                      <Link
                        key={`${label.filterKey}-${tech.id}`}
                        href={`/client-success/${tech.slug}`}
                        className={cn("flex items-center gap-3 cursor-pointer hover:bg-accent/50 rounded-md transition-colors", label.isDesignedDropdown && "text-lg leading-6.5")}
                      >
                        {label.isDesignedDropdown && <span className="text-2xl flex-shrink-0">
                          <KorcomptenzImage
                            src={tech.image}
                            width={26}
                            height={22}
                          />
                        </span>}
                        <span className="text-left truncate">{tech.label}</span>
                      </Link>
                    ))}
                  </div>
                ) : (
                  // ✅ Default checkbox list layout
                  <div className="space-y-3">
                    {data?.[label.filterKey]?.map((item) => (
                      <label
                        key={item.id}
                        className="flex items-center gap-3 cursor-pointer hover:bg-accent/50 rounded-md transition-colors"
                      >
                        {label.isMultiple && (
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
                        )}
                        <span className="text-lg">{item.label}</span>
                      </label>
                    ))}
                  </div>
                )}
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
            <div className="p-2 space-y-1">
              <button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors">
                {item.label}
              </button>
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
