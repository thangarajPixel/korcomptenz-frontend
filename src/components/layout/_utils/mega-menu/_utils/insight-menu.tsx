"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import KorcomptenzImage from "@/components/korcomptenz-image";

const InsightsMenu = ({ data }: { data: LayoutType; onClick: () => void }) => {
  return (
    <div className="bg-white w-full overflow-x-hidden  overscroll-contain">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[43%_57%] gap-8 h-auto  items-stretch">
          {/* Left side - Hero Image */}
          <motion.div
            className="relative h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
              <KorcomptenzImage
                src={data?.insightMenu?.heroImage}
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
            {data?.insightMenu?.categories?.map((category, index) => (
              <motion.div
                key={category?.id}
                className="group bg-white  h-16 transition-all duration-300 cursor-pointer border-b border-[#D2D2D2]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="group flex items-center justify-between cursor-pointer transition-all duration-300 ease-in-out">
                  <div className="flex-1">
                    <h3 className="text-5xl font-normal text-custom-gray transition-colors duration-300 ease-in-out group-hover:text-primary">
                      {category?.title}
                    </h3>
                  </div>
                  <div className="ml-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center
                 bg-primary border border-transparent
                 transition-all duration-300 ease-in-out
                 group-hover:bg-white group-hover:border-primary"
                    >
                      <ChevronRight className="w-5 h-5 text-white transition-all duration-300 ease-in-out group-hover:text-primary" />
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
