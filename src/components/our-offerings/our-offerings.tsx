"use client";
import React from "react";

const OurOfferingsSection = ({ data }: { data: OurOfferingsType }) => {
  return (
    <section className="bg-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Subtitle */}
        <div className="inline-block border border-gray-400 rounded-full px-4 py-1 text-sm mb-4">
          {data.subtitle}
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          {data.title}
        </h2>

        {/* Divider */}
        <div className="border-t border-gray-300 mb-8"></div>

        {/* Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {data.columntitle?.map((column, index) => (
            <div key={index}>
              {/* Column Title */}
              <h3 className="font-semibold mb-4">{column.divtitle}</h3>

              {/* Links */}
              <ul className="space-y-2">
                {column.interlinks?.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.urllink}
                      className="text-gray-700 hover:underline"
                    >
                      {link.urlname}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurOfferingsSection;
