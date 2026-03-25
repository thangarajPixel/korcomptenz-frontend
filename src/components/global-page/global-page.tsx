import dynamic from "next/dynamic";
import { ScrollFadeIn } from "../ui/scroll-fade-in";
import {
  ClientPartnership,
  ClientTestimonial,
} from "@/app/(default)/case-studies/_utils";
import {
  ContactUsCorporate,
  ContactUsInsight,
  ContactUsOffice,
} from "@/app/(default)/contact-us/_utils";

// Ultra-lightweight skeleton loader for better LCP
const SectionLoader = () => (
  <div
    className="w-full bg-gray-100 animate-pulse"
    style={{ minHeight: "400px" }}
  />
);

// Dynamic imports with loading states and lazy loading strategy
// Hero/Hero-like sections load immediately for LCP
const SlidingSection = dynamic(() => import("../sliding-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

// Below-fold sections load with delay for better FCP
const InsightsSection = dynamic(
  () => import("../insight-section").then((mod) => mod.InsightsSection),
  { loading: () => <SectionLoader />, ssr: true },
);

const InspireSection = dynamic(() => import("../inspire-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const Opportunities = dynamic(() => import("../opportunities"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const ServicesSection = dynamic(() => import("../services-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const StickyCards = dynamic(
  () => import("../sticky-cards").then((mod) => mod.StickyCards),
  { loading: () => <SectionLoader />, ssr: true },
);

const CaseStudyStickyCards = dynamic(
  () => import("../sticky-cards").then((mod) => mod.CaseStudyStickyCards),
  { loading: () => <SectionLoader />, ssr: true },
);

const WeAreKorcomptenzSection = dynamic(() => import("../we-are-korcomptenz"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const BannerSection = dynamic(() => import("../banner-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const SapSection = dynamic(() => import("../sap-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const LightSlider = dynamic(() => import("../light-slider"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const DarkSlider = dynamic(() => import("../dark-slider"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const DomainSection = dynamic(
  () => import("../domain-section").then((mod) => mod.DomainSection),
  { loading: () => <SectionLoader />, ssr: true },
);

const CaseStudyDomainSection = dynamic(
  () => import("../domain-section").then((mod) => mod.CaseStudyDomainSection),
  { loading: () => <SectionLoader />, ssr: true },
);

const BenefitSection = dynamic(() => import("../benefit-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const FaqSection = dynamic(() => import("../faq-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const StickyTitleList = dynamic(
  () => import("../sticky-title-list").then((mod) => mod.StickyTitleList),
  { loading: () => <SectionLoader />, ssr: true },
);

const DemonstrateSection = dynamic(() => import("../demonstrate-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const BuildConnect = dynamic(() => import("../build-connect"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const TechPartner = dynamic(() => import("../tech-partner-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const ScheduleCall = dynamic(() => import("../layout/_utils/schedule"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const StretchableSection = dynamic(() => import("../stretchable-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const WhyKorcomptenz = dynamic(
  () => import("../why-korcomptenz/why-korcomptenz"),
  { loading: () => <SectionLoader />, ssr: true },
);

const GramBanner = dynamic(() => import("../gram-banner/gram-banner"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const GlobalForm = dynamic(
  () => import("../global-form").then((mod) => mod.GlobalForm),
  { loading: () => <SectionLoader />, ssr: true },
);

const ContentShowcaseSection = dynamic(
  () => import("../content-showcase-section"),
  { loading: () => <SectionLoader />, ssr: true },
);

const MapSection = dynamic(() => import("../map-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const OurStory = dynamic(() => import("../our-story"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const PeopleShowcaseSection = dynamic(
  () => import("../people-showcase-section"),
  { loading: () => <SectionLoader />, ssr: true },
);

const StatsSection = dynamic(() => import("../stats-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const MediaSliderSection = dynamic(() => import("../media-slider-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const MasonryGallerySection = dynamic(
  () =>
    import("../masonry-gallery-section/masonry-gallery-section").then(
      (mod) => mod.default,
    ),
  { loading: () => <SectionLoader />, ssr: true },
);

const AchievementSection = dynamic(() => import("../achievements-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const NotFound = dynamic(() => import("../not-found"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const PanchatattvaSection = dynamic(() => import("../panchatattva-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const OpenJobs = dynamic(() => import("../open-jobs"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const ContactUsNewsletter = dynamic(
  () => import("../news-letter-section").then((mod) => mod.ContactUsNewsletter),
  { loading: () => <SectionLoader />, ssr: true },
);

const FixedFooter = dynamic(() => import("../fixed-footer"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const ContactUsForm = dynamic(
  () => import("@/app/(default)/contact-us/_utils/contact-us-form-section"),
  { loading: () => <SectionLoader />, ssr: true },
);

const DemoBannerSection = dynamic(() => import("../demo-banner-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const LiveDemoList = dynamic(
  () => import("@/app/(default)/live-demo/_utils/live-demo-list"),
  { loading: () => <SectionLoader />, ssr: true },
);

const DemoPartnership = dynamic(
  () => import("@/app/(default)/live-demo/_utils/demo-partnership"),
  { loading: () => <SectionLoader />, ssr: true },
);

const DemoExperts = dynamic(
  () => import("@/app/(default)/live-demo/_utils/demo-experts"),
  { loading: () => <SectionLoader />, ssr: true },
);

const DemoOpportunities = dynamic(
  () => import("@/app/(default)/live-demo/_utils/demo-opportunities"),
  { loading: () => <SectionLoader />, ssr: true },
);

const DemoWhyAttend = dynamic(
  () => import("@/app/(default)/live-demo/_utils/demo-why-attend"),
  { loading: () => <SectionLoader />, ssr: true },
);

const BuildDemo = dynamic(() => import("../build-connect/build-Demo"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const PricingSection = dynamic(() => import("../pricing-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const KorCareBuildData = dynamic(() => import("../kor-care-build-data"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const KorCareImpactDescription = dynamic(
  () => import("../kor-care-impact-description"),
  { loading: () => <SectionLoader />, ssr: true },
);

const KorCareAward = dynamic(
  () => import("../kor-care-award-section/kor-care-award"),
  { loading: () => <SectionLoader />, ssr: true },
);

const KorCareSlider = dynamic(() => import("../kor-care-slider-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const KorCareImpactHighlight = dynamic(
  () => import("../kor-care-impact-highlight"),
  { loading: () => <SectionLoader />, ssr: true },
);

const NewsEventListSection = dynamic(
  () => import("../news-event-list-section"),
  { loading: () => <SectionLoader />, ssr: true },
);

const DescriptionOnly = dynamic(
  () => import("../description-section").then((mod) => mod.DescriptionOnly),
  { loading: () => <SectionLoader />, ssr: true },
);

const TitleDescription = dynamic(
  () => import("../description-section").then((mod) => mod.TitleDescription),
  { loading: () => <SectionLoader />, ssr: true },
);

const CombinedSection = dynamic(
  () => import("../news-room").then((mod) => mod.CombinedSection),
  { loading: () => <SectionLoader />, ssr: true },
);

const NewsRoomSlider = dynamic(
  () => import("../news-room").then((mod) => mod.NewsRoomSlider),
  { loading: () => <SectionLoader />, ssr: true },
);

const ServiceProvider = dynamic(
  () => import("../news-room").then((mod) => mod.ServiceProvider),
  { loading: () => <SectionLoader />, ssr: true },
);

const VideoBannerSection = dynamic(() => import("../video-banner-section"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const NewsRoomBuild = dynamic(
  () => import("../news-room/_utils/news-room-build"),
  { loading: () => <SectionLoader />, ssr: true },
);

const DigitialBenefits = dynamic(
  () => import("../digitial-benefits/digitial-benefits"),
  { loading: () => <SectionLoader />, ssr: true },
);

const KpiPartner = dynamic(() => import("../kpi-partner"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const DigitalServiceSection = dynamic(
  () => import("../digitial-services-section"),
  { loading: () => <SectionLoader />, ssr: true },
);

const DigitialCardSlider = dynamic(
  () => import("../digitial-card-slider").then((mod) => mod.DigitialCardSlider),
  { loading: () => <SectionLoader />, ssr: true },
);

const DigitialAboutSection = dynamic(
  () =>
    import("../digitial-about-section").then((mod) => mod.DigitialAboutSection),
  { loading: () => <SectionLoader />, ssr: true },
);

const DigitalErpList = dynamic(
  () => import("../digitial-erp-list").then((mod) => mod.DigitalErpList),
  { loading: () => <SectionLoader />, ssr: true },
);

const DigitialAnalytics = dynamic(
  () => import("../digitial-analytics/digitial-analytics"),
  { loading: () => <SectionLoader />, ssr: true },
);

const DigitialLifeCycle = dynamic(
  () => import("../digitial-life-cycle").then((mod) => mod.DigitialLifeCycle),
  { loading: () => <SectionLoader />, ssr: true },
);

const DigitialInsightSlider = dynamic(() => import("../dark-slider copy"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const CombinedAboutCardSlider = dynamic(
  () => import("../digitial-combined/digitial-combined"),
  { loading: () => <SectionLoader />, ssr: true },
);

const OperationalRoadblock = dynamic(
  () => import("../smartforge-operational-Roadblock"),
  { loading: () => <SectionLoader />, ssr: true },
);

const SmartForgeEnterprises = dynamic(
  () => import("../smartforge-enterprises"),
  { loading: () => <SectionLoader />, ssr: true },
);

const SmartForgeBuild = dynamic(() => import("../smartforge-build"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const DigitialCard = dynamic(() => import("../digitial-card/digitial-card"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const ExpertMigration = dynamic(
  () => import("../expert-migration/expert-migration"),
  { loading: () => <SectionLoader />, ssr: true },
);

const FabconAiPowered = dynamic(
  () => import("../fabcon-ai-powered/fabcon-ai-powered"),
  { loading: () => <SectionLoader />, ssr: true },
);

const FabconAbout = dynamic(() => import("../fabcon-about"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const FabconAnalytics = dynamic(() => import("../fabcon-analytics"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const FabconSmartForge = dynamic(() => import("../fabcon-smart-forge"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const FabconExperts = dynamic(() => import("../fabcon-experts"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const FabconLedTransform = dynamic(() => import("../fabcon-led-transform"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const FabconComposableIntelligence = dynamic(
  () => import("../fabcon-composable-intelligence"),
  { loading: () => <SectionLoader />, ssr: true },
);

const FabconDecisionFabric = dynamic(
  () => import("../fabcon-decision-fabric"),
  { loading: () => <SectionLoader />, ssr: true },
);

const FabconBanner = dynamic(() => import("../fabcon-banner/fabcon-banner"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const FabconMidMarket = dynamic(() => import("../fabcon-midmarket"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const LogoSlider = dynamic(() => import("../logo-slider"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const SapImplementation = dynamic(() => import("../sap-implementation"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

const SliderServiceSection = dynamic(
  () => import("../slider-services-section/slider-services-section"),
  { loading: () => <SectionLoader />, ssr: true },
);

const MicrosoftGoldCertified = dynamic(() => import("../microsoft-certified"), {
  loading: () => <SectionLoader />,
  ssr: true,
});

type Props = {
  data: ComponentPropsType[];
};

const GlobalPage = (props: Props) => {
  const { data } = props;

  return data?.map((item, index) => {
    switch (item?.__component) {
      case "home.hero-section-one":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`sliding-section-${item?.__component}-${item?.id}`}
          >
            <SlidingSection
              key={`sliding-section-${item?.__component}-${item?.id}`}
              slides={item?.list}
            />
          </ScrollFadeIn>
        );
      case "page-componets.sticky-cards-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`sticky-cards-${item?.__component}-${item?.id}`}
          >
            <StickyCards stickyCards={item} />
          </ScrollFadeIn>
        );
      case "page-componets.insights-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`insights-section-${item?.__component}-${item?.id}`}
          >
            <InsightsSection insights={item} />
          </ScrollFadeIn>
        );
      case "home.opportunity":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`opportunity-${item?.__component}-${item?.id}`}
          >
            <Opportunities careers={item} />
          </ScrollFadeIn>
        );
      case "home.services-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`services-section-${item?.__component}-${item?.id}`}
          >
            <ServicesSection content={item?.list} />
          </ScrollFadeIn>
        );
      case "page-componets.inspire-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`inspire-section-${item?.__component}-${item?.id}`}
          >
            <InspireSection inspireSection={item} />
          </ScrollFadeIn>
        );
      case "home.we-are-korcomptenz":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`we-are-korcomptenz-${item?.__component}-${item?.id}`}
          >
            <WeAreKorcomptenzSection weAreKorcomptenzData={item} />
          </ScrollFadeIn>
        );
      case "page-componets.banner-section-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`banner-section-list-${item?.__component}-${item?.id}`}
          >
            <BannerSection
              key={`banner-${item?.__component}-${item?.id}`}
              BannerSectionData={item?.list}
            />
          </ScrollFadeIn>
        );
      case "demo-page.demo-banner-list":
        return (
          <DemoBannerSection
            key={`banner-${item?.__component}-${item?.id}`}
            item={item}
          />
        );
      case "page-componets.sap-section-data":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`sap-section-${item?.__component}-${item?.id}`}
          >
            <SapSection sapSectionData={item} />
          </ScrollFadeIn>
        );
      case "page-componets.light-slider-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`light-slider-${item?.__component}-${item?.id}`}
          >
            <LightSlider data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.sticky-title-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`sticky-title-list-${item?.__component}-${item?.id}`}
          >
            <StickyTitleList salesforceServices={item} />
          </ScrollFadeIn>
        );
      case "page-componets.dark-slider-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`dark-slider-${item?.__component}-${item?.id}`}
          >
            <DarkSlider manuelSliderData={item} />
          </ScrollFadeIn>
        );
      case "page-componets.domain-data":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`domain-section-${item?.__component}-${item?.id}`}
          >
            <DomainSection domainData={item} />
          </ScrollFadeIn>
        );
      case "page-componets.benefit-data":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`benefit-section-${item?.__component}-${item?.id}`}
          >
            <BenefitSection benefitData={item} />
          </ScrollFadeIn>
        );
      case "page-componets.faq-title":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`faq-section-${item?.__component}-${item?.id}`}
          >
            <FaqSection faqData={item} />
          </ScrollFadeIn>
        );
      case "page-componets.demonstrate-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`demonstrate-section-${item?.__component}-${item?.id}`}
          >
            <DemonstrateSection data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.build-data":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`build-connect-${item?.__component}-${item?.id}`}
          >
            <BuildConnect buildData={item} />
          </ScrollFadeIn>
        );
      case "page-componets.tech-data":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`tech-partner-${item?.__component}-${item?.id}`}
          >
            <TechPartner techData={item} />
          </ScrollFadeIn>
        );
      case "page-componets.stretchable-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`stretchable-section-${item?.__component}-${item?.id}`}
          >
            <StretchableSection item={item} />
          </ScrollFadeIn>
        );
      case "case-study.case-study-sticky-cards-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`case-study-sticky-cards-${item?.__component}-${item?.id}`}
          >
            <CaseStudyStickyCards stickyCards={item} />
          </ScrollFadeIn>
        );
      case "case-study.case-study-domain-data":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`case-study-domain-section-${item?.__component}-${item?.id}`}
          >
            <CaseStudyDomainSection domainData={item} />
          </ScrollFadeIn>
        );
      case "home.schedule-call":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`schedule-call-${item?.__component}-${item?.id}`}
          >
            <ScheduleCall
              scheduleCall={item}
              isLastIndex={index === data?.length - 1}
            />
          </ScrollFadeIn>
        );
      case "page-componets.why-we-are":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`why-we-are-${item?.__component}-${item?.id}`}
            className="container-md"
          >
            <WhyKorcomptenz data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.gram-banner":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`gram-banner-${item?.__component}-${item?.id}`}
          >
            <GramBanner gramData={item} />
          </ScrollFadeIn>
        );
      case "form-fields.form":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`global-form-${item?.__component}-${item?.id}`}
          >
            <GlobalForm form={item?.form} />
          </ScrollFadeIn>
        );
      case "case-study.partner-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`partner-section-${item?.__component}-${item?.id}`}
          >
            <ClientPartnership data={item} />
          </ScrollFadeIn>
        );
      case "about-us.content-showcase-section-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`content-showcase-section-${item?.__component}-${item?.id}`}
          >
            <ContentShowcaseSection data={item} />
          </ScrollFadeIn>
        );
      case "about-us.map-section-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`map-section-${item?.__component}-${item?.id}`}
          >
            <MapSection data={item} />
          </ScrollFadeIn>
        );
      case "about-us.our-story-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`our-story-${item?.__component}-${item?.id}`}
          >
            <OurStory data={item} />
          </ScrollFadeIn>
        );
      case "about-us.people-showcase-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`people-showcase-section-${item?.__component}-${item?.id}`}
          >
            <PeopleShowcaseSection list={item} />
          </ScrollFadeIn>
        );
      case "about-us.stats-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`stats-section-${item?.__component}-${item?.id}`}
          >
            <StatsSection data={item} />
          </ScrollFadeIn>
        );
      case "about-us.media-slider-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`media-slider-section-${item?.__component}-${item?.id}`}
          >
            <MediaSliderSection data={item} />
          </ScrollFadeIn>
        );
      case "career.mansonry-gallery-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`mansonry-gallery-section-${item?.__component}-${item?.id}`}
          >
            <MasonryGallerySection data={item} />
          </ScrollFadeIn>
        );
      case "about-us.achievement-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`achievement-section-${item?.__component}-${item?.id}`}
          >
            <AchievementSection data={item} />
          </ScrollFadeIn>
        );
      case "demo-page.demo-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`live-demo-list-${item?.__component}-${item?.id}`}
          >
            <LiveDemoList data={item} />
          </ScrollFadeIn>
        );
      case "news-and-event.news-event-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`live-demo-list-${item?.__component}-${item?.id}`}
          >
            <NewsEventListSection
              key={`live-demo-list-${item?.__component}-${item?.id}`}
              data={item?.list}
            />
          </ScrollFadeIn>
        );
      case "not-found.not-found":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`not-found-${item?.__component}-${item?.id}`}
          >
            <NotFound data={item} />
          </ScrollFadeIn>
        );
      case "career.career-build-data":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`build-connect-${item?.__component}-${item?.id}`}
          >
            <PanchatattvaSection buildData={item} />
          </ScrollFadeIn>
        );
      case "career.open-jobs":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`open-jobs-${item?.__component}-${item?.id}`}
          >
            <OpenJobs data={item} />
          </ScrollFadeIn>
        );
      case "contact-us.news-letter":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`contact-us-newsletter-${item?.__component}-${item?.id}`}
          >
            <ContactUsNewsletter newsletterData={item} />
          </ScrollFadeIn>
        );
      case "contact-us.our-office":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`contact-us-office-${item?.__component}-${item?.id}`}
          >
            <ContactUsOffice officesData={item} />
          </ScrollFadeIn>
        );
      case "contact-us.contact-us-insight-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`contact-us-insights-section-${item?.__component}-${item?.id}`}
          >
            <ContactUsInsight data={item} />
          </ScrollFadeIn>
        );
      case "contact-us.office-location-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`contact-us-corporate-${item?.__component}-${item?.id}`}
          >
            <ContactUsCorporate corporateData={item} />
          </ScrollFadeIn>
        );
      case "contact-us.fixed-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`contact-us-fixed-section-${item?.__component}-${item?.id}`}
          >
            <FixedFooter data={item} />
          </ScrollFadeIn>
        );
      case "contact-us.contact-us-form-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`contact-us-form-${item?.__component}-${item?.id}`}
          >
            <ContactUsForm data={item} />
          </ScrollFadeIn>
        );
      case "demo-page.demo-partnership":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`demo-partnership-${item?.__component}-${item?.id}`}
          >
            <DemoPartnership data={item} />
          </ScrollFadeIn>
        );
      case "demo-page.experts-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`demo-experts-${item?.__component}-${item?.id}`}
          >
            <DemoExperts data={item} />
          </ScrollFadeIn>
        );
      case "demo-page.demo-opportunity":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`demo-opportunities-${item?.__component}-${item?.id}`}
          >
            <DemoOpportunities whyAttendData={item} />
          </ScrollFadeIn>
        );
      case "demo-page.demo-demonstration":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`demo-demonstration-${item?.__component}-${item?.id}`}
          >
            <DemoWhyAttend whyAttendData={item} />
          </ScrollFadeIn>
        );
      case "demo-page.build-demo":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`build-demo-${item?.__component}-${item?.id}`}
          >
            <BuildDemo
              key={`build-demo-${item?.__component}-${item?.id}`}
              buildData={item}
            />
          </ScrollFadeIn>
        );
      case "page-componets.pricing-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`pricing-section-${item?.__component}-${item?.id}`}
          >
            <PricingSection
              key={`pricing-section-${item?.__component}-${item?.id}`}
              data={item}
            />
          </ScrollFadeIn>
        );
      case "kor-cares.kor-care-build-data":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`kor-care-build-data-${item?.__component}-${item?.id}`}
          >
            <KorCareBuildData
              key={`kor-care-build-data-${item?.__component}-${item?.id}`}
              buildData={item}
            />
          </ScrollFadeIn>
        );
      case "kor-cares.impact-description":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`impact-description-${item?.__component}-${item?.id}`}
          >
            <KorCareImpactDescription
              key={`impact-description-${item?.__component}-${item?.id}`}
              data={item}
            />
          </ScrollFadeIn>
        );
      case "kor-cares.award":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`kor-care-award-${item?.__component}-${item?.id}`}
          >
            <KorCareAward
              key={`kor-care-award-${item?.__component}-${item?.id}`}
              data={item}
            />
          </ScrollFadeIn>
        );
      case "kor-cares.straight-slider":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`kor-care-slider-${item?.__component}-${item?.id}`}
          >
            <KorCareSlider
              key={`kor-care-slider-${item?.__component}-${item?.id}`}
              manuelSliderData={item}
            />
          </ScrollFadeIn>
        );
      case "kor-cares.impact-highlight":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`kor-care-impact-highlight-${item?.__component}-${item?.id}`}
          >
            <KorCareImpactHighlight
              key={`kor-care-impact-highlight-${item?.__component}-${item?.id}`}
              data={item}
            />
          </ScrollFadeIn>
        );
      case "news-and-event.news-description-only":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`news-description-only-${item?.__component}-${item?.id}`}
          >
            <DescriptionOnly
              key={`news-description-only-${item?.__component}-${item?.id}`}
              data={item}
            />
          </ScrollFadeIn>
        );
      case "news-and-event.news-title-description-only":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`news-title-description-only-${item?.__component}-${item?.id}`}
          >
            <TitleDescription
              key={`news-title-description-only-${item?.__component}-${item?.id}`}
              data={item}
            />
          </ScrollFadeIn>
        );
      case "news-and-event.compounds-newsroom":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`compounds-newsroom-${item?.__component}-${item?.id}`}
          >
            <CombinedSection
              key={`compounds-newsroom-${item?.__component}-${item?.id}`}
              data={item}
            />
          </ScrollFadeIn>
        );
      case "news-and-event.news-service":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`news-service-provider-${item?.__component}-${item?.id}`}
          >
            <ServiceProvider
              key={`news-service-provider-${item?.__component}-${item?.id}`}
              data={item}
            />
          </ScrollFadeIn>
        );
      case "news-and-event.color-custom-description":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`news-dcolor-custom-description-${item?.__component}-${item?.id}`}
          >
            <DescriptionOnly
              key={`news-dcolor-custom-description-${item?.__component}-${item?.id}`}
              data={item}
              isbgColor
            />
          </ScrollFadeIn>
        );
      case "news-and-event.news-banner":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`news-banner-${item?.__component}-${item?.id}`}
          >
            <VideoBannerSection
              key={`news-banner-${item?.__component}-${item?.id}`}
              item={item}
            />
          </ScrollFadeIn>
        );
      case "news-and-event.simple-image-gallery":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`simple-image-gallery-${item?.__component}-${item?.id}`}
          >
            <NewsRoomSlider
              key={`simple-image-gallery-${item?.__component}-${item?.id}`}
              manuelSliderData={item}
            />
          </ScrollFadeIn>
        );
      case "news-and-event.testimonal-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`client-testimonial-${item?.__component}-${item?.id}`}
          >
            <ClientTestimonial
              key={`client-testimonial-${item?.__component}-${item?.id}`}
              data={item?.list}
            />
          </ScrollFadeIn>
        );
      case "news-and-event.build-data":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`build-data-${item?.__component}-${item?.id}`}
          >
            <NewsRoomBuild
              key={`build-data-${item?.__component}-${item?.id}`}
              buildData={item}
            />
          </ScrollFadeIn>
        );
      case "page-componets.digital-benefits":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`digital-benefits-${item?.__component}-${item?.id}`}
          >
            <DigitialBenefits
              key={`digital-benefits-${item?.__component}-${item?.id}`}
              data={item}
            />
          </ScrollFadeIn>
        );
      case "page-componets.kpi-partner":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`kpi-partner-${item?.__component}-${item?.id}`}
          >
            <KpiPartner
              key={`kpi-partner-${item?.__component}-${item?.id}`}
              data={item}
            />
          </ScrollFadeIn>
        );
      case "page-componets.digital-services-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`digital-services-section-${item?.__component}-${item?.id}`}
          >
            <DigitalServiceSection
              key={`digital-services-section-${item?.__component}-${item?.id}`}
              content={item}
            />
          </ScrollFadeIn>
        );
      case "page-componets.digital-card-slider":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`digital-card-slider-${item?.__component}-${item?.id}`}
          >
            <DigitialCardSlider
              key={`digital-card-slider-${item?.__component}-${item?.id}`}
              content={item}
            />
          </ScrollFadeIn>
        );
      case "page-componets.digital-about":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`digital-about-${item?.__component}-${item?.id}`}
          >
            <DigitialAboutSection
              key={`digital-about-${item?.__component}-${item?.id}`}
              data={item}
            />
          </ScrollFadeIn>
        );
      case "page-componets.digital-erp-list":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`digital-erp-list-${item?.__component}-${item?.id}`}
          >
            <DigitalErpList
              key={`digital-erp-list-${item?.__component}-${item?.id}`}
              data={item}
            />
          </ScrollFadeIn>
        );
      case "page-componets.digital-analytics":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`digital-analytics-${item?.__component}-${item?.id}`}
          >
            <DigitialAnalytics
              key={`digital-analytics-${item?.__component}-${item?.id}`}
              data={item}
            />
          </ScrollFadeIn>
        );
      case "page-componets.digital-full-lifecycle":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`digital-life-cycle-${item?.__component}-${item?.id}`}
          >
            <DigitialLifeCycle data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.digital-inspire":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`digital-inspire-${item?.__component}-${item?.id}`}
          >
            <DigitialInsightSlider manuelSliderData={item} />
          </ScrollFadeIn>
        );
      case "page-componets.combined-about-card-slider":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`combined-about-card-slider-${item?.__component}-${item?.id}`}
          >
            <CombinedAboutCardSlider data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.smart-forge-operational-roadblock":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`smart-forge-operational-roadblock-${item?.__component}-${item?.id}`}
          >
            <OperationalRoadblock data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.smart-forge-enterprises":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`smart-forge-enterprises-${item?.__component}-${item?.id}`}
          >
            <SmartForgeEnterprises data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.smart-forge-build":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`smart-forge-build-${item?.__component}-${item?.id}`}
          >
            <SmartForgeBuild data={item} />
          </ScrollFadeIn>
        );

      case "page-componets.digital-card":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`digital-card-${item?.__component}-${item?.id}`}
          >
            <DigitialCard data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.export-migration":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`export-migration-${item?.__component}-${item?.id}`}
          >
            <ExpertMigration data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.fabcon-ai-powered":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`fabcon-ai-powered-${item?.__component}-${item?.id}`}
          >
            <FabconAiPowered data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.fabcon-about":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`fabcon-about-${item?.__component}-${item?.id}`}
          >
            <FabconAbout data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.fabcon-data-analytics":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`fabcon-data-analytics-${item?.__component}-${item?.id}`}
          >
            <FabconAnalytics data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.fabcon-smart-forge":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`fabcon-smart-forge-${item?.__component}-${item?.id}`}
          >
            <FabconSmartForge data={item} />
          </ScrollFadeIn>
        );

      case "page-componets.fabcon-fabric-ai-leadership":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`fabcon-fabric-ai-leadership-${item?.__component}-${item?.id}`}
          >
            <FabconExperts data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.fabcon-led-transformation":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`fabcon-led-transformation-${item?.__component}-${item?.id}`}
          >
            <FabconLedTransform data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.fabcon-composable-intelligence":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`fabcon-composable-intelligence-${item?.__component}-${item?.id}`}
          >
            <FabconComposableIntelligence data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.fabcon-decision-fabric":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`fabcon-decision-fabric-${item?.__component}-${item?.id}`}
          >
            <FabconDecisionFabric data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.fabcon-fabric-community-conference":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`fabcon-fabric-community-conference-${item?.__component}-${item?.id}`}
          >
            <FabconBanner data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.midmarket-enterprises":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`midmarket-enterprises-${item?.__component}-${item?.id}`}
          >
            <FabconMidMarket data={item} />
          </ScrollFadeIn>
        );
      case "contact-us.logo-slider":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`logo-slider-${item?.__component}-${item?.id}`}
          >
            <LogoSlider data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.sap-implementation":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`sap-implementation-${item?.__component}-${item?.id}`}
          >
            <SapImplementation data={item} />
          </ScrollFadeIn>
        );

      case "page-componets.slider-service-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`slider-service-section-${item?.__component}-${item?.id}`}
          >
            <SliderServiceSection content={item} />
          </ScrollFadeIn>
        );

      case "page-componets.microsoft-gold-certified":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`microsoft-gold-certified-${item?.__component}-${item?.id}`}
          >
            <MicrosoftGoldCertified data={item} />
          </ScrollFadeIn>
        );
      default:
        return;
    }
  });
};

export default GlobalPage;
