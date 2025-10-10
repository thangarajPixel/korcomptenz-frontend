type ImageType = {
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
  includes?: string;
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
  titleimage?: ImageType;
  description?: string;
  image?: ImageType;
  link?: string;
  mobile_image?: ImageType;
  subtitle?: string;
  title?: string;
  subtitle2?: string;
};
type PaginationType = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number | undefined;
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
    href: string | null;
    icon: string;
  }[];
  companyDarkLogo: ImageType;
};

type ServicesMenuProps = {
  id: string;
  title: string;
  href?: HrefType | null;
  image: ImageType;
  items: {
    id: number;
    title: string;
    side: "left" | "right";
    href?: HrefType | null;
    child: {
      id: number;
      title: string;
      type: "dark" | "light";
      href?: HrefType | null;
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
  }[];
  sidebarSections: {
    id: number;
    title: string;
    icon: string;
    description: string;
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
    child: {
      title: string;
      description: { description: string }[];
      type?: string;
    }[];
  };
};

type NavItemType = {
  label: string;
  href: string | null;
  hasChild: boolean;
  childKey: string;
  isButton: boolean;
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
};

type CaseStudyTestimonial = {
  id: number;
  title: string;
  description: string;
};

type CaseStudyData = {
  id: string;
  documentId: string;
  study: string;
  slug: string;
  descriptionSection: CaseStudyDescription[];
  heroSection: CaseStudyHeroSection;
  testimonials: TestimonialType[];
  case_industries: { label: string }[];
  services: { label: string }[];
  technologies: { label: string }[];
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

// ✅ Filter label section
type FilterLabelType = {
  id: string;
  industry: string;
  outcome: string;
  region: string;
  resetFilter: string;
  service: string;
  technology: string;
};

// ✅ Partnership section
type PartnerType = {
  id: string;
  name: string;
  logo: ImageType;
};

type PartnershipSectionType = {
  id: string;
  title: string;
  partner: PartnerType[];
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
