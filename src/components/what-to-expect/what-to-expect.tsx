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
    <div className="relative flex items-center justify-between mb-2 md:mb-0">
      {/* LEFT CARD */}
      {isLeft && (
        <div
          className="relative max-w-[350px] rounded-[26px] border border-[#B7AFFF] p-8 shadow-[0px_2px_10px_rgba(124,58,237,0.06)] transition-all duration-300 hover:shadow-lg 
          before:absolute before:content-[''] before:w-[200px] before:h-[1px] before:bg-black before:top-[50%] before:left-[360px] after:content-[''] after:absolute after:top-1/2 after:right-[-25px]   after:-translate-y-1/2 after:w-[15px] after:h-[15px] after:rounded-full after:bg-black"
          style={{
            background:
              "radial-gradient(circle at top left, #FFFFFF 0%, #F6F4FF 45%, #EEE9FF 100%)",
          }}
        >
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      )}

      {/* EMPTY SPACE (for alignment) */}
      {!isLeft && <div className="max-w-[350px]" />}

      {/* CENTER STEP */}
      <div
        className={`absolute top-1/2 top-[24%] z-20 ${
          isLeft ? "left-[44%] -translate-x-1/2" : "right-[44%] translate-x-1/2"
        }`}
      >
        <h2
          className="
    text-[24px]
    md:text-[30px]
    lg:text-[40px]
    font-black
    leading-none
    tracking-[-2px]
    text-transparent
    whitespace-nowrap
  "
          style={{
            WebkitTextStroke: "1.5px #2B2B2B",
            paintOrder: "stroke fill",
          }}
        >
          {step}
        </h2>
      </div>

      {/* RIGHT CARD */}
      {!isLeft && (
        <div
          className="relative max-w-[350px] rounded-[26px] border border-[#B7AFFF] p-8 shadow-[0px_2px_10px_rgba(124,58,237,0.06)] transition-all duration-300 hover:shadow-lg 
          before:absolute before:content-[''] before:w-[200px] before:h-[1px] before:bg-black before:top-[50%] before:right-[360px] after:content-[''] after:absolute after:top-1/2 after:left-[-25px] after:-translate-y-1/2 after:w-[15px] after:h-[15px] after:rounded-full after:bg-black"
          style={{
            background:
              "radial-gradient(circle at top left, #FFFFFF 0%, #F6F4FF 45%, #EEE9FF 100%)",
          }}
        >
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      )}
    </div>
  );
}

export default function WhattoExpect({ data }: { data: WhattoExpectType }) {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto">
        {/* Header */}
        <div className="mb-12">
          <span className="inline-block px-4 py-1 border rounded-full mb-4">
            What to Expect
          </span>

          <h2 className="text-5xl md:text-6xl font-semibold text-[#1e2939] leading-8">
            {data.title}
          </h2>
          <p className="text-gray-600 mt-4">{data.description}</p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            className="
    absolute
    left-1/2
    top-0
    h-full
    w-[1px]
    bg-black
    -translate-x-1/2

    before:content-['']
    before:absolute
    before:top-0
    before:left-1/2
    before:-translate-x-1/2
    before:-translate-y-1/2
    before:w-[15px]
    before:h-[15px]
    before:rounded-full
    before:bg-black

    after:content-['']
    after:absolute
    after:bottom-0
    after:left-1/2
    after:-translate-x-1/2
    after:translate-y-1/2
    after:w-[15px]
    after:h-[15px]
    after:rounded-full
    after:bg-black
  "
          />

          {data?.gridlisting?.map((item, index) => (
            <TimelineItem
              key={item.id || index}
              side={index % 2 === 0 ? "left" : "right"}
              step={`Step ${index + 1}`}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
