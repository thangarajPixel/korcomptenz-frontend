"use client";

import React from "react";
import KorcomptenzImage from "@/components/korcomptenz-image";

type RichTextChild = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
};

type RichTextBlocks = {
  type: string;
  children: RichTextChild[];
};

const renderRichText = (
  content?: RichTextBlocks[]
): React.ReactNode => {
  if (!Array.isArray(content)) return null;

  return content.map((block, index) => {
    if (block.type === "paragraph") {
      return (
        <p key={index}>
          {block.children
            ?.map((child) => child.text)
            .join("")}
        </p>
      );
    }

    if (block.type === "list") {
      return (
        <ul
          key={index}
          className="list-disc pl-5"
        >
          {block.children?.map(
            (child, childIndex) => (
              <li key={childIndex}>
                {child.text}
              </li>
            )
          )}
        </ul>
      );
    }

    return null;
  });
};

interface GridSystemProps {
  data: GridSystemType;
}

const GridSystem = ({
  data,
}: GridSystemProps) => {

  return (
    <section className="py-16">
      <div className="container-md">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          {data.title && (
            <h2 className="font-bold">
              {data.title}
            </h2>
          )}
          {data.description && (
            <div className="text-lg text-slate-600">
              {renderRichText(
                data.description as RichTextBlocks[]
              )}
            </div>
          )}
        </div>
        <div className="pt-12">
          <div className="relative grid gap-8 lg:grid-cols-2">
            {(data.centericon ||
              data.centertitle ||
              data.centerdescription) && (
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                  <div className="relative flex h-[220px] w-[220px] items-center justify-center rounded-full bg-white shadow-sm">
                    <div className="absolute inset-0 rounded-full border-[10px] border-[#D9F1EB]" />
                    <div className="absolute inset-[10px] rounded-full border-[2px] border-[#DCE8FF]" />
                    <div className="relative z-10 flex flex-col items-center px-6 text-center">
                      {data.centericon && (
                        <KorcomptenzImage
                          src={data.centericon}
                          width={60}
                          height={60}
                          className="mb-3 h-[60px] w-[60px] object-contain"
                        />
                      )}
                      {data.centertitle && (
                        <h3 className="text-[16px] font-bold uppercase leading-tight text-[#0A1733]">
                          {data.centertitle}
                        </h3>
                      )}
                      {data.centerdescription && (
                        <div className="mt-2 text-sm text-[#4B5563]">
                          {renderRichText(
                            data.centerdescription as RichTextBlocks[]
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            {data.griditemlist?.map(
              (item, index) => {
                const isLeft =
                  index === 0;
                return (
                  <div
                    key={index}
                    className={`rounded-[32px] border p-8 lg:p-10 ${isLeft
                      ? "lg:mr-32 border-[#d7eee7] bg-[#f4fbf8]"
                      : "lg:ml-32 border-[#d9e5ff] bg-[#f5f8ff]"
                      }`}
                  >
                    <div className="space-y-8">
                      {/* Panel Header */}

                      <div className="flex items-start gap-4">
                        {item.icon && (
                          <div
                            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${isLeft
                              ? "bg-[#26a17c]"
                              : "bg-[#2563eb]"
                              }`}
                          >
                            <KorcomptenzImage
                              src={item.icon}
                              width={36}
                              height={36}
                              className="h-9 w-9 object-contain"
                            />
                          </div>
                        )}

                        <div className="space-y-2">
                          {item.title && (
                            <h3 className="text-2xl font-bold text-slate-900">
                              {item.title}
                            </h3>
                          )}
                          {item.griddescription && (
                            <div className="text-slate-600">
                              {renderRichText(
                                item.griddescription as RichTextBlocks[]
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                      {item.listitems &&
                        item.listitems.length >
                        0 && (
                          <div className="space-y-6">
                            {item.listitems.map(
                              (
                                feature,
                                idx
                              ) => (
                                <div
                                  key={idx}
                                  className="flex gap-4"
                                >
                                  {feature.image && (
                                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${isLeft ? "bg-[#f5fcf9]" : "bg-[#f7faff]"}`}>
                                      <KorcomptenzImage
                                        src={feature.image}
                                        width={24}
                                        height={24}
                                        className="h-10 w-10 object-contain"
                                      />
                                    </div>
                                  )}
                                  <div className="space-y-2">
                                    {feature.title && (
                                      <h4 className={`font-semibold ${isLeft ? "text-[#26a17c]" : "text-[#2563eb]"}`} >
                                        {feature.title}
                                      </h4>
                                    )}

                                    {feature.listdescription && (
                                      <div className="text-sm leading-6 text-slate-600">
                                        {renderRichText(
                                          feature.listdescription as RichTextBlocks[]
                                        )}
                                      </div>
                                    )}
                                  </div>
                                </div>
                              )
                            )}
                          </div>
                        )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
          {data.footertext && (
            <div className="mt-10 rounded-2xl border border-[#E6E6E6] bg-[#f7f7f7] px-6 py-5">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="lg:w-[220px] shrink-0">
                  <h5 className="text-[22px] font-bold leading-tight text-[#1A1A1A]">
                    {data.footertext}
                  </h5>
                </div>
                <div className="hidden lg:block h-14 w-px bg-[#D9D9D9]" />
                <div className="grid flex-1 grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
                  {data.footergridlist?.map((item, index) => (
                    <div key={index} className="relative flex items-center gap-3 px-4">
                      {item.icon && (
                        <KorcomptenzImage
                          src={item.icon}
                          width={40}
                          height={40}
                          className="h-10 w-10 shrink-0 object-contain"
                        />
                      )}
                      {item.footerdescription && (
                        <div className="text-sm font-medium leading-snug text-[#2F2F2F]">
                          {renderRichText(
                            item.footerdescription as RichTextBlocks[]
                          )}
                        </div>
                      )}
                      {index !== (data.footergridlist?.length ?? 0) - 1 && (
                        <div className="absolute right-0 top-1/2 hidden h-12 w-px -translate-y-1/2 bg-[#D9D9D9] lg:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GridSystem;