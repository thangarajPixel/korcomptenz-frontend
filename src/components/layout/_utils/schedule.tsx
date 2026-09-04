import KorcomptenzImage from "@/components/korcomptenz-image";
import ButtonLink from "@/components/ui/button-link";
import { cn } from "@/lib/utils";
import { DangerousHtml } from "@/components/ui/dangerous-html";
// import ConsultationForm from "@/components/layout/_utils/consultation-form";
// import { TurnstileProvider } from "@/components/providers/turnstile-provider";

import { HubspotForm } from "./hubspot-form";
// import { RecaptchaProvider } from "@/components/providers/recaptcha-provider";

const ScheduleCall = ({
  scheduleCall,
  isLastIndex,
}: {
  scheduleCall: ScheduleCallType;
  isLastIndex: boolean;
  essential?: { id: string | number;[key: string]: unknown };
}) => {
  return (
    <div
      className={cn(
        "bg-custom-black lg:min-h-150 flex items-center py-4 md:py-0 px-6",
        {
          "-mb-10 md:-mb-24": isLastIndex,
        },
      )}
      data-debug={"home.schedule-call"}
    >
      <div className="container-md px-6">
        <div className="lg:flex flex-row lg:gap-8 justify-center h-full lg:min-h-150 py-10">
          {/* Left content */}
          <div className="relative z-20 flex flex-col justify-around lg:w-[50%] max-w-[450px]">
            {/* Background Image */}
            <KorcomptenzImage
              src="https://aue2kormlworkspacetest01.blob.core.windows.net/korcomptenz/lets_drive_fdc0c33e0c.png"
              alt="drive"
              width={700}
              height={607}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-full max-w-[550px] opacity-20 z-0"
            />
            <div className="space-y-2">
              <p className="text-2xl font-semibold text-white max-w-xl">
                {isLastIndex
                  ? "Expert-led Transformation. Impact-led Growth"
                  : scheduleCall?.topDescription}
              </p>
              {scheduleCall?.title && (
                <h2 className="text-6xl text-left sm:text-8xl lg:text-7xl font-bold text-white leading-tight">
                  {scheduleCall?.title}
                </h2>
              )}
              <DangerousHtml
                html={scheduleCall?.description}
                className="text-2xl font-semibold text-white max-w-xl"
              />
            </div>
            {scheduleCall?.buttonText?.trim() && (
              // The button itself is only visible at lg+ (`hidden lg:inline-flex`);
              // this wrapper must match so the <a> isn't left as an empty,
              // focusable, zero-size element below that breakpoint. `contents`
              // makes the wrapper a no-op for layout when visible.
              <div className="hidden lg:contents">
                <ButtonLink
                  link={scheduleCall?.link || "#"}
                  buttonProps={{
                    size: "xl",
                    arrow: true,
                    className:
                      "text-4xl inline-flex hover:bg-transparent mt-5 max-w-xl",
                  }}
                >
                  {scheduleCall?.buttonText}
                </ButtonLink>
              </div>
            )}
          </div>

          {/* Form card */}
          <div className="relative flex items-center justify-end lg:mt-10 flex-1">
            <div
              className="relative z-20 w-full max-w-[520px]"
              style={{
                backgroundColor: "#313941",
                padding: "30px",
                borderRadius: "20px",
              }}
            >
              {/* <TurnstileProvider>

              <TurnstileProvider>

              <RecaptchaProvider>

                <ConsultationForm
                  data={
                    scheduleCall?.form?.forms?.[0] ?? {
                      id: "default",
                      title: "Free Consultation",
                    }
                  }
                  formTitle={scheduleCall?.formTitle ?? "Get Free Consultation"}
                  formDescription={scheduleCall?.formDescription}
                  formbuttonText={scheduleCall?.formbuttonText}
                />

              </TurnstileProvider> */}

              <HubspotForm />
            </div>
          </div>

          <ButtonLink
            link={scheduleCall?.link || "#"}
            buttonProps={{
              size: "lg",
              arrow: true,
              className:
                "text-sm hover:bg-transparent mt-5 lg:hidden " +
                "w-full sm:w-1/2 " +
                "flex items-center justify-center text-center py-6",
            }}
          >
            <p className="w-full whitespace-normal break-words">
              {scheduleCall?.buttonText}
            </p>
          </ButtonLink>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
