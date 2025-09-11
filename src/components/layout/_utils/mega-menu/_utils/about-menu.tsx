"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const aboutData = {
  "aboutUs": {
    "title": "About Us",
  },
  "whoWeAre": {
    "title": "Who we are",
    "content": "We are a forward-thinking organization committed to excellence and innovation. Our team brings together diverse expertise to deliver exceptional results for our clients and stakeholders.",
    "image": {
      "src": "/assets/menu/About-menu1 (1).png",
      "alt": "Professional team collaboration"
    }
  },
  "navigationItems": [
    {
      "id": 1,
      "title": "Our story",
      "description": "Learn about our journey and heritage"
    },
    {
      "id": 2,
      "title": "Our journey",
      "description": "Discover our path to success"
    },
    {
      "id": 3,
      "title": "Our vision",
      "description": "See what drives us forward"
    },
    {
      "id": 4,
      "title": "Our mission",
      "description": "Understand our core purpose"
    }
  ],
  "sidebarSections": [
    {
      "id": 1,
      "title": "KORCARES (CSR)",
      "icon": "/assets/menu/About-menu1 (2).png",
      "description": "Corporate Social Responsibility"
    },
    {
      "id": 2,
      "title": "Events",
      "icon": "/assets/menu/About-menu1 (3).png",
      "description": "Company events and activities"
    },
    {
      "id": 3,
      "title": "Newsroom",
      "icon": "/assets/menu/About-menu1 (4).png",
      "description": "Latest news and updates"
    }
  ]
}


const AboutMenu = () => {
  return (
   <div className="bg-white h-[598px] w-full overflow-y-auto">
  <div className="flex h-full">
    {/* Left section */}
    <div className="w-1/3">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="h-full flex flex-col"
      >
        <h1 className="text-5xl font-semibold text-primary mb-8">
          {aboutData.aboutUs.title}
        </h1>
        <span className="relative h-1 border-5 border-b border-primary w-full"></span>
      </motion.div>
    </div>

    {/* Middle section */}
    <div className="w-2/5 bg-[#F3F7F4]">
      <motion.div
        className="h-full rounded-2xl p-6 pt-10 flex flex-col"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Top section */}
        <div className="flex-1 flex">
          {/* Left side */}
          <div className="w-2/5 flex flex-col">
            <div className="flex items-center mb-4">
              <h2 className="text-md font-normal text-primary mr-3">
                {aboutData.whoWeAre.title}
              </h2>
              <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="w-3/5 pl-6">
            <div className="space-y-3">
              {aboutData.navigationItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-custom-gray text-sm font-medium">
                    {item.title}
                  </span>
                  <ChevronRight className="w-3 h-2 text-custom-gray bg-white group-hover:text-primary transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom image section */}
        <div className="mt-6 flex justify-center">
          <div className="relative w-3/5 h-full max-h-[200px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={aboutData.whoWeAre.image.src || "/placeholder.svg"}
              alt={aboutData.whoWeAre.image.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </div>

    {/* Right section */}
<div className="w-[26.67%] ps-8 ">
  <div className="h-full flex flex-col gap-4 ">
    {aboutData.sidebarSections.map((section, index) => (
      <motion.div
        key={section.id}
        className="flex-1 bg-gray-100 rounded-2xl p-4 flex items-center hover:shadow-lg transition-all duration-300 cursor-pointer hover:bg-gray-200"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
        whileHover={{ scale: 1.05 }}
      >
        {/* Text - 50% */}
        <div className="w-1/2 pr-2 grid items-center gap-3 bg-[#F3F7F4]"><div>
          <h3 className="text-md font-normal text-primary leading-7">
            {section.title}
          </h3></div>
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <ChevronRight className="w-4 h-4 text-white" />
              </div>
        </div>

        {/* Image - 50% and max height */}
        <div className="relative w-1/2 h-full flex items-center justify-center">
          <Image
            src={section.icon || "/placeholder.svg"}
            alt={`${section.title} icon`}
            fill
            className="object-contain"
          />
        </div>
      </motion.div>
    ))}
  </div>
</div>


  </div>
</div>

  )
}

export default AboutMenu
