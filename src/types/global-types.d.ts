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

interface ItemType {
  id: number;
  title: string;
  description: string;
  buttontext: string;
  child?: {
    title: string;
    description: { description: string }[];
    type?: string | undefined;
  }[];
}
interface EcosystemMenuType {
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
}

type NavItemType = {
  label: string;
  href: HrefType | null;
  hasChild: boolean;
  childKey: string;
  isButton: boolean;
}[];

//case study types
export interface CaseStudyDescription {
  id: number;
  description: string;
  title: string;
}

export interface CaseStudyHeroSection {
  id: number;
  title: string;
  description: string;
  image: ImageType;
}

export interface CaseStudyTestimonial {
  id: number;
  title: string;
  description: string;
}

export interface CaseStudyData {
  id: number;
  documentId: string;
  study: string;
  slug: string;

  descriptionSection: CaseStudyDescription[];
  heroSection: CaseStudyHeroSection;
  testimonials: CaseStudyTestimonial[];
}
