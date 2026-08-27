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
              formId: "ac9fb068-c0c9-435f-bd61-65f599391155",
              region: "na1",
              target: "#hubspot-form",
            });
          }
        }}
      />
    </>
  );
}
