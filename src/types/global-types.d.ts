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

type CompanyType = {
  id: string;
  companyName: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  address: string;
  companyLogo: ImageType;
  companyFullLogo: ImageType;
  socialPlatforms: {
    id: string;
    name: string;
    link: string;
    icon: string;
  }[];
  companyDarkLogo: ImageType;
};

type ServicesMenuProps = {
  id: string;
  title: string;
  image: ImageType;
  items: {
    id: number;
    title: string;
    side: "left" | "right";
    link?: string | null;
    child: {
      id: number;
      title: string;
      type: "dark" | "light";
      link?: string | null;
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
      href: string | null;
    }[];
    image: ImageType;
    height: string;
    imagePosition: string;
    href: string | null;
  }[];
};

type InsightsDataType = {
  title: string;
  heroImage: ImageType;
  categories: {
    id: string;
    title: string;
    description: string;
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
type EcosystemMenuType = {
  id: number;
  menu: string;
  items: {
    title: string;
    description: [];
    buttontext: string;
    child: {
      title: string;

      description: string;
    }[];
  }[];
};

[];
