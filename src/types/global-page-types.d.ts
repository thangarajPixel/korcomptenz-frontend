type SlidingSectionType = {
  id: number;
  image: ImageType;
  alt: string;
  title: string;
  subtitle?: string;
  subtitle2?: string;
  buttonText: string;
  buttonAction: string;
  mobileImage: ImageType;
  description?: string;
};

type ServicesSectionType = {
  label: string;
  heading: string;
  description: string;
  image?: ImageType;
};

type InspireSectionType = {
  title: string;
  buttonText: string;

  list: {
    id: string;
    position: string;
    image: ImageType;
    alt: string;
    title: string;
    order: string;
    description: string;
  }[];
};

type StickyCardsType = {
  title: string;
  buttonText: string;
  list: {
    specificId: string;
    title: string;
    description: string;
    buttonText: string;
    image: ImageType;
  }[];
};

type InsightsSectionType = {
  title: string;
  buttontext: string;
  buttonHref: string;
  list: {
    id: string;
    title: string;
    category: string;
    image: imageType;
    alt: string;
  }[];
};

type OpportunitiesType = {
  description: string;
  buttonText: string;
  profiles: {
    id: number;
    image: ImageType;
  }[];
  breakOne: string;
  breakTwo: string;
  breakThree: string;
  breakFour: string;

  arrowImage: ImageType;
  bannerImage: ImageType;
};
type WeAreKorcomptenzSectionType = {
  link: string;
  titleH1: string;
  titleH2: string;
  p1: string;
  p2: string;
  image: ImageType;
  videoSrc: string;
};

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
};

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
  slideContent: [
    {
      id: number;
      SlideContent: [
        {
          id: number;
          title: string;
          description: string;
        }
      ];
    }
  ];
};

type DarkSliderType = {
  heading: string;
  slides: [
    {
      id: number;
      image: string;
      alt: string;
      title: string;
      description: string;
    }
  ];
};
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
  ];
  link?: string;
  mobile_image?: ImageType;
  subtitle?: string;
  title?: string;
  subtitle2?: string;
};
type DomainSectionType = {
  title: string;
  slides: [
    {
      id: number;
      title: string;
      description: string;
      image: string;
      alt: string;
      type: string;
      buttonText: string;
    }
  ];
};
type BenefitSectionType = {
  title: string;
  image: string;
  cards: [
    {
      id: number;
      number: string;
      description: string;
    }
  ];
};
type FaqSectionType = {
  title: string;
  faqs: [
    {
      id: number;
      question: string;
      answer: string;
    }
  ];
};

type ComponentPropsMap = {
  SlidingSection: {
    __component: "home.hero-section-one";
    list: SlidingSectionType[];
  };
  ServicesSection: {
    __component: "home.services-section";
    list: ServicesSectionType[];
  };
  WeAreKorcomptenzSection:WeAreKorcomptenzSectionType & {
    __component: "home.we-are-korcomptenz";
    
  };
  InspireSection: InspireSectionType & {
    __component: "page-componets.inspire-section";
  };
  StickyCards:StickyCardsType & {
    __component: "page-componets.sticky-cards-list";
   
  };
  InsightsSection:InsightsSectionType & {
    __component: "page-componets.insights-section";
  
  };
  Opportunities:OpportunitiesType & {
    __component: "home.opportunity";
   
  };
  BannerSection: {
    __component: "home.banner";
    list: BannerSectionType;
  };
  SapSection: {
    __component: "sap-section";
    list: SapSectionType;
  };
  LightSlider: {
    __component: "light-slider";
    list: LightSliderType;
  };
  DarkSlider: {
    __component: "dark-slider";
    list: DarkSliderType;
  };
  StickyTitleList: {
    __component: "sticky-title-list";
    list: StickyTitleListType;
  };
  DomainSection: {
    __component: "domain-section";
    list: DomainSectionType;
  };
  BenefitSection: {
    __component: "benefit-section";
    list: BenefitSectionType;
  };
  FaqSection: {
    __component: "faq-section";
    list: FaqSectionType;
  };
};
type ComponentType = keyof ComponentPropsMap;
type ComponentPropsType = ComponentPropsMap[ComponentType];

type PagesListType = {
  id: string;
  locale?: string;
  slug: string;
  list: ComponentPropsType[];
  data: ComponentPropsType[];
};
