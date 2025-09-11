import React from 'react'

const ManuelSliderCard = () => {
  return (
    <div className="bg-slate-700 rounded-3xl p-8   ">
      {/* Decorative Elements */}
      <div className="flex justify-end">
        {/* Large Diamond */}
        <div className="relative">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-green-500">
            <path d="M16 2L24 16L16 30L8 16L16 2Z" fill="currentColor" />
          </svg>
          {/* Small Diamond */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="absolute -top-2 -right-2 text-green-400">
            <path d="M10 1L15 10L10 19L5 10L10 1Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col">
        <h3 className="text-white text-4xl font-bold mb-6">
          AI
        </h3>

        <p className="text-gray-300 text-base leading-relaxed max-w-md">
          You need to predict demand, reduce downtime, and make faster decisions. Our AI solutions bring advanced insights to optimize production, automate processes, and improve quality to drive greater efficiency, lower costs, and smarter operations.
        </p>
      </div>
    </div>
  )
}

export default ManuelSliderCard