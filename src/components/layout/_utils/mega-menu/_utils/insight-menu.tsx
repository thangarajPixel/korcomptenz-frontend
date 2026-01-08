"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import KorcomptenzImage from "@/components/korcomptenz-image";
import Link from "next/link";

const InsightsMenu = ({
  data,
  onClick,
}: {
  data: LayoutType;
  onClick: () => void;
}) => {
  return (
    <div className="bg-white w-full overflow-x-hidden  overscroll-contain">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[43%_57%] gap-8 h-auto  items-start">
          {/* Left side - Hero Image */}
          <motion.div
            className="relative h-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative  -top-6 rounded-2xl overflow-hidden aspect-[4/3]">
              <KorcomptenzImage
                src={data?.insightMenu?.heroImage}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Right side - Menu Items */}
          <motion.div
            className="grid grid-cols-2 gap-4  bg-white px-8 py-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {data?.insightMenu?.categories?.map((category, index) => (
              <Link href={category?.link || "#"} key={index} onClick={onClick}>
                <motion.div
                  key={category?.id}
                  className="group  cursor-pointer flex items-center justify-between w-59 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Left Title */}

                  <h3 className="text-lg font-normal text-custom-gray transition-colors duration-300 group-hover:text-primary">
                    {category?.title}
                  </h3>

                  {/* Right Circle Button */}
                  <div
                    className="
          w-8 h-8 rounded-full flex items-center justify-center
          bg-primary border border-transparent
          transition-all duration-300
          group-hover:bg-white group-hover:border-primary
        "
                  >
                    <ChevronRight className="w-4 h-3 text-white transition-all duration-300 group-hover:text-primary" />
                  </div>
                </motion.div>{" "}
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InsightsMenu;
