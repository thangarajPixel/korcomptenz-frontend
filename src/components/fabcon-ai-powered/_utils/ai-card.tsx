"use client";

import React, { useState } from "react";
import KorcomptenzImage from "@/components/korcomptenz-image";
import ButtonLink from "@/components/ui/button-link";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { cn } from "@/lib/utils";
import { RecaptchaProvider } from "@/components/providers/recaptcha-provider";
import RPAPageForm from "./rpa-popup";

const AiCard = ({
  card,
  isLastOdd = false,
  isSingle = false,
}: {
  card: AiCardType;
  isLastOdd?: boolean;
  isSingle?: boolean;
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const isFormEnabled = Boolean(card?.isForm);
  const fallbackFormData: RPAPageFormType = {
    title: card?.title || "",
    fullNameLabel: "Full Name",
    businessEmailLabel: "Business Email",
    phoneNumberLabel: "Phone Number",
    organizationLabel: "Organization",
    messageLabel: "Message",
    buttonLabel: "Submit",
    pageSlug: "",
  };
  const formData: RPAPageFormType =
    card?.form?.forms?.[0] || fallbackFormData;
  const openPopup = () => {
    setIsPopupOpen(true);
  };
  const closePopup = () => {

    setIsPopupOpen(false);
  };
  const renderButton = () => {
    if (isFormEnabled) {
      return (
        <button type="button" onClick={openPopup}>
          <ButtonLink
            link="#"
            buttonProps={{
              size: "xl",
              arrow: true,
            }}
          >
            {card?.buttonText}
          </ButtonLink>
        </button>
      );
    }
    return (
      <ButtonLink
        link={card?.buttonLink || "#"}
        isTargetNew={card?.isTarget}
        buttonProps={{
          size: "xl",
          arrow: true,
        }}
      >
        {card?.buttonText}
      </ButtonLink>
    );
  };
  return (
    <>
      <div
        className={cn(
          "rounded-3xl bg-white p-4 md:p-2 shadow-sm w-full",
          isLastOdd && "md:col-span-2",
        )}
      >
        {isSingle ? (
          <div className="grid grid-cols-1 md:grid-cols-[3fr_7fr_2fr] gap-6 items-stretch">
            <div className="flex items-start justify-start">
              <KorcomptenzImage
                src={card?.image}
                width={280}
                height={280}
                className="flex-shrink-0"
              />
            </div>
            <div className="flex flex-col justify-center gap-3">
              {card?.title && (
                <h3
                  className="
                  bg-gradient-to-r 
                  from-[#1F849F] 
                  to-[#6AC494]
                  bg-clip-text 
                  text-transparent 
                  text-2xl 
                  md:text-[26px]
                  font-semibold"
                >
                  {card?.title}
                </h3>
              )}
              <DangerousHtml
                html={card?.description}
                className="text-md md:text-lg leading-7.5 text-[#020202]"
              />
            </div>
            <div className="flex justify-start md:justify-end md:items-end">
              {renderButton()}
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="hidden md:block shrink-0">
                <KorcomptenzImage
                  src={card?.image}
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </div>
              <div className="block md:hidden">
                <KorcomptenzImage
                  src={card?.image}
                  width={200}
                  height={150}
                  className="w-[250px] h-[180px] object-contain"
                />
              </div>
              {card?.title && (
                <h3
                  className="
                  bg-gradient-to-r
                  from-[#1F849F]
                  to-[#6AC494]
                  bg-clip-text
                  text-transparent
                  text-2xl
                  md:text-[26px]
                  font-semibold"
                >
                  {card?.title}

                </h3>
              )}
            </div>
            <div className="mt-3">
              <DangerousHtml
                html={card?.description}
                className="text-md md:text-lg leading-7.5 text-[#020202] md:px-4"
              />
            </div>
            <div className="my-6 md:px-4">
              {renderButton()}
            </div>
          </>
        )}
      </div>
      {isFormEnabled && (
        <RecaptchaProvider>
          <RPAPageForm
            essential={formData}
            isOpen={isPopupOpen}
            onClose={closePopup}
            formTitle={card?.formTitle || undefined}
            formDescription={card?.formDescription || undefined}
            emailSubject={card?.emailSubject || undefined}
            emailBody={card?.emailBody || undefined}
            downloadContent={card?.downloadContent || undefined}
          />
        </RecaptchaProvider>
      )}
    </>
  );
};

export default AiCard;