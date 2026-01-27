import ButtonLink from "@/components/ui/button-link";
import { DangerousHtml } from "@/components/ui/dangerous-html";

export default function ClosingSection({
  data,
}: {
  data: DigitialLifeBottomType;
}) {
  return (
    <section className="relative bg-[#2F3942] text-white overflow-hidden">
      {/* TOP WAVE */}
      <svg
        className="absolute top-0 left-0 w-full h-20"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="
      M0,80
      C180,40 360,40 540,70
      C720,100 900,100 1080,70
      C1260,40 1380,40 1440,60
      L1440,0
      L0,0
      Z
    "
          fill="#ffffff"
        />
      </svg>

      {/* CONTENT */}
      <div className="relative container-md py-24">
        <div className="text-left">
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight mb-6">
            {data?.title}
          </h2>

          <DangerousHtml
            html={data?.description}
            className="text-gray-300 text-sm md:text-md  leading-7.5 font-light text-left mb-4"
          />

          {/* CASE STUDIES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data?.bottomCard?.map((study) => (
              <div
                key={study.id}
                className="border border-white/60 rounded-2xl p-4 md:p-8 text-left"
              >
                <DangerousHtml
                  html={study?.description}
                  className="text-[#f7f8f8] text-sm md:text-lg leading-7.5 font-normal mb-6"
                />
                {study?.buttonText && (
                  <ButtonLink
                    link={study?.buttonLink || "#"}
                    isTargetNew={study?.isTarget ? true : false}
                    buttonProps={{
                      variant: "ghost",
                      className:
                        "text-[#f7f8f8] hover:text-[#f7f8f8] hover:bg-transparent p-0 text-md",
                      arrow: true,
                    }}
                  >
                    {study?.buttonText}
                  </ButtonLink>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM WAVE */}
      <svg
        className="absolute bottom-0 left-0 w-full h-20"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
      >
        <path
          d="M0,30 C240,70 480,70 720,40 960,10 1200,10 1440,40 L1440,90 L0,90 Z"
          fill="#ffffff"
        />
      </svg>
    </section>
  );
}
