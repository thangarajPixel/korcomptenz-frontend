import React from "react";

import BlogBannerCard from "./_utils/blog-banner-card";

const BannerSection = ({
  BannerSectionData,
}: {
  BannerSectionData: HeroSection;
}) => {
  return (
    <section
      className="container-md mt-10"
      data-debug={"page-componets.banner-section-list"}
    >
      <BlogBannerCard data={BannerSectionData} />
    </section>
  );
};

export default BannerSection;
