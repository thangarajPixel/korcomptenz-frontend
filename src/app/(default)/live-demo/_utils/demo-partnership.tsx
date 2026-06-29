import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";
import ButtonLink from "@/components//ui/button-link";

export default function DemoPartnership({
  data,
}: {
  data: DemoPartnershipSectionType;
}) {
  return (
    <section className="container-md">
      <div className=" bg-foreground rounded-4xl p-8">
        {data?.title && (
          <h2 className=" text-5xl md:text-7xl  font-semibold  mb-4 text-balance text-center  text-white">
            {data?.title}
          </h2>
        )}
        {data?.description && (
          <p className=" text-2xl md:text-3xl mb-16 m text-balance text-center  text-white">
            {data?.description}
          </p>
        )}

        {/* Partner Badges Grid */}
        <div
          className={cn(
            "grid grid-cols-1 sm:grid-cols-2  gap-8 mb-6 text-white",
            data?.isTwoPerRow ? "lg:grid-cols-2" : "lg:grid-cols-3",
          )}
        >
          {data?.list?.map((badge) => (
            <div key={badge.id} className="flex flex-row-3 gap-4">
              <div className=" relative flex-shrink-0">
                <KorcomptenzImage
                  src={badge?.logo}
                  width={50}
                  height={50}
                  className="object-contain object-left text-white"
                />
              </div>
              <div>
                {badge.name && (
                  <p className="text-lg md:text-2xl  leading-relaxed font-semibold justify-center">
                    {badge.name}
                  </p>
                )}

                <DangerousHtml
                  html={badge?.description}
                  className="text-md md:text-lg leading-relaxed font-normal justify-center text-white"
                />
              </div>
            </div>
          ))}
        </div>

        {data?.buttonText && (
          <div className="text-center mb-6">
            <ButtonLink
              link={data?.buttonLink || "#"}
              buttonProps={{
                arrow: true,
                className:
                  "inline-flex items-center justify-center border border-white bg-transparent text-white hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-transparent",
                size: "xl",
              }}
            >
              {data?.buttonText}
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
