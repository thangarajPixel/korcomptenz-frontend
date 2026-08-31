"use client";

import { useEffect } from "react";

export default function TrackingLoader() {
  // The Mirabel marketing script (mkmpages.korcomptenz.com) injects a
  // hidden tracking iframe (id="mrktFrame_...") itself — we don't control
  // its markup, so patch in the missing a11y title after the fact instead
  // of altering the 3rd-party script. Purely additive: src, position,
  // size, and behavior are untouched.
  useEffect(() => {
    const addTitle = (iframe: HTMLIFrameElement) => {
      if (!iframe.title) {
        iframe.title = "Mirabel marketing tracking frame";
      }
    };

    document
      .querySelectorAll<HTMLIFrameElement>('iframe[id^="mrktFrame"]')
      .forEach(addTitle);

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node instanceof HTMLIFrameElement && node.id?.startsWith("mrktFrame")) {
            addTitle(node);
          }
          node
            .querySelectorAll?.<HTMLIFrameElement>('iframe[id^="mrktFrame"]')
            .forEach(addTitle);
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let loaded = false;
    const isMobile = window.innerWidth < 768;

    const loadScripts = () => {
      if (loaded) return;
      loaded = true;

      // Stagger script injection to avoid saturating the network on mobile
      // Skip HubSpot on mobile — heavy chat widget (~150KB), not useful on small screens
      const scripts = isMobile
        ? [
          "https://www.googletagmanager.com/gtm.js?id=GTM-WDLSJSX",
          "https://mkmpages.korcomptenz.com/6666?isnew=1&pdn=mkmpages.korcomptenz.com",
          "https://s.adroll.com/j/roundtrip.js",
        ]
        : [
          "https://www.googletagmanager.com/gtm.js?id=GTM-WDLSJSX",
          "https://js.hs-scripts.com/7991245.js",
          "https://mkmpages.korcomptenz.com/6666?isnew=1&pdn=mkmpages.korcomptenz.com",
          "https://s.adroll.com/j/roundtrip.js",
        ];

      scripts.forEach((src, i) => {
        setTimeout(() => {
          const s = document.createElement("script");
          s.src = src;
          s.async = true;
          document.body.appendChild(s);
        }, i * 500);
      });
    };

    if (isMobile) {
      // Mobile: load after user interaction or when browser is idle
      const onInteraction = () => {
        window.removeEventListener("scroll", onInteraction);
        window.removeEventListener("touchstart", onInteraction);
        loadScripts();
      };
      window.addEventListener("scroll", onInteraction, { passive: true });
      window.addEventListener("touchstart", onInteraction, { passive: true });

      // Fallback: use requestIdleCallback if available, else 15s timeout
      if ("requestIdleCallback" in window) {
        requestIdleCallback(loadScripts, { timeout: 15000 });
      } else {
        setTimeout(loadScripts, 15000);
      }
    } else {
      // Desktop: load after first interaction
      const onInteraction = () => {
        window.removeEventListener("scroll", onInteraction);
        window.removeEventListener("click", onInteraction);
        loadScripts();
      };
      window.addEventListener("scroll", onInteraction, { passive: true });
      window.addEventListener("click", onInteraction);

      setTimeout(loadScripts, 5000);
    }
  }, []);

  return null;
}
