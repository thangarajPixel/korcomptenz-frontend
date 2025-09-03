'use client';

import { Button } from '@/components/ui/button'
import React from 'react'
import { jsonData } from '@/utils/helper'
import KorcomptenzImage from '@/components/korcomptenz-image'

const ScheduleCall = () => {
  const footer = jsonData.footer
  return (
    <section className="bg-accent-foreground/30 py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row items-center justify-center gap-8 mx-">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left lg:ml-20">
            <h2 className="text-xl text-left sm:text-4xl lg:text-3xl font-bold text-white leading-tight mb-20">
              {footer.scheduleCall.title}
              <br />
              {footer.scheduleCall.highlight}
            </h2>
            <Button size="xl"  arrow={true} className="text-lg hover:bg-transparent" >
              {footer.scheduleCall.cta}
            </Button>
          </div>

          <div className="flex items-center  space-x-2 lg:mr-30">
            <KorcomptenzImage src="/assets/lets-drive.png" alt="drive" className='w-full lg:w-[400px] h-auto rounded-2xl' width={1112} height={607} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScheduleCall