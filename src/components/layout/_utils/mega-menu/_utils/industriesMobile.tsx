"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, X } from "lucide-react";

const industriesData = {
  columns: [
    {
      sectionName: "Section 1",
      colSpan: "col-span-8",
      sections: [
        {
          id: "manufacturing",
          title: "Manufacturing",
          items: [
            "Automotive",
            "Chemical",
            "Industrial machinery",
            "Medical devices",
          ],
          imagePath: "/assets/home/Manufacturing.png",
          height: "tall",
          imagePosition: "side",
        },
      ],
    },
    {
      sectionName: "Section 2",
      colSpan: "col-span-6",
      sections: [
        {
          id: "banking-financial",
          title: "Banking & Financial Services",
          items: [],
          imagePath: "/assets/home/Card.png",
          height: "short",
          imagePosition: "side",
        },
        {
          id: "retail",
          title: "Retail",
          items: ["CPG"],
          imagePath: "/assets/home/Reatils.png",
          height: "short",
          imagePosition: "side",
        },
      ],
    },
    {
      sectionName: "Section 3",
      colSpan: "col-span-6",
      sections: [
        {
          id: "logistics-transportation",
          title: "Logistics and Transportation",
          items: [],
          imagePath: "/assets/home/Logistic.png",
          height: "short",
          imagePosition: "side",
        },
        {
          id: "healthcare",
          title: "Healthcare",
          items: ["Pharma"],
          imagePath: "/assets/home/Healthcare.png",
          height: "short",
          imagePosition: "side",
        },
      ],
    },
    {
      sectionName: "Section 4",
      colSpan: "col-span-4",
      sections: [
        {
          id: "others",
          title: "Others",
          items: ["Nonprofit"],
          imagePath: "/assets/home/Other-menu.png",
          height: "tall",
          imagePosition: "down",
        },
      ],
    },
  ],
};

// Drawer Component for Industry Items
const IndustryDrawer = ({ isOpen, onClose, industry }) => {
  if (!isOpen || !industry) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/5">
        <div className="flex items-center justify-between  py-4 bg-white border-b-2 border-primary ">
          <div className="flex items-center">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <h2 className="text-sm font-normal text-primary ">{industry.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-50 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div><span className="block w-full h-[0.5px] bg-primary"></span>

        <div className="h-full overflow-y-auto bg-white">
          <div className="divide-y divide-gray-100">
            {industry.items && industry.items.length > 0 ? (
              industry.items.map((item, index) => (
                <div
                  key={index}
                  className=" py-3 px-4  text-sm text-primary border-b border-primary"
                >
                  {item}
                </div>
              ))
            ) : (
              <div className="px-4 py-8 text-center text-gray-500 text-sm">
                No additional items available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Industries Menu Component
const IndustriesMobile = () => {
  const [drawer, setDrawer] = useState({
    isOpen: false,
    industry: null,
  });

  const openDrawer = (industry) => {
    setDrawer({ isOpen: true, industry });
  };

  const closeDrawer = () => {
    setDrawer({ isOpen: false, industry: null });
  };

  return (
    <>
      <div className="px-0">
        {industriesData.columns.map((col) =>
          col.sections.map((section) => (
            <button
              key={section.id}
              onClick={() =>
                section.items && section.items.length > 0 && openDrawer(section)
              }
              className="w-full flex items-center justify-between p-2 text-left border-b border-gray-100"
            >
              <span className="text-sm text-custom-gray-4 font-normal">
                {section.title}
              </span>
              {section.items && section.items.length > 0 && (
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
