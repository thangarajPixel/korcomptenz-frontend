"use client";
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
    <div className="bg-white w-full overflow-x-hidden overscroll-contain">
      <div className="mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[43%_57%] gap-8 h-auto items-start">
          {/* Left side - Hero Image */}
          <div className="relative h-full">
            <div className="relative -top-9 rounded-2xl overflow-hidden aspect-[4/3]">
              <KorcomptenzImage
                src={data?.insightMenu?.heroImage}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Right side - Menu Items */}
          <div className="grid grid-cols-2 gap-4 bg-white px-8 py-2">
            {data?.insightMenu?.categories?.map((category, index) => (
              <Link href={category?.link || "#"} key={index} onClick={onClick}>
                <div
                  key={category?.id}
                  className="group cursor-pointer flex items-center justify-between w-59 transition-all duration-300"
                >
                  <h3 className="text-lg font-normal text-custom-gray transition-colors duration-300 group-hover:text-primary">
                    {category?.title}
                  </h3>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-primary border border-transparent transition-all duration-300 group-hover:bg-white group-hover:border-primary">
                    <ChevronRight className="w-6 h-5 text-white transition-all duration-300 group-hover:text-primary" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightsMenu;
