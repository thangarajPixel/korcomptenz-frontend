import React from "react";
import { InsightsSection } from "../insight-section";
import InspireSection from "../inspire-section";
import Opportunities from "../opportunities";
import ServicesSection from "../services-section";
import SlidingSection from "../sliding-section";
import { StickyCards, CaseStudyStickyCards } from "../sticky-cards";
import WeAreKorcomptenzSection from "../we-are-korcomptenz";
import BannerSection from "../banner-section";
import SapSection from "../sap-section";
import LightSlider from "../light-slider";
import DarkSlider from "../dark-slider";
import { DomainSection, CaseStudyDomainSection } from "../domain-section";
import BenefitSection from "../benefit-section";
import FaqSection from "../faq-section";
import { StickyTitleList } from "../sticky-title-list";
import DemonstrateSection from "../demonstrate-section";
import BuildConnect from "../build-connect";
import TechPartner from "../tech-partner-section";
import ScheduleCall from "../layout/_utils/schedule";
import StretchableSection from "../stretchable-section";
import WhyKorcomptenz from "../why-korcomptenz/why-korcomptenz";
import GramBanner from "../gram-banner/gram-banner";
import { GlobalForm } from "../global-form";
import {
  ClientPartnership,
  ClientTestimonial,
} from "@/app/(default)/case-studies/_utils";
import ContentShowcaseSection from "../content-showcase-section";
import MapSection from "../map-section";
import OurStory from "../our-story";
import PeopleShowcaseSection from "../people-showcase-section";
import StatsSection from "../stats-section";
import MediaSliderSection from "../media-slider-section";
import MasonryGallerySection from "../masonry-gallery-section/masonry-gallery-section";
import AchievementSection from "../achievements-section";
import NotFound from "../not-found";
import PanchatattvaSection from "../panchatattva-section";
import OpenJobs from "../open-jobs";
import { ContactUsNewsletter } from "../news-letter-section";
import {
  ContactUsCorporate,
  ContactUsInsight,
  ContactUsOffice,
} from "@/app/(default)/contact-us/_utils";
import FixedFooter from "../fixed-footer";
import ContactUsForm from "@/app/(default)/contact-us/_utils/contact-us-form-section";
import DemoBannerSection from "../demo-banner-section";
import LiveDemoList from "@/app/(default)/live-demo/_utils/live-demo-list";
import DemoPartnership from "@/app/(default)/live-demo/_utils/demo-partnership";
import DemoExperts from "@/app/(default)/live-demo/_utils/demo-experts";
import DemoOpportunities from "@/app/(default)/live-demo/_utils/demo-opportunities";
import DemoWhyAttend from "@/app/(default)/live-demo/_utils/demo-why-attend";
import { ScrollFadeIn } from "../ui/scroll-fade-in";
import BuildDemo from "../build-connect/build-Demo";
import PricingSection from "../pricing-section";
import KorCareBuildData from "../kor-care-build-data";
import KorCareImpactDescription from "../kor-care-impact-description";
import KorCareAward from "../kor-care-award-section/kor-care-award";
import KorCareSlider from "../kor-care-slider-section";
import KorCareImpactHighlight from "../kor-care-impact-highlight";
import NewsEventListSection from "../news-event-list-section";
import { DescriptionOnly, TitleDescription } from "../description-section";
import { CombinedSection, NewsRoomSlider, ServiceProvider } from "../news-room";
import VideoBannerSection from "../video-banner-section";
import NewsRoomBuild from "../news-room/_utils/news-room-build";

import DigitialBenefits from "../digitial-benefits/digitial-benefits";
import KpiPartner from "../kpi-partner";
import DigitalServiceSection from "../digitial-services-section";
import { DigitialCardSlider } from "../digitial-card-slider";

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
      default:
        return;
    }
  });
};

export default GlobalPage;
