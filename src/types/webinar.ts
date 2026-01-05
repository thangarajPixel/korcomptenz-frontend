export interface WebinarExpert {
  name: string;
  title: string;
  company: string;
  image: string;
}

export interface WhyAttendReason {
  title: string;
  description: string;
}

export interface DemonstrateCard {
  id: string;
  type: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: {
    url: string;
    alternativeText: string;
    width: number;
    height: number;
  };
}

export interface DemonstrateSection {
  title: string;
  buttonText: string;
  link: string;
  list: DemonstrateCard[];
}

export interface DownloadSection {
  title: string;
  description: string;
  downloadLink: string;
}

// export interface WebinarData {
//   slug: string;
//   status: "pre-webinar" | "post-webinar";
//   type?: "upcoming" | "completed";

//   // Basic info
//   title: string;
//   description: string;
//   date: string;
//   time?: string;

//   // Images
//   backgroundImage: string;
//   websitePreviewImage?: string;
//   mobileBackgroundImage?: string;
//   thumbnailUrl?: string;

//   // Pre-webinar specific
//   registerLink?: string;

//   // Post-webinar specific
//   videoUrl?: string;

//   // Summary section
//   summaryTitle?: string;
//   summaryDescription: string;
//   summaryShowImage?: boolean;
//   summaryImage?: string;

//   // Key takeaways
//   keyTakeaways: string[];

//   // Why attend (pre-webinar)
//   whyAttendTitle?: string;
//   whyAttendReasons?: WhyAttendReason[];
//   whyAttendImage?: string;

//   // Reserve seat (pre-webinar)
//   reserveSeatTitle?: string;
//   reserveSeatDescription?: string;
//   reserveSeatButtonText?: string;

//   // Experts
//   experts: WebinarExpert[];

//   // Optional sections
//   downloadSection?: DownloadSection;
//   webinarContent?: any;
//   demonstrateSection?: DemonstrateSection;
// }
