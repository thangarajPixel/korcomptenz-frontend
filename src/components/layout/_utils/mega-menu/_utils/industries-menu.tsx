"use client";


import { motion } from "framer-motion";
import Image from "next/image";

const industriesData = {
  columns: [
    {
      sectionName: "Section 1",
      colSpan: "col-span-8",
      sections: [
        {
          id: "manufacturing",
          title: "Manufacturing",
          items: [
            "Automotive",
            "Chemical",
            "Industrial machinery",
            "Medical devices",
          ],
          imagePath: "/assets/home/Manufacturing.png",
          height: "tall",
          imagePosition: "side",
        },
      ],
    },
    {
      sectionName: "Section 2",
      colSpan: "col-span-6",
      sections: [
        {
          id: "banking-financial",
          title: "Banking & Financial Services",
          items: [],
          imagePath: "/assets/home/Card.png",
          height: "short",
          imagePosition: "side",
        },
        {
          id: "retail",
          title: "Retail",
          items: ["CPG"],
          imagePath: "/assets/home/Reatils.png",
          height: "short",
          imagePosition: "side",
        },
      ],
    },
    {
      sectionName: "Section 3",
      colSpan: "col-span-6",
      sections: [
        {
          id: "logistics-transportation",
          title: "Logistics and Transportation",
          items: [],
          imagePath: "/assets/home/Logistic.png",
          height: "short",
          imagePosition: "side",
        },
        {
          id: "healthcare",
          title: "Healthcare",
          items: ["Pharma"],
          imagePath: "/assets/home/Healthcare.png",
          height: "short",
          imagePosition: "side",
        },
      ],
    },
    {
      sectionName: "Section 4",
      colSpan: "col-span-4",
      sections: [
        {
          id: "others",
          title: "Others",
          items: ["Nonprofit"],
          imagePath: "/assets/home/Other-menu.png",
          height: "tall",
          imagePosition: "down",
        },
      ],
    },
  ],
};

const IndustriesMenu = () => {

  return (
    <div className="bg-white  w-full">
      <div className="w-full">
        <div className="grid grid-cols-24 gap-6 w-full">
          {industriesData.columns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className={`flex flex-col gap-5 ${column.colSpan} h-76`}
            >
              {column.sections.map((section,) => (
                <motion.div
                  key={section.id}
                  className={`
                relative overflow-hidden rounded-2xl p-6 cursor-pointer transition-all duration-300 items-center
                border-2 border-primary bg-light-white flex-1  
                flex ${section.imagePosition === "side" ? "flex-row" : "flex-col"}
              `}
                  // onHoverStart={() => setHoveredCard(section.id)}
                  // onHoverEnd={() => setHoveredCard(null)}
                  // whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                // transition={{
                //   delay: columnIndex * 0.1 + sectionIndex * 0.05,
                // }}
                >
                  {/* Content Wrapper */}
                  <div
                    className={`flex flex-col ${section.imagePosition === "side"
                        ? "w-[70%] pr-4"
                        : "w-full"
                      }`}
                  >
                    <h3 className="text-[20px] font-normal text-primary leading-6.5 mb-4 whitespace-break-spaces">
                      {section.title}
                    </h3>

                    {section.items.length > 0 && (
                      <div className="space-y-2">
                        {section.items.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            className="text-sm text-gray-700 font-medium"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                          // transition={{
                          //   delay:
                          //     columnIndex * 0.1 +
                          //     sectionIndex * 0.05 +
                          //     itemIndex * 0.02,
                          // }}
                          >
                            {item}
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Image */}
                  <div
                    className={`flex items-center justify-center ${section.imagePosition === "side"
                        ? "w-[40%]"
                        : "w-full mt-4"
                      }`}
                  >
                    <motion.div
                      // animate={{
                      //   scale: hoveredCard === section.id ? 1.1 : 1,
                      //   rotate: hoveredCard === section.id ? 2 : 0,
                      // }}
                      // transition={{
                      //   type: "spring",
                      //   stiffness: 300,
                      //   damping: 20,
                      // }}
                      className="ml-auto"
                    >
                      <Image
                        src={section.imagePath || "/placeholder.svg"}
                        alt={section.title}
                        width={section.height === "tall" ? 160 : 120}
                        height={section.height === "tall" ? 160 : 120}
                        className={`object-contain drop-shadow-lg ${section.height === "tall"
                            ? "w-[200px] h-[200px]"
                            : "w-[120px] h-[120px]"
                          }`}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default IndustriesMenu;
