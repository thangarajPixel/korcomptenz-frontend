import React from "react";
import KorcomptenzImage from "@/components/korcomptenz-image";

type RichTextNode = {
  type?: string;
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  url?: string;
  href?: string;
  target?: string;
  level?: number;
  format?: string;
  children?: RichTextNode[];
};
const richTextToHtml = (content: unknown): string => {
  if (!content) return "";

  if (typeof content === "string") {
    return content;
  }

  if (!Array.isArray(content)) {
    return String(content);
  }

  const renderChildren = (children: RichTextNode[] = []): string => {
    return children
      .map((child) => {
        if (child.text !== undefined) {
          let text = child.text;

          if (child.bold) text = `<strong>${text}</strong>`;
          if (child.italic) text = `<em>${text}</em>`;
          if (child.underline) text = `<u>${text}</u>`;

          return text;
        }

        if (child.type === "link") {
          const href = child.url || child.href || "#";
          const target = child.target || "_self";

          return `<a
            href="${href}"
            target="${target}"
            ${target === "_blank"
              ? 'rel="noopener noreferrer"'
              : ""
            }
            style="color:#26a17c;text-decoration:underline;text-decoration-color:#26a17c;"
          >
            ${renderChildren(child.children)}
          </a>`;
        }

        if (child.children) {
          return renderChildren(child.children);
        }

        return "";
      })
      .join("");
  };

  return (content as RichTextNode[])
    .map((block) => {
      switch (block.type) {
        case "paragraph":
          return `<p>${renderChildren(block.children)}</p>`;

        case "heading":
          return `<h${block.level || 2}>${renderChildren(
            block.children
          )}</h${block.level || 2}>`;

        case "list": {
          const tag = block.format === "ordered" ? "ol" : "ul";

          return `<${tag} style="padding-left:1.5rem;margin:0.75rem 0;list-style-type:${tag === "ol" ? "decimal" : "disc"
            }">
            ${(block.children ?? [])
              .map(
                (item) =>
                  `<li style="margin-bottom:0.5rem;">${renderChildren(
                    item.children
                  )}</li>`
              )
              .join("")}
          </${tag}>`;
        }

        case "list-item":
          return `<li>${renderChildren(block.children)}</li>`;

        default:
          return renderChildren(block.children);
      }
    })
    .join("");
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

          {data?.title && <h2 className="font-bold">{data.title}</h2>}

          <div
            className="text-lg text-slate-600"
            dangerouslySetInnerHTML={{
              __html: richTextToHtml(data.description),
            }}
          />
        </div>

        {data?.gridlist?.length > 0 && (
          <div className="grid gap-6 lg:grid-cols-3 items-stretch">
            {data.gridlist.map((step, index) => (
              <div key={index} className="space-y-4 flex flex-col">
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
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm h-full flex flex-col"
                  >
                    <div className="flex flex-col h-full space-y-4">
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

                      <div
                        className="text-lg text-slate-600"
                        dangerouslySetInnerHTML={{
                          __html: richTextToHtml(item.griddescription),
                        }}
                      />
                      {item.checklistitems?.length > 0 && (
                        <ul className="space-y-3">
                          {item.checklistitems.map((check, checkIndex) => (
                            <li
                              key={checkIndex}
                              className="flex items-start gap-3 rounded-lg bg-slate-50 p-3 list-none"
                            >
                              <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#26a17c]">
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

                              <div
                                className="text-sm flex-1"
                                dangerouslySetInnerHTML={{
                                  __html: richTextToHtml(check.description),
                                }}
                              />
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-auto pt-4">
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
