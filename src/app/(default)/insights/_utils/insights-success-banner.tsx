import React from "react";
import SearchChips from "./search-chips";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { DangerousHtml } from "@/components/ui/dangerous-html";

const InsightsSuccessBanner = ({
  data,
  handleFilterChange,
  search,
  onSearch,
  category,
}: {
  data: ClientSuccessBannerSectionType;
  handleFilterChange: (filters: { [key: string]: string[] }) => void;
  onSearch?: (search: string) => void;
  search?: FilterListType[];
  category?: { label: string; id: string; slug: string; description: string }[];
}) => {
  const pathname = usePathname();
  const slug = pathname?.split("/").pop();

  const matchedItem = category?.find((item) => item?.slug === slug);

  const pageTitle = matchedItem?.label || "";
  const pageDescription = matchedItem?.description || "";

  const imageClassName = "rounded-3xl border border-border object-cover w-full";
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left: Heading, copy, search */}
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-balance font-semibold tracking-tight text-foreground text-6xl md:text-9xl leading-tight">
              {pageTitle || data?.title}
            </h1>

            <DangerousHtml
              html={pageDescription || data?.description}
              className="text-3xl md:text-5xl leading-tight  text-foreground text-xl md:text-3xl font-normal "
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
                className={cn(imageClassName, "h-[200px] md:h-[240px]")}
                width={1000}
                height={1000}
              />

              {/* Tall right image */}
              <KorcomptenzImage
                src={data?.images?.[1]?.image}
                className={cn(
                  imageClassName,
                  "row-span-2 h-[440px] md:h-[520px]",
                )}
                width={1000}
                height={1000}
              />

              {/* Bottom left image (large) */}
              <KorcomptenzImage
                src={data?.images?.[2]?.image}
                className={cn(imageClassName, "h-[260px] md:h-[320px]")}
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

export default InsightsSuccessBanner;
