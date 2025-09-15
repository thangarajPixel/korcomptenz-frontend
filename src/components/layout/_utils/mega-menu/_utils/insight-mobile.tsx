"use client";



const insightsData = {
  title: "Insights",
  heroImage: "/assets/menu/Insight-menu.png",
  categories: [
    {
      id: "whitepapers",
      title: "Whitepapers",
      description: "In-depth research and analysis",
    },
    {
      id: "blogs",
      title: "Blogs",
      description: "Latest industry thoughts and trends",
    },
    {
      id: "ebooks",
      title: "eBooks",
      description: "Comprehensive guides and resources",
    },
    {
      id: "infographics",
      title: "Infographics",
      description: "Visual data and insights",
    },
    {
      id: "brochures",
      title: "Brochures",
      description: "Product and service overviews",
    },
    {
      id: "webinars",
      title: "Webinars",
      description: "Live and recorded sessions",
    },
    {
      id: "podcasts",
      title: "Podcasts",
      description: "Audio content and discussions",
    },
  ],
};

const InsightMobile = () => {
  return (
    <div className="px-0">
      {insightsData.categories.map((cat) => (
        <div
          key={cat.id}
          className="w-full flex items-center justify-between p-2 text-left border-b border-gray-100"
        >
          <span className="text-sm text-custom-gray-4 font-normal">
            {cat.title}
          </span>
         
        </div>
      ))}
    </div>
  );
};

export default InsightMobile;
