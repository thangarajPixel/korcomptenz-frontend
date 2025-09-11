"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

// Sample insights data structure
const insightsData = {
  title: "Insights",
  heroImage: "/assets/menu/Insight-menu.png",
  categories: [
    {
      id: "whitepapers",
      title: "Whitepapers",
      description: "In-depth research and analysis",
    },
    {
      id: "blogs",
      title: "Blogs",
      description: "Latest industry thoughts and trends",
    },
    {
      id: "ebooks",
      title: "eBooks",
      description: "Comprehensive guides and resources",
    },
    {
      id: "infographics",
      title: "Infographics",
      description: "Visual data and insights",
    },
    {
      id: "brochures",
      title: "Brochures",
      description: "Product and service overviews",
    },
    {
      id: "webinars",
      title: "Webinars",
      description: "Live and recorded sessions",
    },
    {
      id: "podcasts",
      title: "Podcasts",
      description: "Audio content and discussions",
    },
  ],
};

const InsightsMenu = () => {
  return (
<div className="bg-white w-full scroll-smooth">
  <div className="mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-[43%_57%] gap-8 h-[574px] items-stretch">
      
      {/* Left side - Hero Image */}
      <motion.div
        className="relative h-full"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
          <Image
            src={insightsData.heroImage || "/placeholder.svg"}
            alt="Professional business insights"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Right side - Menu Items */}
      <motion.div
        className="flex flex-col justify-between h-full bg-white px-8 py-6"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {insightsData.categories.map((category, index) => (
          <motion.div
            key={category.id}
            className="group bg-white  h-16 transition-all duration-300 cursor-pointer border-b border-[#D2D2D2]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-normal text-custom-gray group-hover:text-primary">
                  {category.title}
                </h3>
              </div>
              <div className="ml-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center 
                                hover:bg-white hover:border hover:border-primary transition-colors duration-200">
                  <ChevronRight className="w-5 h-5 text-white hover:text-primary transition-colors duration-200" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </div>
</div>




  );
};

export default InsightsMenu;
