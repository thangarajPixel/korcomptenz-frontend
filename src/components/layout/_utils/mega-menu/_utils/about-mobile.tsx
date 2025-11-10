"use client";

import { useState } from "react";
import { Plus, ChevronLeft } from "lucide-react";

interface IndustryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: LayoutType;
}

const AboutDrawer = ({ isOpen, onClose, data }: IndustryDrawerProps) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  if (!isOpen) return null;

  const toggleAccordion = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/5">
        {/* Header */}
        <div className="flex items-center justify-between py-4 bg-white border-b-2 border-primary">
          <div className="flex items-center">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <h2 className="text-lg font-normal text-primary">
              {data?.aboutMenu?.whoWeAre?.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-50 transition-colors"
          ></button>
        </div>

        <span className="block w-full h-[0.5px] bg-primary"></span>

        {/* Accordion list */}
        <div className="h-full bg-white p-4 text-lg text-gray-700">
          {data?.aboutMenu?.navigationItems?.map((item) => (
            <div
              key={`about-mobile-${item?.id}`}
              className="border-b border-gray-100"
            >
              <button
                onClick={() => toggleAccordion(item?.id)}
                className="w-full flex items-center justify-between py-3 text-lg text-primary"
              >
                <span>{item?.title}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutMobile = ({ data }: { data: LayoutType }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="px-0">
        {/* Who We Are (opens drawer) */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="w-full flex items-center justify-between p-2 text-left border-b border-gray-100"
        >
          <span className="text-lg text-custom-gray-4 font-normal">
            {data?.aboutMenu?.whoWeAre?.title}
          </span>
          <Plus className="w-4 h-4 text-primary" />
        </button>

        {/* Sidebar Sections (static, no drawer) */}
        {data?.aboutMenu?.sidebarSections?.map((sec) => (
          <div
            key={`about-mobile-${sec?.id}`}
            className="w-full flex items-center justify-between p-2 text-left border-b border-gray-100"
          >
            <span className="text-lg text-custom-gray-4 font-normal">
              {sec?.title}
            </span>
          </div>
        ))}
      </div>

      {/* Drawer only for "Who we are" */}
      <AboutDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        data={data}
      />
    </>
  );
};

export default AboutMobile;
