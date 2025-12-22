"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import KorcomptenzImage from "@/components/korcomptenz-image";
import Link from "next/link";

const ServicesMenu = ({
  data,
  onClick,
}: {
  data: LayoutType;
  onClick: () => void;
}) => {
  const [activeServiceSection, setActiveServiceSection] = useState(
    data?.serviceMenu[0]
  );

  return (
    <div className="grid grid-cols-24">
      {/* Sidebar */}
      <div className="col-span-24 md:col-span-5 lg:col-span-5">
        <div className="bg-white sticky top-8">
          <nav className="space-y-2">
            {data?.serviceMenu.map((section) => (
              <motion.button
                key={`service-section-${section?.id}`}
                onClick={() => setActiveServiceSection(section)}
                className={`w-full text-left text-custom-gray-4 py-3 
                  rounded-lg transition-all duration-200 flex items-center space-x-3 cursor-pointer hover:text-primary ${
                    activeServiceSection?.id === section?.id
                      ? "text-primary"
                      : ""
                  }`}
              >
                <span className="text-lg font-normal leading-1">
                  {section?.title}
                </span>
              </motion.button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="col-span-24 md:col-span-13 lg:col-span-13">
        <motion.div
          key={`service-section-content-${activeServiceSection?.id}`}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white border-l border-gray-200 px-6"
        >
          <div className="grid grid-cols-2 gap-6">
            {/* Left */}
            <div>
              {activeServiceSection?.items
                ?.filter((item) => item?.side === "left")
                ?.map((item, idx) => (
                  <motion.div
                    key={`service-section-${activeServiceSection?.id}-ng-left-${item?.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    className="group"
                  >
                    <div className="px-5 mb-6">
                      <Link href={item?.href?.slug || "#"} onClick={onClick}>
                        <h4 className="group relative font-normal text-lg text-primary mb-4 inline-flex items-center cursor-pointer">
                          <span className="border-b-2 border-transparent group-hover:border-primary">
                            {item?.title}
                          </span>
                          {item?.child?.length > 0 && (
                            <ChevronRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          )}
                        </h4>
                      </Link>
                      {item?.child && item?.child?.length > 0 && (
                        <div className="space-y-2 max-h-0 overflow-hidden transition-all duration-2000 ease-in-out group-hover:max-h-[300px]">
                          {item?.child?.map((sub) => (
                            <Link
                              key={`service-section-${activeServiceSection?.id}-ng-left-${item?.id}-sub-${sub?.id}`}
                              href={sub?.href?.slug || "#"}
                              onClick={onClick}
                            >
                              <div
                                key={`service-section-${activeServiceSection?.id}-ng-left-${item?.id}-sub-${sub?.id}`}
                                className={`text-sm leading-6 cursor-pointer ${
                                  sub?.type === "dark"
                                    ? "font-normal text-black"
                                    : "text-gray-500"
                                }`}
                              >
                                {sub?.title}
                              </div>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
            </div>

            {/* Right */}
            <div>
              {activeServiceSection?.items
                ?.filter((item) => item?.side === "right")
                ?.map((item, idx) => (
                  <motion.div
                    key={`service-section-${activeServiceSection?.id}-ng-right-${item?.id}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                    className="group"
                  >
                    <div className="px-5 lg:mb-6">
                      {" "}
                      <Link href={item?.href?.slug || "#"} onClick={onClick}>
                        <h4 className="group relative font-normal text-lg text-primary mb-4 inline-flex items-center cursor-pointer">
                          <span className="border-b-2 border-transparent group-hover:border-primary">
                            {item?.title}
                          </span>
                          {item?.child?.length > 0 && (
                            <ChevronRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          )}
                        </h4>
                      </Link>
                      {item?.child && item?.child?.length > 0 && (
                        <div className="space-y-2 max-h-0 overflow-hidden transition-all duration-2000 ease-in-out group-hover:max-h-[300px]">
                          {item?.child?.map((sub) =>
                            sub?.attachment ? (
                              <a
                                key={`service-section-${activeServiceSection?.id}-att-${item?.id}-sub-${sub?.id}`}
                                href={sub?.attachment?.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div
                                  className={`text-sm leading-6 ${
                                    sub?.type === "dark"
                                      ? "font-normal text-black"
                                      : "text-gray-500 pl-2"
                                  }`}
                                >
                                  {sub?.title}
                                </div>
                              </a>
                            ) : (
                              <Link
                                key={`service-section-${activeServiceSection?.id}-link-${item?.id}-sub-${sub?.id}`}
                                href={sub?.href?.slug || "#"}
                                onClick={onClick}
                              >
                                <div
                                  className={`text-sm leading-6 ${
                                    sub?.type === "dark"
                                      ? "font-normal text-black"
                                      : "text-gray-500 pl-2"
                                  }`}
                                >
                                  {sub?.title}
                                </div>
                              </Link>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Image */}
      <div className="col-span-24 md:col-span-6 lg:col-span-6 flex">
        <KorcomptenzImage
          src={activeServiceSection?.image}
          className="w-full h-full object-contain"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default ServicesMenu;
