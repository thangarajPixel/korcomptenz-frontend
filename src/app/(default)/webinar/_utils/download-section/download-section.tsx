import React from "react";
import { Download } from "lucide-react";

interface DownloadSectionProps {
  downloadLink: string;
}

const DownloadSection = ({ downloadLink }: DownloadSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
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
      </div>
    </section>
  );
};

export default DownloadSection;
