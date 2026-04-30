"use client";

import { useEffect } from "react";

export default function TrackingLoader() {
  useEffect(() => {
    let loaded = false;

    const loadScripts = () => {
      if (loaded) return;
      loaded = true;

      // 🔹 Google Tag Manager
      const gtm = document.createElement("script");
      gtm.src = "https://www.googletagmanager.com/gtm.js?id=GTM-WDLSJSX";
      gtm.async = true;
      document.body.appendChild(gtm);

      // 🔹 HubSpot
      const hs = document.createElement("script");
      hs.src = "https://js.hs-scripts.com/7991245.js";
      hs.async = true;
      document.body.appendChild(hs);

      // 🔹 Mirabel
      const mirabel = document.createElement("script");
      mirabel.src =
        "https://mkmpages.korcomptenz.com/6666?isnew=1&pdn=mkmpages.korcomptenz.com";
      mirabel.async = true;
      document.body.appendChild(mirabel);

      // 🔹 AdRoll
      const adroll = document.createElement("script");
      adroll.src = "https://s.adroll.com/j/roundtrip.js";
      adroll.async = true;
      document.body.appendChild(adroll);
    };

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // 📱 Mobile → delay more (performance focus)
      window.addEventListener("scroll", loadScripts, { once: true });
      window.addEventListener("touchstart", loadScripts, { once: true });

      // fallback (late load)
      setTimeout(loadScripts, 10000); // 10 sec
    } else {
      // 💻 Desktop → faster tracking
      window.addEventListener("scroll", loadScripts, { once: true });
      window.addEventListener("click", loadScripts, { once: true });

      // fallback
      setTimeout(loadScripts, 5000); // 5 sec
    }
  }, []);

  return null;
}