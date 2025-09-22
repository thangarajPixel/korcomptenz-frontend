"use client";

import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

import { jsonData } from "@/utils/helper";
import ScheduleCall from "@/components/layout/_utils/schedule";
import {
  FacebookIcon,
  Footerlogo,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../../../public/svg/all-svg";

type SocialIcons = {
  id: number;
  key: string;
  icon: React.ReactNode;
  href: string;
};

export const socialIcons: SocialIcons[] = [
  {
    id: 1,
    key: "linkedin",
    icon: <LinkedinIcon />,
    href: "#",
  },
  {
    id: 2,
    key: "youtube",
    icon: <YoutubeIcon />,
    href: "#",
  },
  {
    id: 3,
    key: "facebook",
    icon: <FacebookIcon />,
    href: "#",
  },
  {
    id: 4,
    key: "instagram",
    icon: <InstagramIcon />,
    href: "#",
  },
  {
    id: 5,
    key: "twitter",
    icon: <TwitterIcon />,
    href: "#",
  },
];

export const Footer = () => {
  const address = jsonData.footer.address;
  const footer = jsonData.footer;

  return (
    <footer className="bg-foreground text-white mt-8">
      <ScheduleCall />
      <div className="container-md py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 mb-2">
                <Footerlogo />
              </div>
            </div>
            <div className="text-custom-gray-3 text-lg space-y-1">
              <p>{address.line1}</p>
              <p>{address.line2}</p>
              <p>{address.line3}</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-2 pt-4">
              {socialIcons.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-8 h-8 rounded-lg flex items-center justify-center cursor-not-allowed"
                >
                  {/* <social.icon className="w-5 h-5" /> */}
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-primary font-semibold text-3xl  border-b border-primary  pb-2">
              {jsonData?.servicemenu?.title}
            </h3>
            <ul className="space-y-3">
              {jsonData.servicemenu.sections.map((service) => (
                <li key={service.id}>
                  <Link
                    href="#"
                    className="text-light-white hover:text-primary font-semibold text-lg transition-all duration-300 block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-primary font-semibold text-3xl border-b border-primary pb-2">
              {jsonData?.industriesmenu?.heading}
            </h3>
            <ul className="space-y-3">
              {jsonData?.industriesmenu?.columns
                ?.flatMap((col) => col.sections.map((section) => section.title))
                .map((industry) => (
                  <li key={industry}>
                    <Link
                      href="#"
                      className="text-light-white  hover:text-primary   font-semibold text-lg transition-all duration-300 block"
                    >
                      {industry}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Insights */}
          <div className="space-y-4">
            <h3 className="text-primary font-semibold text-3xl border-b border-primary pb-2">
              {jsonData?.insightsmenu?.title}
            </h3>
            <ul className="space-y-3">
              {jsonData?.insightsmenu?.categories.map((insight) => (
                <li key={insight.id}>
                  <Link
                    href="#"
                    className="text-light-white  hover:text-primary   font-semibold text-lg transition-all duration-300 block"
                  >
                    {insight.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Links */}
          <div className="space-y-4 md:mt-5 lg:mt-0 flex flex-col justify-around">
            {/* Success Stories */}
            <div>
              <Link
                href="#"
                className="flex items-center justify-between space-x-2 group"
              >
                <h3 className="text-primary font-semibold text-3xl  transition-all duration-300">
                  Success Stories
                </h3>
                <ChevronRight className="w-4 h-4 text-primary rounded-full" />
              </Link>
            </div>

            {/* Careers */}
            <div>
              <Link
                href="#"
                className="flex items-center justify-between space-x-2 group"
              >
                <h3 className="text-primary font-semibold text-3xl  transition-all duration-300">
                  Careers
                </h3>
                <ChevronRight className="w-4 h-4 text-primary rounded-full" />
              </Link>
            </div>

            {/* Contact */}
            <div>
              <Link
                href="#"
                className="flex items-center justify-between space-x-2 group"
              >
                <h3 className="text-primary font-semibold  text-3xl transition-all duration-300">
                  Contact us
                </h3>
                <ChevronRight className="w-4 h-4 text-primary rounded-full" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* About Us */}
            <section className="space-y-4" id="About">
              <h4 className="text-primary font-semibold border-b border-primary text-3xl pb-2">
                {jsonData?.aboutmenu?.aboutUs?.title}
              </h4>

              <h4 className="font-semibold text-lg">Who we are</h4>

              {/* Gray items */}
              <ul className="space-y-2">
                {footer.aboutUs.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-custom-gray-2 text-lg hover:text-primary font-normal transition-all duration-300 block"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Bold items */}
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

            {/* Ecosystems - Microsoft */}
            <section className="md:col-span-2 lg:col-span-4">
              <h4 className="text-primary font-semibold border-b border-primary text-3xl pb-2">
                Ecosystems
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
                {jsonData?.ecosystemmenu?.sidebar?.map((menu) =>
                  menu.items
                    ?.filter((item) => item.child && item.child.length > 0)
                    .map((item, idx) => (
                      <div className="space-y-4" key={`${menu.id}-${idx}`}>
                        <h4 className="font-semibold text-lg">{item.title}</h4>

                        <ul className="space-y-2">
                          {item.child.map((childItem, i) => (
                            <li key={i}>
                              <Link
                                href="#"
                                className="text-custom-gray-2 text-lg hover:text-primary font-normal transition-all duration-300 block"
                              >
                                {childItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                )}
              </div>
            </section>
          </div>
        </div>

        {/* Copyright */}
        <div className="hidden mt-8 pt-6 border-t border-slate-700 lg:flex flex-row items-center justify-between">
          <p className="text-custom-gray-2 text-lg">{footer.copyright}</p>
          <div>
            {footer.policies.map((policy) => (
              <Link
                key={policy}
                href="#"
                className="text-custom-gray-2 text-lg mx-2"
              >
                {policy}
              </Link>
            ))}
          </div>

          {/* Right side: copyright */}
        </div>

        {/* Mobile Copyright */}
        <div className=" mt-8  lg:hidden  flex-col  items-center">
          <div className="flex justify-center  pb-4">
            {footer.policies.map((policy) => (
              <Link
                key={policy}
                href="#"
                className="text-custom-gray-2  text-xs border-r-1 border-custom-gray-3 mx-2 last:border-0 pr-2"
              >
                {policy}
              </Link>
            ))}
          </div>
          <div className="flex justify-center pt-4 border-t-1   border-custom-gray-3">
            <p className="text-custom-gray-2 text-xs  ">{footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
