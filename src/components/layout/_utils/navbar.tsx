"use client"

import { Button } from "@/components/ui/button"
import { Search, ChevronRight } from "lucide-react"
import Image from "next/image"

const navigationItems = ["Services", "Industries", "Ecosystems", "Success Stories", "Insights", "About Us", "Careers"]

export function Navbar() {

  return (
    <nav className="w-full  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-25">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Image src="/assets/logo.png" alt="Logo" width={32} height={32} />
            <span className="text-xl font-semibold text-gray-900">korcomptenz</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-foreground hover:text-gray-700 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-700 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </Button>
            <Button >
              Contact Us
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-gray-700">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
