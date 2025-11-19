import React from "react";
import KorcomptenzImage from "@/components/korcomptenz-image";
import ButtonLink from "@/components/ui/button-link";

const ScheduleCall = ({ scheduleCall }: { scheduleCall: ScheduleCallType }) => {
  return (
    <section
      className="bg-custom-black py-16  lg:min-h-[600px] "
      data-debug={"home.schedule-call"}
    >
      <div className="container-md">
        <div className="lg:flex flex-row  lg:gap-8 ">
          {/* Left content */}
          <div className="relative z-20 flex flex-col justify-around lg:ml-0">
            <div className="space-y-2">
              <p className="text-2xl font-semibold text-custom-green-1">{scheduleCall?.topDescription}</p>
              <h2 className="text-6xl text-left sm:text-8xl lg:text-7xl font-bold text-custom-green-1 leading-tight whitespace-pre-wrap">
                {scheduleCall?.title}
              </h2>
              <p className="text-2xl font-semibold text-custom-green-1">{scheduleCall?.description}</p>
            </div>
            <ButtonLink link={scheduleCall?.link || "#"}
              buttonProps={{
                size: "xl",
                arrow: true,
                className: "text-4xl hidden lg:inline-flex hover:bg-transparent"
              }}
            >
              {scheduleCall?.buttonText}
            </ButtonLink>
          </div>

          <div className="flex items-center space-x-2 -mt-25 md:ml-0 ml-30 lg:ml-0 lg:mr-10 lg:mt-10">
            <KorcomptenzImage
              src="https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/lets_drive_fdc0c33e0c.png"
              alt="drive"
              className="w-full lg:w-[550px] h-auto rounded-2xl"
              width={1112}
              height={607}
            />
          </div>
          <ButtonLink link={scheduleCall?.link || "#"}
            buttonProps={{
              size: "xl",
              arrow: true,
              className: "text-4xl py-3 lg:hidden hover:bg-transparent lg:mt-48"
            }}
          >
            {scheduleCall?.buttonText}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default ScheduleCall;
