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
  logo?: ImageType;
  link: string;
  design: string;
  video: ImageType;
  bannerImage: ImageType;
  backgroundImage: ImageType;
  mobileVideo: ImageType;
};

type ServicesSectionType = {
  label: string;
  heading: string;
  description: string;
  image?: ImageType;
  link: string;
  buttonText: string;
  isBottomButton?: boolean;
  bottomButtonText?: string;
  bottomlink?: string;
  videoLink?: string;
  isVideo?: boolean;
};
type DigitialServicesSectionType = {
  title: string;
  description: string;
  list: {
    label: string;
    title: string;
    heading: string;
    description: string;
    image?: ImageType;
    link: string;
    isTarget?: boolean;
    buttonText: string;
  }[];
};

type InspireSectionType = {
  title: string;
  buttonText: string;
  link: string;
  list: {
    id: string;
    position: string;
    image: ImageType;
    title: string;
    order: string;
    description: string;
    buttonText?: string;
    link: string;
  }[];
};

type StickyCardsType = {
  __component: string;
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
  __component: string;
  title: string;
  buttonText: string;
  link: string;
  isTargetBlank: boolean;

  list: {
    id: string;
    heroSection: {
      link: string;
      id: string;
      title: string;
      description: string;
      image: ImageType;
      buttonText: string;
    };
    title: string;
    slug: string;
    study: string;
  }[];
};

type CaseStudiesType = {
  pagination: PaginationType;
  results: CaseStudyData[];
  sponsor: { sponser: SponsorSectionType };
  service: {
    slug: string;
    title: string;
    description: string;
    label: string;
  }[];
  technology: {
    slug: string;
    title: string;
    description: string;
    label: string;
  }[];
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
  categoryAllLabel?: string;
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

type InsightsFilterDataType = {
  category: FilterListType[];
  filterData: {
    service: FilterListType[];
    technology: FilterListType[];
  };
};

type InsightfilterListType = {
  service: FilterListType[];
  technology: FilterListType[];
};

type InsightsSectionType = {
  title: string;
  buttontext: string;
  buttonLink: string;
  list: InsightsMobileCarouselType[];
};

type OpportunitiesType = {
  description: string;
  button: ButtonType;
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
  isListPage: boolean;
  isHasFooter: boolean;
  isTarget: boolean;
  image: ImageType;
  alt: string;
  logo?: ImageType;
  logoMobile?: ImageType;
  altMobile: ImageType;
  title: string;
  description: string;
  buttonText: string;
  bannerCaption: string;
  link: string | null;
  secondButton: string;
  secondLink: string;
  customFooter: {
    backgroundImage: ImageType;
    image: ImageType;
    list: {
      id: string;
      title: string;
      link: string;
    }[];
  };
  footer: {
    logo: ImageType;
    description: string;
  };
};

type SapSectionType = {
  heading: string;
  description: string;
  image3: ImageType;
  isItemOnly: boolean;
  itemDescription: string;
  item: {
    id: string;
    content: string;
    value: string;
  }[];
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
          link: string;
        },
      ];
    },
  ];
};

type DarkSliderType = {
  heading: string;
  descripition: string;
  isSwap: boolean;
  isPerRowThree: boolean;
  link: string;
  buttonText: string;
  slides: [
    {
      id: number;
      image: ImageType;
      alt: ImageType;
      link: string;
      title: string;
      description: string;
    },
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
    },
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
    link: string;
  }[];
};
type BenefitSectionType = {
  title: string;
  description: string;
  image: ImageType;
  cards: {
    id: number;
    title: string;
    number: string;
    description: string;
  }[];
};
type KpiPartnerType = {
  title: string;
  items: {
    id: string;
    icon: ImageType;
    label: string;
  }[];
};
type FaqSectionType = {
  title: string;
  subtitle: string;
  description: string;
  faq: {
    id: number;
    title: string;
    subtitle;
    description: string;
    isHasCustomList: boolean;
    list: {
      id: number;
      title: string;
      description: string;
    }[];
  }[];
};

type DemonstrationSectionType = {
  title: string;
  buttonText: string;
  link: string;
  description: string;
  isTargetBlank: boolean;

  list: {
    id: string;
    link: string;
    type: string;
    buttonLink: ButtonType;
    image: ImageType;
    title: string;
    description: string;
    buttonText: string;
    buttonLink: string;
    isTargetBlank: boolean;
  }[];
};
type BuildConnectSectionType = {
  title: string;
  thumbnail: ImageType;
  button: {
    text: string;
    link: string;
  };
  description: string;
  videoLink: string;
  image: ImageType;
  mobileImage: ImageType;
  imageCaption: string;
  buttonText: string;
  link: string;
  descriptionButtonText: string;
  isTargetBlankDescription: boolean;
  listDescription: {
    description: string;
  }[];
  isSwap: boolean;
  descriptionButtonLink: string;
  rightSection: {
    content: string;
    description: string;
    customDescription: {
      id: string;

      description: string;
    }[];

    isBgGray: boolean;
    responsiveImage: {
      image: ImageType;
      mobileImage: ImageType;
      isTarget: boolean;
      imageLink: string;
    };
    videoLink: string;
    videoButtonText: string;
    form: GlobalFormType;
  };
};
type DemoBuildConnectSectionType = {
  title: string;
  description: string;
  image: ImageType;
  mobileImage: ImageType;
  imageCaption: string;
  buttonText: string;
  ButtonText: string;
  link: string;
  descriptionButtonText: string;
  isSwap: boolean;
  descriptionButtonLink: string;
  form: GlobalFormType;
  item: GlobalFormItemType;
};
type GlobalFormItemType = {
  id: number;
  documentId?: string;
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
    buttonText: string;
    link: string;
    isTargetBlank: boolean;
  }[];
};
type ScheduleCallType = {
  title: string;
  buttonText: string;
  link: string;
  image: string;
  description: string;
  topDescription: string;
};

type WhyKorcomptenzType = {
  title: string;
  description: string;
  isPerRowFive: boolean;
  subtitle: string;
  isBgGray: boolean;
  backgroundColor: string;
  noOfColumn: string;
  isBgGrey: boolean;
  list: IndustryItem[];
};
type SocialPlatformType = {
  id: string;
  label: string;
  link: string | null;
  icon: ImageType;
};
type SocialPlatfooterType = {
  id: string;
  label: string;
  link: string | null;
  icon: ImageType;
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
  socialPlatforms: SocialPlatfooterType[];

  policy: {
    id: string;
    label: string;
    link: string | null;
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
    link: string;
    isTargetBlank: boolean;
  }[];
};
type GramBannerType = {
  title: string;
  footerHeading: string;
  theme: string;
  description: string;
  image: ImageType;
  isTitleLeft: boolean;
  mobileImage: ImageType;
  imageCaption: string;
  buttonLink: string;
  buttonText: string;
  descriptionButtonText: string;
  descriptionButtonLink: string;
  isDescriptionLeft: boolean;
  isTargetBlank: boolean;
  isFooter: boolean;
  footerDescription: string;
  footerButtonLink: string;
  FooterbuttonText: string;
};
type CaseStudyFormType = {
  __component: "form-fields.case-study-form";
  id: string;
  title: string;
  nameLabel: string;
  organizationLabel: string;
  emailLabel: string;
  phoneLabel: string;
  messageLabel: string;
  buttonText: string;
  downloadContent: string;
};
type FreeConsultationFormType = {
  __component: "form-fields.free-consultation-form";
  id: string;
  title: string;
  nameLabel: string;
  organizationLabel: string;
  emailLabel: string;
  phoneLabel: string;
  messageLabel: string;
  buttonText: string;
  phoneLabel: string;
  locationLabel: string;
  image: ImageType;
};
type ContactFormType = {
  __component: "form-fields.contact-form";
  id: string;
  title: string;
  nameLabel: string;
  organizationLabel: string;
  emailLabel: string;
  phoneLabel: string;
  messageLabel: string;
  buttonText: string;
};
type BookDemoFormType = {
  __component: "form-fields.book-demo-form";
  id: string;
  title: string;
  nameLabel: string;
  organizationLabel: string;
  emailLabel: string;
  buttonText: string;
};
type OfficeCardProps = {
  title: string;
  list: OfficeLocation[];
};
type ContentShowcaseSectionType = {
  title: string;
  buttontext: string;
  description: string;
  list: ShowCaseCardType[];
};
type MapSectionType = {
  buttonText: string;
  description: string;
  id: string;
  title: string;
  list: MapDataType[];
  buttonLink: string;
};
type OurStorySectionType = {
  id: string;
  title: string;
  description: string;
  list: OurStoryCardType[];
};

type PeopleShowcaseSectionType = {
  buttontext: string;
  description: string;
  id: string;
  title: string;
  perRow: number;
  list: PeopleShowcaseCardType[];
};

type StatsSectionType = {
  buttontext: string;
  description: string;
  id: string;
  title: string;
  list: StatsCardType[];
};
type MediaSliderSectionType = {
  title: string;
  id: string;
  list: MediaSliderCardType[];
};

type NewsletterData = {
  title: string;
  description: string;
  buttonText: string;
  isForm?: boolean;
  image: ImageType;
};

type OfficesDataType = {
  title: string;
  country: string;
  company: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
  image: ImageType;
  subtitle: string;
};
type ContactUsFormType = {
  __component: "form-fields.contact-us-form";
  id: string;
  buttonText: string;
  companyLabel: string;
  emailLabel: string;
  firstNameLabel: string;
  lastNameLabel: string;
  messageLabel: string;
  phoneLabel: string;
  serviceLabel: string;
  technologyLabel: string;
  list: { id: string; description: string }[];
};
type DemoRequestFormType = {
  __component: "form-fields.reserve-spot-fields";
  title: string;
  id: string;
  buttonText: string;
  companyLabel: string;
  emailLabel: string;
  nameLabel: string;
  phoneLabel: string;

  list: { id: string; description: string }[];
};
type WebinarReserveFormType = {
  __component: "form-fields.insight-reserve-spot";
  title: string;
  description: string;
  id: string;
  buttonText: string;
  companyLabel: string;
  emailLabel: string;
  nameLabel: string;
  phoneLabel: string;

  list: { id: string; description: string }[];
};
type KorCareImpactDescriptionType = {
  title: string;
  description: string;
  image: ImageType;
  id: string;
  roleDescription: string;
};

type FormMap = {
  CaseStudyFormType: CaseStudyFormType;
  ContactFormType: ContactFormType;
  FreeConsultationFormType: FreeConsultationFormType;
  BookDemoFormType: BookDemoFormType;
  ContactUsFormType: ContactUsFormType;
  DemoRequestFormType: DemoRequestFormType;
  WebinarReserveFormType: WebinarReserveFormType;
};
type DigitialInsightType = {
  title: string;
  buttonText: string;
  noPadding: boolean;
  buttonLink: string;
  isTarget: boolean;
  list: {
    image1: ImageType;
    image2: ImageType;
    isTarget: boolean;
    buttonText: string;
    buttonLink: string;
    description: string;
    imageText: string;
    id: string;
  }[];
};
type FormType = keyof FormMap;
type FormPropsType = FormMap[FormType];
type GlobalFormType = {
  forms: FormPropsType[];
};
type MasonryGalleryColumnType = {
  id: string;
  image: ImageType;
  isVideo: boolean;
  videoLink: string | null;
};
type KorCareSliderType = {
  id: string;
  title: string;
  isPerRowFive: boolean;
  list: KorCareSlide[];
};
type DigitalErpListType = {
  title1: string;
  title2: string;
  list1: {
    id: string;
    title: string;
    description: string;
    buttonLink: string;
    buttonText: string;
    isTarget: boolean;
  }[];
  list2: {
    id: string;
    title: string;
    description: string;
    buttonLink: string;
    buttonText: string;
    isTarget: boolean;
  }[];
};

type MasonryGallerySectionType = {
  id: string;
  __component: "career.mansonry-gallery-section";
  title: string;
  isPerRowFour: boolean;
  highLightText: string;
  list: {
    id: string;
    column: MasonryGalleryColumnType[];
  }[];
};

type DigitalBenefitsType = {
  title: string;
  noOfColumn: string;
  isbgGrey: boolean;
  list: {
    description: string;
    id: string;
    image: ImageType;
    title: string;
  }[];
};
type FixedFooter = {
  description: string;
  buttons: ButtonType[];
};
type AchievementsType = {
  id: string;
  title: string;
  isColumnFour: boolean;
  list: AchievementscardType[];
};
type DemoListType = {
  id: string;
  list: DemoList[];
};
type NewsEventListSectionType = {
  buttonLink: string | null;
  buttonText: string;
  date: string;
  description: string;
  id: string;
  title: string;
  isEvent?: boolean;
  image: ImageType;
  createdAt: string;
  slug: string;
};
type NotFoundType = {
  id: string;
  __component: "not-found.not-found";
  title: string;
  description: string;
  image: ImageType;
  buttonText: string;
};

type PanchatattvaSectionType = {
  id: string;
  description: string;
  descriptionTitle: string;
  image: ImageType;
  title: string;
  titleDescription: string;
  videoLink: string | null;
  mainImage: ImageType;
};

type OpenJobsType = {
  id: string;
  title: string;
  iframeLink: string;
};

type ContactUsFormSectionType = {
  id: string;
  title: string;
  images: {
    id: string;
    image: ImageType;
  }[];
  form: { forms: FormPropsType[] };
};

type OpportunitiesSectionType = {
  arrowImage: ImageType;
  description: string;
  bannerImage: ImageType;
  id: string;
  title: string;
  list: OpportunitiesCardType[];
};

type ExpertsSectionType = {
  id: string;
  title: string;
  title1: string;
  title2: string;
  title3: string;
  backgroundImage: ImageType;
  list: ExpertsCardType[];
};

type DemoWhyAttendSectionType = {
  id: string;
  title: string;
  description: string;
  list: DemoWhyAttendCardType[];
  isHasFooter?: boolean;
  footer?: {
    description: string;
    image: ImageType;
  };
};

type DemoBannerDetailsType = {
  buttonText: string;
  buttonLink: string;
  data: string;
  id: string;
  title: string;
  bannerInfo: {
    id: string;
    title: string;
    details: {
      icon: ImageType;
      id: string;
      info: string;
      isDate: boolean;
    }[];
  };
};
type BannerItemType = {
  demoDetails: DemoBannerDetailsType;

  list: BannerSectionType[];
};

type PricingSectionType = {
  id: number;
  title: string;
  subtitle: string;
  plans: PricingPlanType[];
};

type KorCareBuildDataType = {
  image: ImageType;
  description: string;
  title: string;
};

type KorCareImpactHighlightType = {
  id: string;
  title: string;
  list: KorCareHighlightCardType[];
};

type KorCareAwardType = {
  id: string;
  title: string;
  image: ImageType;
  description: string;
};

type DescriptionOnlyType = {
  id: string;
  title: string;
  description: string;
};

type ServiceProviderType = {
  id: string;
  title: string;
  list: DescriptionOnlyType[];
};

type CombinedSectionType = {
  heading: DescriptionOnlyType;
  stretchableComponent: StretchableSectionType;
  thirdSection: ServiceProviderType;
  button: ButtonType;
};

type VideoBannerItemType = {
  id: string;
  isTarget: boolean;
  videoLink: string;
  buttonLink: string;
  buttonText: string;
  title: string;
  imageMobile: ImageType;
  form?: GlobalFormItemType;
  image: ImageType;
  isVideo: boolean;
  description: string;
};
type DigitialAnalyticsType = {
  title: string;
  heading1: string;
  heading2: string;
  description: string;
  list1: {
    id: string;
    title: string;
    description: string;
  }[];
  list2: {
    id: string;
    title: string;
    description: string;
    buttonText: string;
    isTarget?: boolean;
    buttonLink?: string;
  }[];
};

type DigitialAboutSectionType = {
  title: string;
  noPadding: boolean;
  description: string;
  backgroundImage: ImageType;
  badges: {
    badge1: ImageType;
    badge2: ImageType;
  };
  countries: { id: string; flag: ImageType[]; label: string }[];
  features: { id: string; icon: ImageType; description: string }[];
  stats: { id: string; value: string; label: string }[];
};
type DigitialLifeCycleType = {
  bottom: DigitialLifeBottomType;
  mid: DigitialLifeMiddleType;
  top: DigitialLifeTopType;
};
type DigitialCombinedType = {
  digitalAbout: DigitialAboutSectionType;
  digitalCardSlider: DigitialServicesSectionType;
};

type DigitialCardType = {
  title: string;
  description: string;
  list: {
    title: string;
    description: string;
    buttonLink: string;
    buttonText: string;
    id: string;
    isTarget: boolean;
  }[];
};

type ExpertMigrationType = {
  id: string;
  title: string;
  description: string;
  image: ImageType;
  buttonText: string;
  buttonLink: string;
  isTarget: boolean;
  backgroundImage: ImageType;
  bgColor: string;
  bgImage: boolean;
};
type FabconAboutType = {
  title1: string;
  title2: string;
  image: ImageType;
  backgroundImage: ImageType;
  description: string;
  buttonText: string;
  buttonLink: string;
  isTarget: boolean;
};

type FabconAiPoweredType = {
  title1: string;
  title2: string;
  title3: string;
  list: AiCardType[];
};

type FabconAnalyticsType = {
  title1: string;

  title2: string;
  backgroundImage: ImageType;
  bottom: {
    image: ImageType;
    link: string;
    id: string;
  }[];
  top: {
    image: ImageType;
    id: string;
    description: string;
    title: string;
    buttonText: string;
    buttonLink: string;
    isTarget: boolean;
  }[];
  mid: {
    title1: string;
    title2: string;
    list: {
      id: string;
      description: string;

      image: ImageType;
      percentage: string;
    }[];
  };
};

type FabconSmartForgeType = {
  title1: string;
  title2: string;
  title3: string;
  image: ImageType;
  description: string;
  isVideoLink: boolean;
  videoLink: string;
  buttonImage: ImageType;
  backgroundImage: ImageType;
};

type FabconLedTransformType = {
  title1: string;
  title2: string;
  title3: string;
  backgroundImage: ImageType;
  image: ImageType;
  buttonText: string;
  buttonLink: string;
  isTarget: boolean;
  list: { id: string; title: string; description: string; image: ImageType }[];
};

type ComposableIntelligenceType = {
  title1: string;
  title2: string;
  title3: string;
  backgroundImage: ImageType;
  list: {
    title: string;
    description: string;
    mainImage: ImageType;
    subImage: ImageType;
  }[];
};

type FabconDecisionFabricType = {
  title1: string;
  title2: string;
  title3: string;
  backgroundImage: ImageType;
  form: FabconDecisionLeadSchema;
};

type FabconBannerType = {
  title1: string;
  title2: string;
  backgroundImage: ImageType;
  buttonText: string;
  buttonLink: string;
  isTarget: boolean;
  form: FabconDecisionLeadSchema;
  description: string;
  date: string;
  location: string;
};

type NewsRoomSliderType = { id: string; list: NewsRoomSliderCardType[] };

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
  DemoBannerSection: BannerItemType & {
    id: string;
    __component: "demo-page.demo-banner-list";
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
  GlobalForm: {
    id: string;
    __component: "form-fields.form";
    form: GlobalFormType;
  };
  PartnerSection: PartnershipSectionType & {
    id: string;
    __component: "case-study.partner-section";
  };
  AboutUsContentShowcaseSection: ContentShowcaseSectionType & {
    id: string;
    __component: "about-us.content-showcase-section-list";
  };
  AboutUsMapSection: MapSectionType & {
    id: string;
    __component: "about-us.map-section-list";
  };
  AboutUsOurStorySection: OurStorySectionType & {
    id: string;
    __component: "about-us.our-story-list";
  };
  PeopleShowcaseSection: PeopleShowcaseSectionType & {
    id: string;
    __component: "about-us.people-showcase-list";
  };
  AboutUsStatsSection: StatsSectionType & {
    id: string;
    __component: "about-us.stats-section";
  };
  MediaSliderSection: MediaSliderSectionType & {
    id: string;
    __component: "about-us.media-slider-section";
  };
  MasonryGallerySection: MasonryGallerySectionType & {
    id: string;
    __component: "career.mansonry-gallery-section";
  };
  AchievementSection: AchievementsType & {
    id: string;
    __component: "about-us.achievement-section";
  };
  PanPanchatattvaSection: PanchatattvaSectionType & {
    id: string;
    __component: "career.career-build-data";
  };
  OpenJobsSection: OpenJobsType & {
    id: string;
    __component: "career.open-jobs";
  };
  ContactUsNewsletter: NewsletterData & {
    id: string;
    __component: "contact-us.news-letter";
  };
  DemoListSection: DemoListType & {
    id: string;
    __component: "demo-page.demo-list";
  };
  NotFound: NotFoundType & {
    id: string;
    __component: "not-found.not-found";
  };
  contactUsInsightSection: InsightCardType & {
    id: string;
    __component: "contact-us.contact-us-insight-list";
  };
  ContactUsCorporate: OfficeCardProps & {
    id: string;
    __component: "contact-us.office-location-list";
  };
  contactUsOffice: OfficesDataType & {
    id: string;
    __component: "contact-us.our-office";
  };
  FixedFooter: FixedFooter & {
    id: string;
    __component: "contact-us.fixed-section";
  };
  ContactUsForm: ContactUsFormSectionType & {
    id: string;
    __component: "contact-us.contact-us-form-section";
  };
  DemoPartnershipSection: DemoPartnershipSectionType & {
    id: string;
    __component: "demo-page.demo-partnership";
  };
  DemoExpertsSection: ExpertsSectionType & {
    id: string;
    __component: "demo-page.experts-section";
  };
  DemoWhyAttendSection: DemoWhyAttendSectionType & {
    id: string;
    __component: "demo-page.demo-demonstration";
  };
  DemoOpportunitiesSection: OpportunitiesSectionType & {
    id: string;
    __component: "demo-page.demo-opportunity";
  };
  DemoBookDemoForm: DemoBuildConnectSectionType & {
    id: string;
    __component: "demo-page.build-demo";
  };
  PricingSection: PricingSectionType & {
    id: string;
    __component: "page-componets.pricing-section";
  };

  KorCareBuildData: BuildConnectSectionType & {
    id: string;
    __component: "kor-cares.kor-care-build-data";
  };
  KorCareImpactDescription: KorCareImpactDescriptionType & {
    id: string;
    __component: "kor-cares.impact-description";
  };
  KorCareAward: KorCareAwardType & {
    id: string;
    __component: "kor-cares.award";
  };
  KorCareSlider: KorCareSliderType & {
    id: string;
    __component: "kor-cares.straight-slider";
  };
  KorCareImpactHighlight: KorCareImpactHighlightType & {
    id: string;
    __component: "kor-cares.impact-highlight";
  };

  NewsEventListSection: {
    id: string;
    __component: "news-and-event.news-event-list";
    list: NewsEventListSectionType[];
  };
  DescriptionOnly: DescriptionOnlyType & {
    id: string;
    __component: "news-and-event.news-description-only";
  };
  TitleDescription: DescriptionOnlyType & {
    id: string;
    __component: "news-and-event.news-title-description-only";
  };

  ServiceProvider: CombinedSectionType & {
    id: string;
    __component: "news-and-event.news-service";
  };
  CustomDescription: DescriptionOnlyType & {
    id: string;
    __component: "news-and-event.color-custom-description";
  };
  CombinedDescription: CombinedSectionType & {
    id: string;
    __component: "news-and-event.compounds-newsroom";
  };

  VideoBannerSection: VideoBannerItemType & {
    id: string;
    __component: "news-and-event.news-banner";
  };
  NewsRoomSlider: NewsRoomSliderType & {
    id: string;
    __component: "news-and-event.simple-image-gallery";
  };
  CaseStudyTestimonial: {
    id: string;
    __component: "news-and-event.testimonal-list";
    list: TestimonialType[];
  };
  NewRoomBuild: BuildConnectSectionType & {
    id: string;
    __component: "news-and-event.build-data";
  };
  DigitalBenefits: DigitalBenefitsType & {
    id: string;
    __component: "page-componets.digital-benefits";
  };
  KpiPartner: KpiPartnerType & {
    id: string;
    __component: "page-componets.kpi-partner";
  };
  DigitialServicesSection: DigitialServicesSectionType & {
    id: string;
    __component: "page-componets.digital-services-section";
  };
  DigitialCardSlider: DigitialServicesSectionType & {
    id: string;
    __component: "page-componets.digital-card-slider";
  };
  DigitialAboutSection: DigitialAboutSectionType & {
    id: string;
    __component: "page-componets.digital-about";
  };
  DigitalErpList: DigitalErpListType & {
    id: string;
    __component: "page-componets.digital-erp-list";
  };
  DigitialAnalytics: DigitialAnalyticsType & {
    id: string;
    __component: "page-componets.digital-analytics";
  };
  DigitialLifeCycle: DigitialLifeCycleType & {
    id: string;
    __component: "page-componets.digital-full-lifecycle";
  };
  DigitialInsight: DigitialInsightType & {
    id: string;
    __component: "page-componets.digital-inspire";
  };
  DigitialCombined: DigitialCombinedType & {
    id: string;
    __component: "page-componets.combined-about-card-slider";
  };
  OperationalRoadblock: WhyKorcomptenzType & {
    id: string;
    __component: "page-componets.smart-forge-operational-roadblock";
  };
  SmartForgeEnterprises: WhyKorcomptenzType & {
    id: string;
    __component: "page-componets.smart-forge-enterprises";
  };
  SmartForgeBuild: WhyKorcomptenzType & {
    id: string;
    __component: "page-componets.smart-forge-build";
  };
  DigitialCard: DigitialCardType & {
    id: string;
    __component: "page-componets.digital-card";
  };
  ExpertMigration: ExpertMigrationType & {
    id: string;
    __component: "page-componets.export-migration";
  };
  FabconAiPowered: FabconAiPoweredType & {
    id: string;
    __component: "page-componets.fabcon-ai-powered";
  };
  FabconAbout: FabconAboutType & {
    id: string;
    __component: "page-componets.fabcon-about";
  };
  FabconAnalytics: FabconAnalyticsType & {
    id: string;
    __component: "page-componets.fabcon-data-analytics";
  };
  FabconSmartForge: FabconSmartForgeType & {
    id: string;
    __component: "page-componets.fabcon-smart-forge";
  };
  FabconExperts: ExpertsSectionType & {
    id: string;
    __component: "page-componets.fabcon-fabric-ai-leadership";
  };
  FabconLedTransform: FabconLedTransformType & {
    id: string;
    __component: "page-componets.fabcon-led-transformation";
  };
  FabconComposableIntelligence: ComposableIntelligenceType & {
    id: string;
    __component: "page-componets.fabcon-composable-intelligence";
  };
  FabconDecisionFabric: FabconDecisionFabricType & {
    id: string;
    __component: "page-componets.fabcon-decision-fabric";
  };
  FabconBanner: FabconBannerType & {
    id: string;
    __component: "page-componets.fabcon-fabric-community-conference";
  };

  FabconMidMarket: WhyKorcomptenzType & {
    id: string;
    __component: "page-componets.midmarket-enterprises";
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
  seo: {
    title: string;
    description: string;
  };
  banner: ClientSuccessBannerSectionType;

  customerSection: CustomerSectionType;
  filterLabel: FilterLabelType[];
  partnerSection: PartnershipSectionType;
  sponser: SponsorSectionType;
  testimonal: TestimonialType[];
  popularFilter: PopularFilterType;
  categoryAllLabel: string;

  category: {
    label: string;
    id: number;
  }[];
};
type CaseStudyPageType = {
  id: string;
  study: string;
  buttonText: string;
  form: GlobalFormType;

  relatedCase: {
    title: string;
    buttonText: string;
  };
};
type DepartmentType = {
  data: {
    id: number;
    label: string;
  }[];
};

type TimeSlotType = {
  data: {
    id: number;
    timeSlot: string;
  }[];
};
type CaseStudyEssentialType = {
  data: {
    service: ServiceType[];
    technology: ServiceType[];
  };
};
type ServiceType = {
  id: string;
  label: string;
  slug: string;
};
