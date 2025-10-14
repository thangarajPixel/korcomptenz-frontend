"use client";

import { CaseStudyCard } from "@/components/case-study-section";
import StickyTitleCard from "@/components/sticky-title-list/_utils/sticky-title-card";
import React, { useState } from "react";
import { useCaseStudyListHook } from "@/services";
import PaginationSection from "@/components/pagination-section";
import { INITIAL_PAGINATION } from "@/utils/helper";
import { ClientSuccessFilter } from "./client-success-filter";
import { useParams } from "next/navigation";
import { CaseStudyCardSkeleton } from "./case-study-skeleton";
import ClientSuccessBanner from "./client-success-banner";
const ClientSuccessList = ({
  data: { sponser, filterLabel, popularFilter, banner },
  initialData,
}: {
  data: CaseStudiesPageType;
  initialData: CaseStudiesType;
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
  const [pagination, setPagination] = useState<PaginationType>({
    ...INITIAL_PAGINATION,
    pageCount: initialData?.pagination.pageCount || 1,
    total: initialData?.pagination.total || 0,
  });
  const { data, isLoading } = useCaseStudyListHook({
    params: { pagination, filter, slug: slug as string },
    options: {
      initialData,
    },
  });

  const handleFilterChange = React.useCallback((filters: {
    [key: string]: string[];
  }) => {
    setFilter(filters as { industries: string[]; businessOutcomes: string[]; region: string[]; });
  }, [filter]);
  const handlePageChange = (page: number) => {
    window.scrollTo({ top: 750, behavior: "smooth" });
    setPagination((prev) => ({
      ...prev,
      page: page,
    }));
  };
  const handleItemsPerPageChange = (value: number) => {
    setPagination((prev) => ({
      ...prev,
      pageSize: value,
      page: 1,
    }));
  };

  return (
    <React.Fragment>
      <ClientSuccessBanner data={banner} handleFilterChange={handleFilterChange} />
      <div className="container-lg">
        <ClientSuccessFilter
          filterLabel={filterLabel}
          popularFilter={popularFilter}
          onFilterChange={handleFilterChange}
        />
        <div className="grid grid-cols-12 gap-6 mb-8 md:py-10">
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            {sponser && <StickyTitleCard data={sponser} />}
          </div>

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

export default ClientSuccessList;
