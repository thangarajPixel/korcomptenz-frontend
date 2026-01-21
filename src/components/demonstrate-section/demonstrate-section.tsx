import React from "react";
import KorcomptenzImage from "../korcomptenz-image";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import ButtonLink from "../ui/button-link";
import { cn } from "@/lib/utils";

const DemonstrateSection = ({ data }: { data: DemonstrationSectionType }) => {
  return (
    <section
      className="container-md"
      data-debug={"page-componets.demonstrate-section"}
    >
      <div className="">
        <div className="flex flex-col gap-9 text-start lg:text-center items-start lg:items-center justify-center leading-14  text-foreground  ">
          <h2
            className={cn(
              "text-6xl md:text-9xl whitespace-pre-wrap text-balance font-semibold text-foreground mb-10 lg:mb-0",
              data?.description && "mb-0",
            )}
          >
            {data?.title}
          </h2>
          {data?.description && (
            <p className="text-lg font-normal text-foreground leading-6 whitespace-pre-wrap line-clamp-2">
              {data?.description}
            </p>
          )}
          {data?.buttonText && (
            <ButtonLink
              link={data?.link || "#"}
              buttonProps={{
                size: "xl",
                arrow: true,
                className:
                  "hidden lg:inline-flex variant:default px-8 py-2 text-4xl rounded-full ",
              }}
            >
              {data?.buttonText}
            </ButtonLink>
          )}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:p-10 ">
          {data?.list?.map((card, index) => {
            return (
              <Link
                href={card?.link || "#"}
                key={`card-item-demo-${card?.id}`}
                className={`bg-none flex flex-col group gap-4 ${
                  !((index + 1) % 2) ? "lg:mt-10" : ""
                }`}
              >
                <div className="py-3 md:py-0 rounded-4xl">
                  <KorcomptenzImage
                    src={card?.image}
                    width={500}
                    height={500}
                    className="object-cover w-full h-full rounded-4xl "
                  />
                </div>
                <div>
                  <h5 className="lg:text-3xl text-xl leading-6.75 font-semibold text-foreground  group-hover:text-primary line-clamp-2">
                    {card?.title}
                  </h5>
                </div>

                <p className="text-lg font-normal text-foreground leading-6 break-words line-clamp-2">
                  {card?.description}
                </p>
                {card?.buttonText && (
                  <button className="inline-flex items-center gap-2 text-primary hover:text-primary hover:opacity-80 font-medium transition-colors cursor-pointer">
                    {card?.buttonText}
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </Link>
            );
          })}
        </div>
        <ButtonLink
          link={data?.link || "#"}
          isTargetNew={data?.isTargetBlank}
          buttonProps={{
            size: "xl",
            arrow: true,
            className:
              " w-full lg:hidden variant:default px-8 py-2 text-4xl rounded-full mt-10",
          }}
        >
          {data?.buttonText}
        </ButtonLink>
      </div>
    </section>
  );
};

export default DemonstrateSection;
