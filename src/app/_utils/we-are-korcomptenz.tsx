import KorcomptenzImage from '@/components/korcomptenz-image'
import React from 'react'

const WeAreKorcomptenzSection = () => {
  return (
    <div className="container mx-auto px-6 py-10 md:py-36 md:px-40">
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
      <div className='relative'>
        <KorcomptenzImage src="/assets/home/video-thumb.jpg" className='w-full h-auto rounded-2xl' alt="video-thumb" width={1112} height={607} />
      </div>
    </div>
  )
}

export default WeAreKorcomptenzSection