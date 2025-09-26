import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ServicesMenu from "./_utils/service-menu";
import IndustriesMenu from "./_utils/industries-menu";
import InsightsMenu from "./_utils/insight-menu";
import AboutMenu from "./_utils/about-menu";
import EcosystemMenu from "./_utils/ecosystem-menu";

const MegaMenuContent = ({
  activeTab,
  data,
}: {
  activeTab: string;
  data: LayoutType;
}) => {
  return (
    <AnimatePresence mode="wait">
      {activeTab && (
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full left-0 w-full bg-white border-b border-t border-border shadow-lg z-50 overscroll-contain"
        >
          <div className="container-nav px-10 mx-auto py-6  hidden min-[1023px]:block ">
            <motion.div
              key={activeTab + "-inner"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {activeTab === "Services" && <ServicesMenu data={data} />}
              {activeTab === "Industries" && <IndustriesMenu data={data} />}
              {activeTab === "Ecosystems" && <EcosystemMenu data={data} />}
              {activeTab === "Insights" && <InsightsMenu data={data} />}
              {activeTab === "About Us" && <AboutMenu data={data} />}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenuContent;
