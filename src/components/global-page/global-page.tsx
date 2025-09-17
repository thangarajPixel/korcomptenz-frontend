import React from 'react'
import { InsightsSection } from '../insight-section'
import InspireSection from '../inspire-section'
import Opportunities from '../opportunities'
import ServicesSection from '../services-section'
import SlidingSection from '../sliding-section'
import StickyCards from '../sticky-cards'
import WeAreKorcomptenzSection from '../we-are-korcomptenz'

type Props = {
  data: ComponentPropsType[]
}

const GlobalPage = (props: Props) => {
  const { data } = props
  return data.map((item, index) => {
    switch (item.__component) {
      case 'home.hero-section-one':
        return <SlidingSection key={index} slides={item.list} />
      case 'page-componets.sticky-cards-list':
        return <StickyCards key={index} stickyCards={item.list} />
      case 'page-componets.insights-section':
        return <InsightsSection key={index} insights={item.list} />
      case 'home.opportunity':
        return <Opportunities key={index} careers={item.list} />
      case 'home.services-section':
        return <ServicesSection key={index} content={item.list} />
      case 'page-componets.inspire-section':
        return <InspireSection key={index} insprieSection={item.list} />
      case 'home.we-are-korcomptenz':
        return <WeAreKorcomptenzSection key={index} weAreKorcomptenzData={item.list} />
      default:
        return;
    }
  })
}

export default GlobalPage