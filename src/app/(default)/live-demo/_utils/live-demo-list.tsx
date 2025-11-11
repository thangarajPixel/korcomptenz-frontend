"use client";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";

export default function LiveDemoList() {
  const [activeSection, setActiveSection] = useState("microsoft-dynamics");
  const contentRef = useRef<HTMLDivElement>(null);

  const sections = [
    {
      id: "microsoft-dynamics",
      title: "Microsoft Dynamics",
      items: [
        {
          id: 1,
          title:
            "Microsoft Dynamics D365 Custom Reporting Analytics (KOR SmartForge)",
          date: "Nov 19, 2025",
          description:
            "Streamline Operations. Spot Revenue Leaks. Secure Margins Powered By Expert-Led Transformation. Driven By Impact-Led Growth.",
        },
        {
          id: 2,
          title: "Data & Advanced Analytics for Banking (KOR Bank IQ)",
          date: "Dec 10, 2025",
          description:
            "Know Your Customers Like Never Before. Deliver Experiences That Drive Growth.",
        },
        {
          id: 3,
          title:
            "Revolutionize Accounts Payable with Zero-Touch Finance Powered by Dynamics 365 & AI",
          date: "Nov 13, 2025",
          description:
            "Eliminate manual effort, reduce errors, and accelerate your finance operations with intelligent automation.",
        },
        {
          id: 4,
          title: "Streamline Your Procure-to-Pay Journey with D365",
          date: "Nov 20, 2025",
          description:
            "Discover how automation drives efficiency, compliance, and collaboration across procurement and finance—all on a single, scalable Dynamics 365 platform.",
        },
        {
          id: 5,
          title:
            "Unify Your Retail Experience: Seamless Integration of Online & Offline Sales",
          date: "Dec 04, 2025",
          description:
            "Discover how to transform customer engagement and operational efficiency with a connected commerce platform.",
        },
        {
          id: 6,
          title:
            "Reimagine Your Warehouse with Intelligent Automation and Voice Picking",
          date: "Dec 11, 2025",
          description:
            "Boost speed, accuracy, and scalability—see how next-gen warehouse technology transforms operations end-to-end.",
        },
      ],
    },
    {
      id: "sap",
      title: "SAP",
      items: [
        {
          id: 7,
          title: "Transform Financial",
          date: "Dec 01, 2025",
          description:
            "Transform your financial operations with SAP solutions.",
        },
        {
          id: 8,
          title: "End-to-End Digital Project",
          date: "Dec 05, 2025",
          description:
            "Manage your digital projects end-to-end with integrated SAP solutions.",
        },
        {
          id: 9,
          title: "Transforming Post-MSA",
          date: "Dec 08, 2025",
          description:
            "Optimize your post-merger integration with SAP best practices.",
        },
      ],
    },
    {
      id: "oracle",
      title: "Oracle",
      items: [
        {
          id: 10,
          title: "Transform Financial",
          date: "Dec 01, 2025",
          description:
            "Transform your financial operations with Oracle solutions.",
        },
        {
          id: 11,
          title: "End-to-End Digital Project",
          date: "Dec 05, 2025",
          description:
            "Manage your digital projects end-to-end with integrated Oracle solutions.",
        },
        {
          id: 12,
          title: "Transforming Post-MSA",
          date: "Dec 08, 2025",
          description:
            "Optimize your post-merger integration with Oracle best practices.",
        },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll("[data-section]");
      let currentActive = activeSection;
      sectionElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom > 150) {
          currentActive =
            element.getAttribute("data-section") || "microsoft-dynamics";
        }
      });
      setActiveSection(currentActive);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleSectionClick = (sectionId: string) => {
    const sectionElement = document.querySelector(
      `[data-section="${sectionId}"]`
    );
    if (!sectionElement) return;
    const offset = 100;
    const elementTop =
      sectionElement.getBoundingClientRect().top + window.scrollY;
    const scrollTo = elementTop - offset;

    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
    setActiveSection(sectionId);
  };

  return (
    <div className="relative flex flex-col lg:flex-row bg-white container-md ">
      {/* Left Sidebar Navigation */}

      <div className="w-full lg:w-64   ">
        <div className="space-y-2 sticky top-32">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleSectionClick(section.id)}
              className={cn(
                `w-full text-left font-semibold px-4 py-2 text-xl transition-all text-foreground duration-200  hover:text-primary `,
                activeSection === section.id && " text-primary "
              )}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Right Content Area */}
      <div ref={contentRef} className="flex-1 overflow-y-auto p-8">
        {/* Content Sections */}
        {sections.map((section, index) => (
          <div
            key={section.id}
            data-section={section.id}
            className={cn(
              "mb-6 pb-6 border-b border-gray-200",
              index === sections.length - 1 && "border-b-0"
            )}
          >
            <h2 className="text-7xl font-semibold text-foreground mb-8">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item) => (
                <div key={item.id} className="bg-white  ">
                  <h3 className="text-xl font-semibold text-gray-900 ">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <p className="text-gray-600 text-sm mb-2 leading-relaxed">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="text-primary font-semibold text-sm hover:text-primary transition-colors"
                  >
                    Book a Demo
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
