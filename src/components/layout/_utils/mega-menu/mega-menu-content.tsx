import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import IndustriesMenu from './_utils/industries-menu';
import ServicesMenu from './_utils/service-menu copy';

const MegaMenuContent = ({ activeTab }: { activeTab: string }) => {
  console.log("activeTab", activeTab);

  return (
    <AnimatePresence mode="wait">
      {activeTab && (
        <motion.div
          key={activeTab} 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full left-0 w-full bg-white border-b border-t border-border shadow-lg z-50"
        >
          <div className="w-full px-10 mx-auto py-10">
            <motion.div
              key={activeTab + "-inner"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {activeTab === "Services" && <ServicesMenu />}
              {activeTab === "Industries" && <IndustriesMenu />}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MegaMenuContent;
