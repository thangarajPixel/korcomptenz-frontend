import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import {
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  Pagination,
  PaginationContent,
  PaginationFirst,
  PaginationPrevious,
  PaginationNext,
  PaginationLast,
} from "../ui/pagination";
import { ChevronDown } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const PaginationSection = ({
  pagination,
  handlePageChange,
  handleItemsPerPageChange,
}: {
  pagination: PaginationType;
  handlePageChange: (page: number) => void;
  handleItemsPerPageChange: (itemsPerPage: number) => void;
}) => {
  const renderPaginationItems = () => {
    const items = [];

    items.push(
      <PaginationItem key={pagination?.page}>
        <PaginationLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(1);
          }}
          isActive={pagination?.page === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    for (
      let i = Math.max(2, pagination?.page - 1);
      i <= Math.min(pagination.pageCount - 1, pagination?.page + 1);
      i++
    ) {
      if (i === 2 && pagination?.page > 3) {
        items.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }

      items.push(
        <PaginationItem key={i}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(i);
            }}
            isActive={pagination?.page === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );

      if (
        i === pagination?.page + 1 &&
        pagination?.page < pagination.pageCount - 2
      ) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    if (pagination.pageCount > 1) {
      items.push(
        <PaginationItem key={pagination.pageCount}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(pagination.pageCount);
            }}
            isActive={pagination?.page === pagination.pageCount}
          >
            {pagination.pageCount}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <div className="container-md flex flex-col sm:flex-row sm:justify-between items-center gap-3 mb-5">
      <div>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationFirst
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(1);
                }}
                className={
                  pagination?.page === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {/* Previous Page - Single Chevron Left */}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(pagination?.page - 1);
                }}
                className={
                  pagination?.page === 1 ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>

            {/* Page Numbers */}
            {renderPaginationItems()}

            {/* Next Page - Single Chevron Right */}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(pagination?.page + 1);
                }}
                className={
                  pagination?.page === pagination?.pageCount
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>

            <PaginationItem>
              <PaginationLast
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handlePageChange(pagination?.pageCount);
                }}
                className={
                  pagination?.page === pagination?.pageCount
                    ? "pointer-events-none opacity-50"
                    : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Showing</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-1 border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              {pagination?.pageSize}
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-24">
            {[5, 10, 20, 50].map((num) => (
              <DropdownMenuItem
                key={`pagination-dropdown-${num}`}
                onClick={() => handleItemsPerPageChange(num)}
                className={cn(
                  `cursor-pointer`,
                  pagination?.pageSize === num &&
                  "bg-gray-100 text-muted font-normal"
                )}
              >
                {num}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <span>of {pagination?.total} entries</span>
      </div>
    </div>
  );
};

export default PaginationSection;
