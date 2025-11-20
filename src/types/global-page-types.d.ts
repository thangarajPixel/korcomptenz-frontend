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
  sponsor: { sponser: SponsorSectionType };
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
  link: string;
  description: string;

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
  link: string;
  descriptionButtonText: string;
  isSwap: boolean;
  descriptionButtonLink: string;
  rightSection: {
    content: string;
    description: string;
    responsiveImage: {
      image: ImageType;
      mobileImage: ImageType;
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
    link: string;
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

type FormMap = {
  CaseStudyFormType: CaseStudyFormType;
  ContactFormType: ContactFormType;
  BookDemoFormType: BookDemoFormType;
  ContactUsFormType: ContactUsFormType;
  DemoRequestFormType: DemoRequestFormType;
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

type MasonryGallerySectionType = {
  id: string;
  __component: "career.mansonry-gallery-section";
  title: string;
  highLightText: string;
  list: {
    id: string;
    column: MasonryGalleryColumnType[];
  }[];
};
type FixedFooter = {
  description: string;
  buttons: ButtonType[];
};
type AchievementsType = {
  id: string;
  title: string;
  list: AchievementscardType[];
};
type DemoListType = {
  id: string;
  list: DemoList[];
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
  bannerImage: ImageType;
  id: string;
  title: string;
  list: OpportunitiesCardType[];
};

type ExpertsSectionType = {
  id: string;
  title: string;
  list: ExpertsCardType[];
};

type DemoWhyAttendSectionType = {
  id: string;
  title: string;
  list: DemoWhyAttendCardType[];
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
  DemoBannerSection: {
    id: string;
    __component: "demo-page.demo-banner-list";
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
