import BookDemoSection from "./newsletter-footer-form";
import { RecaptchaProvider } from "@/components/providers/recaptcha-provider";
import KorcomptenzImage from "../korcomptenz-image";
import { DangerousHtml } from "../ui/dangerous-html";

export default function NewsLetterFooterSection({
  data,
}: NewsletterFooterProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F3F8] via-[#D8C3EA] to-[#8151BA] py-20">
      <div className="container-md">
        {/* Title */}

        <div className="max-w-4xl mx-auto">
          {data?.title && (
            <h2 className="text-left text-6xl md:text-5xl font-semibold text-[#223354] mb-20">
              {data.title}
            </h2>
          )}
          {/* Logo */}
          <div className="mb-10">
            <KorcomptenzImage
              src={data?.logo}
              width={300}
              height={100}
              className=""
            />
          </div>

          {/* Expert Title */}
          {data?.expertTitle && (
            <h3 className="text-[#223354] text-4xl md:text-5xl font-semibold leading-tight max-w-3xl mb-8">
              {data.expertTitle}
            </h3>
          )}

          {data?.description && (
            <DangerousHtml
              html={data?.description}
              className="text-md text-white md:text-5xl  leading-7.5 text-white  break-words mb-10"
            />
          )}

          {/* Form */}
          <div className="mb-10">
            <div className="bg-white rounded-3xl shadow-[0_0_50px_rgba(255,255,255,0.35)] p-8 md:p-10">
              <RecaptchaProvider>
                <BookDemoSection
                  essential={data?.form?.forms[0] as BookDemoFormType}
                />
              </RecaptchaProvider>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-white whitespace-nowrap">
              {data?.date}
            </span>

            <div className="h-px flex-1 bg-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
}
