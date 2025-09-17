
type SlidingSectionType = {
  id: number,
  image: string,
  alt: string,
  title: string,
  subtitle?: string,
  subtitle2?: string,
  buttonText: string,
  buttonAction: string,
  mobileImage: string,
  description?: string;
};

type ServicesSectionType = {
  label: string;
  heading: string;
  subheading: string;
  image?: string;
}

type InspireSectionType = {

}

type StickyCardsType = {

}

type InsightsSectionType = {

}

type OpportunitiesType = {

}

type BannerSectionType = {

}

type SapSectionType = {

}

type LightSliderType = {

}

type DarkSliderType = {

}
type StickyTitleListType = {

}
type DomainSectionType = {

}
type BenefitSectionType = {

}
type FaqSectionType = {

}

type ComponentPropsMap = {
  SlidingSection: {
    __component: 'sliding-section';
    list: SlidingSectionType[]
  };
  ServicesSection: {
    __component: 'services-section';
    list: ServicesSectionType[]
  };
  WeAreKorcomptenzSection: {
    __component: 'we-are-korcomptenz-section';
  };
  InspireSection: {
    __component: 'inspire-section';
  };
  StickyCards: {
    __component: 'sticky-cards';
  };
  InsightsSection: {
    __component: 'insights-section';
  };
  Opportunities: {
    __component: 'opportunities';
  };
  BannerSection: {
    __component: 'banner-section';
  };
  SapSection: {
    __component: 'sap-section';
  };
  LightSlider: {
    __component: 'light-slider';
  };
  DarkSlider: {
    __component: 'dark-slider';
  };
  StickyTitleList: {
    __component: 'sticky-title-list';
  };
  DomainSection: {
    __component: 'domain-section';
  };
  BenefitSection: {
    __component: 'benefit-section';
  };
  FaqSection: {
    __component: 'faq-section';
  };
}
type ComponentType = keyof ComponentPropsMap;
type ComponentPropsType = ComponentPropsMap[ComponentType];

type PagesListType = {
  id: string,
  locale?: string,
  slug: string,
  list: ComponentPropsType[]
}


