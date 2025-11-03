import React from 'react'
import MapSection from '@/components/map-section'
import OurStory from '@/components/our-story'
import ContentShowcaseSection from '@/components/content-showcase-section'
import PeopleShowcaseSection from '@/components/people-showcase-section'
import StatsSection from '@/components/stats-section'

const Page = () => {
  return (
    <div>
      <MapSection />
      <OurStory />
      <ContentShowcaseSection />
      <PeopleShowcaseSection />
      <StatsSection />
    </div>
  )
}

export default Page