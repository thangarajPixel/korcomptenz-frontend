import ButtonLink from "@/components/ui/button-link";
import { DangerousHtml } from "@/components/ui/dangerous-html";

export default function OutcomesSection({
  outcomes,
}: {
  outcomes: DigitialLifeMiddleType;
}) {
  return (
    <section className="bg-background py-6 md:py-12 container-md">
      <div className="">
        {/* Top boxes – 2 per row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-4 md:mb-6">
          {outcomes?.midList1?.map((item) => (
            <div
              key={item?.id}
              className="bg-light-gray rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-lg md:text-[21px] font-semibold text-foreground mb-6">
                {item?.title}
              </h3>
              <DangerousHtml
                html={item?.description}
                className="text-sm md:text-lg text-foreground leading-7.5"
              />
            </div>
          ))}
        </div>

        {/* Bottom cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 ">
          {outcomes?.midList2?.map((item) => (
            <div
              key={item?.id}
              className="border-2 border-gray-300 rounded-2xl p-6 "
            >
              <DangerousHtml
                html={item?.description}
                className="text-sm md:text-lg text-foreground leading-7.5 mb-4"
              />

              {item?.buttonText && (
                <ButtonLink
                  link={item?.buttonLink || "#"}
                  isTargetNew={item?.isTarget ? true : false}
                  buttonProps={{
                    variant: "ghost",
                    className:
                      "text-primary hover:text-primary hover:bg-transparent p-0 text-md",
                    arrow: true,
                  }}
                >
                  {item?.buttonText}
                </ButtonLink>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
