import KorcomptenzImage from '@/components/korcomptenz-image'
import React from 'react'

const WeAreKorcomptenzSection = () => {
  return (
    <div className="container-md">
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        {/* Left Column - Company Name */}
        <div>
          <h1 className="text-2xl lg:text-4xl font-bold leading-tight">
            We are
            <br />
            Korcomptenz
          </h1>
        </div>

        {/* Right Column - Description */}
        <div className="space-y-5 text-lg leading-relaxed">
          <p className="text-pretty">
            We lead with expertise - in technology and domain to deliver solutions that align with your business
            goals.
          </p>
          <p className="text-pretty">
            We leverage our experience and robust partner ecosystem to elevate your processes, powering your
            transformation journey toward impactful growth
          </p>
        </div>
      </div>
      <div className="relative">

        <KorcomptenzImage
          src="/assets/home/video-thumb.jpg"
          className="w-full h-[500px] object-cover rounded-4xl"
          alt="video-thumb"
          width={1112}
          height={500}
        />


        <div className="absolute inset-0 bg-black/40 rounded-4xl" />


        <div className="absolute inset-0 flex items-center justify-center">
          <KorcomptenzImage
            src="/assets/home/Play button.png"
            className="w-12 h-12"
            alt="play-icon"
            width={54}
            height={54}
          />
        </div>
      </div>


    </div>
  )
}

export default WeAreKorcomptenzSection