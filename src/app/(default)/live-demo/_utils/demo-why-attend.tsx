import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";

const DemoWhyAttend = ({
  whyAttendData,
}: {
  whyAttendData: DemoWhyAttendSectionType;
}) => {
  return (
    <section className="flex items-center justify-center  bg-background container-md ">
      <div className="w-full">
        <div className="rounded-3xl bg-light-gray px-8 pt-12 md:px-12 md:py-16 w-full md-12 ">
          {/* Header dividers and title */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-5">
            <div className="flex-1 h-1 bg-gray-400 lg:-ml-12 hidden sm:block"></div>

            <h2 className="text-4xl md:text-7xl  font-semibold text-foreground text-center font-sans max-w-[90%] sm:max-w-[70%] md:max-w-none">
              {whyAttendData.title}
            </h2>

            <div className="flex-1 h-1 bg-gray-400 lg:-mr-12 hidden sm:block"></div>
          </div>

          <DangerousHtml
            html={whyAttendData?.description}
            className="text-foreground text-base md:text-lg leading-relaxed mb-5  max-w-4xl mx-auto text-center font-sans"
          />

          <div
            className={cn(
              "grid   gap-x-8 gap-y-6",
              whyAttendData?.isHasFooter ? "grid-cols-1 " : "grid-cols-2"
            )}
          >
            {whyAttendData?.list.map((benefit, index) => (
              <div key={index} className="flex gap-3">
                {/* Blue arrow icon */}
                <div className="flex-shrink-0 pt-2 ">
                  <span className="text-xl text-blue-600 font-bold ">
                    <KorcomptenzImage
                      src="/assets/thumbnail_arrow_f6130cd06d.png"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
                {/* Benefit text */}

                <DangerousHtml
                  html={benefit?.description}
                  className="text-gray-700 text-lg font-sans leading-relaxed"
                />
              </div>
            ))}
          </div>
        </div>
        {whyAttendData?.isHasFooter && (
          <div className="px-4 md:px-8 lg:mx-24">
            <div
              className="text-white bg-muted p-5 md:p-8 lg:p-10 rounded-3xl lg:rounded-4xl 
                   lg:-mt-20 -mt-20"
            >
              <DangerousHtml
                html={whyAttendData?.footer?.description || ""}
                className="mb-6 md:mb-8 text-sm md:text-base leading-relaxed text-white"
              />

              <KorcomptenzImage
                src={whyAttendData?.footer?.image}
                width={1000}
                height={1000}
                className="w-full h-auto rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default DemoWhyAttend;
