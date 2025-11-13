import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const FixedFooter = ({ data }: { data: FixedFooter }) => {

  return (
    <section data-debug="contact-us.fixed-section" className="fixed inset-x-0 bottom-0 h-32 z-50 bg-primary">
      <div className="flex h-full items-center justify-between container-md">
        <p className='text-4xl text-white line-clamp-2'>
          {data.description}
        </p>
        <div className='flex flex-col md:flex-row gap-4'>
          {data.buttons.map((value) => (
            <Link href={value.buttonLink || "#"}>
              <Button variant='white' size={'xl'} className='' arrow>
                {value.buttonText}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FixedFooter