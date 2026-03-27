import React, { useMemo } from "react";
import KorcomptenzImage from "@/components/korcomptenz-image";
import ButtonLink from "@/components/ui/button-link";
import { cn } from "@/lib/utils";
import { DangerousHtml } from "@/components/ui/dangerous-html";

const ScheduleCall = ({
  scheduleCall,
  isLastIndex,
}: {
  scheduleCall: ScheduleCallType;
  isLastIndex: boolean;
}) => {
  const containerClasses = useMemo(
    () =>
      cn("bg-custom-black lg:min-h-150  flex items-center py-4 md:py-0", {
        "-mb-10 md:-mb-24": isLastIndex,
      }),
    [isLastIndex],
  );

  const titleText = useMemo(
    () =>
      isLastIndex
        ? "Expert-led Transformation. Impact-led Growth"
        : scheduleCall?.topDescription,
    [isLastIndex, scheduleCall?.topDescription],
  );

  const buttonLink = useMemo(
    () => scheduleCall?.link || "#",
    [scheduleCall?.link],
  );
  const buttonText = useMemo(
    () => scheduleCall?.buttonText,
    [scheduleCall?.buttonText],
  );

  return (
    <section className={containerClasses} data-debug={"home.schedule-call"}>
      <div className="container-md">
        <div className="lg:flex flex-row  lg:gap-8 justify-center h-full lg:min-h-150 py-10">
          {/* Left content */}
          <div className="relative z-20 flex flex-col justify-around lg:ml-0">
            <div className="space-y-2">
              <p className="text-2xl font-semibold text-white max-w-xl">
                {titleText}
              </p>
              <h2 className="text-6xl text-left sm:text-8xl lg:text-7xl  font-bold text-white leading-tight ">
                {scheduleCall?.title}
              </h2>

              <DangerousHtml
                html={scheduleCall?.description}
                className="text-2xl font-semibold text-white max-w-xl"
              />
            </div>
            <ButtonLink
              link={buttonLink}
              buttonProps={{
                size: "xl",
                arrow: true,
                className:
                  "text-4xl hidden lg:inline-flex hover:bg-transparent mt-5",
              }}
            >
              {buttonText}
            </ButtonLink>
          </div>
          <div className="flex items-center justify-end space-x-2 lg:mt-10">
            <KorcomptenzImage
              src="https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/lets_drive_fdc0c33e0c.png"
              alt="drive"
              className="w-50 lg:w-137.5 h-auto rounded-2xl"
              width={1112}
              height={607}
              priority={false}
            />
          </div>
          <ButtonLink
            link={buttonLink}
            buttonProps={{
              size: "lg",
              arrow: true,
              className:
                "text-sm hover:bg-transparent mt-5 lg:hidden " +
                "w-full sm:w-1/2 " +
                "flex items-center justify-center text-center py-6",
            }}
          >
            <p className="w-full whitespace-normal wrap-break-word">
              {buttonText}
            </p>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCall;
