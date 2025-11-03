import React from 'react'
import { ArrowUp } from 'lucide-react';

const StatsSectionCard = () => {
  return (
    <div className="bg-secondary rounded-3xl p-10 max-w-sm w-full text-white">
      <h2 className="mb-8 text-3xl font-semibold leading-tight">
        Successful Projects<br />
        Across Industries
      </h2>

      <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b-2 border-white/20">
        <ArrowUp className="w-6 h-6 mt-1" strokeWidth={2.5} />
        <div className="text-6xl font-semibold tracking-tight">1000+</div>
      </div>

      <p className="text-white/90 text-md leading-relaxed">
        Proven track record of delivering enterprise solutions.
      </p>
    </div>
  )
}

export default StatsSectionCard