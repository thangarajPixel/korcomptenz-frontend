"use client";

import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

import { jsonData } from "@/utils/helper";
import ScheduleCall from "@/components/layout/_utils/schedule";
import KorcomptenzImage from "@/components/korcomptenz-image";
import FooterTitle from "./footer-title";
import FooterDescription from "./footer-description";

export const Footer = ({ data }: { data: LayoutType }) => {
  const { footer } = jsonData;

  return (
    <footer className="bg-foreground text-white mt-8">
      <ScheduleCall scheduleCall={data?.scheduleCall} />

      <div className="container-md py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <CompanyInfo data={data.company} />

          {/* Services */}
          <FooterLinksGroup
            title={jsonData.servicemenu?.title}
            items={jsonData.servicemenu.sections.map((s) => ({
              id: s.id,
              label: s.title,
            }))}
          />

          {/* Industries */}
          <FooterLinksGroup
            title={jsonData.industriesmenu?.heading}
            items={jsonData.industriesmenu.columns.flatMap((col) =>
              col.sections.map((s) => ({ id: s.title, label: s.title }))
            )}
          />

          {/* Insights */}
          <FooterLinksGroup
            title={jsonData.insightsmenu?.title}
            items={jsonData.insightsmenu.categories.map((c) => ({
              id: c.id,
              label: c.title,
            }))}
          />

          {/* Quick Links */}
          <QuickLinks />
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* About Us */}
            <AboutSection footer={footer} />

            {/* Ecosystems */}
            <EcosystemSection />
          </div>
        </div>

        {/* Copyright */}
        <CopyrightSection footer={footer} />
      </div>
    </footer>
  );
};

/* ---------------------- Sub Components ---------------------- */

const CompanyInfo = ({ data }: { data: LayoutType["company"] }) => (
  <div className="space-y-4">
    <div className="mb-2">
      <KorcomptenzImage src={data.companyDarkLogo} width={160} height={40} />
    </div>

    <div className="text-custom-gray-3 text-lg whitespace-pre-wrap">
      <p>{data.address}</p>
    </div>

    <div className="flex space-x-2 pt-4">
      {data.socialPlatforms.map((social) => (
        <Link
          key={social.id}
          href={social.link}
          className="w-8 h-8 rounded-lg flex items-center justify-center"
        >
          <KorcomptenzImage src={social.icon} width={20} height={20} />
        </Link>
      ))}
    </div>
  </div>
);

const FooterLinksGroup = ({
  title,
  items,
}: {
  title?: string;
  items: { id: string | number; label: string }[];
}) =>
  title ? (
    <FooterTitle title={title}>
      {items.map((item) => (
        <FooterDescription key={item.id} link="#">
          {item.label}
        </FooterDescription>
      ))}
    </FooterTitle>
  ) : null;

const QuickLinks = () => {
  const links = ["Success Stories", "Careers", "Contact us"];
  return (
    <div className="space-y-4 md:mt-5 lg:mt-0 flex flex-col justify-around">
      {links.map((label) => (
        <Link
          key={label}
          href="#"
          className="flex items-center justify-between group"
        >
          <h3 className="text-primary font-semibold text-3xl transition-all duration-300">
            {label}
          </h3>
          <ChevronRight className="w-4 h-4 text-primary rounded-full" />
        </Link>
      ))}
    </div>
  );
};

const AboutSection = ({ footer }: { footer: typeof jsonData.footer }) => (
  <section className="space-y-4" id="About">
    <h4 className="text-primary font-semibold border-b border-primary text-3xl pb-2">
      {jsonData?.aboutmenu?.aboutUs?.title}
    </h4>

    <h4 className="font-semibold text-lg">Who we are</h4>

    <ul className="space-y-2">
      {footer.aboutUs.map((item) => (
        <li key={item}>
          <Link
            href="#"
            className="text-custom-gray-2 text-lg hover:text-primary transition-all duration-300"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>

    <ul className="space-y-2">
      {footer.aboutUsNew.map((item) => (
        <li key={item}>
          <Link href="#" className="font-semibold text-lg">
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

const EcosystemSection = () => (
  <section className="md:col-span-2 lg:col-span-4">
    <h4 className="text-primary font-semibold border-b border-primary text-3xl pb-2">
      Ecosystems
    </h4>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
      {jsonData.ecosystemmenu.sidebar.flatMap((menu) =>
        menu.items
          ?.filter((item) => item.child?.length)
          .map((item, idx) => (
            <div className="space-y-4" key={`${menu.id}-${idx}`}>
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <ul className="space-y-2">
                {item.child.map((child, i) => (
                  <li key={i}>
                    <Link
                      href="#"
                      className="text-custom-gray-2 text-lg hover:text-primary transition-all duration-300"
                    >
                      {child.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))
      )}
    </div>
  </section>
);

const CopyrightSection = ({ footer }: { footer: typeof jsonData.footer }) => (
  <>
    {/* Desktop */}
    <div className="hidden mt-8 pt-6 border-t border-slate-700 lg:flex items-center justify-between">
      <p className="text-custom-gray-2 text-lg">{footer.copyright}</p>
      <div>
        {footer.policies.map((policy) => (
          <Link key={policy} href="#" className="text-custom-gray-2 text-lg mx-2">
            {policy}
          </Link>
        ))}
      </div>
    </div>

    {/* Mobile */}
    <div className="mt-8 lg:hidden flex flex-col items-center">
      <div className="flex justify-center pb-4">
        {footer.policies.map((policy, i) => (
          <Link
            key={policy}
            href="#"
            className={`text-custom-gray-2 text-xs mx-2 ${i < footer.policies.length - 1 ? "border-r pr-2 border-custom-gray-3" : ""
              }`}
          >
            {policy}
          </Link>
        ))}
      </div>
      <div className="flex justify-center pt-4 border-t border-custom-gray-3">
        <p className="text-custom-gray-2 text-xs">{footer.copyright}</p>
      </div>
    </div>
  </>
);
