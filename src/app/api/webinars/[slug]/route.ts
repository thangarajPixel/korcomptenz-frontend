import { NextRequest, NextResponse } from "next/server";

// Mock data - replace with actual database queries
const mockWebinars = {
  "right-sized-erp-pre": {
    slug: "right-sized-erp-pre",
    status: "pre-webinar",
    type: "upcoming",
    title: "Right-Sized ERP: SAP or Microsoft D365 for Teams That Need to Scale Fast",
    description: "Pick the ERP that scales with you—without the complexity, delays, or hidden costs.",
    date: "2025-07-30",
    time: "11AM - 12 PM EST | 8AM - 9AM PST | 10AM - 11AM CST",
    registerLink: "#register",
    backgroundImage: "/assets/tempory/image_preview.png",
    websitePreviewImage: "/assets/tempory/webinar_preview.png",
    mobileBackgroundImage: "/assets/tempory/mobile_banner.png",
    summaryTitle: "Summary of Webinar",
    summaryDescription: "In today's rapidly evolving business landscape...",
    keyTakeaways: [
      "The CX Data Gap: Understand the root of misalignment between departments.",
      "Three Mega Trends: Explore the forces reshaping banking.",
      "AI in Action: Understand the evolution from machine learning to generative AI.",
    ],
    whyAttendTitle: "Why You Should Attend",
    whyAttendReasons: [
      {
        title: "The CX Data Gap",
        description: "Understand the root of misalignment between departments.",
      },
      {
        title: "Three Mega Trends",
        description: "Explore the forces reshaping banking.",
      },
    ],
    whyAttendImage: "/assets/tempory/why_image.png",
    reserveSeatTitle: "Reserve Your Seat",
    reserveSeatDescription: "This webinar is free, but space is limited.",
    reserveSeatButtonText: "Reserve Your Seat Now!",
    experts: [
      {
        name: "Neha Bhagat",
        title: "Senior Director",
        company: "Microsoft Dynamics (Practice Head), Korcomptenz Inc.",
        image: "/assets/tempory/postweb1.png",
      },
    ],
  },
  "right-sized-erp-post": {
    slug: "right-sized-erp-post",
    status: "post-webinar",
    type: "completed",
    title: "Right-Sized ERP: SAP or Microsoft D365 for Teams That Need to Scale Fast",
    description: "Watch the recording of our webinar on choosing the right ERP solution.",
    date: "2025-01-15",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnailUrl: "/assets/tempory/video_thumbnail.png",
    backgroundImage: "/assets/tempory/image_preview.png",
    summaryTitle: "Summary of Webinar",
    summaryDescription: "In this webinar, we explored the key differences between SAP and Microsoft D365...",
    summaryShowImage: true,
    summaryImage: "/assets/tempory/summary_image.png",
    keyTakeaways: [
      "Understanding ERP scalability requirements",
      "Cost comparison between SAP and D365",
      "Implementation timelines and best practices",
    ],
    experts: [
      {
        name: "Neha Bhagat",
        title: "Senior Director",
        company: "Microsoft Dynamics (Practice Head), Korcomptenz Inc.",
        image: "/assets/tempory/postweb1.png",
      },
    ],
    downloadSection: {
      title: "Download Webinar Resources",
      description: "Get the presentation slides and additional resources.",
      downloadLink: "/downloads/erp-webinar.pdf",
    },
  },
};

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  // TODO: Replace with actual database query
  const webinar = mockWebinars[slug as keyof typeof mockWebinars];

  if (!webinar) {
    return NextResponse.json(
      { error: "Webinar not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(webinar);
}
