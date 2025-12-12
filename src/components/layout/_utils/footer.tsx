"use client";

import Link from "next/link";

import { ChevronRight } from "lucide-react";

import KorcomptenzImage from "@/components/korcomptenz-image";
import FooterTitle from "./footer-title";
import FooterDescription from "./footer-description";

export const Footer = ({ data }: { data: LayoutType }) => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container-md py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <CompanyInfo data={data.company} />

          {/* Services */}
          <FooterLinksGroup
            title={
              data?.navItems?.find((item) => item?.childKey === "serviceMenu")
                ?.label
            }
            items={data?.serviceMenu.map((s) => ({
              id: s?.id,
              label: s?.title,
              href: s?.href?.slug || "#",
            }))}
          />

          {/* Industries */}
          <FooterLinksGroup
            title={
              data?.navItems?.find(
                (item) => item?.childKey === "industriesMenu"
              )?.label
            }
            items={data?.industriesMenu.flatMap((col) =>
              col.sections.map((s) => ({
                id: s?.id,
                label: s?.title,
                href: s?.href?.slug || "#",
              }))
            )}
          />

          {/* Insights */}
          <FooterLinksGroup
            title={
              data?.navItems?.find((item) => item?.childKey === "insightMenu")
                ?.label
            }
            items={data?.insightMenu.categories.map((c) => ({
              id: c?.id,
              label: c?.title,
              href: c?.link || "#",
            }))}
          />

          {/* Quick Links */}
          <QuickLinks data={data} />
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* About Us */}
            <AboutSection data={data} />

            {/* Ecosystems */}
            <EcosystemSection data={data} />
          </div>
        </div>

        {/* Copyright */}
        <CopyrightSection data={data} />
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
      {data?.socialPlatforms?.map((social) => (
        <Link
          key={social.id}
          href={social?.href || "#"}
          className="w-8 h-8 rounded-lg flex items-center justify-center"
        >
          <KorcomptenzImage
            src={social.icon}
            width={20}
            height={20}
            placeholder="empty"
          />
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
  items: { id: string | number; label: string; href: string | null }[];
}) =>
  title ? (
    <FooterTitle title={title}>
      {items.map((item) => (
        <FooterDescription key={item.id} link={item?.href || "/"}>
          {item.label}
        </FooterDescription>
      ))}
    </FooterTitle>
  ) : null;

const QuickLinks = ({ data }: { data: LayoutType }) => {
  const links = data?.navItems.filter((item) => !item?.hasChild) || [];

  return (
    <div className="space-y-4 md:mt-5 lg:mt-0 flex flex-col justify-between">
      {links.map((label) => (
        <Link
          key={label.label}
          href={label?.href || "#"}
          className="flex items-center justify-between group"
        >
          <h3 className="text-primary font-semibold text-3xl transition-all duration-300">
            {label.label}
          </h3>
          <ChevronRight className="w-4 h-4 text-primary rounded-full" />
        </Link>
      ))}
    </div>
  );
};

const AboutSection = ({ data }: { data: LayoutType }) => (
  <section className="space-y-4" id="About">
    <h4 className="text-primary font-semibold border-b border-primary text-3xl pb-2">
      {data?.aboutMenu?.title || "About Us"}
    </h4>

    <h4 className="font-semibold text-lg">
      {data?.aboutMenu?.whoWeAre?.title}
    </h4>

    <ul className="space-y-2">
      {data?.aboutMenu?.navigationItems?.map((item) => (
        <li key={item?.id}>
          <Link
            href={item?.link || "#"}
            className="text-custom-gray-2 text-lg hover:text-primary transition-all duration-300"
          >
            {item?.title}
          </Link>
        </li>
      ))}
    </ul>

    <ul className="space-y-2">
      {data?.aboutMenu?.sidebarSections.map((item) => (
        <li key={item?.id}>
          <Link href={item?.link || "#"} className="font-semibold text-lg">
            {item?.title}
          </Link>
        </li>
      ))}
    </ul>
  </section>
);

const EcosystemSection = ({ data }: { data: LayoutType }) => (
  <section className="md:col-span-2 lg:col-span-4">
    <h4 className="text-primary font-semibold border-b border-primary text-3xl pb-2">
      {
        data?.navItems?.find((item) => item?.childKey === "ecosystemMenu")
          ?.label
      }
    </h4>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
      {data?.ecosystemMenu?.map((menu) => {
        const item = menu?.item;
        if (!item?.child?.length) return null;
        return (
          <div className="space-y-4" key={menu?.id}>
            <h4 className="font-semibold text-lg">{item?.title}</h4>
            <ul className="space-y-2">
              {item?.child?.map((child, i) => (
                <li key={i}>
                  <Link
                    href={child?.href?.slug || "#"}
                    className="text-custom-gray-2 text-lg hover:text-primary transition-all duration-300"
                  >
                    {child?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  </section>
);

const CopyrightSection = ({ data }: { data: LayoutType }) => (
  <>
    {/* Desktop */}
    {/* <div className="hidden mt-8 pt-6 border-t border-slate-700 lg:flex items-center justify-between">
      <p className="text-custom-gray-2 text-lg">{data?.company?.copyrights}</p>
      <div>
        {data?.company?.policy?.map((policy) => (
          <Link
            key={`policy-${policy?.id}`}
            href={policy?.link || "/"}
            className="text-custom-gray-2 text-lg mx-2"
          >
            {policy?.label}
          </Link>
        ))}
      </div>
    </div> */}

    {/* Mobile */}
    <div className="mt-8 lg:hidden flex flex-col items-center">
      <div className="flex justify-center pb-4">
        {data?.company?.policy?.map((policy, i) => (
          <Link
            key={`policy-${policy?.id}`}
            href={policy?.link || "#"}
            className={`text-custom-gray-2 text-xs mx-2 ${
              i < data?.company?.policy?.length - 1
                ? "border-r pr-2 border-custom-gray-3"
                : ""
            }`}
          >
            {policy?.label || " Privacy Policy"}
          </Link>
        ))}
      </div>
      <div className="flex justify-center pt-4 border-t border-custom-gray-3">
        <p className="text-custom-gray-2 text-xs">
          {data?.company?.copyrights}
        </p>
      </div>
    </div>
  </>
);
