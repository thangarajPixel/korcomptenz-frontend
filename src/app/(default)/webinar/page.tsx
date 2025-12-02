import React from "react";
import Link from "next/link";
import Image from "next/image";
import webinarsData from "@/../public/json/webinars.json";

export default function WebinarsListPage() {
  const webinars = Object.values(webinarsData.webinars);

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Our Webinars
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our collection of webinars covering the latest trends in technology, business, and innovation.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {webinars.map((webinar: any) => (
            <Link
              key={webinar.slug}
              href={`/webinar/${webinar.slug}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={webinar.backgroundImage}
                  alt={webinar.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${webinar.status === "pre-webinar"
                        ? "bg-green-500 text-white"
                        : "bg-blue-500 text-white"
                      }`}
                  >
                    {webinar.status === "pre-webinar" ? "Upcoming" : "Watch Now"}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-teal-600 transition-colors">
                  {webinar.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {webinar.description}
                </p>

                {/* Date */}
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {new Date(webinar.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                {/* CTA */}
                <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700">
                  {webinar.status === "pre-webinar" ? "Register Now" : "Watch Recording"}
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {webinars.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No webinars available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
