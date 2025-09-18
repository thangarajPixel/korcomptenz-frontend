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
  // console.log(data)

  return data.map((item) => {
    switch (item.__component) {
      case 'home.hero-section-one':
        return <SlidingSection key={`sliding-section-${item.__component}-${item.id}`} slides={item.list} />
      case 'page-componets.sticky-cards-list':
        return <StickyCards key={`sticky-cards-${item.__component}-${item.id}`} stickyCards={item} />
      case 'page-componets.insights-section':
        return <InsightsSection key={`insights-section-${item.__component}-${item.id}`} insights={item} />
      case 'home.opportunity':
        return <Opportunities key={`opportunity-${item.__component}-${item.id}`} careers={item} />
      case 'home.services-section':
        return <ServicesSection key={`services-section-${item.__component}-${item.id}`} content={item.list} />
      case 'page-componets.inspire-section':
        return <InspireSection key={`inspire-section-${item.__component}-${item.id}`} inspireSection={item} />
      case 'home.we-are-korcomptenz':
        return <WeAreKorcomptenzSection key={`we-are-korcomptenz-${item.__component}-${item.id}`} weAreKorcomptenzData={item} />
      case 'page-componets.banner-section-list':
        return <BannerSection key={`banner-${item.__component}-${item.id}`} BannerSectionData={item.list} />
      case 'page-componets.sap-section-data':
        return <SapSection key={`sap-section-${item.__component}-${item.id}`} sapSectionData={item} />
      case 'page-componets.light-slider-list':
        return <LightSlider key={`light-slider-${item.__component}-${item.id}`} LightSliderData={item} />
      case 'page-componets.sticky-title-list':
        return <StickyTitleList key={`sticky-title-list-${item.__component}-${item.id}`} salesforceServices={item} />
      case 'page-componets.dark-slider-list':
        return <DarkSlider key={`dark-slider-${item.__component}-${item.id}`} manuelSliderData={item} />
      case 'page-componets.domain-data':
        return <DomainSection key={`domain-section-${item.__component}-${item.id}`} domainData={item} />
      case 'page-componets.benefit-data':
        return <BenefitSection key={`benefit-section-${item.__component}-${item.id}`} benefitData={item} />
      case 'page-componets.faq-title':
        return <FaqSection key={`faq-section-${item.__component}-${item.id}`} faqData={item} />
      default:
        return;
    }
  })
}

export default GlobalPage