import { cache } from "react";
import { getPrivacyPolicy } from "@/services/page";
import { DangerousHtml } from "@/components/ui/dangerous-html";

const getCachePrivacyPolicy = cache(getPrivacyPolicy);

export async function generateMetadata() {
  const data = await getCachePrivacyPolicy();
  return {
    title: data?.seo?.title || "Privacy Policy",
    description: data?.seo?.description || "Privacy Policy",
  };
}

const Page = async () => {
  const data = await getCachePrivacyPolicy();
  return (
    <article className="container-md py-16 md:py-24">
      {/* Main Heading */}
      <h1 className="mb-8 text-4xl font-bold text-blue-900 md:text-5xl">
        {data?.title}
      </h1>
      {data?.description?.map((item, index) => (
        <section key={index} className="mb-8 space-y-4">
          {item.title && (
            <h2 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h2>
          )}
          <DangerousHtml html={item.description} />
        </section>
      ))}
    </article>
  );
};

export default Page;
