
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

type InspireSectionType =  {
    
        title: string;
        buttonText: string;
   
    cards: {
        id: string;
        position: string;
        image: string;
        alt: string;
        title: string;
        order: string;
        description: string;
    }[];
}

 type StickyCardsType = {
    title: string;
    buttonText: string;
    cardData: {
        id: string;
        title: string;
        description: string;
        buttonText: string;
        image: string;
    }[];
}

type InsightsSectionType ={
    title: string;
    buttonLabel: string;
    buttonHref: string;
    items: {
        id: string;
        title: string;
        category: string;
        imageSrc: string;
        alt: string;
    }[];
}

type OpportunitiesType = {
    description: string;
    exploreBtn: string;
    profiles: {
        id: number;
        src: string;
        alt: string;
    }[];
    heading: {
        part1: string;
        part2: string;
        highlight1: string;
        highlight2: string;
    };
    images: {
        arrow: string;
        banner: string;
    };
}
type WeAreKorcomptenzSectionType = {
 
    link: string;
    titleH1: string;
    titleH2: string;
    p1: string;
    p2: string;
    image: string;
    videoSrc: string;
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
    list: WeAreKorcomptenzSectionType
   
    
  };
  InspireSection: {
    __component: 'inspire-section';
    list: InspireSectionType
   
  };
  StickyCards: {
    __component: 'sticky-cards';
    list: StickyCardsType
  };
  InsightsSection: {
    __component: 'insights-section';
    list: InsightsSectionType
  };
  Opportunities: {
    __component: 'opportunities';
  list: OpportunitiesType;
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


