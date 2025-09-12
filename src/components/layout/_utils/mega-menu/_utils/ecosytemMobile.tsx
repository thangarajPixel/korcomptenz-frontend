"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, X } from "lucide-react";
import { cn } from "@/lib/utils";

const EcosystemData = {
  sidebar: [
    {
      id: 1,
      menu: "SAP",
      items: [
        {
          title: "SAP",
          description:
            "Get software and technology solutions from SAP, the leader in business applications. Run simple with the best in cloud, analytics, mobile and IT solutions.",
          buttontext: "know more",
          childtype: "type1",
          child: [
            { title: "Business Suite on Public CLoud", type: "Dark" },
            { title: "Business Suite on Private Cloud", type: "Light" },
            { title: "BTP Platform", type: "Dark" },
            { title: "SAP IBP", type: "Dark" },
            { title: "SAP Merger and Divesture", type: "Dark" },
            { title: "Joule AI", type: "Dark" },
          ],
        },
      ],
    },
    {
      id: 2,
      menu: "Microsoft",
      items: [
        {
          title: "Microsoft",
          description:
            "Explore Microsoft products and services and support for your home or business. Shop Microsoft 365, Copilot, Teams, Xbox, Windows, Azure, Surface and more.",
          buttontext: "know more",
          childtype: "type2",
          child: [
            {
              title: "Dynamics 365",
              description: [
                "Sales",
                "Supply Chain Management",
                "Customer",
                "Commerce",
                "Customer Service",
                "Advance Warehouse Management",
                "Field Service",
                "Finance & Operations",
                "Customer Engagement",
                "Business Central",
              ],
            },
            {
              title: "AI, Analytics, & Automation",
              description: [
                "Microsoft Fabric",
                "Power BI",
                "Microsoft Copilot",
                "Azure Databricks",
                "Azure AI Foundry",
                "Azure Synapse Analytics",
                "Power Platform",
              ],
            },
            { title: "Azure", description: [] },
          ],
        },
      ],
    },
    {
      id: 3,
      menu: "Salesforce",
      items: [
        {
          title: "Salesforce",
          description:
            "Salesforce, the global CRM leader, empowers companies to connect with their customers in a whole new way.",
          buttontext: "know more",
          childtype: "type1",
          child: [
            { title: "Sales Cloud", type: "Dark" },
            { title: "Service Cloud", type: "Light" },
            { title: "Marketing Cloud", type: "Dark" },
          ],
        },
      ],
    },
    { id: 4, menu: "ServiceNow", items: [] },
    { id: 5, menu: "AWS", items: [] },
  ],
};

// Drawer for selected Ecosystem menu
const EcosystemDrawer = ({ isOpen, onClose, menu }) => {
  if (!isOpen || !menu) return null;

  const item = menu.items[0]; // pick the first item for now

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-white">
        {/* Header */}
        <div className="flex items-center justify-between py-4 bg-white border-b border-primary">
          <div className="flex items-center">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <h2 className="font-medium text-sm text-primary">{menu.menu}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-50 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="h-full overflow-y-auto bg-white">
          {item && (
            <div className="p-4 space-y-4">
             

              {/* type1 children */}
              {item.childtype === "type1" &&
                item.child?.map((child, i) => (
                  <div
                    key={i}
                    className={cn(
                      "px-2 py-2 border-b border-primary text-sm  leading-6.5 text-primary"
                    )}
                  >
                    {child.title}
                  </div>
                ))}

              {/* type2 children */}
              {item.childtype === "type2" &&
                item.child?.map((child, i) => (
                  <div key={i} className="px-2 py-3 border-b border-gray-100">
                    <p className="text-sm font-medium text-primary border-b border-primary ">
                      {child.title}
                    </p>
                    {child.description && child.description.length > 0 && (
                      <ul className=" mt-1 text-xs text-black">
                        {child.description.map((desc, j) => (
                          <li key={j}>{desc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const EcosystemMobile = () => {
  const [drawer, setDrawer] = useState({ isOpen: false, menu: null });

  const handleMenuClick = (menu) => {
    setDrawer({ isOpen: true, menu });
  };

  const closeDrawer = () => {
    setDrawer({ isOpen: false, menu: null });
  };

  return (
    <>
      {/* Sidebar list */}
      <div className="px-0">
        {EcosystemData.sidebar.map((ec) => (
          <button
            key={ec.id}
            onClick={() => handleMenuClick(ec)}
            className="w-full flex items-center justify-between p-2 text-left border-b border-gray-100"
          >
            <span className="text-sm text-custom-gray-4 font-normal">{ec.menu}</span>
            <ChevronRight className="w-4 h-4 text-primary" />
          </button>
        ))}
      </div>

      {/* Drawer */}
      <EcosystemDrawer
        isOpen={drawer.isOpen}
        onClose={closeDrawer}
        menu={drawer.menu}
      />
    </>
  );
};

export default EcosystemMobile;
