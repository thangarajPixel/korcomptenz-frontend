"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, } from "lucide-react";

const aboutData = {
  aboutUs: {
    title: "About Us",
  },
  whoWeAre: {
    title: "Who we are",
    content:
      "We are a forward-thinking organization committed to excellence and innovation. Our team brings together diverse expertise to deliver exceptional results for our clients and stakeholders.",
    image: {
      src: "/assets/menu/About-menu1 (1).png",
      alt: "Professional team collaboration",
    },
  },
  navigationItems: [
    {
      id: 1,
      title: "Our story",
      description: "Learn about our journey and heritage",
    },
    {
      id: 2,
      title: "Our journey",
      description: "Discover our path to success",
    },
    {
      id: 3,
      title: "Our vision",
      description: "See what drives us forward",
    },
    {
      id: 4,
      title: "Our mission",
      description: "Understand our core purpose",
    },
  ],
  sidebarSections: [
    {
      id: 1,
      title: "KORCARES (CSR)",
      icon: "/assets/menu/About-menu1 (2).png",
      description: "Corporate Social Responsibility",
    },
    {
      id: 2,
      title: "Events",
      icon: "/assets/menu/About-menu1 (3).png",
      description: "Company events and activities",
    },
    {
      id: 3,
      title: "Newsroom",
      icon: "/assets/menu/About-menu1 (4).png",
      description: "Latest news and updates",
    },
  ],
};

// Drawer only for "Who we are"
const AboutDrawer = ({ isOpen, onClose }) => {
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
            <h2 className="text-sm font-normal text-primary">
              {aboutData.whoWeAre.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-50 transition-colors"
          >
          
          </button>
        </div>

        <span className="block w-full h-[0.5px] bg-primary"></span>

        {/* Accordion list */}
        <div className="h-full bg-white p-4 text-sm text-gray-700">
          {aboutData.navigationItems.map((item) => (
            <div key={item.id} className="border-b border-gray-100">
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex items-center justify-between py-3 text-sm text-primary"
              >
                <span>{item.title}</span>
                
              </button>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AboutMobile = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <div className="px-0">
        {/* Who We Are (opens drawer) */}
        <button
          onClick={() => setDrawerOpen(true)}
          className="w-full flex items-center justify-between p-2 text-left border-b border-gray-100"
        >
          <span className="text-sm text-custom-gray-4 font-normal">
            {aboutData.whoWeAre.title}
          </span>
          <ChevronRight className="w-4 h-4 text-primary" />
        </button>

        {/* Sidebar Sections (static, no drawer) */}
        {aboutData.sidebarSections.map((sec) => (
          <div
            key={sec.id}
            className="w-full flex items-center justify-between p-2 text-left border-b border-gray-100"
          >
            <span className="text-sm text-custom-gray-4 font-normal">
              {sec.title}
            </span>
          </div>
        ))}
      </div>

      {/* Drawer only for "Who we are" */}
      <AboutDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default AboutMobile;
