import { AnimatePresence, motion } from 'framer-motion';
import React from 'react'

import ServicesMenu from './_utils/service-menu';



const MegaMenuContent = ({ activeTab }: { activeTab: string }) => {
  // const activeSection = contentSections[1];
  return (
    <AnimatePresence>
      {activeTab && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full left-0 w-full bg-white border-b border-t border-border shadow-lg z-50"
        >
          <div className="max-w-7xl mx-auto  py-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >

              <ServicesMenu />

            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MegaMenuContent