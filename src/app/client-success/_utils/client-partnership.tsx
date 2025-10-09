import KorcomptenzImage from "@/components/korcomptenz-image";
import type { PartnershipSectionType } from "@/types/global-types";

export default function ClientPartnership({
  data,
}: {
  data: PartnershipSectionType;
}) {
  return (
    <section className="container-lg">
      <h1 className="text-7xl  font-semibold text-foreground mb-12 text-balance">
        {data?.title}
      </h1>

      {/* Partner Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
        {data?.partner?.map((badge) => (
          <div key={badge.id} className="flex flex-col gap-4">
            <div className=" relative flex-shrink-0">
              <KorcomptenzImage
                src={badge.logo}
                width={badge?.logo?.width}
                height={badge?.logo?.height}
                className="object-contain object-left"
              />
            </div>
            <p className="text-lg leading-relaxed text-foreground font-normal">
              {badge.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
