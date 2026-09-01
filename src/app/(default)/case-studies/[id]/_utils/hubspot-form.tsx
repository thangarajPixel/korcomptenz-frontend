"use client";
import Script from "next/script";

export function HubspotForm() {
  return (
    <>
      <div id="hubspot-form-casestudy" />
      <Script
        src="https://js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              portalId: "7991245",
              formId: "89ae85c4-f137-4b8a-901d-fc3ab2e0f82e",
              region: "na1",
              target: "#hubspot-form-casestudy",
            });
          }
        }}
      />
    </>
  );
}
