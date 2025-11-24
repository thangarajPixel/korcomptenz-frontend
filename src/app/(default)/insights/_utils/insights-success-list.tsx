"use client";

import { CaseStudyCard } from "@/components/case-study-section";
import StickyTitleCard from "@/components/sticky-title-list/_utils/sticky-title-card";
import React, { useState } from "react";
import { useCaseStudyListHook } from "@/services";
import PaginationSection from "@/components/pagination-section";
import { INITIAL_PAGINATION } from "@/utils/helper";

import { useParams } from "next/navigation";

import InsightsSuccessBanner from "./insights-success-banner";
import { CaseStudyCardSkeleton } from "../../client-success/_utils/case-study-skeleton";
import { InsightsSuccessFilter } from "./insights-success-filter";


const InsightsSuccessList = ({
  data: { filterLabel, popularFilter, banner },
  initialData,
  search,
}: {
  data: CaseStudiesPageType;
  initialData: CaseStudiesType;
  search: FilterListType[];
}) => {
  const { slug } = useParams();
  const [filter, setFilter] = useState<{
    industries: string[];
    businessOutcomes: string[];
    region: string[];
  }>({
    industries: [],
    businessOutcomes: [],
    region: [],
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("createdAt:desc");
  const [pagination, setPagination] = useState<PaginationType>({
    ...INITIAL_PAGINATION,
    pageCount: initialData?.pagination.pageCount || 1,
    total: initialData?.pagination.total || 0,
  });

  const { data, isLoading } = useCaseStudyListHook({
    params: {
      pagination,
      filter,
      slug: slug as string,
      search: searchTerm,
      sort: [sort],
    },
    options: {
      initialData,
    },
  });

  const handleSearch = React.useCallback((term: string) => {
    setSearchTerm(term);
    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));
  }, [pagination]);

  const handleFilterChange = React.useCallback(
    (filters: { [key: string]: string[] }) => {
      setFilter(
        filters as {
          industries: string[];
          businessOutcomes: string[];
          region: string[];
        }
      );
      setPagination((prev) => ({
        ...prev,
        page: 1,
      }));
    },
    [filter]
  );

  const handlePageChange = React.useCallback((page: number) => {
    window.scrollTo({ top: 750, behavior: "smooth" });
    setPagination((prev) => ({
      ...prev,
      page: page,
    }));
  }, [pagination]);

  const handleItemsPerPageChange = React.useCallback((value: number) => {
    setPagination((prev) => ({
      ...prev,
      pageSize: value,
      page: 1,
    }));
  }, [pagination]);

  return (
    <React.Fragment>
      <InsightsSuccessBanner
        search={search}
        data={banner}
        handleFilterChange={handleFilterChange}
        onSearch={handleSearch}
      />
      <div className="container-lg">
        <InsightsSuccessFilter
          filterLabel={filterLabel}
          popularFilter={popularFilter}
          onFilterChange={handleFilterChange}
          onSortChange={setSort}
        />
        <div className="grid grid-cols-12 gap-6 mb-8 md:py-10">
          {data?.sponsor && <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <StickyTitleCard data={data?.sponsor?.sponser} />
          </div>
          }

          {isLoading ? (
            Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="col-span-12 md:col-span-6 lg:col-span-4">
                <CaseStudyCardSkeleton />
              </div>
            ))
          ) : data?.results?.length ? (
            data.results.map((item) => (
              <div
                key={item.id}
                className="col-span-12 md:col-span-6 lg:col-span-4"
              >
                <CaseStudyCard data={item} />
              </div>
            ))
          ) : (
            <div className="col-span-8  text-center py-10 text-gray-500 text-lg">
              No case studies found
            </div>
          )}
        </div>
        {pagination && (
          <PaginationSection
            pagination={pagination}
            handlePageChange={handlePageChange}
            handleItemsPerPageChange={handleItemsPerPageChange}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default InsightsSuccessList;