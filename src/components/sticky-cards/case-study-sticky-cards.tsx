"use client";
import StickyCards from "./sticky-cards";

export default function CaseStudyStickyCards({
  stickyCards,
}: {
  stickyCards: StickyCardsType;
}) {
  return <StickyCards stickyCards={stickyCards} />;
}
