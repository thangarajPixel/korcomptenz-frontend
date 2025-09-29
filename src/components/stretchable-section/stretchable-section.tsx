"use client"
import React, { useState } from 'react'
import StretchableSectionCard from './_utils/stretchable-card'

const data = [
  {
    title: "KOR SmartForge",
    description: "Accelerate development with intelligent automation and streamlined workflows.",
    image: "/assets/lets-drive.png"
  },
  {
    title: "KOR BankIQ",
    description: "Improve customer loyalty with Microsoft Fabric and AI-assisted retail banking solutions.",
    image: "/assets/lets-drive.png"
  },
  {
    title: "KOR ESGenius",
    description: "Automate compliance and simplify ESG reporting with end-to-end efficiency.",
    image: "/assets/lets-drive.png"
  }
]


const StretchableSection = ({ item }: { item: StretchableSectionType }) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(data[1].title.toLowerCase())
  return (
    <div className="container-md">
      <h4 className="text-4xl lg:text-6xl font-bold text-foreground mb-12 lg:mb-16 max-w-4xl text-balance">
        {item.title}
      </h4>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-4">
        {item.list.map((item) => (
          <StretchableSectionCard
            key={`stretchable-section-card-${item.title.toLowerCase()}`}
            open={hoveredCard === item.title.toLowerCase()}
            props={{
              onMouseEnter: () => setHoveredCard(item.title.toLowerCase()),
              onMouseLeave: () => setHoveredCard(data[1].title.toLowerCase())
            }}
            image={item.image}
            data={item}
          />
        ))}
      </div>
    </div>
  )
}

export default StretchableSection