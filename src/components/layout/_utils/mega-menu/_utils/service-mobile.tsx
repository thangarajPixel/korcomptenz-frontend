"use client";

import { useState } from "react";
import { ChevronRight, ArrowLeft, X, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChildItem {
  title: string;
  type: "light" | "dark";
}

interface ServiceItem {
  title: string;
  side: "left" | "right";
  child: readonly ChildItem[];
}

interface Service {
  id: string;
  title: string;
  image: string;
  items: readonly ServiceItem[];
}

const servicesData = {
  sections: [
    {
      id: "enterprise-applications",
      title: "Enterprise Applications",
      image: "/assets/menu/service-menu.png",
      items: [
        {
          title: "Advisory & Consulting",
          side: "left",
          child: [
            { title: "ERP Advisory Services", type: "dark" },
            { title: "SAP Advisory Services", type: "light" },
            {
              title: "Microsoft Dynamics ERP Advisory Services",
              type: "light",
            },
            { title: "CRM Advisory Services", type: "dark" },
            { title: "Salesforce Advisory Services", type: "light" },
            { title: "Cloud Advisory Services", type: "dark" },
          ],
        },
        {
          title: "Implementation",
          side: "left",
          child: [{ title: "Rescue", type: "dark" }],
        },
        {
          title: "Upgrade/Migration",
          side: "right",
          child: [],
        },
        {
          title: "Support & Optimize",
          side: "right",
          child: [],
        },
        {
          title: "KOR Solution Accelerators",
          side: "right",
          child: [],
        },
        {
          title: "Enterprise Content Management Services",
          side: "right",
          child: [],
        },
      ],
    },
    {
      id: "data-analytics-ai",
      title: "Data & Analytics and AI",
      image: "/assets/menu/service-menu(2).png",
      items: [
        {
          title: "AI First Strategy and Assessment",
          side: "left",
          child: [],
        },
        {
          title: "Modern Cloud Data Services",
          side: "left",
          child: [],
        },
        {
          title: "Enterprise Analytics Services",
          side: "left",
          child: [],
        },
        {
          title: "Managed Services for AI Driven Enterprises",
          side: "left",
          child: [],
        },
        {
          title: "Responsible AI Services",
          side: "right",
          child: [],
        },
        {
          title: "Microsoft Fabric Solution Accelerators",
          side: "right",
          child: [
            { title: "KOR Smartforge", type: "dark" },
            { title: "KOR ESGenius", type: "dark" },
            { title: "KOR BankIQ", type: "dark" },
          ],
        },
      ],
    },
    {
      id: "cloud-business-services",
      title: "Cloud Business Services",
      image: "/assets/menu/service-menu(3).png",
      items: [
        {
          title: "Migration",
          side: "left",
          child: [],
        },
        {
          title: "Modernization",
          side: "left",
          child: [],
        },
        {
          title: "Management",
          side: "left",
          child: [],
        },
        {
          title: "Maximization",
          side: "left",
          child: [],
        },
        {
          title: "Cybersecurity",
          side: "right",
          child: [],
        },
        {
          title: "Automation/Transformation",
          side: "right",
          child: [],
        },
        {
          title: "Hybrid Operations",
          side: "right",
          child: [],
        },
      ],
    },
    {
      id: "iot-digital-engineering",
      title: "IoT & Digital Engineering",
      image: "/assets/menu/service-menu(4).png",
      items: [
        {
          title: "IoT Services",
          side: "left",
          child: [],
        },
      ],
    },
    {
      id: "kor-solution-accelerators",
      title: "KOR Solution Accelerators",
      image: "/assets/menu/service-menu(5).png",
      items: [
        {
          title: "Microsoft Fabric Solution Accelerators",
          side: "left",
          child: [
            { title: "KOR Smartforge", type: "dark" },
            { title: "KOR ESGenius", type: "dark" },
            { title: "KOR BankIQ", type: "dark" },
          ],
        },
        {
          title: "Microsoft Business Application Accelerators",
          side: "right",
          child: [
            { title: "Product Configurator", type: "dark" },
            { title: "Quality Control", type: "dark" },
            { title: "Fleet Maintenance", type: "dark" },
            { title: "EduUniv", type: "dark" },
            { title: "Grant Management", type: "dark" },
            { title: "Retail POS", type: "dark" },
            { title: "K360", type: "dark" },
          ],
        },
      ],
    },
  ],
} as const;

interface SubmenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  submenuItem: ServiceItem | null;
  serviceName: string;
}

const SubmenuDrawer = ({
  isOpen,
  onClose,
  submenuItem,
  serviceName,
}: SubmenuDrawerProps) => {
  if (!isOpen || !submenuItem) return null;

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="fixed inset-0 bg-black/5">
        <div className="flex items-center justify-between px-4 bg-white border-b border-gray-100 shadow-sm">
          <div className="flex items-center">
            <button
              onClick={onClose}
              className="mr-2 p-2 rounded-full hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-primary" />
            </button>
            <h2 className="text-2xl font-normal text-custom-gray-4 leading-6.5">
              {serviceName}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-50 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ServicesMobile = () => {
  const [serviceDrawer, setServiceDrawer] = useState<{
    isOpen: boolean;
    service: Service | null;
  }>({
    isOpen: false,
    service: null,
  });

  const [submenuDrawer, setSubmenuDrawer] = useState<{
    isOpen: boolean;
    item: ServiceItem | null;
    serviceName: string;
  }>({
    isOpen: false,
    item: null,
    serviceName: "",
  });

  const handleServiceClick = (service: Service) => {
    setServiceDrawer({ isOpen: true, service });
  };

  const closeServiceDrawer = () => {
    setServiceDrawer({ isOpen: false, service: null });
  };

  const handleSubmenuClick = (item: ServiceItem, serviceName: string) => {
    setSubmenuDrawer({
      isOpen: true,
      item,
      serviceName,
    });
  };

  const closeSubmenuDrawer = () => {
    setSubmenuDrawer({
      isOpen: false,
      item: null,
      serviceName: "",
    });
  };

  return (
    <>
      <div className="px-0">
        {servicesData.sections.map((service) => (
          <button
            key={service.id}
            onClick={() => handleServiceClick(service)}
            className="w-full flex items-center justify-between p-1 text-left"
          >
            <span className="text-lg text-custom-gray-4 font-normal">
              {service.title}
            </span>
            <ChevronRight className="w-4 h-4 text-primary" />
          </button>
        ))}
      </div>

      {serviceDrawer.isOpen && serviceDrawer.service && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-white">
            <div className="flex items-center justify-between py-4 bg-white border-b border-primary">
              <div className="flex items-center">
                <button
                  onClick={closeServiceDrawer}
                  className="p-2 rounded-full hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                <h2 className="items-center font-medium text-lg leading-[26px] text-primary">
                  {serviceDrawer.service.title}
                </h2>
              </div>
            </div>

            <div className="h-full overflow-y-auto bg-white">
              <div className="divide-y divide-gray-100">
                {serviceDrawer.service.items.map((item, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleSubmenuClick(item, serviceDrawer.service!.title)
                    }
                    className="w-full text-left border-b border-primary"
                  >
                    <div className="text-lg font-normal text-primary py-2 px-4 leading-6.5">
                      {item.title}
                    </div>
                    {item.child.length > 0 && (
                      <div className="space-y-1 mt-2">
                        {item.child.map((childItem, childIndex) => (
                          <div
                            key={childIndex}
                            className={cn(
                              `text-lg px-4 rounded`,
                              childItem.type === "light" && "text-custom-gray-4 ps-7",
                              childItem.type === "dark" && "text-black mb-1"
                            )}
                          >
                            {childItem.title}
                          </div>
                        ))}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <SubmenuDrawer
        isOpen={submenuDrawer.isOpen}
        onClose={closeSubmenuDrawer}
        submenuItem={submenuDrawer.item}
        serviceName={submenuDrawer.serviceName}
      />
    </>
  );
};

export default ServicesMobile;
