import { DangerousHtml } from "../ui/dangerous-html";
import { cn } from "@/lib/utils";
import ButtonLink from "../ui/button-link";
import { GlobalForm } from "../global-form";

const BuildDemo = ({
  buildData,
}: {
  buildData: DemoBuildConnectSectionType;
}) => {
  return (
    <section data-debug="page-componets.build-data">
      <div className="container-md">
        {buildData?.isSwap && (
          <h2 className=" text-6xl md:text-9xl font-bold text-foreground leading-10 lg:leading-15">
            {buildData?.title}
          </h2>
        )}
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-2 gap-x-20",
            buildData?.isSwap && "mt-3"
          )}
        >
          <div
            className={cn("px-5 space-y-3 ", buildData?.isSwap && "order-2")}
          >
            {!buildData?.isSwap && (
              <h2 className="text-6xl md:text-9xl font-bold text-foreground leading-10 lg:leading-15">
                {buildData?.title}
              </h2>
            )}
            <DangerousHtml
              html={buildData?.description}
              className="text-md md:text-2xl text-foreground leading-7 break-words"
            />
            {buildData?.buttonText && (
              <ButtonLink
                link={buildData?.link || "#"}
                buttonProps={{
                  size: "xl",
                  arrow: true,
                  className: "items-center",
                }}
              >
                {buildData?.buttonText || "Watch Now"}
              </ButtonLink>
            )}
          </div>

          {buildData?.form && (
            <GlobalForm form={buildData.form} item={buildData?.item} />
          )}
        </div>
      </div>
    </section>
  );
};

export default BuildDemo;
