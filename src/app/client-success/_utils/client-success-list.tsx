"use client";

import { CaseStudyCard } from "@/components/case-study-section";
import StickyTitleCard from "@/components/sticky-title-list/_utils/sticky-title-card";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationFirst,
  PaginationPrevious,
  PaginationNext,
  PaginationLast,
} from "@/components/ui/pagination";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const data = {
  stickyCard: {
    id: "137",
    title: "Seamless SAP Consolidation After Complex Merger",
    description:
      "Make smarter technology decisions with expert guidance that aligns digital strategy to business goals. Accelerate transformation and reduce risk with actionable roadmaps.",
    buttonText: "Dive deeper",
    titleimage: {
      url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/logo_sponsor_shaw_500x500_1_8c1ca5e907.png",
    } as ImageType,
    link: "/",
    image: {
      id: "501",
      url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_Adobe_Stock_1064135362_1_f1a8ed373f.png",
      name: "KOR-Smartforge-1.png",
      height: 284,
      width: 426,
      alternativeText: "",
      createdAt: "2023-05-30T07:00:00.000Z",
      updatedAt: "2023-05-30T07:00:00.000Z",
      publishedAt: "2023-05-30T07:00:00.000Z",
      size: 0,
      ext: "png",
      mime: "image/png",
    } as ImageType,
  },
  caseStudies: Array(10).fill({
    id: "165",
    category: "White paper",
    title:
      "How did an optical manufacturer improve process performance by 50%?",
    image: {
      url: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/thumbnail_arunnmdesign_a_bright_photograph_of_a_happy_young_woman_wearing_17c55b0d_6af0_46fe_8f5a_c67569eaff81_2d24d6b07f.png?updatedAt=2025-10-03T07%3A00%3A37.232Z",
    } as ImageType,
    description:
      "We helped them efficiently migrate from AX to Microsoft Dynamics 365 F&O. We helped them efficiently migrate from AX to Microsoft Dynamics 365 F&O. We helped them efficiently migrate from AX to Microsoft Dynamics 365 F&O.",
    buttonText: "Dive deeper",
    industry: ["Manufacturing", "Chemical"],
    service: ["Manufacturing"],
    technology: ["Microsoft Dynamics 365"],
  }),
  pagination: {
    totalItems: 160,

    currentPage: 1,
  },
};

const ClientSuccessList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const totalItems = data.caseStudies.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCaseStudies = data.caseStudies.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 750, behavior: "smooth" });
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
    window.scrollTo({ top: 750, behavior: "smooth" });
  };

  const renderPaginationItems = () => {
    const items = [];

    items.push(
      <PaginationItem key={1}>
        <PaginationLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handlePageChange(1);
          }}
          isActive={currentPage === 1}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      if (i === 2 && currentPage > 3) {
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
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );

      if (i === currentPage + 1 && currentPage < totalPages - 2) {
        items.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    if (totalPages > 1) {
      items.push(
        <PaginationItem key={totalPages}>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handlePageChange(totalPages);
            }}
            isActive={currentPage === totalPages}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return items;
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-12 gap-6 mb-8">
        <div className="col-span-12 md:col-span-4">
          <StickyTitleCard data={data.stickyCard} />
        </div>

        {currentCaseStudies.map((item) => (
          <div key={item.id} className="col-span-12 md:col-span-4">
            <CaseStudyCard {...item} />
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <div>
          <Pagination>
            <PaginationContent>
              {/* First Page - Double Chevron Left */}
              <PaginationItem>
                <PaginationFirst
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(1);
                  }}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
                  }
                />
              </PaginationItem>

              {/* Previous Page - Single Chevron Left */}
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }}
                  className={
                    currentPage === 1 ? "pointer-events-none opacity-50" : ""
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
                    handlePageChange(currentPage + 1);
                  }}
                  className={
                    currentPage === totalPages
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
                    handlePageChange(totalPages);
                  }}
                  className={
                    currentPage === totalPages
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
                {itemsPerPage}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-24">
              <DropdownMenuLabel>Per Page</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {[5, 10, 20, 50].map((num) => (
                <DropdownMenuItem
                  key={num}
                  onClick={() => handleItemsPerPageChange(num)}
                  className={`cursor-pointer ${itemsPerPage === num
                    ? "bg-gray-100 text-muted font-normal"
                    : ""
                    }`}
                >
                  {num}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <span>of {totalItems} entries</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ClientSuccessList;
