"use client";
import React from "react";

interface ReserveSeatSectionProps {
  title: string;
  description: string;
  buttonText: string;
  formAction?: string;
}

const ReserveSeatSection = ({
  title,
  description,
  buttonText,
  formAction = "#",
}: ReserveSeatSectionProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="text-3xl md:text-[40px] leading-[48px] font-semibold text-[#313941]  mb-6">
              {title}
            </h2>
            <p className="text-[#393939] text-[18px] leading-[25px] font-normal">
              {description}
            </p>
          </div>

          {/* Right - Form */}
          <div className="bg-gray-100 rounded-3xl p-6 md:p-8">
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit} action={formAction} method="POST">
                <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                  {/* Full Name */}
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Business Email */}
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Business email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Company */}
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-span-2 md:col-span-1">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="bg-[#5648D8] text-white py-3 px-12 rounded-[15px] font-semibold hover:bg-[#5648D8] transition-colors shadow-lg"
                  >
                    {buttonText}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReserveSeatSection;
