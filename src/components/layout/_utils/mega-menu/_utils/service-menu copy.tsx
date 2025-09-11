"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft} from "lucide-react"

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
  const [isMobile, setIsMobile] = useState(false)

  const [mobileNavStack, setMobileNavStack] = useState([])
  const [currentMobileView, setCurrentMobileView] = useState("services")

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000)
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const navigateToSection = (section) => {
    setMobileNavStack([...mobileNavStack, currentMobileView])
    setCurrentMobileView(section.id)
  }

  const navigateBack = () => {
    if (mobileNavStack.length > 0) {
      const previousView = mobileNavStack[mobileNavStack.length - 1]
      setMobileNavStack(mobileNavStack.slice(0, -1))
      setCurrentMobileView(previousView)
    }
  }

  const getCurrentViewData = () => {
    if (currentMobileView === "services") {
      return {
        title: "Services",
        items: servicesData.sections.map((section) => ({
          id: section.id,
          title: section.title,
          hasChildren: true,
        })),
      }
    }

    const serviceSection = servicesData.sections.find((s) => s.id === currentMobileView)
    if (serviceSection) {
      return {
        title: serviceSection.title,
        items: serviceSection.items,
        isServiceDetail: true,
      }
    }

    return { title: "Services", items: [] }
  }

  if (isMobile) {
    const currentData = getCurrentViewData()

    return (
      <div className="bg-gray-50 ">
       

        <AnimatePresence mode="wait">
          <motion.div
            key={currentMobileView}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white  "
          >
            {currentMobileView !== "services" && (
              <div className="border-b border-gray-200   py-5 flex items-center space-x-3">
                <button onClick={navigateBack} className="p-2  ">
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                <span className="text-sm font-medium text-primary  ">{currentData.title}</span>
              </div>
            )}

            {currentMobileView === "services" ? (
              <div className="p-4 ">
                

                <div className="">
                  {currentData.items.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => navigateToSection(item)}
                      className="w-full bg-gray-50   p-2 border-b border-[#E0E0E0]  flex items-center justify-between"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className="text-sm font-normal text-[#6B6B6B] text-left">{item.title}</span>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </motion.button>
                  ))}
                </div>
              </div>
            ) : (
              <div className=" space-y-4 mt-5">
                {currentData.items?.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="border-b border-gray-200 pb-4 ps-10">
                      <h3 className="text-sm font-semibold text-primary ">{item.title}</h3>

                      {item.child && item.child.length > 0 && (
                        <div className="space-y-2 pl-2">
                          {item.child.map((sub, subIdx) => (
                            <div
                              key={subIdx}
                              className={`text-sm py-1 ${
                                sub.type === "dark" ? "font-medium text-gray-900" : "text-gray-600"
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
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-24 gap-6 max-w-7xl mx-auto">
      <div className="lg:col-span-5">
        <div className="bg-white sticky top-8 rounded-lg p-6 shadow-sm">
          <nav className="space-y-2">
            {servicesData.sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveServiceSection(section)}
                className={`w-full text-left py-3 px-4 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                  activeServiceSection.id === section.id
                    ? "text-teal-600 bg-teal-50 border-l-4 border-primary"
                    : "text-gray-600 hover:text-teal-600 hover:bg-gray-50"
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-medium">{section.title}</span>
              </motion.button>
            ))}
          </nav>
        </div>
      </div>

      <div className="lg:col-span-13">
        <motion.div
          key={activeServiceSection.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-lg shadow-sm border border-gray-100 p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {activeServiceSection.items
                .filter((item) => item.side === "left")
                .map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    className="group mb-8"
                  >
                    <div>
                      <h4 className="group relative font-semibold text-sm text-teal-600 mb-4 inline-flex items-center cursor-pointer">
                        <span className="border-b-2 border-transparent group-hover:border-primary transition-colors">
                          {item.title}
                        </span>
                        <ChevronRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      {item.child && item.child.length > 0 && (
                        <div className="space-y-3 pl-2">
                          {item.child.map((sub, subIdx) => (
                            <div
                              key={subIdx}
                              className={`text-sm leading-relaxed cursor-pointer hover:text-teal-600 transition-colors ${
                                sub.type === "dark" ? "font-medium text-gray-900" : "text-gray-600"
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

            <div>
              {activeServiceSection.items
                .filter((item) => item.side === "right")
                .map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    className="group mb-8"
                  >
                    <div>
                      <h4 className="group relative font-semibold text-sm text-teal-600 mb-4 inline-flex items-center cursor-pointer">
                        <span className="border-b-2 border-transparent group-hover:border-primary transition-colors">
                          {item.title}
                        </span>
                        <ChevronRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h4>
                      {item.child && item.child.length > 0 && (
                        <div className="space-y-3 pl-2">
                          {item.child.map((sub, subIdx) => (
                            <div
                              key={subIdx}
                              className={`text-sm leading-relaxed cursor-pointer hover:text-teal-600 transition-colors ${
                                sub.type === "dark" ? "font-medium text-gray-900" : "text-gray-600"
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

      <div className="lg:col-span-6 flex items-start">
        <div className="bg-white rounded-lg shadow-sm p-4 w-full">
          <img
            src={activeServiceSection.image || "/placeholder.svg"}
            alt={activeServiceSection.title}
            className="w-full h-auto object-contain rounded-lg"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}

export default ServicesMenu
