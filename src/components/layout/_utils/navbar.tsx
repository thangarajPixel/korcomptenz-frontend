"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import { jsonData } from "@/utils/helper";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <React.Fragment>
      <header
        // className={`sticky top-0 z-50 w-full border-b border-border transition-all duration-500 ease-out ${isScrolled
        //   ? "bg-background/95 backdrop-blur-md shadow-lg supports-[backdrop-filter]:bg-background/80"
        //   : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        //   }`}
        className={`sticky top-0 z-50 w-full border-b border-border transition-all duration-500 ease-out bg-white
          }`}
      >
        <div className="container-nav h-[100px] pt-5">
          <div
            className={` flex items-center justify-between transition-all duration-500 ease-out ${isScrolled ? "h-14" : "h-16"
              }`}
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
            <nav className="hidden lg:flex items-center space-x-7 relative text-[#313941] text-md">
              {jsonData.header.navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="font-medium transition-all duration-300 ease-out hover:text-primary hover:scale-105 relative group/nav 
      after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all 
      after:duration-300 after:ease-out hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}

              {/* Enhanced regular nav items */}
              {/* <a
              href="#Services"
              className=" font-medium  transition-all duration-300 ease-out hover:text-primary hover:scale-105 relative group/nav after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-out hover:after:w-full"
            >
              Services
            </a>
            <a
              href="#Industries"
              className=" font-medium  transition-all duration-300 ease-out hover:text-primary hover:scale-105 relative group/nav after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-out hover:after:w-full"
            >
              Industries
            </a>
            <a
              href="#Ecosystems"
              className=" font-medium  transition-all duration-300 ease-out hover:text-primary hover:scale-105 relative group/nav after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-out hover:after:w-full"
            >
              Ecosystems
            </a>
            <a
              href="#Success"
              className=" font-medium  transition-all duration-300 ease-out hover:text-primary hover:scale-105 relative group/nav after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-out hover:after:w-full"
            >
              Success Stories
            </a>
            <a
              href="#Insights"
              className=" font-medium  transition-all duration-300 ease-out hover:text-primary hover:scale-105 relative group/nav after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-out hover:after:w-full"
            >
              Insights
            </a>
            <a
              href="#About"
              className=" font-medium  transition-all duration-300 ease-out hover:text-primary hover:scale-105 relative group/nav after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-out hover:after:w-full"
            >
              About Us
            </a>
            <a
              href="#Careers"
              className=" font-medium  transition-all duration-300 ease-out hover:text-primary hover:scale-105 relative group/nav after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 after:ease-out hover:after:w-full"
            >
              Careers
            </a> */}
            </nav>

            {/* Enhanced Desktop CTA with animations */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-gray-900"
              >
                <Search />
              </Button>
              <Button className="variant:default  h-[50px] w-[166px] font-base text-md">
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
            <div className="lg:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-gray-900"
              >
                <Search className="h-5 w-5" />
              </Button>
              <button
                className="transition-all duration-300 ease-out hover:scale-110 hover:bg-muted/50 p-2 rounded-md"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`absolute inset-0 h-6 w-6 transition-all duration-500 ease-out ${isMenuOpen
                      ? "opacity-0 rotate-180 scale-75"
                      : "opacity-100 rotate-0 scale-100"
                      }`}
                  />
                  <X
                    className={`absolute inset-0 h-6 w-6 transition-all duration-500 ease-out ${isMenuOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-180 scale-75"
                      }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
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
                    className="block px-3 py-3 text-base font-medium text-muted-foreground transition-all duration-300 ease-out hover:text-foreground hover:bg-muted hover:translate-x-1 rounded-md"
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
    </React.Fragment>
  );
}
