import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

interface Expert {
  name: string;
  title: string;
  company: string;
  image: string;
}

interface WebinarContentSectionProps {
  summary: {
    title: string;
    description: string;
    image: string;
  };
  keyTakeaways: string[];
  experts: Expert[];
  downloadLink: string;
}

const WebinarContentSection = ({
  summary,
  keyTakeaways,
  experts,
  downloadLink,
}: WebinarContentSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Summary Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-3xl md:text-[40px] leading-[48px] font-semibold mb-4 text-[#313941]">
                {summary.title}
              </h2>
              <p className="text-custom-blue-1 leading-[25px] text-[18px] font-normal">
                {summary.description}
              </p>
            </div>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src={summary.image}
                alt="Summary"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="mb-16 bg-[#5648D8] rounded-2xl p-8 md:p-12 text-white">
          <h2 className="text-2xl md:text-[40px] leading-[48px] text-[#FFFFFF] font-semibold mb-6">
            Key Takeaways
          </h2>
          <ul className="space-y-3">
            {keyTakeaways.map((takeaway, index) => (
              <li key={index} className="flex items-start">
                <span className="mr-3 mt-1">•</span>
                <span className="text-[17px] leading-[27px] font-normal ">
                  {takeaway}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Meet Our Experts */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-[40px] leading-[48px] font-semibold text-start mb-12 text-[#313941]">
            Meet Our Experts
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {experts.map((expert, index) => (
              <div key={index} className="relative pt-16">
                {/* Avatar - positioned at top, overlapping card */}
                <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-300 p-[5px]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-white p-1">
                      <div className="w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={expert.image}
                          alt={expert.name}
                          width={144}
                          height={144}
                          className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-[#E8F4F0] rounded-3xl p-8 pt-24 text-center hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl md:text-[28px] leading-[34px] font-semibold mb-2 text-[#313941]]">
                    {expert.name}
                  </h3>
                  <p className="text-lg md:text-[16px] leading-[25px] text-[#000000] font-normal mb-4">
                    {expert.title}
                  </p>
                  <p className="text-lg md:text-[16px] leading-[25px] text-[#000000] font-normal">
                    {expert.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Section */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
            Download Webinar Slides
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Get access to the complete presentation slides and additional
            resources from this webinar.
          </p>
          <a
            href={downloadLink}
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Now
          </a>
        </div>

        {/* Related Images Gallery */}
        <div className="mt-16">
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative aspect-video rounded-lg overflow-hidden"
              >
                <Image
                  src={`/assets/webinar/gallery-${item}.jpg`}
                  alt={`Gallery ${item}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebinarContentSection;
