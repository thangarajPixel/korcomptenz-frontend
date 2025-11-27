import React from "react";
import Image from "next/image";

interface Platform {
  name: string;
  logo: string;
  url: string;
  text?: string;
}

interface SubscribeSectionProps {
  platforms: Platform[];
}

const SubscribeSection = ({ platforms }: SubscribeSectionProps) => {
  return (
    <section className="pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Subscribe Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 inline-block relative pb-3">
            Subscribe
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-[3px] bg-teal-500"></div>
          </h2>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:border-gray-300 flex items-center justify-center min-h-[120px]">
                <div className="flex flex-col items-center justify-center w-full">
                  {/* {platform.text && (
                    <span className="text-sm text-gray-500 mb-2">
                      {platform.text}
                    </span>
                  )} */}
                  <Image
                    src={platform.logo}
                    alt={platform.name}
                    width={200}
                    height={60}
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
