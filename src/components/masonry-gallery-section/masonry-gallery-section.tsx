import React from 'react'
import MasonryGallery from './_utils/masonry-gallery'

const MasonryGallerySection = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Featured Content</h2>
      <MasonryGallery />
    </div>
  )
}

export default MasonryGallerySection