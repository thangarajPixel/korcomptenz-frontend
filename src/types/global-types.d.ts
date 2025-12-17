type ImageType = {
  height: number;
  width: number;
  caption?: string;
  alternativeText?: string | null;
  url: string;
  name: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  size: number;
  ext: string;
  mime: string;
  includes?: string;
  url?: string;
};

type ToastPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";

type GlobalFieldType = {
  buttonText?: string;
  logo?: ImageType;
  description?: string;
  image?: ImageType;
  link?: string;
  mobile_image?: ImageType;
  subtitle?: string;
  title?: string;
  subtitle2?: string;
  secondaryDescription?: string;
  mainImage?: ImageType;
  position?: "corner" | "main" | "side";
};
type PaginationType = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number | undefined;
};
type InsightCardType = {
  id: string;
  list: {
    id: string;
    title: string;
    image: ImageType;
    description?: string;
    className?: string;
    category?: string;
    link?: string;
  }[];
};

type ApiErrorType = {
  data: null;
  error: {
    status: number;
    name: string;
    message: string;
    details: object;
  };
  status: number;
};
type HrefType = {
  id: string;
  slug: string;
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
    link: string;
    icon: string;
  }[];
  companyDarkLogo: ImageType;
  title: string;
};

type ServicesMenuProps = {
  id: string;
  title: string;
  href?: {
    slug: string;
  };
  image: ImageType;
  items: {
    id: number;
    title: string;
    side: "left" | "right";
    href?: {
      slug: string;
    };
    child: {
      id: number;
      attachment: ImageType;
      title: string;
      type: "dark" | "light";
      href?: {
        slug: string;
      };
    }[];
  }[];
};
type IndustriesMenuType = {
  sectionName: string;
  colSpan: string;
  sections: {
    id: string;
    title: string;
    items: {
      id: string;
      title: string;
      href: HrefType | null;
    }[];
    image: ImageType;
    height: string;
    imagePosition: string;
    href: HrefType | null;
  }[];
};

type InsightsDataType = {
  title: string;
  heroImage: ImageType;
  categories: {
    id: string;
    title: string;
    description: string;
    href: HrefType | null;
    link: string | null;
  }[];
};

type AboutMenuType = {
  title: string;

  whoWeAre: {
    title: string;
    content: string;
    image: ImageType;
  };
  navigationItems: {
    id: number;
    title: string;
    description: string;

    link: string | null;
  }[];
  sidebarSections: {
    id: number;
    title: string;
    icon: string;
    link: string | null;
    description: string;
    link: string;
  }[];
};

type ItemType = {
  id: number;
  title: string;
  description: string;
  buttontext: string;
  child?: {
    title: string;
    description: { description: string }[];
    type?: string | undefined;
  }[];
};
type EcosystemMenuType = {
  id: number;
  menu: string;
  item: {
    id: number;
    title: string;
    description: string;
    image: ImageType;
    buttontext: string;
    link: string;
    child: {
      title: string;
      description: { description: string; href: { slug: string } }[];
      type?: string;
      href: {
        slug: string;
      };
    }[];
  };
};

type NavItemType = {
  label: string;
  href: string | null;
  hasChild: boolean;
  childKey: string;
  isButton: boolean;
  isHideMobile: boolean;
}[];

//case study types
type CaseStudyDescription = {
  id: number;
  description: string;
  title: string;
};

type CaseStudyHeroSection = {
  id: number;
  title: string;
  description: string;
  image: ImageType;
  buttonText: string;
  study: string;
};

type CaseStudyTestimonial = {
  id: number;
  title: string;
  description: string;
};

type CaseStudyData = {
  id: string;
  documentId: string;
  title: string;
  seo: SEO;
  study: string;
  slug: string;
  content: string;
  descriptionSection: CaseStudyDescription[];
  heroSection: CaseStudyHeroSection;
  testimonials: TestimonialType[];
  case_industries: { label: string }[];
  services: { label: string }[];
  technologies: { label: string }[];
  regions: { label: string }[];
  featureImage: ImageType;
  attachment: ImageType;
  rightSection: {
    id: string;
    title: string;
    descripitionKey: "region" | "service" | "technology" | "industry";
    icon: ImageType;
    isCustomDescripition: boolean;
    descripition?: string;
    isPreTitle: boolean;
    preTitle: {
      icon: ImageType;
      title: string;
    };
  }[];
};
type CaseStudySingleData = {
  caseStudy: CaseStudyData;
  relatedCaseStudies: CaseStudyData[];
};
type EventListType = {
  id: string;
  title: string;
  description: string;
  image: ImageType;
  buttonText: string;
  slug: string;
  publishedAt: string;
  date: string;
};
type NewsroomListType = {
  id: string;
  title: string;
  description: string;
  image: ImageType;
  buttonText: string;
  slug: string;
  publishedAt: string;
};
// ✅ Banner section
type ClientSuccessBannerSectionType = {
  id: string;
  title: string;
  description: string;
  images: { image: ImageType }[];
  buttonText: string;
  searchPlaceholder: string;
};

// ✅ Customer section
type CustomerValueType = {
  id: string;
  title: string;
  description: string;
};

type CustomerSectionType = {
  id: string;
  title: string;
  description: string;
  customerValues: CustomerValueType[];
};

type PartnerType = {
  id: string;
  name: string;
  logo: ImageType;
};
type PartnershipSectionType = {
  id: string;
  title: string;
  isPerRowFive: boolean;
  isSingleLine: boolean;
  partner: PartnerType[];
};
type DemoPartnershipSectionType = {
  id: string;
  title: string;
  list: PartnerType[];
};

// ✅ Sponsor section
type SponsorSectionType = {
  id: string;
  title: string;
  description: string;
  image: ImageType;
  buttonText: string;
};

// ✅ Testimonial section
type TestimonialType = {
  id: string;
  title: string;
  description: string;
};

type PopularFilterType = {
  id: string;
  label: string;
  resetButtonText: string;
  popularFilterList: {
    id: string;
    label: string;
    sort: string;
  }[];
};

type FilterLabelType = {
  label: string;
  isMultiple: boolean;
  filterKey: keyof FilterDataType;
  childTitle: string;
  isDesignedDropdown: boolean;
};
type InsightFilterLabelType = {
  label: string;
  isMultiple: boolean;
  filterKey: keyof InsightfilterListType;
  childTitle: string;
  isDesignedDropdown: boolean;
};
type ButtonType = {
  text: string;
  link: string;
  isTargetNew?: boolean;
};
type IndustryItem = {
  id: string;
  title: string;
  description: string;
  image: ImageType;
  buttontext: string;
};

type OfficeLocation = {
  id: number;
  country: string;
  image: ImageType;
  address: string;
  phone: string;
  fax: string;
};

type ShowCaseCardType = {
  text: string;
  description: string;
  image: ImageType;
  title: string;
  id: number;
  buttonLink: string;
  buttonText: string;
  slug: string;
};

type MapDataType = {
  decription: string;
  id: number;
  image: ImageType;
  title: string;
  x: number;
  y: number;
};

type OurStoryCardType = {
  description: string;
  id: string;
  image: ImageType;
  title: string;
  year: number;
};

type PeopleShowcaseCardType = {
  buttonText: string;
  description: string;
  image: ImageType;
  title: string;
  id: string;
  miniDescription: string;
  position: string;
  socialPlatform: {
    icon: ImageType;
  }[];
};

type StatsCardType = {
  count: number;
  description: string;
  id: string;
  title: string;
  isIncrement: boolean;
};

type MediaSliderCardType = {
  description: string;
  id: string;
  image: ImageType;
  isVideo: boolean;
  videoLink: string | null;
};

type AchievementscardType = {
  id: string;
  column: { id: string; image: ImageType }[];
};
// type InsightCardType = {
//   id: string;
//   title: string;
//   image: ImageType;
//   description?: string;
//   className?: string;
//   category?: string;
//   link?: string;
//   buttonText?: string;
// };

type InsightsMobileCarouselType = {
  category: string;
  description: string;
  id: string | number;
  image: ImageType;
  link: string;
  title: string;
};

type DemoList = {
  id: string;
  title: string;
  item: BookDemoListType[];
  length: number;
};
type BookDemoListType = {
  buttonLink: string | null;
  buttonText: string;
  date: string;
  description: string;
  id: string;

  title: string;
};

type ExpertsCardType = {
  id: string;
  title: string;
  image: ImageType;
  description: string;
};

type OpportunitiesCardType = {
  id: string;
  description: string;
};

type DemoWhyAttendCardType = {
  id: string;
  description: string;
};

type PricingPlanType = {
  billing: string;
  description: string;
  id: string;
  name: string;
  price: number;
  button: ButtonType;
};
type InsightBlog = InsightResponse;

type InsightResponse = {
  insight: InsightItem;
  content: string;
  id: string;
  documentId: string;
  previousInsight: InsightItem | null;
  nextInsight: InsightItem | null;
  relatedInsight: InsightItem[];

  category: {
    label: string;
  };
  heroSection: {
    buttonText: string;
    description: string;
    image: ImageType;
    mobileImage: ImageType;
  };
  author: {
    image: ImageType;
    name: string;
    role: string;
  };
  podcast: {
    description: string;
    title: string;
    podcastLink: string;
    podcastPlatForm: { link: string }[];
  };
  slug: string;
  title: string;
  webStories: WebStoriesType[];
  webinar: WebinarType;
  preWebinar: {
    preSummary: BuildConnectSectionType;
    timeText: string;
    dateText: string;
    webinarTime: string;
  };
};

type InsightItem = {
  id: number;
  author: BlogAuthorType;
  slug: string;
  documentId: string;
  title: string;
  content: string;
  blog: BlogData;
  heroSection: HeroSection;
  seo: SEO | null;
  featureImage: ImageType;
  faq: string | null;
};
type BlogData = {
  id: number;
  content: string;
};

type HeroSection = {
  id: number;
  description: string;
  buttonText: string;
  image: ImageType;
  logo: ImageType;
  link: string;
  title: string;
  imageMobile: ImageType;
  logoMobile: ImageType;
};

type SEO = {
  id: number;
  title?: string;
  description?: string;
};

type PodcastType = {
  author: {
    image: ImageType;
    name: string;
    role: string;
  };
  category: {
    label: string;
  };
  heroSection: {
    buttonText: string;
    description: string;
    image: ImageType;
  };
  podcast: {
    description: string;
    title: string;
    podcastLink: string;
    podcastPlatForm: { link: string }[];
  };
  slug: string;
  title: string;
};

type InsightPageType = {
  form: GlobalFormType;
  webinarForm: GlobalFormType;
  blogAiPlatform: SocialPlatformType[];
  blogSocialPlatform: SocialPlatformType[];
  relatedCase: RelatedCaseType;
  tableTitle: string;
  podcastPlatForm: PodcastPlatForm[];
};
type PodcastPlatForm = {
  link: string;
  icon: ImageType;
  label: string;
};

type RelatedCaseType = {
  id: string;
  title: string;
  buttonText: string;
};

type WebStoriesType = {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  image: ImageType;
  link: string;
  buttonLink: string;
};

type WebinarType = {
  buildData: BuildConnectSectionType;
  demonstrate: DemonstrationSectionType;
  expert: WebinarExpertsType;
  summary: SummaryType;
};
type SummaryType = {
  title: string;
  description: string;
  thumbnail?: ImageType;
};

type WebinarExpertsType = { list: ExpertsCardType[]; title: string };
type KorCareSlide = {
  buttonText?: string;
  description: string;
  id: number;
  image: ImageType;
  title: string;
  link?: string;
};

type KorCareHighlightCardType = {
  id: number;
  image: ImageType;
  link?: string;
  title: string;
  description: string;
  buttonText?: string;
};

type NewroomPageType = {
  buttonLink: string;
  buttonText: string;
  description: string;
};

type NewsRoomSliderCardType = { id: string; image: ImageType };
