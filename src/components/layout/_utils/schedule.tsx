'use client';

import { Button } from '@/components/ui/button'
import React from 'react'
import KorcomptenzImage from '@/components/korcomptenz-image'
import Link from 'next/link';

const ScheduleCall = ({
  scheduleCall,
}: {
  scheduleCall: ScheduleCallType;
}) => {
  return (
    <section className="bg-accent-foreground/30 py-16  lg:h-[600px] ">
      <div className="container-md">
        <div className="lg:flex flex-row items-center  justify-center lg:gap-8 ">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left lg:ml-0">
            <h2 className="text-6xl text-left sm:text-8xl lg:text-7xl font-bold text-custom-green-1 leading-tight mb-20 whitespace-pre-wrap">
              {scheduleCall?.title}
            </h2>
            <Link href={scheduleCall?.link}>
              <Button size="xl" arrow={true} className="text-4xl hidden lg:inline-flex hover:bg-transparent lg:mt-48" >
                {scheduleCall?.buttonText}
              </Button>
            </Link>
          </div>

          <div className="flex items-center space-x-2 -mt-25 md:ml-0 ml-30 lg:ml-0 lg:mr-10 lg:mt-10">
            <KorcomptenzImage src={scheduleCall?.image} alt="drive" className='w-full lg:w-[550px] h-auto rounded-2xl' width={1112} height={607} />
          </div>
          <Link href={scheduleCall?.link}>
            <Button size="lg" arrow={true} className="text-4xl py-3 lg:hidden hover:bg-transparent lg:mt-48" >
              {scheduleCall?.buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ScheduleCall