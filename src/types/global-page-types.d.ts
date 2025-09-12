
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
  }
  StickyCards: {
    __component: 'sticky-cards';
  }
  InsightsSection: {
    __component: 'insights-section';
  }
  Opportunities: {
    __component: 'opportunities';
  }
}
type ComponentType = keyof ComponentPropsMap;
type ComponentPropsType = ComponentPropsMap[ComponentType];

type PagesListType = {
  id: string,
  locale?: string,
  slug: string,
  list: ComponentPropsType[]
}


