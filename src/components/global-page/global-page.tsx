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
      case 'sliding-section':
        return <SlidingSection key={index} slides={item.list} />
      case 'sticky-cards':
        return <StickyCards key={index} stickyCards={item.list} />
      case 'insights-section':
        return <InsightsSection key={index} insights={item.list } />
      case 'opportunities':
        return <Opportunities key={index} careers={item.list} />
      case 'services-section':
        return <ServicesSection key={index} content={item.list}  />
      case 'inspire-section':
        return <InspireSection key={index} insprieSection={item.list} />
      case 'we-are-korcomptenz-section':
        return <WeAreKorcomptenzSection key={index} weAreKorcomptenzData={item.list} />
      default:
        return;
    }
  })
}

export default GlobalPage