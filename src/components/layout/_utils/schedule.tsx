'use client';

import { Button } from '@/components/ui/button'
import React from 'react'
import { jsonData } from '@/utils/helper'
import KorcomptenzImage from '@/components/korcomptenz-image'

const ScheduleCall = () => {
  const footer = jsonData.footer
  return (
    <section className="bg-accent-foreground/30 py-16  lg:h-[600px] ">
      <div className="container-md">
        <div className="lg:flex flex-row items-center  justify-center lg:gap-8 ">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left lg:ml-0">
            <h2 className="text-2xl text-left sm:text-4xl lg:text-3xl font-bold text-[#C4D7C9] leading-tight mb-20">
              {footer.scheduleCall.title}
              <br />
              {footer.scheduleCall.highlight}
            </h2>
            <Button size="xl" arrow={true} className="text-lg hidden lg:inline-flex hover:bg-transparent lg:mt-48" >
              {footer.scheduleCall.cta}
            </Button>
          </div>

          <div className="flex items-center space-x-2 -mt-25 md:ml-0 ml-30 lg:ml-0 lg:mr-10 lg:mt-10">
            <KorcomptenzImage src="/assets/lets-drive.png" alt="drive" className='w-full lg:w-[550px] h-auto rounded-2xl' width={1112} height={607} />
          </div>
          <Button size="lg" arrow={true} className="text-lg py-3 lg:hidden hover:bg-transparent lg:mt-48" >
            {footer.scheduleCall.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ScheduleCall