import React from 'react'

const BannerSection = () => {
  return (
    <div className="container-nav md:mt-8 max-w-[96rem] !md:max-w-full md:mx-auto mx-0 mt-0">

      <div className="relative w-full min-h-[30rem] md:min-h-[33rem] h-full overflow-hidden rounded-4xl"
      >

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/assets/banner/KCBanner2.svg)" }}
        />

        <div className="
          absolute inset-0 
          md:bg-gradient-to-r md:from-black/80 md:via-black/5 md:to-transparent
          bg-gradient-to-t from-black/80 via-black/5 to-transparent
        " />

        <div className="absolute z-10 h-full flex flex-col justify-end items-end gap-10  px-6 md:px-12 lg:px-16 max-w-2xl pb-16 ">
          <h1 className="text-white  md:text-5xl text-4xl  font-bold leading-tight ">
            Advisory & Consulting Services
          </h1>
          <p className="text-white/90 text-2xl md:text-4xl max-w-xl">
            Unlock enterprise transformation with expert-led advisory and consulting—aligning ERP, CRM, and cloud strategies to accelerate modernization, improve ROI, and ensure scalable, business-aligned outcomes from day one.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BannerSection
