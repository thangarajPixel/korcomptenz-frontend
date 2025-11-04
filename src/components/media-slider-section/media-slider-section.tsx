import React from 'react'
import MediaSlider from './_utils/media-slider'

const MediaSliderSection = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Featured Content</h1>
      <MediaSlider />
    </div>
  )
}

export default MediaSliderSection