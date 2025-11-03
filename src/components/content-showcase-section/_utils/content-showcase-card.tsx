import KorcomptenzImage from '@/components/korcomptenz-image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const ContentShowcaseCard = () => {
  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-sm overflow-hidden rounded-2xl relative h-[500px]">
        {/* Full background image */}
        <KorcomptenzImage
          src="/assets/tempory/7298c8113dce24357248c54ae34bf1af5f597073.png"
          alt="Sunset cityscape"
          fill
          className="object-cover"
          priority
        />
        {/* Content positioned at bottom */}
        <div className="absolute bottom-0 left-0  right-0 p-6 m-3 rounded-2xl bg-white opacity-60">
          <h2 className="text-2xl font-bold text-black mb-2">Newsletter</h2>
          <p className="text-sm mb-4 line-clamp-2">The Transformation Stratosphere</p>
          <Link href="#">
            <Button variant={'ghost'} className='text-primary hover:text-primary/80' arrow>
              Learn more
            </Button>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default ContentShowcaseCard