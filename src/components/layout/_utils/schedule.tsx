import React from "react";
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
  return (
    <section
      className={cn(
        "bg-custom-black lg:min-h-[600px]  flex items-center py-4 md:py-0",
        {
          "mb-[-40px] md:mb-[-96px]": isLastIndex,
        }
      )}
      data-debug={"home.schedule-call"}
    >
      <div className="container-md">
        <div className="lg:flex flex-row  lg:gap-8 justify-center h-full lg:min-h-[600px] md:py-10">
          {/* Left content */}
          <div className="relative z-20 flex flex-col justify-around lg:ml-0">
            <div className="space-y-2">
              <p className="text-2xl font-semibold text-white max-w-xl">
                {scheduleCall?.topDescription}
              </p>
              <h2 className="text-6xl text-left sm:text-8xl lg:text-7xl  font-bold text-white leading-tight whitespace-pre-wrap">
                {scheduleCall?.title}
              </h2>

              <DangerousHtml
                html={scheduleCall?.description}
                className="text-2xl font-semibold text-white max-w-xl"
              />
            </div>
            <ButtonLink
              link={scheduleCall?.link || "#"}
              buttonProps={{
                size: "xl",
                arrow: true,
                className:
                  "text-4xl hidden lg:inline-flex hover:bg-transparent mt-5",
              }}
            >
              {scheduleCall?.buttonText}
            </ButtonLink>
          </div>
          <div className="flex items-center justify-end space-x-2 lg:mt-10">
            <KorcomptenzImage
              src="https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/lets_drive_fdc0c33e0c.png"
              alt="drive"
              className="w-[200px] lg:w-[550px] h-auto rounded-2xl"
              width={1112}
              height={607}
            />
          </div>
          <ButtonLink
            link={scheduleCall?.link || "#"}
            buttonProps={{
              size: "lg",
              arrow: true,
              className:
                "text-sm py-3 lg:hidden hover:bg-transparent mt-5 lg:mt-48 w-full md:w-1/2 flex items-center justify-center text-center py-8",
            }}
          >
            <p className="w-full whitespace-normal break-words">
              {scheduleCall?.buttonText}
            </p>
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCall;
