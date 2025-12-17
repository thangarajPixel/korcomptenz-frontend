"use client";
import { useState } from "react";
import Link from "next/link";
import { Link as LinkIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import KorcomptenzImage from "@/components/korcomptenz-image";

export function ShareButton({ data }: { data: SocialPlatformType[] }) {
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
  const articleUrl = window.location.href;
  // const prompt = `Visit this URL and summarize this post for me: ${articleUrl}`;
  const encodedPrompt = encodeURIComponent(articleUrl);
  return (
    <div className="relative inline-block mb-10 ">
      {/* Share Trigger Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Share"
        className="flex items-center text-3xl  w-32 justify-center p-3 bg-white  text-secondary rounded-xl hover:border-white hover:text-secondary "
      >
        Share{" "}
        <KorcomptenzImage
          src="/assets/Vector.png"
          alt="share"
          width={30}
          height={30}
        />
      </Button>

      {/* Social Menu */}
      {isOpen && (
        <>
          <div className="absolute top-full  mt-3 -left-25 md:-left-35 p-3 z-50 min-w-max">
            <div className="flex gap-3">
              {data?.map((link) => (
                <Link
                  key={link.id}
                  href={`${link?.link}${encodedPrompt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={link.label}
                  className="flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-full transition-colors duration-150"
                >
                  <KorcomptenzImage src={link?.icon} width={25} height={25} />
                </Link>
              ))}

              {/* Copy Link Button */}
              <button
                onClick={handleCopyLink}
                className="flex items-center justify-center w-10 h-10 hover:bg-gray-100 rounded-full transition-colors duration-150"
                title="Copy link"
                aria-label="Copy link"
              >
                <LinkIcon size={20} strokeWidth={3} className={"text-black"} />
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
