"use client";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import React, { useState } from "react";
const EcosystemData = {
  sidebar: [
    {
      id: 1,
      menu: "SAP",
      items: [
        {
          title: "SAP",
          description:
            "Get software and technology solutions from SAP, the leader in business applications. Run simple with the best in cloud, analytics, mobile and IT solutions.",
          buttontext: "know more",
          childtype: "type1",
          child: [
            { title: "Business Suite on Public CLoud", type: "Dark" },
            { title: "Business Suite on Private Cloud", type: "Light" },
            { title: "BTP Platform", type: "Dark" },
            { title: "SAP IBP", type: "Dark" },
            { title: "SAP Merger and Divesture ", type: "Dark" },
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
            {
              title: "Azure",
              description: [],
            },
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
            "Salesforce, the global CRM leader, empowers companies to connect with their customers in a whole new way. We bring companies and customers together.",
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
    {
      id: 4,
      menu: "ServiceNow",
      items: [
        {
          title: "ServiceNow",
          description:
            "ServiceNow is the cloud-based platform that automates enterprise IT operations. It creates a single system of record for IT and automates manual tasks.",
          buttontext: "know more",
          childtype: "type1",
          child: [],
        },
      ],
    },
    {
      id: 5,
      menu: "AWS",
      items: [
        {
          title: "AWS",
          description:
            "AWS offers the widest variety of compute instances, storage classes, databases, and analytics, all purpose-built to deliver the best cost and performance. ",
          buttontext: "know more",
          childtype: "type1",
          child: [],
        },
      ],
    },
  ],
};

const EcosystemMenu = () => {
  const [activeSideBar, setActiveSiderBar] = useState(EcosystemData.sidebar[0]);
  return (
    <div className="grid grid-cols-24 ">
      {/* Sidebar */}
      <div className="col-span-24 md:col-span-6 lg:col-span-6">
        <div className="bg-white sticky top-8">
          <nav className="space-y-2 px-10  ">
            {EcosystemData.sidebar.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveSiderBar(item)}
                className={`w-full group ${
                  activeSideBar.id === item.id
                    ? "border-b-2 border-[#26A17C]"
                    : "border-b-2 border-transparent hover:border-[#26A17C]"
                }`}
              >
                <h4 className="relative font-medium text-md text-[#26A17C]  leading-10 flex items-center justify-between cursor-pointer">
                  <span>{item.menu}</span>
                  {activeSideBar.id === item.id && (
                    <ChevronRight className="w-5 h-5 font-extrabold" />
                  )}
                  {activeSideBar.id !== item.id && (
                    <ChevronRight className="w-5 h-5 font-extrabold opacity-0 group-hover:opacity-100" />
                  )}
                </h4>
              </div>
            ))}
          </nav>
        </div>
      </div>
      {/* Content Area */}
      <div className="col-span-24 md:col-span-12 lg:col-span-12 pl-0 md:px-8 lg:px-8">
        <div className="space-y-6">
          {activeSideBar.items.map((contentItem, index) => (
            <div key={index}>
              <h2 className="text-md font-normal  text-[#313941] mb-4">
                {contentItem.title}
              </h2>
              <p className="text-[15px] text-[#6B6B6B] ">
                {contentItem.description}
              </p>
              <div className="mt-4">
                <Button
                  arrow={true}
                  className="bg-[#26A17C] text-[10px] text-white hover:bg-[white] hover:text-[#26A17C] border border-[#26A17C]"
                >
                  {contentItem.buttontext}
                </Button>
              </div>
              <div className="mt-6 space-y-2">
                {contentItem.childtype === "type1" &&
                  contentItem.child.map((childItem, childIndex) => (
                    <div
                      key={childIndex}
                      className={` ${
                        "type" in childItem && childItem.type === "Dark"
                          ? "text-[#000000]"
                          : " text-[#26A17C]"
                      }`}
                    >
                      {childItem.title}
                    </div>
                  ))}
                {contentItem.childtype === "type2" &&
                  contentItem.child.map((childItem, childIndex) => (
                    <div key={childIndex}>
                      <span className="text-[#313941] text-md">
                        {childItem.title}
                      </span>
                      <div className="my-8 flex flex-wrap">
                        {"description" in childItem &&
                          childItem.description?.map((item, index) => (
                            <p
                              key={index}
                              className="text-[#6B6B6B] text-[15px] w-1/2 leading-6 mb-2"
                            >
                              {item}
                            </p>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Image Section */}
      <div className="col-span-24 md:col-span-6 lg:col-span-6 mt-0 ">
        <KorcomptenzImage
          src="/assets/menu/service_menu.png"
          alt={activeSideBar.menu}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default EcosystemMenu;
