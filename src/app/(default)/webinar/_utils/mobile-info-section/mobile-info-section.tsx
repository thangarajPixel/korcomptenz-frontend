import React from "react";
import { ChevronRight } from "lucide-react";

interface MobileInfoSectionProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const MobileInfoSection = ({
  title,
  description,
  buttonText,
  buttonLink,
}: MobileInfoSectionProps) => {
  return (
    <section className="block md:hidden py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            {description}
          </p>

          {/* Button */}
          <a
            href={buttonLink}
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-teal-600 transition-colors"
          >
            {buttonText}
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MobileInfoSection;
