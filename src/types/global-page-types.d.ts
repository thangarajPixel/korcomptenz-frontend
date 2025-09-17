
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

type InsightsSectionType = {
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
  id: number;
  imageMobile: string;
  image: string;
  alt: string;
  logo: string;
  logoMobile: string;
  altMobile: string;
  title: string;
  description: string;
}

type SapSectionType = {
  heading: string;
  description: string;
  imageSection: {
    image1: {
      src: string;
      alt: string;
    };
    image2: {
      src: string;
      alt: string;
    };
  };
  card: {
    value: string;
    content: string;
  };
};

type LightSliderType = {
  title: string;
  image: string;
  alt: string;
  slideContent: [{
    id: number,
    SlideContent: [
      {
        id: number,
        title: string,
        description: string
      }
    ]
  }

  ]
}

type DarkSliderType = {
  heading: string;
  slides: [
    {
      id: number,
      image: string,
      alt: string,
      title: string,
      description: string
    }
  ]
}
type StickyTitleListType = {
  buttonText?: string;
  description?: string;
  image?: [
    {
      height: number;
      width: number;
      caption?: string;
      alternativeText?: string;
      url: string;
      name: string;
      id: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      size: number;
      ext: string;
      mime: string;
    }
  ]
  link?: string;
  mobile_image?: ImageType;
  subtitle?: string;
  title?: string;
  subtitle2?: string;
}
type DomainSectionType = {
  title: string;
  slides: [
    {
      id: number,
      title: string,
      description: string
      image: string,
      alt: string,
      type: string,
      buttonText: string,

    }
  ]

}
type BenefitSectionType = {
  title: string;
  image: string;
  cards: [
    {
      id: number,
      number: string,
      description: string
    }
  ]
}
type FaqSectionType = {
  title: string;
  faqs: [
    {
      id: number,
      question: string,
      answer: string
    }
  ]
}

type ComponentPropsMap = {
  SlidingSection: {
    __component: 'home.hero-section-one';
    list: SlidingSectionType[]
  };
  ServicesSection: {
    __component: 'home.services-section';
    list: ServicesSectionType[]
  };
  WeAreKorcomptenzSection: {
    __component: 'home.we-are-korcomptenz';
    list: WeAreKorcomptenzSectionType


  };
  InspireSection: {
    __component: 'page-componets.inspire-section';
    list: InspireSectionType

  };
  StickyCards: {
    __component: 'page-componets.sticky-cards-list';
    list: StickyCardsType
  };
  InsightsSection: {
    __component: 'page-componets.insights-section';
    list: InsightsSectionType
  };
  Opportunities: {
    __component: 'home.opportunity';
    list: OpportunitiesType;
  };
  BannerSection: {
    __component: 'home.banner';
    list: BannerSectionType;
  };
  SapSection: {
    __component: 'sap-section';
    list: SapSectionType;
  };
  LightSlider: {
    __component: 'light-slider';
    list: LightSliderType;
  };
  DarkSlider: {
    __component: 'dark-slider';
    list: DarkSliderType;
  };
  StickyTitleList: {
    __component: 'sticky-title-list';
    list: StickyTitleListType;
  };
  DomainSection: {
    __component: 'domain-section';
    list: DomainSectionType;
  };
  BenefitSection: {
    __component: 'benefit-section';
    list: BenefitSectionType
  };
  FaqSection: {
    __component: 'faq-section';
    list: FaqSectionType
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


