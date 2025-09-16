"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const servicesData = {

  sections: [
    {
      id: "enterprise-applications",
      title: "Enterprise Applications",
      image: "/assets/menu/service-menu.png",
      items: [
        {
          title: "Advisory & Consulting",
          side: "left",
          child: [
            { title: "ERP Advisory Services", type: "dark" },
            { title: "SAP Advisory Services", type: "light" },
            { title: "Microsoft Dynamics ERP Advisory Services", type: "light" },
            { title: "CRM Advisory Services", type: "dark" },
            { title: "Salesforce Advisory Services", type: "light" },
            { title: "Cloud Advisory Services", type: "dark" },
          ],
        },
        {
          title: "Implementation",
          side: "left",
          child: [{ title: "Rescue", type: "dark" }],
        },
        {
          title: "Upgrade/Migration",
          side: "right",
          child: [],
        },
        {
          title: "Support & Optimize",
          side: "right",
          child: [],
        },
        {
          title: "KOR Solution Accelerators",
          side: "right",
          child: [],
        },
        {
          title: "Enterprise Content Management Services",
          side: "right",
          child: [],
        },
      ],
    },
    {
      id: "data-analytics-ai",
      title: "Data & Analytics and AI",
      image: "/assets/menu/service-menu(2).png",
      items: [
        {
          title: "AI First Strategy and Assessment",
          side: "left",
          child: [],
        },
        {
          title: "Modern Cloud Data Services",
          side: "left",
          child: [],
        },
        {
          title: "Enterprise Analytics Services",
          side: "left",
          child: [],
        },
        {
          title: "Managed Services for AI Driven Enterprises",
          side: "left",
          child: [],
        },
        {
          title: "Responsible AI Services",
          side: "right",
          child: [],
        },
        {
          title: "Microsoft Fabric Solution Accelerators",
          side: "right",
          child: [
            { title: "KOR Smartforge", type: "dark" },
            { title: "KOR ESGenius", type: "dark" },
            { title: "KOR BankIQ", type: "dark" },
          ],
        },
      ],
    },
    {
      id: "cloud-business-services",
      title: "Cloud Business Services",
      image: "/assets/menu/service-menu(3).png",
      items: [
        {
          title: "Migration",
          side: "left",
          child: [],
        },
        {
          title: "Modernization",
          side: "left",
          child: [],
        },
        {
          title: "Management",
          side: "left",
          child: [],
        },
        {
          title: "Maximization",
          side: "left",
          child: [],
        },
        {
          title: "Cybersecurity",
          side: "right",
          child: [],
        },
        {
          title: "Automation/Transformation",
          side: "right",
          child: [],
        },
        {
          title: "Hybrid Operations",
          side: "right",
          child: [],
        },
      ],
    },
    {
      id: "iot-digital-engineering",
      title: "IoT & Digital Engineering",
      image: "/assets/menu/service-menu(4).png",
      items: [
        {
          title: "IoT Services",
          side: "left",
          child: [],
        },
      ],
    },
    {
      id: "kor-solution-accelerators",
      title: "KOR Solution Accelerators",
      image: "/assets/menu/service-menu(5).png",
      items: [
        {
          title: "Microsoft Fabric Solution Accelerators",
          side: "left",
          child: [
            { title: "KOR Smartforge", type: "dark" },
            { title: "KOR ESGenius", type: "dark" },
            { title: "KOR BankIQ", type: "dark" },
          ],
        },
        {
          title: "Microsoft Business Application Accelerators",
          side: "right",
          child: [
            { title: "Product Configurator", type: "dark" },
            { title: "Quality Control", type: "dark" },
            { title: "Fleet Maintenance", type: "dark" },
            { title: "EduUniv", type: "dark" },
            { title: "Grant Management", type: "dark" },
            { title: "Retail POS", type: "dark" },
            { title: "K360", type: "dark" },
          ],
        },
      ],
    },
  ],
}

const ServicesMenu = () => {
  const [activeServiceSection, setActiveServiceSection] = useState(servicesData.sections[0])



  return (
    <div className="grid grid-cols-24 ">
      {/* Sidebar */}
      <div className="col-span-24 md:col-span-5 lg:col-span-5">
        <div className="bg-white sticky top-8">
          <nav className="space-y-2">
            {servicesData.sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveServiceSection(section)}
                className={`w-full text-left text-custom-gray-4 py-3 
                  rounded-lg transition-all duration-200 flex items-center space-x-3 ${activeServiceSection.id === section.id ? "text-primary" : ""
                  }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-normal leading-1">
                  {section.title}
                </span>
              </motion.button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content (split left & right) */}
      <div className="col-span-24 md:col-span-13 lg:col-span-13">
        <motion.div
          key={activeServiceSection.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white  border-l border-gray-200 px-6"
        >
          <div className="grid grid-cols-2 gap-6">
            {/* Left side */}
            <div>
              {activeServiceSection.items
                .filter((item) => item.side === "left")
                .map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    className="group"
                  >
                    <div className="px-5 mb-6">
                      <h4 className="group relative font-normal text-sm text-primary mb-4 inline-flex items-center cursor-pointer">
                        <span className="border-b-2 border-transparent group-hover:border-primary">
                          {item.title}
                        </span>
                        <ChevronRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100" />
                      </h4>
                      {item.child && item.child.length > 0 && (
                        <div className="space-y-2">
                          {item.child.map((sub, subIdx) => (
                            <div
                              key={subIdx}
                              className={`text-[15px] leading-5 ${sub.type === "dark"
                                ? "font-normal text-black"
                                : "text-gray-500"
                                }`}
                            >
                              {sub.title}
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </motion.div>
                ))}
            </div>

            {/* Right side */}
            <div>
              {activeServiceSection.items
                .filter((item) => item.side === "right")
                .map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    className="group"
                  >
                    <div className="px-5 lg:mb-6">
                      <h4 className="group relative font-normal text-sm text-primary mb-4 inline-flex items-center cursor-pointer">
                        <span className="border-b-2 border-transparent group-hover:border-primary">
                          {item.title}
                        </span>
                        <ChevronRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100" />
                      </h4>
                      {item.child && item.child.length > 0 && (
                        <div className="space-y-2">
                          {item.child.map((sub, subIdx) => (
                            <div
                              key={subIdx}
                              className={`text-[15px] leading-5  ${sub.type === "dark"
                                ? "font-normal text-black"
                                : "text-gray-500"
                                }`}
                            >
                              {sub.title}
                            </div>
                          ))}
                        </div>
                      )}

                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="col-span-24 md:col-span-6 lg:col-span-6 flex ">
        <img
          src={activeServiceSection.image}
          alt={activeServiceSection.title}
          className="w-full h-full object-contain"
          width={300}
          height={300}
        />
      </div>
    </div>
  )
}

export default ServicesMenu
