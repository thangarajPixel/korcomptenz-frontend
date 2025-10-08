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

const filterData = {
  filterLabels: {
    industry: "Industry",
    service: "Service",
    technology: "Technology",
    businessOutcome: "Business Outcome",
    region: "Region",
    clearFilter: "Clear Filter",
    popular: "Popular",
    filterByIndustry: "Filter by Industry",
    filterByService: "Filter by Service",
    filterByTechnology: "Filter by Technology",
    filterByBusinessOutcome: "Filter by Business Outcome",
    filterByRegion: "Filter by Region",
  },
  technologies: [
    {
      id: "Sales",
      name: "Sales",
      icon: "🤖",
      url: "#",
    },
    {
      id: "azure-databricks",
      name: "Azure Databricks",
      icon: "🧱",
      url: "#",
    },
    {
      id: "Sales Insights",
      name: "Sales Insights",
      icon: "📊",
      url: "#",
    },
    {
      id: "Customer  Insights",
      name: "Customer  Insights",
      icon: "🎨",
      url: "#",
    },
    {
      id: "Customer Service",
      name: "Customer Service",
      icon: "📈",
      url: "#",
    },
    {
      id: "Contact Center",
      name: "Contact Center",
      icon: "📄",
      url: "#",
    },
    {
      id: "Field Service",
      name: "Field Service",
      icon: "🤖",
      url: "#",
    },
    {
      id: "Supply Chain Management",
      name: "Supply Chain Management",
      icon: "📱",
      url: "#",
    },
    {
      id: "Commerce",
      name: "Commerce",
      icon: "⚡",
      url: "#",
    },
    {
      id: "Finance",
      name: "Finance",
      icon: "☁️",
      url: "#",
    },
    {
      id: "Project Operations",
      name: "Project Operations",
      icon: "🔒",
      url: "#",
    },
    {
      id: "Human Resources",
      name: "Human Resources",
      icon: "🏗️",
      url: "#",
    },
    {
      id: "Business Central",
      name: "Business Central",
      icon: "📊",
      url: "#",
    },
    {
      id: "Azure AI Foundry",
      name: "Azure AI Foundry",
      icon: "🔄",
      url: "#",
    },
    {
      id: "Azure Databricks",
      name: "Azure Databricks",
      icon: "💎",
      url: "#",
    },
    {
      id: "Azure Synapse Analytics",
      name: "Azure Synapse Analytics",
      icon: "☁️",
      url: "#",
    },
    {
      id: "Microsoft Fabric",
      name: "Microsoft Fabric",
      icon: "⚡",
      url: "#",
    },
    {
      id: "Microsoft Power BI",
      name: "Microsoft Power BI",
      icon: "🧠",
      url: "#",
    },
    {
      id: "Microsoft Power Pages",
      name: "Microsoft Power Pages",
      icon: "💾",
      url: "#",
    },
    {
      id: "Microsoft Copilot Studio",
      name: "Microsoft Copilot Studio",
      icon: "🤝",
      url: "#",
    },
    {
      id: "Microsoft Power Apps",
      name: "Microsoft Power Apps",
      icon: "❤️",
      url: "#",
    },
    {
      id: "Microsoft Power Automate",
      name: "Microsoft Power Automate",
      icon: "🔍",
      url: "#",
    },
    {
      id: "Business Suite on Private Cloud",
      name: "Business Suite on Private Cloud",
      icon: "🎯",
      url: "#",
    },
    { id: "aem", name: "AEM", icon: "🅰️", url: "/technologies/aem" },
    {
      id: "BTP Platform",
      name: "BTP Platform",
      icon: "📝",
      url: "#",
    },
    {
      id: "SAP IBP",
      name: "SAP IBP",
      icon: "🛍️",
      url: "#",
    },
    {
      id: "SAP Merger and Divesture ",
      name: "SAP Merger and Divesture ",
      icon: "💧",
      url: "#",
    },
    {
      id: "SAP Merger and Divesture ",
      name: "SAP Merger and Divesture ",
      icon: "💧",
      url: "#",
    },
    {
      id: "Joule AI",
      name: "Joule AI",
      icon: "💧",
      url: "#",
    },
    {
      id: "Salesforce Sales Cloud",
      name: "Salesforce Sales Cloud",
      icon: "💧",
      url: "#",
    },
    {
      id: "Salesforce Einstein & Analytics",
      name: "Salesforce Einstein & Analytics",
      icon: "💧",
      url: "#",
    },
    {
      id: "Salesforce Field Service  Cloud",
      name: "Salesforce Field Service  Cloud",
      icon: "💧",
      url: "#",
    },
    {
      id: "Salesforce Data Cloud",
      name: "Salesforce Data Cloud",
      icon: "💧",
      url: "#",
    },
    {
      id: "Salesforce Agentforce",
      name: "Salesforce Agentforce",
      icon: "💧",
      url: "#",
    },
    {
      id: "Salesforce Service Cloud",
      name: "Salesforce Service Cloud",
      icon: "💧",
      url: "#",
    },
    {
      id: "Salesforce Marketing Cloud",
      name: "Salesforce Marketing Cloud",
      icon: "💧",
      url: "#",
    },
    { id: "Kentico ", name: "Kentico ", icon: "💧", url: "#" },
    { id: "AEM", name: "AEM", icon: "💧", url: "#" },
    { id: "Wordpress", name: "Wordpress", icon: "💧", url: "#" },
    { id: "Shopify", name: "Shopify", icon: "💧", url: "#" },
    { id: "Drupal", name: "Drupal", icon: "💧", url: "#" },
  ],
};

type FilterType = "industries" | "businessOutcomes" | "regions";

type FilterBarProps = {
  onFilterChange?: (filters: {
    industries: string[];
    businessOutcomes: string[];
    regions: string[];
  }) => void;
}

const defaultFilter = {
  industries: [],
  businessOutcomes: [],
  regions: [],
}

const FilterLabel = ({
  label,
  count,
}: {
  label: string;
  count: number
}) => {
  return <DropdownMenuTrigger asChild>
    <Button variant="filter" className="gap-2 bg-transparent">
      {label}
      {count > 0 && (
        <span className="flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-primary rounded-full">
          {count}
        </span>
      )}
      <ChevronDown className="w-4 h-4 opacity-50 ms-5" />
    </Button>
  </DropdownMenuTrigger>
}

export function ClientSuccessFilter({ onFilterChange }: FilterBarProps) {
  const { data } = useFilterCaseStudyHook({});
  const [filter, setFilter] = React.useState<{
    industries: string[];
    businessOutcomes: string[];
    regions: string[];
  }>(defaultFilter)

  const handleFilterChange = React.useCallback((
    type: FilterType,
    value: string,
    checked: boolean
  ) => {
    setFilter((prev) => {
      const filtered = checked ? [...prev[type], value] : prev[type].filter((id) => id !== value);
      return {
        ...prev,
        [type]: filtered,
      }
    })

    onFilterChange?.({
      industries: filter.industries,
      businessOutcomes: filter.businessOutcomes,
      regions: filter.regions,
    });
  }, [filter])

  const handleResetFilter = () => {
    setFilter(defaultFilter)
    onFilterChange?.({
      industries: [],
      businessOutcomes: [],
      regions: [],
    });
  };

  const hasActiveFilters =
    filter.industries.length > 0 ||
    filter.businessOutcomes.length > 0 ||
    filter.regions.length > 0;

  return (
    <div className="flex items-center gap-3 lg:py-4  bg-background">
      <div className="flex items-center gap-3 flex-1 flex-wrap">
        {/* Industry Filter - WITH CHECKBOXES */}
        <DropdownMenu>
          <FilterLabel
            label={filterData.filterLabels.industry}
            count={filter?.industries?.length}
          />
          <DropdownMenuContent
            className="w-80 max-h-96 overflow-y-auto"
            align="start"
          >
            <div className="p-3">
              <div className="text-sm font-medium mb-3 text-muted-foreground">
                {filterData.filterLabels.filterByIndustry}
              </div>
              <div className="space-y-3">
                {data?.industries?.map((industry) => (
                  <label
                    key={industry.id}
                    className="flex items-center gap-3 cursor-pointer hover:bg-accent/50  rounded-md transition-colors"
                  >
                    <Checkbox
                      checked={filter.industries.includes(industry.id)}
                      onCheckedChange={(checked) =>
                        handleFilterChange(
                          "industries",
                          industry.id,
                          checked as boolean
                        )
                      }
                    />

                    <span className="text-lg">{industry.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Service Filter - NO CHECKBOXES - NAVIGATION */}
        <DropdownMenu>
          <FilterLabel
            label={filterData.filterLabels.service}
            count={0}
          />
          <DropdownMenuContent
            className="w-80 max-h-96 overflow-y-auto"
            align="start"
          >
            <div className="p-3">
              <div className="text-sm font-medium mb-3 text-muted-foreground">
                {filterData.filterLabels.filterByService}
              </div>
              <div className="space-y-2">
                {data?.service?.map((service) => (
                  <Link
                    key={service.id}
                    href="#"
                    className="flex items-center gap-3 cursor-pointer hover:bg-accent/50  rounded-md text-lg leading-6.5"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Technology Filter - NO CHECKBOXES - GRID LAYOUT - NAVIGATION */}
        <DropdownMenu>
          <FilterLabel
            label={filterData.filterLabels.technology}
            count={0}
          />
          <DropdownMenuContent
            className="overflow-y-auto"
            align="start"
          >
            <div className="p-4">
              <div className="grid grid-cols-4 gap-3">
                {data?.technology?.map((tech) => (
                  <Link
                    key={tech.id}
                    href="#"
                    className="flex items-center gap-3 cursor-pointer hover:bg-accent/50  rounded-md text-lg leading-6.5"
                  >
                    <span className="text-2xl flex-shrink-0">
                      <KorcomptenzImage
                        src={tech.image}
                        width={26}
                        height={22}
                      />
                    </span>
                    <span className="text-left truncate">{tech.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <FilterLabel
            label={filterData.filterLabels.businessOutcome}
            count={filter.businessOutcomes.length}
          />

          <DropdownMenuContent className="w-80" align="start">
            <div className="p-3">
              <div className="text-sm font-medium mb-3 text-muted-foreground">
                {filterData.filterLabels.filterByBusinessOutcome}
              </div>
              <div className="space-y-3">
                {data?.businessOutcomes.map((outcome) => (
                  <label
                    key={outcome.id}
                    className="flex items-center gap-3 cursor-pointer hover:bg-accent/50  rounded-md transition-colors"
                  >
                    <Checkbox
                      checked={filter.businessOutcomes.includes(outcome.id)}
                      onCheckedChange={(checked) =>
                        handleFilterChange(
                          "businessOutcomes",
                          outcome.id,
                          checked as boolean
                        )
                      }
                    />
                    <span className="text-lg">{outcome?.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Region Filter - WITH CHECKBOXES */}
        <DropdownMenu>
          <FilterLabel
            label={filterData.filterLabels.region}
            count={filter.regions.length}
          />
          <DropdownMenuContent className="w-80" align="start">
            <div className="p-3">
              <div className="text-sm font-medium mb-3 text-muted-foreground">
                {filterData.filterLabels.filterByRegion}
              </div>
              <div className="space-y-3">

                {data?.region?.map((region) => (
                  <label
                    key={region.id}
                    className="flex items-center gap-3 cursor-pointer hover:bg-accent/50 rounded-md transition-colors"
                  >
                    <Checkbox
                      checked={filter.regions.includes(region.id)}
                      onCheckedChange={(checked) =>
                        handleFilterChange(
                          "regions",
                          region.id,
                          checked as boolean
                        )
                      }
                    />
                    <span className="text-lg">{region.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Clear Filter Button */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            onClick={handleResetFilter}
            className="text-muted-foreground hover:text-foreground"
          >
            {filterData.filterLabels.clearFilter}
          </Button>
        )}
      </div>

      {/* Sort Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="gap-2 bg-transparent text-lg">
            {filterData.filterLabels.popular}
            <ChevronDown className="w-4 h-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <div className="p-2 space-y-1">
            <button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors">
              {filterData.filterLabels.popular}
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors">
              Newest
            </button>
            <button className="w-full text-left px-3 py-2 rounded-md text-sm hover:bg-accent transition-colors">
              Oldest
            </button>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
