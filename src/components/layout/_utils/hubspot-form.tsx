"use client";
import Script from "next/script";

export function HubspotForm() {
  return (
    <>
      <div id="hubspot-form" />
      <Script
        src="https://js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              portalId: "7991245",
              formId: "dcdc287c-b43a-4a82-ac25-b17fd0c17a08",
              region: "na1",
              target: "#hubspot-form",
            });
          }
        }}
      />
    </>
  );
}
