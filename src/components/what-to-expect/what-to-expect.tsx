"use client";

function TimelineItem({
  side,
  step,
  title,
  description,
}: {
  side: "left" | "right";
  step: string;
  title: string;
  description: string;
}) {
  const isLeft = side === "left";

  return (
    <div className="relative flex items-center justify-between mb-16">
      {/* LEFT CARD */}
      {isLeft && (
        <div className="w-[45%] bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      )}

      {/* EMPTY SPACE (for alignment) */}
      {!isLeft && <div className="w-[45%]" />}

      {/* CENTER DOT + STEP */}
      <div className="relative flex flex-col items-center w-[10%]">
        <div className="w-3 h-3 bg-gray-700 rounded-full z-10" />

        <span className="text-gray-400 font-semibold mt-2">{step}</span>
      </div>

      {/* RIGHT CARD */}
      {!isLeft && (
        <div className="w-[45%] bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      )}
    </div>
  );
}

export default function WhattoExpect({ data }: { data: WhattoExpectType }) {
  return (
    <section className="bg-[#f7f7f7] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1 text-sm border rounded-full mb-4">
            What to Expect
          </span>

          <h2 className="text-4xl font-semibold">{data.title}</h2>

          <p className="text-gray-600 mt-4 max-w-2xl">{data.description}</p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 -translate-x-1/2" />

          {data?.gridlisting?.map((item, index) => (
            <TimelineItem
              key={item.id || index}
              side={index % 2 === 0 ? "left" : "right"} // alternate sides
              step={`Step ${index + 1}`} // dynamic step
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
