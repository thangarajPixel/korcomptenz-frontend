import KorcomptenzImage from "@/components/korcomptenz-image";
import { cn } from "@/lib/utils";

import { ChevronRight } from "lucide-react";

export default function ClientPartnership({
  data,
}: {
  data: PartnershipSectionType;
}) {
  return (
    <section className="container-md">
      <h5 className="text-7xl  font-semibold text-foreground mb-12 text-balance">
        {data?.title}
      </h5>

      {/* Partner Badges Grid */}
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-5  gap-5 ",
          data?.isPerRowFive ? "md:grid-cols-5" : "md:grid-cols-3"
        )}
      >
        {data?.partner?.map((badge) => (
          <div
            key={badge.id}
            className={cn(
              "flex flex-col gap-4",
              data?.isSingleLine
                ? "flex-row bg-[#E2EBE4] py-5 px-6 rounded-3xl justify-between  space-x-10"
                : "flex-col"
            )}
          >
            <div className="flex w-50">
              <div className=" relative flex-shrink-0">
                <KorcomptenzImage
                  src={badge.logo}
                  width={data?.isSingleLine ? 52 : badge?.logo?.width}
                  height={data?.isSingleLine ? 52 : badge?.logo?.height}
                  className="object-cover"
                />
              </div>
              <p
                className={cn(
                  "text-lg leading-relaxed ml-1 text-foreground font-normal -mt-2 line-clamp-2",
                  data?.isSingleLine && "text-lg font-bold ml-5 mt-3"
                )}
              >
                {badge.name}
              </p>
            </div>
            {data?.isSingleLine && (
              <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mt-4">
                <ChevronRight className="w-5 h-5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
