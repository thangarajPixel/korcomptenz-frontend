type SlidingSectionType = {
  id: number;
  image: ImageType;
  alt: string;
  title: string;
  subtitle?: string;
  subtitle2?: string;
  buttonText: string;
  buttonAction: string;
  mobile_image: ImageType;
  description?: string;
};

type ServicesSectionType = {
  label: string;
  heading: string;
  description: string;
  image?: ImageType;
  link: string;
  buttonText: string;
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
  link: string;
  list: {
    id: string;
    specificId: string;
    title: string;
    description: string;
    buttonText: string;
    link?: string;
    image: ImageType;
  }[];
};
type CaseStudyStickyCardsType = {
  title: string;
  buttonText: string;
  link: string;
  list: {
    id: string;
    heroSection: {
      id: string;
      title: string;
      description: string;
      image: ImageType;
      buttonText: string;
    };
    slug: string;
    study: string;
  }[];
};

type CaseStudiesType = {
  pagination: PaginationType;
  results: CaseStudyData[];
};

type BusinessOutcomeFilterType = {
  label: string;
  id: string;
  childTitle: string;
  isDesignedDropdown: boolean;
  isMultiple: boolean;
};

type FilterListType = {
  label: string;
  id: string;
  image: ImageType;
  childTitle: string;
  isDesignedDropdown: boolean;
  isMultiple: boolean;
  slug: string;
};

type FilterDataType = {
  businessOutcomes: FilterListType[];
  industries: FilterListType[];
  region: FilterListType[];
  service: FilterListType[];
  technology: FilterListType[];
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
  titleSpan: string;
  p1: string;
  p2: string;
  image: ImageType;
  // videoSrc: string;
};

type BannerSectionType = {
  id: number;
  imageMobile: ImageType;
  image: ImageType;
  alt: string;
  logo: ImageType;
  logoMobile: ImageType;
  altMobile: ImageType;
  title: string;
  description: string;
  buttonText: string;
};

type SapSectionType = {
  heading: string;
  description: string;
  imageSection: {
    image1: { image: ImageType };
    image2: { image: ImageType };
  };
  card: {
    value: string;
    content: string;
  };
};

type LightSliderType = {
  title: string;
  description: string;
  image: ImageType;
  alt: string;
  list: [
    {
      id: number;
      solutions: [
        {
          id: number;
          title: string;
          description: string;
          buttonText: string;
        }
      ];
    }
  ];
};

type DarkSliderType = {
  heading: string;
  descripition: string;
  slides: [
    {
      id: number;
      image: ImageType;
      alt: ImageType;
      title: string;
      description: string;
    }
  ];
};
type StickyTitleListType = {
  buttonText?: string;
  description?: string;
  list?: [
    {
      height: number;
      image: ImageType;
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
  description: string;
  slides: {
    id: string;
    title: string;
    description: string;
    image: ImageType;
    type: string;
    buttonText: string;
  }[];
};
type BenefitSectionType = {
  title: string;
  image: ImageType;
  cards: {
    id: number;
    title: string;
    number: string;
    description: string;
  }[];
};
type FaqSectionType = {
  title: string;
  faq: {
    id: number;
    title: string;
    description: string;
  }[];
};

type DemonstrationSectionType = {
  title: string;
  buttonText: string;
  buttonlink: string;
  list: {
    id: string;
    type: string;
    image: ImageType;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
  }[];
};
type BuildConnectSectionType = {
  title: string;
  description: string;
  image: ImageType;
  mobileImage: ImageType;
  imageCaption: string;
  buttonText: string;
  descriptionButtonText: string;
  descriptionButtonLink: string;
  rightSection: {
    content: string;
    description: string;
    responsiveImage: {
      image: ImageType;
      mobileImage: ImageType;
    };
  };
};

type TechPartnerSectionType = {
  heading: string;
  image: string;
  mobileimage: string;
  alt: string;
  techslides: {
    id: number;
    title: string;
    description: string;
  }[];
};
type ScheduleCallType = {
  title: string;
  buttonText: string;
  link: string;
  image: string;
};

type WhyKorcomptenzType = {
  title: string;
  description: string;
  list: IndustryItem[];
};
type CompanyType = {
  id: string;
  companyName: string;
  copyrights: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  address: string;
  companyLogo: ImageType;
  companyFullLogo: ImageType;
  socialPlatforms: [
    {
      id: string;
      label: string;
      href: string | null;
      icon: ImageType;
    }
  ];

  policy: {
    id: string;
    label: string;
    href: string | null;
    icon: string;
  }[];
  companyDarkLogo: ImageType;
};

type StretchableSectionType = {
  title: string;
  image: ImageType;
  list: {
    id: number;
    title: string;
    description: string;
    image: ImageType;
    buttonText: string;
  }[];
};
type GramBannerType = {
  title: string;
  theme: string;
  description: string;
  image: ImageType;
  mobileImage: ImageType;
  imageCaption: string;
  buttonText: string;
  descriptionButtonText: string;
  descriptionButtonLink: string;
};
type ComponentPropsMap = {
  SlidingSection: {
    id: string;
    __component: "home.hero-section-one";
    list: SlidingSectionType[];
  };
  ServicesSection: {
    id: string;
    __component: "home.services-section";
    list: ServicesSectionType[];
  };
  WeAreKorcomptenzSection: WeAreKorcomptenzSectionType & {
    id: string;
    __component: "home.we-are-korcomptenz";
  };
  InspireSection: InspireSectionType & {
    id: string;
    __component: "page-componets.inspire-section";
  };
  StickyCards: StickyCardsType & {
    id: string;
    __component: "page-componets.sticky-cards-list";
  };
  InsightsSection: InsightsSectionType & {
    id: string;
    __component: "page-componets.insights-section";
  };
  Opportunities: OpportunitiesType & {
    id: string;
    __component: "home.opportunity";
  };
  BannerSection: {
    id: string;
    __component: "page-componets.banner-section-list";
    list: BannerSectionType[];
  };
  SapSection: SapSectionType & {
    id: string;
    __component: "page-componets.sap-section-data";
  };
  LightSlider: LightSliderType & {
    id: string;
    __component: "page-componets.light-slider-list";
  };
  DarkSlider: DarkSliderType & {
    id: string;
    __component: "page-componets.dark-slider-list";
  };
  StickyTitleList: StickyTitleListType & {
    id: string;
    __component: "page-componets.sticky-title-list";
  };
  DomainSection: DomainSectionType & {
    id: string;
    __component: "page-componets.domain-data";
  };
  BenefitSection: BenefitSectionType & {
    id: string;
    __component: "page-componets.benefit-data";
  };
  FaqSection: FaqSectionType & {
    id: string;
    __component: "page-componets.faq-title";
  };
  DemonstrationSection: DemonstrationSectionType & {
    id: string;
    __component: "page-componets.demonstrate-section";
  };
  DemonstrationSection: DemonstrationSectionType & {
    id: string;
    __component: "page-componets.demonstrate-section";
  };
  BuildConnectSection: BuildConnectSectionType & {
    id: string;
    __component: "page-componets.build-data";
  };
  TechpartnerSection: TechPartnerSectionType & {
    id: string;
    __component: "page-componets.tech-data";
  };
  ScheduleCall: ScheduleCallType & {
    id: string;
    __component: "home.schedule-call";
  };
  StretchableSection: StretchableSectionType & {
    id: string;
    __component: "page-componets.stretchable-section";
  };
  CaseStudyStickyCards: CaseStudyStickyCardsType & {
    id: string;
    __component: "case-study.case-study-sticky-cards-list";
  };
  CaseStudyDomainSection: CaseStudyStickyCardsType & {
    id: string;
    __component: "case-study.case-study-domain-data";
  };
  WhyKorcomptenz: WhyKorcomptenzType & {
    id: string;
    __component: "page-componets.why-we-are";
  };
  GramBanner: GramBannerType & {
    id: string;
    __component: "page-componets.gram-banner";
  };
};
type ComponentType = keyof ComponentPropsMap;
type ComponentPropsType = ComponentPropsMap[ComponentType];

type PagesListType = {
  id: string;
  locale?: string;
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  list: ComponentPropsType[];
  data: ComponentPropsType[];
};

type LayoutType = {
  // scheduleCall: ScheduleCallType;
  company: CompanyType;
  industriesMenu: IndustriesMenuType[];
  serviceMenu: ServicesMenuProps[];
  insightMenu: InsightsDataType;
  aboutMenu: AboutMenuType;
  ecosystemMenu: EcosystemMenuType[];
  navItems: NavItemType;
};

type CaseStudiesPageType = {
  id: string;
  banner: ClientSuccessBannerSectionType;
  customerSection: CustomerSectionType;
  filterLabel: FilterLabelType[];
  partnerSection: PartnershipSectionType;
  sponser: SponsorSectionType;
  testimonal: TestimonialType[];
  popularFilter: PopularFilterType;
};
