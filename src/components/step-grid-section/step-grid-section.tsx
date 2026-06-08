import React from "react";
import KorcomptenzImage from "@/components/korcomptenz-image";

type RichTextChild = {
  text: string;
};

type RichTextBlock = {
  type: string;
  children?: RichTextChild[];
};

const renderRichText = (content: RichTextBlock[] | undefined) => {
  if (!Array.isArray(content)) return null;

  return content.map((block, index) => {
    if (block.type === "paragraph") {
      return (
        <p key={index}>
          {block.children?.map((child) => child.text).join("")}
        </p>
      );
    }

    return null;
  });
};

const StepGridSection = ({ data }: { data: StepGridSectionType }) => {
  return (
    <section>
      <div className="container-md space-y-4">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          {data?.highlighttext && (
            <p className="font-semibold uppercase tracking-[4px] text-[#26a17c]">
              {data.highlighttext}
            </p>
          )}

          {data?.title && (
            <h2 className="font-bold">
              {data.title}
            </h2>
          )}

          <div className="text-lg text-slate-600">
            {renderRichText(data.description)}
          </div>
        </div>

        {data?.gridlist?.length > 0 && (
          <div className="grid gap-6 lg:grid-cols-3">
            {data.gridlist.map((step, index) => (
              <div key={index} className="space-y-4">
                <div className="flex items-center justify-center gap-3">
                  {step.number > 0 && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#26a17c] text-sm font-semibold text-white">
                      {step.number}
                    </div>
                  )}

                  <span className="font-semibold text-[#26a17c]">
                    {step.steptitle}
                  </span>
                </div>

                {step.griddetails?.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        {item.image && (
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-green-200 bg-gradient-to-br from-green-100 via-green-50 to-emerald-100">
                            <KorcomptenzImage
                              src={item.image}
                              width={56}
                              height={56}
                              className="h-10 w-10 object-contain"
                            />
                          </div>
                        )}

                        {item.gridtitle && (
                          <h3 className="text-2xl font-semibold">
                            {item.gridtitle}
                          </h3>
                        )}
                      </div>

                      <div className="space-y-4">
                        {renderRichText(item.griddescription)}
                      </div>

                      {item.checklistitems?.length > 0 && (
                        <div className="space-y-3">
                          {item.checklistitems.map((check, checkIndex) => (
                            <div
                              key={checkIndex}
                              className="flex items-start gap-3 rounded-lg bg-slate-50 p-3"
                            >
                              <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full border border-[#26a17c]">
                                <svg
                                  className="h-3 w-3 text-[#26a17c]"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M5 13l4 4L19 7" />
                                </svg>
                              </div>

                              <div className="text-sm">
                                {renderRichText(check.description)}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {item.buttonText && (
                        <a
                          href={item.buttonLink}
                          className="inline-flex items-center gap-2 font-semibold text-[#26a17c] transition-all hover:gap-3"
                        >
                          {item.buttonText}

                          <svg
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 12h14" />
                            <path d="M13 5l7 7-7 7" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default StepGridSection;