"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, X } from "lucide-react";

interface Section {
  id: string;
  title: string;
  items: {
    id: string;
    title: string;
    href: string;
  }[];
  image: ImageType;
  height: string;
  imagePosition: string;
}

interface DrawerState {
  isOpen: boolean;
  industry: Section | null;
}

interface IndustryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  industry: Section | null;
}

const IndustryDrawer = ({ isOpen, onClose, industry }: IndustryDrawerProps) => {
  if (!isOpen || !industry) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/5">
        <div className="flex items-center justify-between py-4 bg-white border-b-2 border-primary">
          <div className="flex items-center">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <h2 className="text-lg font-normal text-primary">
              {industry.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-50 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        <span className="block w-full h-[0.5px] bg-primary"></span>

        <div className="h-full overflow-y-auto bg-white">
          <div className="divide-y divide-gray-100">
            {industry.items.length > 0 ? (
              industry.items.map((item, index) => (
                <div
                  key={index}
                  className="py-3 px-4 text-lg text-primary border-b border-primary"
                >
                  {item?.title}
                </div>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-gray-500 text-lg">
                No additional items available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------- Main Component ----------
const IndustriesMobile = ({ data }: { data: LayoutType }) => {
  const [drawer, setDrawer] = useState<DrawerState>({
    isOpen: false,
    industry: null,
  });

  const openDrawer = (industry: Section) => {
    setDrawer({ isOpen: true, industry });
  };

  const closeDrawer = () => {
    setDrawer({ isOpen: false, industry: null });
  };

  return (
    <>
      <div className="px-0">
        {data?.industriesMenu.map((col) =>
          col.sections.map((section) => (
            <button
              key={section?.id}
              onClick={() => section.items.length > 0 && openDrawer(section)}
              className="w-full flex items-center justify-between p-2 text-left border-b border-gray-100"
            >
              <span className="text-lg text-custom-gray-4 font-normal">
                {section.title}
              </span>
              {section.items.length > 0 && (
                <ChevronRight className="w-4 h-4 text-primary" />
              )}
            </button>
          ))
        )}
      </div>

      <IndustryDrawer
        isOpen={drawer.isOpen}
        onClose={closeDrawer}
        industry={drawer.industry}
      />
    </>
  );
};

export default IndustriesMobile;
