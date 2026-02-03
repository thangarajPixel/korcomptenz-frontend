"use client";
import KorcomptenzImage from "@/components/korcomptenz-image";
import { Button } from "@/components/ui/button";
import { X, ChevronRight, Plus, Minus } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import MegaMenuContent from "./mega-menu/mega-menu-content";
import { AnimatePresence } from "framer-motion";
import ServicesMobile from "./mega-menu/_utils/service-mobile";
import IndustriesMobile from "./mega-menu/_utils/industries-mobile";
import AboutMobile from "./mega-menu/_utils/about-mobile";
import InsightMobile from "./mega-menu/_utils/insight-mobile";

import EcosystemMobile from "./mega-menu/_utils/ecosytem-mobile";

export function Navbar({ data }: { data: LayoutType }) {
  // const targetRef = React.useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const toggleExpand = (label: string) => {
    setExpandedItem(expandedItem === label ? null : label);
  };
  // const [isScrolled, setIsScrolled] = useState(false);
  // const handleClickOutside = () => {
  //   setActiveSection('');
  // };

  // useOnClickOutside(targetRef as React.RefObject<HTMLElement>, handleClickOutside);

  return (
    <>
      <header
        // className={`sticky top-0 z-50 w-full border-b border-border transition-all duration-500 ease-out ${isScrolled
        //   ? "bg-background/95 backdrop-blur-md shadow-lg supports-[backdrop-filter]:bg-background/80"
        //   : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        //   }`}
        onMouseLeave={() => setActiveSection("")}
        className={`sticky top-0 z-50 w-full border-b border-border transition-all duration-500 ease-out bg-white`}
      >
        <div
          className={`container-nav h-auto lg:h-[100px] pt-3 pb-3 lg:pb-0 lg:pt-5 sm:px-4`}
        >
          <div
            className={` flex items-center justify-between transition-all duration-500 ease-out "h-16"`}
          >
            {/* Logo with enhanced animation */}
            <div className="flex items-center group cursor-pointer">
              <Link href={"/"} className="flex items-center space-x-2">
                <KorcomptenzImage
                  className="size-full"
                  src={data?.company?.companyFullLogo}
                  width={100}
                  height={100}
                />
              </Link>
            </div>

            {/* Desktop Navigation with Enhanced Mega Menu */}
            <nav className="hidden min-[1120px]:flex items-center space-x-7 relative text-muted text-lg font-light">
              {data?.navItems
                .filter((item) => !item?.isButton)
                .map((item) => (
                  <Link
                    key={`nav-item-${item?.label}`}
                    href={item?.href || "#"}
                    onClick={() => setActiveSection("")}
                    className={cn(
                      `cursor-pointer font-medium transition-all duration-300 ease-out hover:text-primary  relative group/nav 
      after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all 
      after:duration-300 after:ease-out hover:after:w-full`,
                      {
                        "after:w-full after:translate-x-0 after:opacity-100 after:visible after:z-10 text-primary":
                          activeSection === item.label,
                      },
                    )}
                    onMouseEnter={() =>
                      setActiveSection(item.hasChild ? item.label : "")
                    }
                  >
                    {item.label}
                  </Link>
                ))}
            </nav>

            {/* Enhanced Desktop CTA with animations */}
            <div className="hidden min-[1120px]:flex items-center justify-between gap-10">
              <Button size="xl" className="variant:default  font-base ">
                <Link
                  href={
                    data?.navItems?.find((item) => item?.isButton)?.href || "#"
                  }
                  className="flex items-center"
                >
                  {data?.navItems?.find((item) => item?.isButton)?.label}
                  <ChevronRight
                    className="ml-1 h-5 w-5 transition-transform"
                    strokeWidth={3}
                  />
                </Link>
              </Button>
            </div>

            {/* Enhanced Mobile menu button with smooth animation */}
            <div className="min-[1120px]:hidden  gap-2">
              <button
                className="transition-all duration-300 ease-out cursor-pointer  p-2 rounded-md"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="relative w-6 h-6">
                  <KorcomptenzImage
                    src="/assets/icn_mob_mob.svg"
                    alt="menu"
                    fill
                    className={`absolute inset-0 transition-all duration-500 ease-out ${
                      isMenuOpen
                        ? "opacity-0 rotate-180 scale-75"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    className={`absolute inset-0  transition-all w-8 h-8 -top-2 -right-2 stroke-[2px] duration-500 ease-out ${
                      isMenuOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-180 scale-75"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <MegaMenuContent
          activeTab={activeSection}
          data={data}
          onClick={() => setActiveSection("")}
        />
      </header>
      {/* Enhanced Mobile Menu with smooth animations */}
      <div
        className={`fixed inset-0 z-40 min-[1120px]:hidden  transition-all duration-500 ease-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Enhanced Backdrop with animation */}
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-500 ease-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Enhanced Mobile Navigation Panel with slide animation */}
        <div
          className={`fixed top-16 left-0 right-0 bottom-0 bg-background border-t border-border shadow-xl transition-all duration-500 ease-out ${
            isMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="h-full overflow-y-auto bg-[#f2f2f2]">
            <div className="pb-5  space-y-6  ">
              {/* Enhanced Regular mobile nav items */}
              <div
                className={`space-y-2 border-t border-border transition-all duration-500 ease-out overflow-scroll ${
                  isMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                {data?.navItems
                  ?.filter((item) => !item?.isHideMobile)
                  .map((item, index) => (
                    <div key={index}>
                      {item.hasChild === false ? (
                        <Link
                          href={item.href || "#"}
                          onClick={() => setIsMenuOpen(false)}
                          className="w-full block px-3 py-1 text-lg font-medium text-muted-foreground border-b-1 border-primary"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <button
                          onClick={() => toggleExpand(item.label)}
                          className={`w-full flex justify-between items-center mt-3 px-3 py-1 text-lg font-medium ${
                            expandedItem === item.label
                              ? "text-primary"
                              : "text-muted-foreground border-b-1 border-primary"
                          }`}
                        >
                          <span>{item.label}</span>

                          {expandedItem === item.label ? (
                            <Minus className="ml-2 h-4 w-4 transition-all duration-300" />
                          ) : (
                            <Plus className="ml-2 h-4 w-4 transition-all duration-300" />
                          )}
                        </button>
                      )}

                      {/* Accordion Content */}
                      <AnimatePresence>
                        {expandedItem === item.label && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pr-3 pl-5 py-3   rounded-md "
                          >
                            {item.label === "Services" && (
                              <ServicesMobile
                                data={data}
                                closeMenu={() => setIsMenuOpen(false)}
                              />
                            )}
                            {item.label === "Industries" && (
                              <IndustriesMobile
                                data={data}
                                closeMenu={() => setIsMenuOpen(false)}
                              />
                            )}
                            {item.label === "Ecosystems" && (
                              <EcosystemMobile
                                data={data}
                                closeMenu={() => setIsMenuOpen(false)}
                              />
                            )}
                            {item.label === "Insights" && (
                              <InsightMobile
                                data={data}
                                closeMenu={() => setIsMenuOpen(false)}
                              />
                            )}
                            {item.label === "About Us" && (
                              <AboutMobile
                                data={data}
                                closeMenu={() => setIsMenuOpen(false)}
                              />
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
              </div>

              {/* Enhanced Mobile CTA buttons */}
              <div
                className={`fixed bottom-0 left-0 w-full z-50 transition-all duration-500 ease-out  bg-[#f2f2f2]
    ${
      isMenuOpen
        ? "opacity-100 translate-y-0"
        : "opacity-0 translate-y-4 pointer-events-none"
    }
  `}
                style={{ transitionDelay: "400ms" }}
              >
                <div className=" border-t">
                  <div className="flex gap-2 items-end justify-between px-2 py-3">
                    {/* Left side - Career | Contact Us */}
                    <div className="flex gap-1">
                      {data?.navItems
                        ?.filter((item) => item?.isHideMobile)
                        .map((item, index, arr) => (
                          <div key={index}>
                            <Link
                              href={item.href || "#"}
                              className="hover:text-primary text-[14px] transition-colors"
                            >
                              {item.label}
                              {index !== arr.length - 1 && (
                                <span className="text-gray-400"> |</span>
                              )}
                            </Link>
                          </div>
                        ))}
                    </div>

                    {/* Right side - Social icons */}
                    <div className="flex space-x-2">
                      {data?.company?.socialPlatforms.map((social) => (
                        <Link
                          key={`social-platform-${social.id}`}
                          href={social?.link || "/"}
                          className="w-6 h-6 rounded-lg flex items-center justify-center"
                        >
                          <KorcomptenzImage
                            src={social.icon}
                            width={1000}
                            height={1000}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MegaMenuContent
          data={data}
          activeTab={activeSection}
          onClick={() => setIsMenuOpen(false)}
        />
      </div>
    </>
  );
}
