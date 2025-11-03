"use client"

import { useState } from "react"
import KorcomptenzImage from "../korcomptenz-image"

type TimelineStory = {
  year: number
  title: string
  description: string
  badge?: string
}

const TIMELINE_DATA: TimelineStory[] = [
  {
    year: 2003,
    title: "2003",
    description: "Founded with a vision to transform how businesses operate and grow.",
    badge: "Inception",
  },
  {
    year: 2005,
    title: "2005",
    description: "Expanded our services and established our first strategic partnerships.",
    badge: "Growth",
  },
  {
    year: 2010,
    title: "2010",
    description: "Became a trusted partner for enterprise solutions across multiple industries.",
    badge: "Expansion",
  },
  {
    year: 2013,
    title: "2013",
    description: "Pioneered AI-driven business intelligence and analytics solutions.",
    badge: "Innovation",
  },
  {
    year: 2018,
    title: "2018",
    description: "Achieved Microsoft Gold Partner status through excellence and dedication.",
    badge: "Recognition",
  },
  {
    year: 2021,
    title: "2021",
    description: "Received industry recognition for our commitment to digital transformation.",
    badge: "Awards",
  },
  {
    year: 2025,
    title: "2025",
    description:
      'This year, we built with intent- and it showed. ISG spotlighted our strength in AI services. Forrester named us a Notable Vendor for Microsoft Business Applications. And the Stevie Award for Best CSR Strategy — "Empathy-led transformation, impact-led change" — recognized the heart behind our work.',
    badge: "Excellence",
  },
]

const OurStory = () => {
  const [activeYear, setActiveYear] = useState(2025)
  // const activeData = TIMELINE_DATA.find((d) => d.year === activeYear) || TIMELINE_DATA[TIMELINE_DATA.length - 1]
  return (
    <div className="w-full px-2 md:px-0">
      {/* Hero Section */}
      <div className="relative aspect-[627/500] md:aspect-[1443/696]">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 rounded-4xl md:rounded-none"
          style={{
            backgroundImage: "url(/assets/tempory/f27fd965a14e9cdc20b9e1e1049c0fc2435c4485.png)",
            backgroundSize: "cover",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            objectFit: "cover"
          }}
        >
          <div className="absolute rounded-4xl md:rounded-none inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 size-full  flex flex-col  justify-center  gap-0 md:gap-12 lg:gap-16 xl:gap-24">
          <div className="container-md ">
            <div className="flex flex-row md:items-start md:gap-12 lg:gap-16 h-full">
              {/* Year 2025 - Large Vertical Text */}
              <div className="mb-8 md:mb-0 md:flex md:items-center">
                <h2
                  className="text-[80px] md:text-[100px] font-bold lg:text-[140px] xl:text-[160px] text-primary leading-[0.85] opacity-50 tracking-tight md:-rotate-0 [writing-mode:vertical-lr] [transform:rotate(180deg)]"
                >
                  {activeYear}
                </h2>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col gap-6 md:gap-8 h-full justify-end">

                {/* Partner Badges */}
                <div className="flex items-center gap-4 flex-wrap">
                  <KorcomptenzImage
                    src="/assets/tempory/Group-33218.png"
                    alt="Forrester"
                    width={1000}
                    height={1000}
                    className="w-60 h-auto object-contain"
                  />
                </div>

                {/* Achievement Text */}
                <div className="text-white ">
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed line-clamp-4 md:line-clamp-none">
                    This year, we built with intent- and it showed. ISO spotlighted our strength in AI services.
                    Forrester named us a Notable Vendor for Microsoft Business Applications. And the Stevie Award
                    for Best CSR Strategy — "Empathy-led transformation, impact-led change" — recognized the
                    heart behind our work.
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className="w-full">
            <div className="relative">
              <div className="h-0.5 bg-primary" />
              <div className="absolute top-[-6px] left-0 right-0 container-md flex justify-between items-start gap-2">
                {TIMELINE_DATA.map((item) => (
                  <button
                    key={item.year}
                    onClick={() => setActiveYear(item.year)}
                    className="flex flex-col items-center group cursor-pointer flex-1"
                  >
                    {/* Year Marker */}
                    <div
                      className={`w-7 h-4 border border-primary rounded-full mb-4 transition-all duration-300 transform 
                      ${activeYear === item.year
                          ? "bg-primary "
                          : "bg-slate-600 hover:bg-slate-500"
                        }`}
                    />

                    {/* Year Label */}
                    <span
                      className={`text-xs md:text-sm transition-all text-white duration-300 ${activeYear === item.year
                        ? "text-base md:text-lg"
                        : "opacity-80"
                        }`}
                    >
                      {item.year}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OurStory