"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useFilterdataHook } from "@/services";
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
  // industries: [
  //   { id: "manufacturing", name: "Manufacturing" },
  //   { id: "healthcare", name: "Healthcare" },
  //   { id: "fashion and Retail", name: "Fashion and Retail" },
  //   { id: "logistics and Supply Chain", name: "Logistics and Supply Chain" },
  //   { id: "financial", name: "Financial" },
  // ],
  // services: [
  //   {
  //     id: "digital-transformation",
  //     name: "Digital Transformation Consulting",
  //     url: "#",
  //   },
  //   {
  //     id: "app-development",
  //     name: "Application Development",
  //     url: "#",
  //   },
  //   { id: "devops", name: "DevOps and Automation", url: "#" },
  //   { id: "erp-crm", name: "ERP/CRM Implementation", url: "#" },
  //   {
  //     id: "managed-it",
  //     name: "Managed IT Services",
  //     url: "#",
  //   },
  //   {
  //     id: "ecommerce",
  //     name: "E-commerce Solutions",
  //     url: "#",
  //   },
  // ],
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
  // businessOutcomes: [
  //   { id: "operational-excellence", name: "Operational Excellence" },
  //   { id: "cost-optimization", name: "Cost Optimization" },
  //   { id: "scalability", name: "Scalability & Performance" },
  //   { id: "data-driven", name: "Data-Driven Decision Making" },
  //   { id: "innovation", name: "Innovation Enablement" },
  // ],
  // regions: [
  //   { id: "usa", name: "USA" },
  //   { id: "uae", name: "UAE" },
  //   { id: "australia", name: "Australia" },
  //   { id: "canada", name: "Canada" },
  //   { id: "india", name: "India" },
  // ],
};

type FilterType = "industries" | "businessOutcomes" | "regions";

interface FilterBarProps {
  onFilterChange?: (filters: {
    industries: string[];
    businessOutcomes: string[];
    regions: string[];
  }) => void;
}

export function FilterBar({ onFilterChange }: FilterBarProps) {
  const { data } = useFilterdataHook({});

  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedBusinessOutcomes, setSelectedBusinessOutcomes] = useState<
    string[]
  >([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  const handleFilterChange = (
    type: FilterType,
    value: string,
    checked: boolean
  ) => {
    let newSelection: string[] = [];

    switch (type) {
      case "industries":
        newSelection = checked
          ? [...selectedIndustries, value]
          : selectedIndustries.filter((id) => id !== value);
        setSelectedIndustries(newSelection);
        break;
      case "businessOutcomes":
        newSelection = checked
          ? [...selectedBusinessOutcomes, value]
          : selectedBusinessOutcomes.filter((id) => id !== value);
        setSelectedBusinessOutcomes(newSelection);
        break;
      case "regions":
        newSelection = checked
          ? [...selectedRegions, value]
          : selectedRegions.filter((id) => id !== value);
        setSelectedRegions(newSelection);
        break;
    }

    onFilterChange?.({
      industries: type === "industries" ? newSelection : selectedIndustries,
      businessOutcomes:
        type === "businessOutcomes" ? newSelection : selectedBusinessOutcomes,
      regions: type === "regions" ? newSelection : selectedRegions,
    });
  };

  const clearAllFilters = () => {
    setSelectedIndustries([]);
    setSelectedBusinessOutcomes([]);
    setSelectedRegions([]);
    onFilterChange?.({
      industries: [],
      businessOutcomes: [],
      regions: [],
    });
  };

  const hasActiveFilters =
    selectedIndustries.length > 0 ||
    selectedBusinessOutcomes.length > 0 ||
    selectedRegions.length > 0;

  return (
    <div className="flex items-center gap-3 lg:py-4  bg-background">
      <div className="flex items-center gap-3 flex-1 flex-wrap">
        {/* Industry Filter - WITH CHECKBOXES */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="filter" className="gap-2 bg-transparent">
              {filterData.filterLabels.industry}
              {selectedIndustries.length > 0 && (
                <span className="flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-emerald-500 rounded-full">
                  {selectedIndustries.length}
                </span>
              )}
              <ChevronDown className="w-4 h-4 opacity-50 ms-5" />
            </Button>
          </DropdownMenuTrigger>
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
                      checked={selectedIndustries.includes(industry.id)}
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
          <DropdownMenuTrigger asChild>
            <Button variant="filter" className="gap-2 bg-transparent">
              {filterData.filterLabels.service}
              <ChevronDown className="w-4 h-4 opacity-50 ms-5" />
            </Button>
          </DropdownMenuTrigger>
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
          <DropdownMenuTrigger asChild>
            <Button variant="filter" className="gap-2 bg-transparent">
              {filterData.filterLabels.technology}
              <ChevronDown className="w-4 h-4 opacity-50 ms-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[1200px] max-h-[600px] overflow-y-auto"
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

        {/* Business Outcome Filter - WITH CHECKBOXES */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="filter" className="gap-2 bg-transparent">
              {filterData.filterLabels.businessOutcome}
              {selectedBusinessOutcomes.length > 0 && (
                <span className="flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-emerald-500 rounded-full">
                  {selectedBusinessOutcomes.length}
                </span>
              )}
              <ChevronDown className="w-4 h-4 opacity-50 ms-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80" align="start">
            <div className="p-3">
              <div className="text-sm font-medium mb-3 text-muted-foreground">
                {filterData.filterLabels.filterByBusinessOutcome}
              </div>
              <div className="space-y-3">
                {/* <label className="flex items-center gap-3 cursor-pointer hover:bg-accent/50  rounded-md transition-colors">
                  <Checkbox
                    checked={selectedBusinessOutcomes.length === 0}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedBusinessOutcomes([]);
                        onFilterChange?.({
                          industries: selectedIndustries,
                          businessOutcomes: [],
                          regions: selectedRegions,
                        });
                      }
                    }}
                  />
                  <span className="text-sm">{filterData.filterLabels.all}</span>
                </label> */}
                {data?.businessOutcomes.map((outcome) => (
                  <label
                    key={outcome.id}
                    className="flex items-center gap-3 cursor-pointer hover:bg-accent/50  rounded-md transition-colors"
                  >
                    <Checkbox
                      checked={selectedBusinessOutcomes.includes(outcome.id)}
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
          <DropdownMenuTrigger asChild>
            <Button variant="filter" className="gap-2 bg-transparent">
              {filterData.filterLabels.region}
              {selectedRegions.length > 0 && (
                <span className="flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-emerald-500 rounded-full">
                  {selectedRegions.length}
                </span>
              )}
              <ChevronDown className="w-4 h-4 opacity-50 ms-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-80" align="start">
            <div className="p-3">
              <div className="text-sm font-medium mb-3 text-muted-foreground">
                {filterData.filterLabels.filterByRegion}
              </div>
              <div className="space-y-3">
                {/* <label className="flex items-center gap-3 cursor-pointer hover:bg-accent/50  rounded-md transition-colors">
                  <Checkbox
                    checked={selectedRegions.length === 0}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedRegions([]);
                        onFilterChange?.({
                          industries: selectedIndustries,
                          businessOutcomes: selectedBusinessOutcomes,
                          regions: [],
                        });
                      }
                    }}
                  />
                  <span className="text-lg">{filterData.filterLabels.all}</span>
                </label> */}
                {data?.region?.map((region) => (
                  <label
                    key={region.id}
                    className="flex items-center gap-3 cursor-pointer hover:bg-accent/50 rounded-md transition-colors"
                  >
                    <Checkbox
                      checked={selectedRegions.includes(region.id)}
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
            onClick={clearAllFilters}
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
