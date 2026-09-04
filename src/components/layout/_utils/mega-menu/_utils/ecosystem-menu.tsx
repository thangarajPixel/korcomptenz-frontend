"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import KorcomptenzImage from "@/components/korcomptenz-image";
import Link from "next/link";

const EcosystemMenu = ({
  data,
  onClick,
}: {
  data: LayoutType;
  onClick: () => void;
}) => {
  const [activeSideBar, setActiveSideBar] = useState(data?.ecosystemMenu?.[0]);

  const childItems = activeSideBar?.item?.child || [];

  // Split ecosystem items into two columns
  const leftItems = childItems.filter((_, index) => index % 2 === 0);

  const rightItems = childItems.filter((_, index) => index % 2 !== 0);

  return (
    <div className="grid grid-cols-24">
      {/* =========================
          SIDEBAR
      ========================== */}
      <div className="col-span-24 md:col-span-6 lg:col-span-6">
        <div className="bg-white sticky top-8">
          <nav className="space-y-2 px-10">
            {data?.ecosystemMenu?.map((section) => (
              <div
                key={`ecosystem-section-${section?.id}`}
                onClick={() => setActiveSideBar(section)}
                className={`w-full group ${
                  activeSideBar?.id === section?.id
                    ? "border-b-2 border-primary"
                    : "border-b-2 border-transparent hover:border-primary"
                }`}
              >
                <h4 className="relative font-medium text-2xl text-primary leading-10 flex items-center justify-between cursor-pointer">
                  {section?.menu && <span>{section?.menu}</span>}

                  {activeSideBar?.id === section?.id && (
                    <ChevronRight className="w-5 h-5 font-extrabold" />
                  )}

                  {activeSideBar?.id !== section?.id && (
                    <ChevronRight className="w-5 h-5 font-extrabold opacity-0 group-hover:opacity-100" />
                  )}
                </h4>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* =========================
          CONTENT
      ========================== */}
      <div className="col-span-24 md:col-span-12 lg:col-span-12 border-l border-gray-100">
        <motion.div
          key={`ecosystem-section-content-${activeSideBar?.id}`}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white"
        >
          <div className="grid grid-cols-2 gap-3">
            {/* =========================
                LEFT COLUMN
            ========================== */}
            <div>
              {leftItems.map((item, idx) => (
                <motion.div
                  key={`ecosystem-left-${activeSideBar?.id}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: idx * 0.1,
                    duration: 0.3,
                  }}
                  className="group"
                >
                  <div className="px-5 mb-6">
                    {/* MAIN TITLE */}
                    <Link href={item?.href?.slug || "#"} onClick={onClick}>
                      {item?.title && (
                        <h4 className="group relative font-normal text-lg text-primary mb-4 inline-flex items-center cursor-pointer">
                          <span className="border-b-2 border-transparent group-hover:border-primary">
                            {item?.title}
                          </span>

                          {item?.description?.length > 0 && (
                            <ChevronRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          )}
                        </h4>
                      )}
                    </Link>

                    {/* CHILD ITEMS */}
                    {item?.description?.length > 0 && (
                      <div className="space-y-2 max-h-0 overflow-hidden transition-all duration-2000 ease-in-out group-hover:max-h-[300px]">
                        {item?.description?.map((subItem, subIndex) => (
                          <Link
                            key={`ecosystem-left-sub-${activeSideBar?.id}-${idx}-${subIndex}`}
                            href={subItem?.href?.slug || "#"}
                            onClick={onClick}
                          >
                            <div className="text-sm leading-6 cursor-pointer text-gray-500">
                              {subItem?.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* =========================
                RIGHT COLUMN
            ========================== */}
            <div>
              {rightItems.map((item, idx) => (
                <motion.div
                  key={`ecosystem-right-${activeSideBar?.id}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: idx * 0.1,
                    duration: 0.3,
                  }}
                  className="group"
                >
                  <div className="px-5 lg:mb-6">
                    {/* MAIN TITLE */}
                    <Link href={item?.href?.slug || "#"} onClick={onClick}>
                      {item?.title && (
                        <h4 className="group relative font-normal text-lg text-primary mb-4 inline-flex items-center cursor-pointer">
                          <span className="border-b-2 border-transparent group-hover:border-primary">
                            {item?.title}
                          </span>

                          {item?.description?.length > 0 && (
                            <ChevronRight className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                          )}
                        </h4>
                      )}
                    </Link>

                    {/* CHILD ITEMS */}
                    {item?.description?.length > 0 && (
                      <div className="space-y-2 max-h-0 overflow-hidden transition-all duration-2000 ease-in-out group-hover:max-h-[300px]">
                        {item?.description?.map((subItem, subIndex) => (
                          <Link
                            key={`ecosystem-right-sub-${activeSideBar?.id}-${idx}-${subIndex}`}
                            href={subItem?.href?.slug || "#"}
                            onClick={onClick}
                          >
                            <div className="text-sm leading-6 cursor-pointer text-gray-500 pl-2">
                              {subItem?.description}
                            </div>
                          </Link>
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

      {/* =========================
          IMAGE
      ========================== */}
      <div className="col-span-24 md:col-span-6 lg:col-span-6 flex justify-center items-center">
        <KorcomptenzImage
          src={activeSideBar?.item?.image}
          alt={activeSideBar?.menu || ""}
          className="w-full h-full object-contain"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default EcosystemMenu;
