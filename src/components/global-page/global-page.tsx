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
import { ClientPartnership } from "@/app/(default)/client-success/_utils";
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

type Props = {
  data: ComponentPropsType[];
};

const GlobalPage = (props: Props) => {
  const { data } = props;

  return data?.map((item) => {
    switch (item?.__component) {
      case "home.hero-section-one":
        return (
          <SlidingSection
            key={`sliding-section-${item?.__component}-${item?.id}`}
            slides={item?.list}
          />
        );
      case "page-componets.sticky-cards-list":
        return (
          <StickyCards
            key={`sticky-cards-${item?.__component}-${item?.id}`}
            stickyCards={item}
          />
        );
      case "page-componets.insights-section":
        return (
          <InsightsSection
            key={`insights-section-${item?.__component}-${item?.id}`}
            insights={item}
          />
        );
      case "home.opportunity":
        return (
          <Opportunities
            key={`opportunity-${item?.__component}-${item?.id}`}
            careers={item}
          />
        );
      case "home.services-section":
        return (
          <ServicesSection
            key={`services-section-${item?.__component}-${item?.id}`}
            content={item?.list}
          />
        );
      case "page-componets.inspire-section":
        return (
          <InspireSection
            key={`inspire-section-${item?.__component}-${item?.id}`}
            inspireSection={item}
          />
        );
      case "home.we-are-korcomptenz":
        return (
          <WeAreKorcomptenzSection
            key={`we-are-korcomptenz-${item?.__component}-${item?.id}`}
            weAreKorcomptenzData={item}
          />
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
            BannerSectionData={item?.list}
          />
        );
      case "page-componets.sap-section-data":
        return (
          <SapSection
            key={`sap-section-${item?.__component}-${item?.id}`}
            sapSectionData={item}
          />
        );
      case "page-componets.light-slider-list":
        return (
          <LightSlider
            key={`light-slider-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "page-componets.sticky-title-list":
        return (
          <StickyTitleList
            key={`sticky-title-list-${item?.__component}-${item?.id}`}
            salesforceServices={item}
          />
        );
      case "page-componets.dark-slider-list":
        return (
          <DarkSlider
            key={`dark-slider-${item?.__component}-${item?.id}`}
            manuelSliderData={item}
          />
        );
      case "page-componets.domain-data":
        return (
          <DomainSection
            key={`domain-section-${item?.__component}-${item?.id}`}
            domainData={item}
          />
        );
      case "page-componets.benefit-data":
        return (
          <BenefitSection
            key={`benefit-section-${item?.__component}-${item?.id}`}
            benefitData={item}
          />
        );
      case "page-componets.faq-title":
        return (
          <FaqSection
            key={`faq-section-${item?.__component}-${item?.id}`}
            faqData={item}
          />
        );
      case "page-componets.demonstrate-section":
        return (
          <DemonstrateSection
            key={`demonstrate-section-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "page-componets.build-data":
        return (
          <BuildConnect
            key={`build-connect-${item?.__component}-${item?.id}`}
            buildData={item}
          />
        );
      case "page-componets.tech-data":
        return (
          <TechPartner
            key={`tech-partner-${item?.__component}-${item?.id}`}
            techData={item}
          />
        );
      case "page-componets.stretchable-section":
        return (
          <StretchableSection
            key={`stretchable-section-${item?.__component}-${item?.id}`}
            item={item}
          />
        );
      case "case-study.case-study-sticky-cards-list":
        return (
          <CaseStudyStickyCards
            key={`case-study-sticky-cards-${item?.__component}-${item?.id}`}
            stickyCards={item}
          />
        );
      case "case-study.case-study-domain-data":
        return (
          <CaseStudyDomainSection
            key={`case-study-domain-section-${item?.__component}-${item?.id}`}
            domainData={item}
          />
        );
      case "home.schedule-call":
        return (
          <ScheduleCall
            key={`schedule-call-${item?.__component}-${item?.id}`}
            scheduleCall={item}
          />
        );
      case "page-componets.why-we-are":
        return (
          <WhyKorcomptenz
            key={`why-we-are-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "page-componets.gram-banner":
        return (
          <GramBanner
            key={`gram-banner-${item?.__component}-${item?.id}`}
            gramData={item}
          />
        );
      case "form-fields.form":
        return (
          <GlobalForm
            key={`global-form-${item?.__component}-${item?.id}`}
            form={item?.form}
          />
        );
      case "case-study.partner-section":
        return (
          <ClientPartnership
            key={`partner-section-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "about-us.content-showcase-section-list":
        return (
          <ContentShowcaseSection
            key={`content-showcase-section-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "about-us.map-section-list":
        return (
          <MapSection
            key={`map-section-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "about-us.our-story-list":
        return (
          <OurStory
            key={`our-story-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "about-us.people-showcase-list":
        return (
          <PeopleShowcaseSection
            key={`people-showcase-section-${item?.__component}-${item?.id}`}
            list={item}
          />
        );
      case "about-us.stats-section":
        return (
          <StatsSection
            key={`stats-section-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "about-us.media-slider-section":
        return (
          <MediaSliderSection
            key={`media-slider-section-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "career.mansonry-gallery-section":
        return (
          <MasonryGallerySection
            key={`mansonry-gallery-section-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "about-us.achievement-section":
        return (
          <AchievementSection
            key={`achievement-section-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "demo-page.demo-list":
        return (
          <LiveDemoList
            key={`live-demo-list-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "not-found.not-found":
        return (
          <NotFound
            key={`not-found-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "career.career-build-data":
        return (
          <PanchatattvaSection
            key={`build-connect-${item?.__component}-${item?.id}`}
            buildData={item}
          />
        );
      case "career.open-jobs":
        return (
          <OpenJobs
            key={`open-jobs-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "contact-us.news-letter":
        return (
          <ContactUsNewsletter
            key={`contact-us-newsletter-${item?.__component}-${item?.id}`}
            newsletterData={item}
          />
        );
      case "contact-us.our-office":
        return (
          <ContactUsOffice
            key={`contact-us-office-${item?.__component}-${item?.id}`}
            officesData={item}
          />
        );
      case "contact-us.contact-us-insight-list":
        return (
          <ContactUsInsight
            key={`contact-us-insights-section-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "contact-us.office-location-list":
        return (
          <ContactUsCorporate
            key={`contact-us-corporate-${item?.__component}-${item?.id}`}
            corporateData={item}
          />
        );
      case "contact-us.fixed-section": {
        return (
          <FixedFooter
            key={`contact-us-fixed-section-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      }
      case "contact-us.contact-us-form-section": {
        return (
          <ContactUsForm
            key={`contact-us-form-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      }
      case "demo-page.demo-partnership":
        return (
          <DemoPartnership
            key={`demo-partnership-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "demo-page.experts-section":
        return (
          <DemoExperts
            key={`demo-experts-${item?.__component}-${item?.id}`}
            data={item}
          />
        );
      case "demo-page.demo-opportunity":
        return (
          <DemoOpportunities
            key={`demo-opportunities-${item?.__component}-${item?.id}`}
            whyAttendData={item}
          />
        );
      case "demo-page.demo-demonstration":
        return (
          <DemoWhyAttend
            key={`demo-demonstration-${item?.__component}-${item?.id}`}
            whyAttendData={item}
          />
        );
      default:
        return;
    }
  });
};

export default GlobalPage;
