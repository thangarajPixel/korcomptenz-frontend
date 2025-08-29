'use client';

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import { jsonData } from '@/utils/helper'

export default function CareersSection() {
  const careers = jsonData.careers
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group">
          {/* Left side - Image with geometric elements */}
          <div className="relative">
            {/* Blue geometric arrows */}
            <div className="absolute top-8 left-6 z-10 group-hover:left-16 transition-all duration-1000">
              <div className="flex space-x-1 w-72">
                <Image
                  src="/assets/home/arrow.png"
                  alt="arrow"
                  className="w-full h-auto rounded-lg"
                  width={1112}
                  height={607} />
              </div>
            </div>

            {/* Main image */}
            <div className="relative z-10 ml-10">
              <Image
                src="/assets/banner/banner-5.png"
                alt="Professional working on laptop"
                className="w-full h-auto rounded-lg"
                width={1112}
                height={607} />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-8 mx-auto">
            {/* Header text with profile images */}
            <div className="relative group-hover:-translate-x-7 group-hover:scale-110 transition-all duration-1000">
              <div className="text-xl lg:text-5xl font-bold leading-tight w-full">
                <div className='flex flex-row items-center justify-between mb-6'>
                  <span className="text-gray-900 lg:-ml-24">Ready to </span>
                  <section className="flex flex-row items-center gap-2">
                    <div>
                      <img
                        src="/assets/home/profile-1.png"
                        alt="Team member"
                        className="w-16 h-16 rounded-full border-4 border-white shadow-lg shrink-0"
                      />
                    </div>
                    <span className="text-gray-900">build an</span>
                  </section>
                  <div>
                    <img
                      src="/assets/home/profile-3.png"
                      alt="Team member"
                      className="w-16 h-16 rounded-full border-4 border-white shadow-lg shrink-0"
                    />
                  </div>
                </div>

                <div className='flex flex-row items-center justify-between'>
                  <span className="text-teal-600">exceptional </span>
                  <section className="flex flex-row items-center gap-2">
                    <div className="">
                      <img
                        src="/assets/home/profile-2.png"
                        alt="Team member"
                        className="w-16 h-16 rounded-full border-4 border-white shadow-lg shrink-0"
                      />
                    </div>
                    <span className="text-teal-600">career?</span>
                  </section>
                </div>
              </div>
            </div>

            {/* Description text */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              {careers.description}
            </p>

            {/* CTA Button */}
            <Button type="button" size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg">
              {careers.exploreBtn}
              <ChevronRight className="ml-2 h-5 w-5 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
