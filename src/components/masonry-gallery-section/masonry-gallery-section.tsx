import React from 'react'
import MasonryGallery from './_utils/masonry-gallery'

const MasonryGallerySection = ({ data }: { data: MasonryGallerySectionType }) => {
  return (
    <section data-debug={data.__component} className="container-md mb-8">
      <MasonryGallery data={data} />
    </section>
  )
}

export default MasonryGallerySection