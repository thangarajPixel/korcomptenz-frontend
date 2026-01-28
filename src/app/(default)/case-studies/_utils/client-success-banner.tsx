"use client";
import React from "react";
import SearchChips from "./search-chips";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { usePathname } from "next/navigation";
import { DangerousHtml } from "@/components/ui/dangerous-html";

const ClientSuccessBanner = ({
  data,
  handleFilterChange,
  search,
  title,
  onSearch,
}: {
  data: ClientSuccessBannerSectionType;
  title: CaseStudiesType;
  handleFilterChange: (filters: { [key: string]: string[] }) => void;
  onSearch?: (search: string) => void;
  search?: FilterListType[];
}) => {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop();

  const matchedItem =
    title?.service?.find((item) => item?.slug === slug) ||
    title?.technology?.find((item) => item?.slug === slug);

  const pageTitle = matchedItem?.title || matchedItem?.label || "";
  const pageDescription = matchedItem?.description || "";

  return (
    <section className="relative overflow-hidden bg-custom-gray-6">
      <div className="absolute inset-0">
        <KorcomptenzImage
          src="/assets/arrow-alone.svg"
          fill
          alt="Korcomptenz"
        />
      </div>

      <div className="relative container-lg py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-8 items-center">
          {/* Left: Heading, copy, search */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-balance font-semibold tracking-tight text-foreground text-6xl md:text-9xl leading-tight">
              {pageTitle || data?.title}
            </h1>

            <DangerousHtml
              html={pageDescription || data?.description}
              className="text-3xl md:text-5xl leading-tight font-normal text-foreground text-xl md:text-3xl "
            />

            <SearchChips
              onChange={handleFilterChange}
              search={search}
              onSearch={onSearch}
            />
          </div>

          {/* Right: Image collage */}
          <div className="lg:pl-4">
            <div className="grid grid-cols-2 lg:grid-cols-[1fr_1fr] gap-6 items-stretch">
              {/* Top left image (medium) */}

              <KorcomptenzImage
                src={data?.images?.[0]?.image}
                className="rounded-3xl border border-border object-cover w-full h-[200px] md:h-[240px]"
                width={1000}
                height={1000}
              />

              {/* Tall right image */}
              <KorcomptenzImage
                src={data?.images?.[1]?.image}
                alt="Engineers reviewing production dashboards"
                className="rounded-3xl border border-border object-cover w-full row-span-2 h-[440px] md:h-[520px]"
                width={1000}
                height={1000}
              />

              {/* Bottom left image (large) */}
              <KorcomptenzImage
                src={data?.images?.[2]?.image}
                alt="Precision manufacturing on CNC machine"
                className="rounded-3xl border border-border object-cover w-full h-[260px] md:h-[320px]"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSuccessBanner;
