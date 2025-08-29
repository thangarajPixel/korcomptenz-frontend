"use client"

import KorcomptenzImage from "@/components/korcomptenz-image"
import { Button } from "@/components/ui/button"
import { Menu, X, Search,ChevronRight } from "lucide-react"
import React, { useState, useEffect } from "react"


export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  return (
    <React.Fragment>
    <header
      className={`sticky top-0 z-50 w-full border-b border-border transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg supports-[backdrop-filter]:bg-background/80"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8  h-[100px] pt-5">
        <div
          className={`flex items-center justify-between transition-all duration-500 ease-out ${isScrolled ? "h-14" : "h-16"}`}
        >
          {/* Logo with enhanced animation */}
          <div className="flex items-center group cursor-pointer">
          <div className="flex items-center space-x-2">
            <KorcomptenzImage src="/assets/logo.png" alt="Logo" width={36} height={36} />
            <span className="text-2xl font-semibold text-gray-900">korcomptenz</span>
          </div>
          </div>

          {/* Desktop Navigation with Enhanced Mega Menu */}
          <nav className="hidden lg:flex items-center space-x-8 relative text-[#313941] text-md">

            {/* Enhanced regular nav items */}
            <a
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
            </a>
          </nav>

          {/* Enhanced Desktop CTA with animations */}
          <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-gray-900">
              <Search className="h-5 w-5" />
          </Button>
            <Button
              className="variant:default inline-flex h-[50px] w-[166px] font-base text-md"
            >
              Contact Us   <ChevronRight className="ml-1 h-5 w-5 transition-transform" />

            </Button>
          </div>

          {/* Enhanced Mobile menu button with smooth animation */}
          <div className="lg:hidden flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-gray-700 hover:text-gray-900">
              <Search className="h-5 w-5" />
          </Button>
          <button
            className="transition-all duration-300 ease-out hover:scale-110 hover:bg-muted/50 p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu
                className={`absolute inset-0 h-6 w-6 transition-all duration-500 ease-out ${
                  isMenuOpen ? "opacity-0 rotate-180 scale-75" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute inset-0 h-6 w-6 transition-all duration-500 ease-out ${
                  isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-75"
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
      className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-out ${
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
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
        }`}
      >
        <div className="h-full overflow-y-auto">
          <div className="px-4 py-6 space-y-6">

            {/* Enhanced Regular mobile nav items */}
            <div
              className={`space-y-2 border-t border-border pt-6 transition-all duration-500 ease-out ${
                isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <a
                href="#Services"
                className="block px-3 py-3 text-base font-medium text-muted-foreground transition-all duration-300 ease-out hover:text-foreground hover:bg-muted hover:translate-x-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#Industries"
                className="block px-3 py-3 text-base font-medium text-muted-foreground transition-all duration-300 ease-out hover:text-foreground hover:bg-muted hover:translate-x-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </a>
              <a
                href="#Ecosystems"
                className="block px-3 py-3 text-base font-medium text-muted-foreground transition-all duration-300 ease-out hover:text-foreground hover:bg-muted hover:translate-x-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Ecosystems
              </a>
              <a
                href="#Insights"
                className="block px-3 py-3 text-base font-medium text-muted-foreground transition-all duration-300 ease-out hover:text-foreground hover:bg-muted hover:translate-x-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Insights
              </a>
              
              <a
                href="#"
                className="block px-3 py-3 text-base font-medium text-muted-foreground transition-all duration-300 ease-out hover:text-foreground hover:bg-muted hover:translate-x-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#Careers"
                className="block px-3 py-3 text-base font-medium text-muted-foreground transition-all duration-300 ease-out hover:text-foreground hover:bg-muted hover:translate-x-1 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </a>
            </div>

            {/* Enhanced Mobile CTA buttons */}
            <div
              className={`border-t border-border pt-6 transition-all duration-500 ease-out ${
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="flex flex-col space-y-3">
                <Button
                  size="lg"
                  className="w-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:-translate-y-0.5"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
  )
}
