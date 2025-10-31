"use client"

import { useState } from "react"

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
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-auto ">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0  "
          style={{
            backgroundImage: "url(/assets/tempory/f27fd965a14e9cdc20b9e1e1049c0fc2435c4485.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            objectFit: "cover"
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-start md:gap-12 lg:gap-16">

              {/* Year 2025 - Large Vertical Text */}
              <div className="mb-8 md:mb-0 md:flex md:items-center">
                <h2
                  className="text-[80px] md:text-[100px] font-bold lg:text-[140px] xl:text-[160px] text-primary leading-[0.85] opacity-50 tracking-tight md:-rotate-0 [writing-mode:vertical-lr] [transform:rotate(180deg)]"
                // style={{
                //   // writingMode: 'sideways-lr',
                //   writingMode: 'vertical-lr',
                //   transform: 'rotate(180deg)',
                // }}
                >
                  2025
                </h2>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col gap-6 md:gap-8">

                {/* Partner Badges */}
                <div className="flex items-center gap-4 flex-wrap">
                  {/* <ImageWithFallback
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=120&h=120&fit=crop"
                    alt="Award Badge"
                    className="h-16 md:h-20 w-auto object-contain"
                  />
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&h=80&fit=crop"
                    alt="Microsoft Gold Partner"
                    className="h-12 md:h-14 w-auto object-contain"
                  /> */}
                </div>

                {/* Achievement Text */}
                <div className="text-white">
                  <p className="text-base md:text-lg lg:text-xl leading-relaxed">
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
            <div className="">
              {/* Timeline Line and Years */}
              <div className="relative">
                {/* Horizontal Line */}
                <div className="h-0.5 bg-primary" />

                {/* Years Container */}
                <div className="absolute top-[-6px] left-0 right-0 max-w-6xl mx-auto flex justify-between items-start gap-2">
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
    </div>
  )
}

export default OurStory