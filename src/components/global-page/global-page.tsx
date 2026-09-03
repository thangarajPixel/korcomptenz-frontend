import dynamic from "next/dynamic";
import { Suspense } from "react";
import { ScrollFadeIn } from "../ui/scroll-fade-in";


// Every CMS section below is code-split via next/dynamic (ssr stays on, so
// server-rendered HTML is unchanged) instead of being statically imported.
// A typical page only renders a fraction of these ~140 component types, so
// splitting avoids shipping the JS for every unused one to every route.
const InsightsSection = dynamic(() =>
  import("../insight-section").then((m) => m.InsightsSection),
);
const InspireSection = dynamic(() => import("../inspire-section"));
const Opportunities = dynamic(() => import("../opportunities"));
const ServicesSection = dynamic(() => import("../services-section"));
const SlidingSection = dynamic(() => import("../sliding-section"));
const StickyCards = dynamic(() =>
  import("../sticky-cards").then((m) => m.StickyCards),
);
const CaseStudyStickyCards = dynamic(() =>
  import("../sticky-cards").then((m) => m.CaseStudyStickyCards),
);
const WeAreKorcomptenzSection = dynamic(() => import("../we-are-korcomptenz"));
const BannerSection = dynamic(() => import("../banner-section"));
const SapSection = dynamic(() => import("../sap-section"));
const LightSlider = dynamic(() => import("../light-slider"));
const DarkSlider = dynamic(() => import("../dark-slider"));
const DomainSection = dynamic(() =>
  import("../domain-section").then((m) => m.DomainSection),
);
const CaseStudyDomainSection = dynamic(() =>
  import("../domain-section").then((m) => m.CaseStudyDomainSection),
);
const BenefitSection = dynamic(() => import("../benefit-section"));
const FaqSection = dynamic(() => import("../faq-section"));
const StickyTitleList = dynamic(() =>
  import("../sticky-title-list").then((m) => m.StickyTitleList),
);
const DemonstrateSection = dynamic(() => import("../demonstrate-section"));
const BuildConnect = dynamic(() => import("../build-connect"));
const TechPartner = dynamic(() => import("../tech-partner-section"));
const ScheduleCall = dynamic(() => import("../layout/_utils/schedule"));
const StretchableSection = dynamic(() => import("../stretchable-section"));
const WhyKorcomptenz = dynamic(
  () => import("../why-korcomptenz/why-korcomptenz"),
);
const GramBanner = dynamic(() => import("../gram-banner/gram-banner"));
const GlobalForm = dynamic(() =>
  import("../global-form").then((m) => m.GlobalForm),
);
const ClientPartnership = dynamic(() =>
  import("@/app/(default)/case-studies/_utils").then(
    (m) => m.ClientPartnership,
  ),
);
const ClientTestimonial = dynamic(() =>
  import("@/app/(default)/case-studies/_utils").then(
    (m) => m.ClientTestimonial,
  ),
);
const ContentShowcaseSection = dynamic(
  () => import("../content-showcase-section"),
);
const MapSection = dynamic(() => import("../map-section"));
const OurStory = dynamic(() => import("../our-story"));
const PeopleShowcaseSection = dynamic(
  () => import("../people-showcase-section"),
);
const StatsSection = dynamic(() => import("../stats-section"));
const MediaSliderSection = dynamic(() => import("../media-slider-section"));
const MasonryGallerySection = dynamic(
  () => import("../masonry-gallery-section/masonry-gallery-section"),
);
const AchievementSection = dynamic(() => import("../achievements-section"));
const NotFound = dynamic(() => import("../not-found"));
const PanchatattvaSection = dynamic(() => import("../panchatattva-section"));
const OpenJobs = dynamic(() => import("../open-jobs"));
const ContactUsNewsletter = dynamic(() =>
  import("../news-letter-section").then((m) => m.ContactUsNewsletter),
);
const ContactUsCorporate = dynamic(() =>
  import("@/app/(default)/contact-us/_utils").then(
    (m) => m.ContactUsCorporate,
  ),
);
const ContactUsInsight = dynamic(() =>
  import("@/app/(default)/contact-us/_utils").then((m) => m.ContactUsInsight),
);
const ContactUsOffice = dynamic(() =>
  import("@/app/(default)/contact-us/_utils").then((m) => m.ContactUsOffice),
);
const FixedFooter = dynamic(() => import("../fixed-footer"));
const ContactUsForm = dynamic(
  () => import("@/app/(default)/contact-us/_utils/contact-us-form-section"),
);
const DemoBannerSection = dynamic(() => import("../demo-banner-section"));
const LiveDemoList = dynamic(
  () => import("@/app/(default)/live-demo/_utils/live-demo-list"),
);
const DemoPartnership = dynamic(
  () => import("@/app/(default)/live-demo/_utils/demo-partnership"),
);
const DemoExperts = dynamic(
  () => import("@/app/(default)/live-demo/_utils/demo-experts"),
);
const DemoOpportunities = dynamic(
  () => import("@/app/(default)/live-demo/_utils/demo-opportunities"),
);
const DemoWhyAttend = dynamic(
  () => import("@/app/(default)/live-demo/_utils/demo-why-attend"),
);
const BuildDemo = dynamic(() => import("../build-connect/build-Demo"));
const PricingSection = dynamic(() => import("../pricing-section"));
const KorCareBuildData = dynamic(() => import("../kor-care-build-data"));
const KorCareImpactDescription = dynamic(
  () => import("../kor-care-impact-description"),
);
const KorCareAward = dynamic(
  () => import("../kor-care-award-section/kor-care-award"),
);
const KorCareSlider = dynamic(() => import("../kor-care-slider-section"));
const KorCareImpactHighlight = dynamic(
  () => import("../kor-care-impact-highlight"),
);
const NewsEventListSection = dynamic(
  () => import("../news-event-list-section"),
);
const DescriptionOnly = dynamic(() =>
  import("../description-section").then((m) => m.DescriptionOnly),
);
const TitleDescription = dynamic(() =>
  import("../description-section").then((m) => m.TitleDescription),
);
const CombinedSection = dynamic(() =>
  import("../news-room").then((m) => m.CombinedSection),
);
const NewsRoomSlider = dynamic(() =>
  import("../news-room").then((m) => m.NewsRoomSlider),
);
const ServiceProvider = dynamic(() =>
  import("../news-room").then((m) => m.ServiceProvider),
);
const VideoBannerSection = dynamic(() => import("../video-banner-section"));
const NewsRoomBuild = dynamic(
  () => import("../news-room/_utils/news-room-build"),
);

const DigitialBenefits = dynamic(
  () => import("../digitial-benefits/digitial-benefits"),
);
const KpiPartner = dynamic(() => import("../kpi-partner"));
const DigitalServiceSection = dynamic(
  () => import("../digitial-services-section"),
);
const DigitialCardSlider = dynamic(() =>
  import("../digitial-card-slider").then((m) => m.DigitialCardSlider),
);
const DigitialAboutSection = dynamic(() =>
  import("../digitial-about-section").then((m) => m.DigitialAboutSection),
);
const DigitalErpList = dynamic(() =>
  import("../digitial-erp-list").then((m) => m.DigitalErpList),
);
const DigitialAnalytics = dynamic(
  () => import("../digitial-analytics/digitial-analytics"),
);

const DigitialLifeCycle = dynamic(() =>
  import("../digitial-life-cycle").then((m) => m.DigitialLifeCycle),
);
const DigitialInsightSlider = dynamic(() => import("../dark-slider copy"));
const CombinedAboutCardSlider = dynamic(
  () => import("../digitial-combined/digitial-combined"),
);
const OperationalRoadblock = dynamic(
  () => import("../smartforge-operational-Roadblock"),
);
const SmartForgeEnterprises = dynamic(
  () => import("../smartforge-enterprises"),
);
const SmartForgeBuild = dynamic(() => import("../smartforge-build"));
const DigitialCard = dynamic(() => import("../digitial-card/digitial-card"));
const ExpertMigration = dynamic(
  () => import("../expert-migration/expert-migration"),
);
const FabconAiPowered = dynamic(
  () => import("../fabcon-ai-powered/fabcon-ai-powered"),
);
const FabconAbout = dynamic(() => import("../fabcon-about"));
const FabconAnalytics = dynamic(() => import("../fabcon-analytics"));
const FabconSmartForge = dynamic(() => import("../fabcon-smart-forge"));
const FabconExperts = dynamic(() => import("../fabcon-experts"));
const FabconLedTransform = dynamic(() => import("../fabcon-led-transform"));
const FabconComposableIntelligence = dynamic(
  () => import("../fabcon-composable-intelligence"),
);
const FabconDecisionFabric = dynamic(
  () => import("../fabcon-decision-fabric"),
);
const FabconBanner = dynamic(() => import("../fabcon-banner/fabcon-banner"));
const CommunityBanner = dynamic(
  () =>
    import("../community-conference-banner/community-conference-banner"),
);
const FabconMidMarket = dynamic(() => import("../fabcon-midmarket"));
const LogoSlider = dynamic(() => import("../logo-slider"));
const SapImplementation = dynamic(() => import("../sap-implementation"));
const SliderServiceSection = dynamic(
  () => import("../slider-services-section/slider-services-section"),
);
const MicrosoftGoldCertified = dynamic(() => import("../microsoft-certified"));

const KeyMetricsSection = dynamic(() => import("../key-metrics-section"));
const SapWhyKorcomptenz = dynamic(() => import("../sap-why-korcomptenz"));
const WhattoExpect = dynamic(() => import("../what-to-expect"));
const SAPPracticeAreas = dynamic(() =>
  import("../sap-practice-areas").then((m) => m.SAPPracticeAreas),
);
const SAPClientTestimonial = dynamic(() => import("../client-testimonial"));
const CertificationsSection = dynamic(
  () => import("../certifications-section"),
);
const RequestConsultation = dynamic(() => import("../request-consultation"));

const IndustryBannerSection = dynamic(() => import("../industry-banner"));
const IndustryAbout = dynamic(() => import("../industry-about"));
const IndustrySpotlight = dynamic(() => import("../industry-spotlight"));
const IndustryIntelligence = dynamic(() => import("../industry-intelligence"));
const IndustryFeaturedContent = dynamic(
  () => import("../industry-featured-content/industry-featured-content"),
);
const IndustryServicePortfolio = dynamic(
  () => import("../industry-service-portfolio"),
);
const CloudRecognitionSlider = dynamic(
  () => import("../cloud-recognition-slider/cloud-recognition-slider"),
);
const CloudWarning = dynamic(() => import("../cloud-warning"));
const CloudMigrationHandle = dynamic(
  () => import("../cloud-migration-handle/cloud-migration-handle"),
);
const CloudTechnology = dynamic(() => import("../cloud-technology"));
const CloudOnePlatform = dynamic(() => import("../cloud-one-platform"));
const CloudFirstCall = dynamic(() => import("../cloud-first-call"));
const CloudAiPowered = dynamic(() => import("../cloud-ai-powered"));
const CloudBuildPeople = dynamic(() => import("../cloud-build-people"));
const CloudKeyOfferings = dynamic(() => import("../cloud-key-offerings"));
const CloudReadiness = dynamic(
  () => import("../cloud-Readiness/cloud-Readiness"),
);
const CloudBanner = dynamic(() => import("../cloud-banner/cloud-banner"));
const StepGridSection = dynamic(() => import("../step-grid-section"));
const TabSection = dynamic(() => import("../tab-section"));
const GridSystem = dynamic(() => import("../grid-system"));
const ChecklistSection = dynamic(() => import("../altiaris-checklist"));
const NewsLetterBannner = dynamic(() => import("../newsletter-banner"));
const NewsLetterLeaderShip = dynamic(
  () => import("../newsletter-leadership-message"),
);
const NewsLetterDescription = dynamic(
  () => import("../newsletter-description"),
);
const NewsLetterFooterSection = dynamic(() => import("../newsletter-footer"));
const FullWidthGramSection = dynamic(
  () => import("../full-width-gram-banner"),
);
const CustomScriptSection = dynamic(() => import("../custom-script"));
const HomeSlidingSection = dynamic(() => import("../home-sliding-section"));

type Props = {
  data: ComponentPropsType[];
};

const GlobalPage = (props: Props) => {
  const { data } = props;

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg text-muted-foreground">No content available</p>
      </div>
    );
  }

  return data?.map((item, index) => {
    switch (item?.__component) {
      case "home.hero-section-one":
        // Hero is above the fold — skip fade-in to avoid LCP penalty
        return (
          <SlidingSection
            key={`sliding-section-${item?.__component}-${item?.id}`}
            slides={item?.list}
          />
        );

      case "home.home-sliding-section":
        // Hero is above the fold — skip fade-in to avoid LCP penalty
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`home-sliding-section-${item?.__component}-${item?.id}`}
          >
            <HomeSlidingSection data={item} />
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

      case "page-componets.newsletter-banner":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`newsletter-banner-${item?.__component}-${item?.id}`}
          >
            <NewsLetterBannner data={item} />
          </ScrollFadeIn>
        );

      case "page-componets.newsletter-leadership-message":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`newsletter-leadership-${item?.__component}-${item?.id}`}
          >
            <NewsLetterLeaderShip data={item} />
          </ScrollFadeIn>
        );

      case "page-componets.newsletter-description":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`newsletter-description-${item?.__component}-${item?.id}`}
          >
            <NewsLetterDescription data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.newsletter-footer":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`newsletter-footer-${item?.__component}-${item?.id}`}
          >
            <NewsLetterFooterSection data={item} />
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
          <BannerSection
            key={`banner-${item?.__component}-${item?.id}`}
            BannerSectionData={item?.list}
          />
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
      case "page-componets.custom-script":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`custom-script-section-${item?.__component}-${item?.id}`}
          >
            <CustomScriptSection data={item} />
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
            {/* OpenJobs uses useSearchParams(), which requires a Suspense
                boundary during static rendering/build. */}
            <Suspense fallback={null}>
              <OpenJobs data={item} />
            </Suspense>
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
      case "page-componets.community-conference-banner":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`community-conference-banner-${item?.__component}-${item?.id}`}
          >
            <CommunityBanner data={item} />
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
      case "page-componets.banking-financial-banner":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`banking-financial-banner-${item?.__component}-${item?.id}`}
          >
            <IndustryBannerSection BannerSectionData={[item]} />
          </ScrollFadeIn>
        );
      case "page-componets.industry-build-data":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`industry-build-data-${item?.__component}-${item?.id}`}
          >
            <IndustryAbout data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.industry-solution-spotlight":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`industry-solution-spotlight-${item?.__component}-${item?.id}`}
          >
            <IndustrySpotlight data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.industry-intelligent-experience":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`industry-intelligent-experience-${item?.__component}-${item?.id}`}
          >
            <IndustryIntelligence data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.industry-featured-content":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`industry-featured-content-${item?.__component}-${item?.id}`}
          >
            <IndustryFeaturedContent data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.industry-service-portfolio":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`industry-service-portfolio-${item?.__component}-${item?.id}`}
          >
            <IndustryServicePortfolio data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.cloud-recognition":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`cloud-recognition-${item?.__component}-${item?.id}`}
          >
            <CloudRecognitionSlider data={item} />
          </ScrollFadeIn>
        );

      case "page-componets.cloud-warning-signs":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`cloud-warning-signs-${item?.__component}-${item?.id}`}
          >
            <CloudWarning data={item} />
          </ScrollFadeIn>
        );

      case "page-componets.cloud-migration-handle":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`cloud-migration-handle-${item?.__component}-${item?.id}`}
          >
            <CloudMigrationHandle data={item} />
          </ScrollFadeIn>
        );

      case "page-componets.cloud-technology":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`cloud-technology-${item?.__component}-${item?.id}`}
          >
            <CloudTechnology data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.cloud-one-platform":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`CloudOnePlatform-${item?.__component}-${item?.id}`}
          >
            <CloudOnePlatform data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.cloud-first-call":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`cloud-first-call-${item?.__component}-${item?.id}`}
          >
            <CloudFirstCall data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.cloud-ai-power":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`cloud-ai-power-${item?.__component}-${item?.id}`}
          >
            <CloudAiPowered data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.cloud-built-people":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`cloud-built-people-${item?.__component}-${item?.id}`}
          >
            <CloudBuildPeople data={item} />
          </ScrollFadeIn>
        );

      case "page-componets.cloud-key-offerings":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`cloud-key-offerings-${item?.__component}-${item?.id}`}
          >
            <CloudKeyOfferings data={item} />
          </ScrollFadeIn>
        );

      case "page-componets.cloud-readiness-report":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`cloud-readiness-report-cloud-form-${item?.__component}-${item?.id}`}
          >
            <CloudReadiness data={item} form={item.form} />
          </ScrollFadeIn>
        );

      case "page-componets.cloud-banner":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`cloud-banner-${item?.__component}-${item?.id}`}
          >
            <CloudBanner data={item} />
          </ScrollFadeIn>
        );

      /* KOR DEV Team Start */
      case "page-componets.key-metrics-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`page-componets.key-metrics-section-${item?.__component}-${item?.id}`}
          >
            <KeyMetricsSection KeyMetricsData={item} />
          </ScrollFadeIn>
        );

      case "page-componets.sap-why-korcomptenz":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`sap-why-korcomptenz-section-${item?.__component}-${item?.id}`}
          >
            <SapWhyKorcomptenz data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.what-to-expect":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`what-to-expect-${item?.__component}-${item?.id}`}
          >
            <WhattoExpect data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.client-testimonial":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`client-testimonial-${item?.__component}-${item?.id}`}
          >
            <SAPClientTestimonial data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.certifications-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`certifications-section-${item?.__component}-${item?.id}`}
          >
            <CertificationsSection data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.request-consultation":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`request-consultation-${item?.__component}-${item?.id}`}
          >
            <RequestConsultation data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.sap-practice-areas":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`sap-practice-areas-${item?.__component}-${item?.id}`}
          >
            <SAPPracticeAreas data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.step-grid-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`step-grid-section-${item?.__component}-${item?.id}`}
          >
            <StepGridSection data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.tab-section":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`tab-section-${item?.__component}-${item?.id}`}
          >
            <TabSection data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.grid-system":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`grid-system-${item?.__component}-${item?.id}`}
          >
            <GridSystem data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.altiaris-checklist":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`altiaris-checklist-${item?.__component}-${item?.id}`}
          >
            <ChecklistSection data={item} />
          </ScrollFadeIn>
        );
      case "page-componets.full-width-gram-banner":
        return (
          <ScrollFadeIn
            __component={item?.__component}
            key={`full-width-gram-banner-${item?.__component}-${item?.id}`}
          >
            <FullWidthGramSection data={item} />
          </ScrollFadeIn>
        );
      /* KOR DEV Team End */

      default:
        return;
    }
  });
};

export default GlobalPage;
