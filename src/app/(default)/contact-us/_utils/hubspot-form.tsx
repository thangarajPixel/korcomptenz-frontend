"use client";
import Script from "next/script";

export function HubspotForm() {
  return (
    <>
      <div id="hubspot-form-contact" />
      <Script
        src="https://js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              portalId: "7991245",
              formId: "e9aef274-b3b1-4a7b-9859-fbc8dac67d19",
              region: "na1",
              target: "#hubspot-form-contact",
            });
          }
        }}
      />
    </>
  );
}
