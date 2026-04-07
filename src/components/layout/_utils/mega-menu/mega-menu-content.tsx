"use client";

import React from "react";
import ServicesMenu from "./_utils/service-menu";
import IndustriesMenu from "./_utils/industries-menu";
import InsightsMenu from "./_utils/insight-menu";
import AboutMenu from "./_utils/about-menu";
import EcosystemMenu from "./_utils/ecosystem-menu";

const MegaMenuContent = ({
  activeTab,
  data,
  onClick,
}: {
  activeTab: string;
  data: LayoutType;
  onClick: () => void;
}) => {
  const isOpen = Boolean(activeTab);

  return (
    <div
      className="absolute top-full left-0 w-full bg-white border-b border-t border-border shadow-lg z-50 overscroll-contain"
      style={{
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateY(0)" : "translateY(-12px)",
        pointerEvents: isOpen ? "auto" : "none",
        transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
        visibility: isOpen ? "visible" : "hidden",
      }}
    >
      <div className="container-nav px-10 mx-auto py-6 hidden min-[1023px]:block">
        {activeTab === "Services" && <ServicesMenu data={data} onClick={onClick} />}
        {activeTab === "Industries" && <IndustriesMenu data={data} onClick={onClick} />}
        {activeTab === "Ecosystems" && <EcosystemMenu data={data} onClick={onClick} />}
        {activeTab === "Insights" && <InsightsMenu data={data} onClick={onClick} />}
        {activeTab === "About Us" && <AboutMenu data={data} onClick={onClick} />}
      </div>
    </div>
  );
};

export default MegaMenuContent;
