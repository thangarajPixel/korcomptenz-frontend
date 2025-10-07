"use client";
import StickyCards from "./sticky-cards";

export default function CaseStudyStickyCards({
  stickyCards,
}: {
  stickyCards: CaseStudyStickyCardsType;
}) {
  const componentProps: StickyCardsType = {
    ...stickyCards,
    list: stickyCards.list.map((item) => ({
      ...item,
      specificId: item.id,
      title: item.heroSection.title,
      description: item.heroSection.description,
      buttonText: 'Korcomptenz',
      image: item.heroSection.image,
    })),
  };
  return <StickyCards stickyCards={componentProps} />;
}
