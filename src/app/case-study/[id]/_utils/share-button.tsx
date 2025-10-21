"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Share2, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  FacebookIcon,
  InstragramIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../../../../public/svg/all-svg";

interface SocialLink {
  id: string;
  name: string;
  buildUrl: (pageUrl: string) => string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const defaultSocialLinks: SocialLink[] = [
  {
    id: "instragram",
    name: "Instragram",
    buildUrl: (pageUrl: string) =>
      `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        pageUrl
      )}`,
    icon: InstragramIcon,
  },
  {
    id: "youtube",
    name: "Youtube",
    buildUrl: (pageUrl: string) =>
      `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        pageUrl
      )}`,
    icon: YoutubeIcon,
  },

  {
    id: "linkedin",
    name: "LinkedIn",
    buildUrl: (pageUrl: string) =>
      `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        pageUrl
      )}`,
    icon: LinkedInIcon,
  },
  {
    id: "twitter",
    name: "Twitter",
    buildUrl: (pageUrl: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}`,
    icon: TwitterIcon,
  },
  {
    id: "facebook",
    name: "Facebook",
    buildUrl: (pageUrl: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        pageUrl
      )}`,
    icon: FacebookIcon,
  },
];

export function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const pageUrl =
    typeof window !== "undefined"
      ? window.location.href
      : "https://www.korcomptenz.com/";

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(pageUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative inline-block mb-10">
      {/* Share Trigger Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Share"
        className="flex items-center h-16 w-32 justify-center p-3 bg-white border-2 border-teal-500 text-teal-600 rounded-full hover:bg-teal-50 transition-colors duration-200"
      >
        Share <Share2 size={20} className="ms-2" />
      </Button>

      {/* Social Menu */}
      {isOpen && (
        <>
          <div className="absolute top-full mt-3 left-0 p-3 z-50 min-w-max">
            <div className="flex gap-3">
              {defaultSocialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.buildUrl(pageUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.name}
                  className="flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-full transition-colors duration-150"
                >
                  <link.icon />
                </Link>
              ))}

              {/* Copy Link Button */}
              <button
                onClick={handleCopyLink}
                className="flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-full transition-colors duration-150"
                title="Copy link"
                aria-label="Copy link"
              >
                <Copy
                  size={20}
                  className={copied ? "text-primary" : "text-gray-700"}
                />
              </button>
            </div>

            {/* Copy Feedback */}
            {copied && (
              <p className="text-xs text-primary mt-2 text-center">
                Link copied!
              </p>
            )}
          </div>

          {/* Overlay click to close */}
          <div
            className="fixed inset-0 z-40 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </>
      )}
    </div>
  );
}
