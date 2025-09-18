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
  return data.map((item) => {
    switch (item.__component) {
      case 'home.hero-section-one':
        return <SlidingSection key={`sliding-section-${item.__component}`} slides={item.list} />
      case 'page-componets.sticky-cards-list':
        return <StickyCards key={`sticky-cards-${item.__component}`} stickyCards={item} />
      case 'page-componets.insights-section':
        return <InsightsSection key={`insights-section-${item.__component}`} insights={item} />
      case 'home.opportunity':
        return <Opportunities key={`opportunity-${item.__component}`} careers={item} />
      case 'home.services-section':
        return <ServicesSection key={`services-section-${item.__component}`} content={item.list} />
      case 'page-componets.inspire-section':
        return <InspireSection key={`inspire-section-${item.__component}`} inspireSection={item} />
      case 'home.we-are-korcomptenz':
        return <WeAreKorcomptenzSection key={`we-are-korcomptenz-${item.__component}`} weAreKorcomptenzData={item} />
      case 'home.banner':
        return <BannerSection key={`banner-${item.__component}`} />
      case 'sap-section':
        return <SapSection key={`sap-section-${item.__component}`} />
      case 'light-slider':
        return <LightSlider key={`light-slider-${item.__component}`} />
      case 'sticky-title-list':
        return <StickyTitleList key={`sticky-title-list-${item.__component}`} />
      case 'dark-slider':
        return <DarkSlider key={`dark-slider-${item.__component}`} />
      case 'domain-section':
        return <DomainSection key={`domain-section-${item.__component}`} />
      case 'benefit-section':
        return <BenefitSection key={`benefit-section-${item.__component}`} />
      case 'faq-section':
        return <FaqSection key={`faq-section-${item.__component}`} />
      default:
        return;
    }
  })
}

export default GlobalPage