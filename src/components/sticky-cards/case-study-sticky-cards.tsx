"use client";
import StickyCards from "./sticky-cards";

export default function CaseStudyStickyCards({
  stickyCards,
}: {
  stickyCards: CaseStudyStickyCardsType;
}) {

  const compileData: StickyCardsType = {
    ...stickyCards,
    list: stickyCards.list.map((item, index) => ({
      ...item,
      specificId: (index + 1).toString().padStart(3, '0'),
      title: item.title || item.heroSection.title,
      description: item.heroSection.description,
      buttonText: item.heroSection?.buttonText,
      link: `/case-studies/${item.slug}`,
      image: item.heroSection.image,
    })),
  };

  return <StickyCards stickyCards={compileData} />;
}
