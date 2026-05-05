import { cache } from "react";
import { getPrivacyPolicy } from "@/services/page";
import { DangerousHtml } from "@/components/ui/dangerous-html";
import { generatePageMetadata } from "@/utils/metadata";

const getCachePrivacyPolicy = cache(getPrivacyPolicy);

export async function generateMetadata() {
  try {
    const data = await getCachePrivacyPolicy();
    return generatePageMetadata({
      title: data?.seo?.title,
      description: data?.seo?.description,
      path: "/privacy-policy",
    });
  } catch {
    return generatePageMetadata({ path: "/privacy-policy" });
  }
}

const Page = async () => {
  try {
    const data = await getCachePrivacyPolicy();
    return (
      <article className="container-md py-16 md:py-24">
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
  } catch {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-destructive">Error loading page. Please try again later.</p>
      </div>
    );
  }
};

export default Page;
