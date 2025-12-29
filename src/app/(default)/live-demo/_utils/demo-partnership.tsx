import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";

export default function DemoPartnership({
  data,
}: {
  data: DemoPartnershipSectionType;
}) {
  return (
    <section className="container-md bg-foreground rounded-4xl p-8">
      <h1 className="text-7xl  font-semibold  mb-12 text-balance text-center  text-white">
        {data?.title}
      </h1>

      {/* Partner Badges Grid */}
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2  gap-8 mb-16 text-white",
          data?.isTwoPerRow ? "lg:grid-cols-2" : "lg:grid-cols-3"
        )}
      >
        {data?.list?.map((badge) => (
          <div key={badge.id} className="flex flex-row-3 gap-4">
            <div className=" relative flex-shrink-0">
              <KorcomptenzImage
                src={badge?.logo}
                width={badge?.logo?.width || 40}
                height={badge?.logo?.height || 40}
                className="object-contain object-left text-white"
              />
            </div>
            {badge.name && (
              <p className="text-lg leading-relaxed font-normal justify-center">
                {badge.name}
              </p>
            )}

            <DangerousHtml
              html={badge?.description}
              className="text-lg leading-relaxed font-normal justify-center text-white"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
