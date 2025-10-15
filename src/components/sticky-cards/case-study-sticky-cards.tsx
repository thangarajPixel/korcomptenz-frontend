"use client";
import StickyCards from "./sticky-cards";

export default function CaseStudyStickyCards({
  stickyCards,
}: {
  stickyCards: CaseStudyStickyCardsType;
}) {
  const componentProps: StickyCardsType = {
    ...stickyCards,
    list: stickyCards.list.map((item, index) => ({
      ...item,
      specificId: (index + 1).toString().padStart(3, '0'),
      title: item.heroSection.title,
      description: item.heroSection.description,
      buttonText: 'Korcomptenz',
      image: item.heroSection.image,
    })),
  };
  return <StickyCards stickyCards={componentProps} />;
}
