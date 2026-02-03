"use client";

import { useState } from "react";
import { Plus, ChevronLeft } from "lucide-react";
import Link from "next/link";

interface IndustryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  data: LayoutType;
  closeMenu: () => void;
}

const AboutDrawer = ({
  isOpen,
  onClose,
  data,
  closeMenu,
}: IndustryDrawerProps) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  if (!isOpen) return null;

  const toggleAccordion = (id: number) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-[#f2f2f2]">
        {/* Header */}
        <div className="flex items-center justify-between py-4 bg-[#f2f2f2]border-b-2 border-primary">
          <div className="flex items-center">
            <button
              onClick={onClose}
              className="p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <h4 className="text-lg font-normal text-primary">
              {data?.aboutMenu?.whoWeAre?.title}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-50 transition-colors"
          ></button>
        </div>

        <span className="block w-full h-[0.5px] bg-primary"></span>

        {/* Accordion list */}
        <div className="h-full bg-[#f2f2f2] p-4 text-lg text-gray-700">
          {data?.aboutMenu?.navigationItems?.map((item) => (
            <Link href={item?.link || "#"} key={item?.id} onClick={closeMenu}>
              <div
                key={`about-mobile-${item?.id}`}
                className="border-b border-gray-100"
              >
                <button
                  onClick={() => toggleAccordion(item?.id)}
                  className="w-full flex pr-3 items-center justify-between py-1 border-b border-primary text-lg text-primary"
                >
                  <span>{item?.title}</span>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutMobile = ({
  data,
  closeMenu,
}: {
  data: LayoutType;
  closeMenu: () => void;
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="px-0">
        {/* Who We Are (opens drawer) */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="w-full flex items-center justify-between p-2 text-left border-b border-[#E0E0E0]"
        >
          <span className="text-lg text-foreground leading-6.5 font-normal">
            {data?.aboutMenu?.whoWeAre?.title}
          </span>
          <Plus className="w-4 h-4 text-primary" />
        </button>

        {/* Sidebar Sections (static, no drawer) */}
        {data?.aboutMenu?.sidebarSections?.map((sec) => (
          <Link href={sec?.link || "#"} onClick={closeMenu} key={sec?.id}>
            <div
              key={`about-mobile-${sec?.id}`}
              className="w-full flex items-center justify-between p-2 text-left border-b border-[#E0E0E0]"
            >
              <span className="text-lg text-foreground leading-6.5 font-normal">
                {sec?.title}
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Drawer only for "Who we are" */}
      <AboutDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        data={data}
        closeMenu={closeMenu}
      />
    </>
  );
};

export default AboutMobile;
