"use client";

import React, { useState } from "react";
import { useInsightsListHook } from "@/services";
import PaginationSection from "@/components/pagination-section";
import { INITIAL_PAGINATION } from "@/utils/helper";
import { useParams } from "next/navigation";
import InsightsSuccessBanner from "./insights-success-banner";

import { InsightsSuccessFilter } from "./insights-success-filter";
import { InsightCard } from "./insights-card";
import { CaseStudyCardSkeleton } from "../../case-studies/_utils/case-study-skeleton";

const InsightsSuccessList = ({
  data: { filterLabel, popularFilter, banner, categoryAllLabel, category },
  initialData,
  search,
}: {
  data: CaseStudiesPageType;
  initialData: CaseStudiesType;
  search: FilterListType[];
}) => {
  const { slug } = useParams();
  const [filter, setFilter] = useState<{
    service: string[];
    technology: string[];
  }>({
    service: [],
    technology: [],
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("createdAt:desc");
  const [pagination, setPagination] = useState<PaginationType>({
    ...INITIAL_PAGINATION,
    pageCount: initialData?.pagination.pageCount || 1,
    total: initialData?.pagination.total || 0,
  });

  const { data, isLoading } = useInsightsListHook({
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

  const handleSearch = React.useCallback(
    (term: string) => {
      setSearchTerm(term);
      setPagination((prev) => ({
        ...prev,
        page: 1,
      }));
    },
    [pagination]
  );

  const handleFilterChange = React.useCallback(
    (filters: { [key: string]: string[] }) => {
      setFilter(
        filters as {
          service: string[];
          technology: string[];
        }
      );
      setPagination((prev) => ({
        ...prev,
        page: 1,
      }));
    },
    [filter]
  );

  const handlePageChange = React.useCallback(
    (page: number) => {
      window.scrollTo({ top: 750, behavior: "smooth" });
      setPagination((prev) => ({
        ...prev,
        page: page,
      }));
    },
    [pagination]
  );

  const handleItemsPerPageChange = React.useCallback(
    (value: number) => {
      setPagination((prev) => ({
        ...prev,
        pageSize: value,
        page: 1,
      }));
    },
    [pagination]
  );

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
          category={category as never}
          categoryAllLabel={categoryAllLabel}
          popularFilter={popularFilter}
          onFilterChange={handleFilterChange}
          onSortChange={setSort}
        />
        <div className="grid grid-cols-12 gap-6 mb-8 md:py-10">
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
                <InsightCard data={item} />
              </div>
            ))
          ) : (
            <div className="col-span-12  text-center py-10 text-gray-500 text-lg">
              No Insight found
            </div>
          )}
        </div>
        {pagination && !!data?.pagination.total && (
          <PaginationSection
            key={`pagination-${data?.pagination.pageCount}-${data?.pagination.total}`}
            pagination={{
              ...pagination,
              pageCount: data?.pagination.pageCount ?? pagination.pageCount,
              total: data?.pagination.total ?? pagination.total,
            }}
            handlePageChange={handlePageChange}
            handleItemsPerPageChange={handleItemsPerPageChange}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default InsightsSuccessList;
