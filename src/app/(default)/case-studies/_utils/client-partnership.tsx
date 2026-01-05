import KorcomptenzImage from "@/components/korcomptenz-image";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ClientPartnership({
  data,
}: {
  data: PartnershipSectionType;
}) {
  return (
    <section className="container-md">
      <h5 className="text-7xl font-semibold text-foreground mb-12 text-balance font-sans">
        {data?.title}
      </h5>

      {/* Partner Badges Grid */}
      <div
        className={cn(
          "grid gap-x-8 gap-y-6",
          data?.isPerRowFive
            ? "grid-cols-2  md:grid-cols-5"
            : "grid-cols-2  md:grid-cols-3"
        )}
      >
        {data?.partner?.map((badge) => (
          <Link href={badge.link || "#"} key={badge.id}>
            <div
              key={badge.id}
              className={cn(
                "flex  justify-between rounded-3xl",
                data?.isSingleLine
                  ? "bg-[#E2EBE4] py-4 px-2 items-center"
                  : "flex-col gap-4"
              )}
            >
              {/* Logo + Name */}
              <div className="flex items-center gap-4">
                {/* Fixed logo box */}
                <div
                  className={cn(
                    "relative  flex items-center justify-center",
                    data?.isSingleLine ? "w-25 h-15" : "w-40 h-20"
                  )}
                >
                  <KorcomptenzImage
                    src={badge.logo}
                    fill
                    className="object-contain"
                  />
                </div>

                <p
                  className={cn(
                    "text-lg text-foreground leading-tight",
                    data?.isSingleLine && "font-bold"
                  )}
                >
                  {badge.name}
                </p>
              </div>

              {/* Arrow (single line only) */}
              {data?.isSingleLine && (
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  <ChevronRight className="w-5 h-5" />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
