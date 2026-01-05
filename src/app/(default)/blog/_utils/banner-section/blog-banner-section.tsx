import React from "react";

import BlogBannerCard from "./_utils/blog-banner-card";

const BannerSection = ({
  BannerSectionData,
  tableTitle,
}: {
  BannerSectionData: InsightItem;
  tableTitle: string;
}) => {
  return (
    <section
      className="container-md mt-10"
      data-debug={"page-componets.banner-section-list"}
    >
      <BlogBannerCard data={BannerSectionData} tableTitle={tableTitle} />
    </section>
  );
};

export default BannerSection;
