import React from "react";
import Image from "next/image";

interface GallerySectionProps {
  images: string[];
}

const GallerySection = ({ images }: GallerySectionProps) => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
