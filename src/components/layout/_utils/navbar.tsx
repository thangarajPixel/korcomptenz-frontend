"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import { Button } from "@/components/ui/button";
import { X, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { jsonData } from "@/utils/helper";
import Link from "next/link";
import { SearchIcon } from "../../../../public/svg/all-svg";
import MegaMenuContent from "./mega-menu-content";
import { cn } from "@/lib/utils";
import { useOnClickOutside } from "@/utils/custom-hooks";

export function Navbar() {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('templates');
  // const [isScrolled, setIsScrolled] = useState(false);
  const handleClickOutside = () => {
    setActiveSection('');
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // useEffect(() => {
  //   if (isMenuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }

  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [isMenuOpen]);
  useOnClickOutside(targetRef as React.RefObject<HTMLElement>, handleClickOutside);
  return (
    <div ref={targetRef}>
      <header
        // className={`sticky top-0 z-50 w-full border-b border-border transition-all duration-500 ease-out ${isScrolled
        //   ? "bg-background/95 backdrop-blur-md shadow-lg supports-[backdrop-filter]:bg-background/80"
        //   : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        //   }`}
        className={`sticky top-0 z-50 w-full border-b border-border transition-all duration-500 ease-out bg-white`}
      >
        <div className="container-nav h-[100px] pt-5">
          <div
            className={` flex items-center justify-between transition-all duration-500 ease-out "h-16"`}
          >
            {/* Logo with enhanced animation */}
            <div className="flex items-center group cursor-pointer">
              <div className="flex items-center space-x-2">
                <KorcomptenzImage
                  className="size-full"
                  src={jsonData.header.companyDetail.logo}
                  alt="Logo"
                  width={100}
                  height={100}
                />
              </div>
            </div>

            {/* Desktop Navigation with Enhanced Mega Menu */}
            <nav className="hidden lg:flex items-center space-x-7 relative text-[#313941] text-sm font-light">
              {jsonData.header.navItems.map((item, index) => (
                <p
                  key={index}
                  className={cn(`cursor-pointer font-medium transition-all duration-300 ease-out hover:text-primary  relative group/nav 
      after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all 
      after:duration-300 after:ease-out hover:after:w-full`, {
                    'after:w-full after:translate-x-0 after:opacity-100 after:visible after:z-10 text-primary': activeSection === item.label
                  })}
                  onClick={() => setActiveSection(item.label)}
                >
                  {item.label}
                </p>
              ))}
            </nav>

            {/* Enhanced Desktop CTA with animations */}
            <div className="hidden lg:flex items-center justify-between gap-10">
              <SearchIcon className="w-8 h-8 text-black" />

              <Button size="xl" className="variant:default  font-base ">
                <Link
                  href={jsonData.header.button.href}
                  className="flex items-center"
                >
                  {jsonData.header.button.name}
                  <ChevronRight className="ml-1 h-5 w-5 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Enhanced Mobile menu button with smooth animation */}
            <div className="lg:hidden  gap-2">
              <button
                className="transition-all duration-300 ease-out cursor-pointer  p-2 rounded-md"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="relative w-6 h-6">
                  <KorcomptenzImage
                    src="/assets/icn_mob_mob.svg"
                    alt="menu"
                    fill
                    className={`absolute inset-0 transition-all duration-500 ease-out ${isMenuOpen
                      ? "opacity-0 rotate-180 scale-75"
                      : "opacity-100 rotate-0 scale-100"
                      }`}
                  />
                  <X
                    className={`absolute inset-0  transition-all duration-500 ease-out ${isMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-180 scale-75"
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <MegaMenuContent activeTab={activeSection} />

      </header>
      {/* Enhanced Mobile Menu with smooth animations */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {/* Enhanced Backdrop with animation */}
        <div
          className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-all duration-500 ease-out ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Enhanced Mobile Navigation Panel with slide animation */}
        <div
          className={`fixed top-16 left-0 right-0 bottom-0 bg-background border-t border-border shadow-xl transition-all duration-500 ease-out ${isMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0"
            }`}
        >
          <div className="h-full overflow-y-auto">
            <div className="px-4 py-6 space-y-6">
              {/* Enhanced Regular mobile nav items */}
              <div
                className={`space-y-2 border-t border-border pt-6 transition-all duration-500 ease-out ${isMenuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-4"
                  }`}
                style={{ transitionDelay: "300ms" }}
              >
                {jsonData.header.navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block px-3 py-3 text-sm font-medium text-muted-foreground transition-all duration-300 ease-out hover:text-foreground hover:bg-muted hover:translate-x-1 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Enhanced Mobile CTA buttons */}
              <div
                className={`border-t border-border pt-6 transition-all duration-500 ease-out ${isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="flex flex-col space-y-3">
                  <Link
                    href={jsonData.header.button.href}
                    className="flex items-center"
                  >
                    <Button
                      size="lg"
                      className="w-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {jsonData.header.button.name}
                      <ChevronRight className="ml-1 h-5 w-5 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
