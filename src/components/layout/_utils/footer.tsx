'use client';

import Link from 'next/link'
import React from 'react'
import { ChevronRight } from "lucide-react"
import KorcomptenzImage from '@/components/korcomptenz-image';
import { jsonData } from '@/utils/helper'
import ScheduleCall from '@/components/layout/_utils/schedule';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '../../../../public/svg/all-svg';

type SocialIcons = {
  id: number;
  key: string;
  icon: React.ReactNode;
  href: string;
}

export const socialIcons: SocialIcons[] = [
  {
    id: 1,
    key: 'linkedin',
    icon: <LinkedinIcon />,
    href: '#',
  },
  {
    id: 2,
    key: 'youtube',
    icon: <YoutubeIcon />,
    href: '#',
  },
  {
    id: 3,
    key: 'facebook',
    icon: <FacebookIcon />,
    href: '#',
  },
  {
    id: 4,
    key: 'instagram',
    icon: <InstagramIcon />,
    href: '#',
  },
  {
    id: 5,
    key: 'twitter',
    icon: <TwitterIcon />,
    href: '#',
  },
];

export const Footer = () => {

  const companyName = jsonData.header.companyDetail.name;
  const address = jsonData.footer.address
  const footer = jsonData.footer


  return (
    <footer className="bg-foreground text-white mt-2">
      <ScheduleCall />
      <div className="container-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 mb-2">
                <KorcomptenzImage src="/assets/logo.png" alt="Logo" width={44} height={44} />
              </div>
              <span className="text-2xl font-bold">{companyName}</span>
            </div>
            <div className="text-slate-300 text-sm space-y-1">
              <p>{address.line1}</p>
              <p>{address.line2}</p>
              <p>{address.line3}</p>
            </div>

            {/* Social Media Icons */}
            {/* <div className="flex space-x-4 pt-4">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Instagram, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-teal-500 hover:scale-110 hover:shadow-lg"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div> */}
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
            <h3 className="text-teal-400 font-semibold text-md border-b border-teal-400 pb-2">Services</h3>
            <ul className="space-y-3">
              {footer.services.map(
                (service) => (
                  <li key={service}>
                    <Link
                      href="#"
                      className="text-[#F3F7F4] font-semibold hover:text-teal-400 hover:translate-x-2 text-base transition-all duration-300 block"
                    >
                      {service}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Industries */}
          <div className="space-y-4">
            <h3 className="text-teal-400 font-semibold text-md border-b border-teal-400 pb-2">Industries</h3>
            <ul className="space-y-3">
              {footer.industries.map(
                (industry) => (
                  <li key={industry}>
                    <Link
                      href="#"
                      className="text-[#F3F7F4] font-semibold hover:text-teal-400 text-base hover:translate-x-2 transition-all duration-300 block"
                    >
                      {industry}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Insights */}
          <div className="space-y-4">
            <h3 className="text-teal-400 font-semibold text-md border-b border-teal-400 pb-2">Insights</h3>
            <ul className="space-y-3">
              {footer.insights.map(
                (insight) => (
                  <li key={insight}>
                    <Link
                      href="#"
                      className="text-[#F3F7F4] font-semibold text-base hover:text-teal-400 hover:translate-x-2 transition-all duration-300 block"
                    >
                      {insight}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Additional Links */}
        <div className="space-y-4 md:mt-5 lg:mt-0 flex flex-col justify-around">
            {/* Success Stories */}
            <div>
              <Link href="#" className="flex items-center justify-between space-x-2 group">
                <h3 className="text-teal-400 font-semibold text-md group-hover:text-teal-300 group-hover:translate-x-1 transition-all duration-300">
                  Success Stories
                </h3>
                <ChevronRight className="w-4 h-4 text-teal-400 group-hover:text-teal-300 transition-all duration-300 hover:border border-teal-400 rounded-full" />
              </Link>
            </div>

            {/* Careers */}
            <div>
              <Link href="#" className="flex items-center justify-between space-x-2 group">
                <h3 className="text-teal-400 font-semibold text-md group-hover:text-teal-300 group-hover:translate-x-1 transition-all duration-300">
                  Careers
                </h3>
                <ChevronRight className="w-4 h-4 text-teal-400 hover:border border-teal-400 rounded-full" />
              </Link>
            </div>

            {/* Contact */}
            <div>
              <Link href="#" className="flex items-center justify-between space-x-2 group">
                <h3 className="text-teal-400 font-semibold group-hover:text-teal-300 group-hover:translate-x-1 text-md transition-all duration-300">
                  Contact us
                </h3>
                <ChevronRight className="w-4 h-4 text-teal-400 group-hover:text-teal-300 transition-all duration-300 hover:border border-teal-400 rounded-full" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* About Us */}
            <section className="space-y-4" id="About">
              <h4 className="text-teal-400 font-semibold border-b border-teal-400 text-md pb-2">About Us</h4>
              <h4 className="font-semibold text-base">Who we are</h4>
              <ul className="space-y-2">
                {footer.aboutUs.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-base"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2">
                {footer.aboutUsNew.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="font-semibold hover:text-teal-400 text transition-colors duration-300 "
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            {/* Ecosystems - Microsoft */}
            <section className='md:col-span-2 lg:col-span-4' >
              <h4 className="text-teal-400 font-semibold border-b border-teal-400 text-md pb-2">Ecosystems</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-4">
                <div className="space-y-4">
                  <ul className="space-y-2">
                    <li><h4 className="font-semibold">Microsoft</h4></li>
                    {footer.ecoSystems.microsoft.map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-base"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SAP */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-base">SAP</h4>
                  <ul className="space-y-2">
                    {footer.ecoSystems.sap.map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-base"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Salesforce */}
                <div className="space-y-4">
                  <h4 className="font-semibold">Salesforce</h4>
                  <ul className="space-y-2">
                    {footer.ecoSystems.salesforce.map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-base"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <ul className="space-y-2 lg:mt-10">
                    {footer.ecoSystems.salesforceNew.map((item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-base"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </section>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-700 flex flex-col gap-3 sm:gap-0 sm:flex-row items-center justify-between">
          <p className="text-slate-400 text-base ">{footer.copyright}</p>
          <div>
            {footer.policies.map((policy) => (
              <Link
                key={policy}
                href="#"
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300 text-base mx-2"
              >
                {policy}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
