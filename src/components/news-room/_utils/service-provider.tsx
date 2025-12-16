import ButtonLink from "@/components/ui/button-link";
import { DangerousHtml } from "@/components/ui/dangerous-html";

const getColSpan = (index: number, total: number) => {
  // 4 items → 2,2
  if (total === 4) return "lg:col-span-3";

  // 5 items → 3,2
  if (total === 5) {
    return index < 3 ? "lg:col-span-2" : "lg:col-span-3";
  }

  // 6 items → 3,3
  if (total >= 6) {
    return index < total / 2 ? "lg:col-span-2" : "lg:col-span-2";
  }

  // fallback
  return "lg:col-span-6";
};

const ServiceProvider = ({
  data,
  isCustom = false,
}: {
  data: CombinedSectionType;
  isCustom?: boolean;
}) => {
  return (
    <div className="container-md space-y-5">
      <h4 className="text-4xl lg:text-6xl font-bold text-foreground mb-10    text-balance">
        {data?.thirdSection?.title}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {data?.thirdSection?.list.map((item, index) => (
          <div
            key={index}
            className={` border border-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow  bg-[#b7dfc652]
        ${getColSpan(index, data?.thirdSection?.list?.length)}
        ${isCustom ? "bg-card" : "bg-[#b7dfc652] "}
        `}
          >
            <DangerousHtml
              html={item?.title}
              className="text-xl font-semibold text-black mb-3"
            />

            <DangerousHtml
              html={item?.description}
              className="text-black leading-relaxed"
            />
          </div>
        ))}
        {data?.button?.text && (
          <div className="col-span-6 flex items-center justify-center">
            <ButtonLink
              link={data?.button?.link || "#"}
              buttonProps={{
                arrow: true,
                className: "hover:bg-transparent ",
                size: "xl",
              }}
            >
              {data?.button?.text}
            </ButtonLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceProvider;
