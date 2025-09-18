import React from 'react'
import { InsightsSection } from '../insight-section'
import InspireSection from '../inspire-section'
import Opportunities from '../opportunities'
import ServicesSection from '../services-section'
import SlidingSection from '../sliding-section'
import StickyCards from '../sticky-cards'
import WeAreKorcomptenzSection from '../we-are-korcomptenz'
import BannerSection from '../banner-section'
import SapSection from '../sap-section'
import LightSlider from '../light-slider'
import DarkSlider from '../dark-slider'
import DomainSection from '../domain-section'
import BenefitSection from '../benefit-section'
import FaqSection from '../faq-section'
import { StickyTitleList } from '../sticky-title-list'

type Props = {
  data: ComponentPropsType[]
}

const GlobalPage = (props: Props) => {
  const { data } = props
  console.log(data, 'data')
  return data.map((item, index) => {
   
    switch (item.__component) {
     
      case 'home.hero-section-one':
        return <SlidingSection key={index} slides={item.list} />
      case 'page-componets.sticky-cards-list':
        return <StickyCards key={index} stickyCards={item} />
      case 'page-componets.insights-section':
        return <InsightsSection key={index} insights={item} />
      case 'home.opportunity':
        return <Opportunities key={index} careers={item} />
      case 'home.services-section':
        return <ServicesSection key={index} content={item.list} />
      case 'page-componets.inspire-section':
        return <InspireSection key={index} insprieSection={item} />
      case 'home.we-are-korcomptenz':
        return <WeAreKorcomptenzSection key={index} weAreKorcomptenzData={item} />
      case 'home.banner':
        return <BannerSection key={index} />
      case 'sap-section':
        return <SapSection key={index} />
      case 'light-slider':
        return <LightSlider key={index} />
      case 'sticky-title-list':
        return <StickyTitleList key={index} />
      case 'dark-slider':
        return <DarkSlider key={index} />
      case 'domain-section':
        return <DomainSection key={index} />
      case 'benefit-section':
        return <BenefitSection key={index} />
      case 'faq-section':
        return <FaqSection key={index} />
  
      
      default:
        return;
    }
  })
}

export default GlobalPage