import React from 'react'
import SplitDivider from '../ui/split-divider'
import PeopleShowcaseCard from './_utils/people-showcase-card'

const PeopleShowcaseSection = () => {
  return (
    <section data-debug="people-showcase-section">
      <div className="flex flex-col gap-10">
        <SplitDivider className="lg:gap-28">
          <h2 className="text-pretty lg:text-7xl text-6xl font-semibold  text-gray-900 break-words  ">
            People
          </h2>
        </SplitDivider>

        {/* Cards Grid */}
        <div className="container-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Array.from({ length: 3 }).map((_, index) => (
            <PeopleShowcaseCard key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PeopleShowcaseSection