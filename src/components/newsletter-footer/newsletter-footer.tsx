import KorcomptenzImage from "../korcomptenz-image";
import RawHtmlEmbed from "@/components/ui/raw-html-embed";

export default function NewsLetterFooterSection({
  data,
}: NewsletterFooterProps) {
  return (
    <>
      {data?.title && (
        <div className="bg-foreground">
          <div className="max-w-7xl mx-auto px-1 md:px-10 py-10 md:py-4">
            <h2 className="text-white text-3xl md:text-5xl font-bold text-center">
              {data.title}
            </h2>
          </div>
        </div>
      )}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#F5F3F8] via-[#D8C3EA] to-[#8151BA] py-20">
        {/* Title */}

        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          {data?.logo && (
            <div className="mb-10">
              <KorcomptenzImage
                src={data?.logo}
                width={300}
                height={100}
                className=""
              />
            </div>
          )}
          {/* Expert Title */}
          {data?.expertTitle && (
            <h3 className="text-[#223354] text-4xl md:text-5xl font-semibold leading-tight max-w-3xl mb-8">
              {data.expertTitle}
            </h3>
          )}

          {data?.description && (
            <RawHtmlEmbed
              key="custom-description"
              html={data.description ?? ""}
            />
          )}
          {/* Date */}
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-white whitespace-nowrap">
              {data?.date}
            </span>

            <div className="h-px flex-1 bg-white/70" />
          </div>
        </div>
      </div>
    </>
  );
}
