"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
 
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container-md py-12 px-8">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-[#2d3748] text-7xl leading-tight mb-2 font-bold">
            Expert-led Transformations
          </h1>
          <h2 className="text-[#2d3748] text-7xl leading-tight mb-2 font-bold">
            Impact-led Growth
          </h2>
          <h3 className="text-[#2d3748] text-7xl leading-tight font-bold">
            The journey starts here
          </h3>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Row 1: Full name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="relative">
              <input
                type="text"
                name="fullName"
                placeholder="Full name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-[#cbd5e0] pb-3 text-[#2d3748] placeholder:text-[#cbd5e0] focus:outline-none focus:border-[#4a5568] transition-colors"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-[#cbd5e0] pb-3 text-[#2d3748] placeholder:text-[#cbd5e0] focus:outline-none focus:border-[#4a5568] transition-colors"
              />
            </div>
          </div>

          {/* Row 2: Organization and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="relative">
              <input
                type="text"
                name="organization"
                placeholder="Organization"
                value={formData.organization}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-[#cbd5e0] pb-3 text-[#2d3748] placeholder:text-[#cbd5e0] focus:outline-none focus:border-[#4a5568] transition-colors"
              />
            </div>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-0 border-b border-[#cbd5e0] pb-3 text-[#2d3748] placeholder:text-[#cbd5e0] focus:outline-none focus:border-[#4a5568] transition-colors"
              />
            </div>
          </div>

          {/* Message textarea */}
          <div className="relative">
            <textarea
              name="message"
              placeholder="Type your message/enquiry here.."
              value={formData.message}
              onChange={handleChange}
              rows={1}
              className="w-full bg-transparent border-0 border-b border-[#cbd5e0] pb-3 text-[#2d3748] placeholder:text-[#cbd5e0] focus:outline-none focus:border-[#4a5568] transition-colors resize-none"
            />
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#319795] text-[#319795] hover:bg-[#319795] hover:text-white transition-colors duration-300"
            >
              Submit
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
