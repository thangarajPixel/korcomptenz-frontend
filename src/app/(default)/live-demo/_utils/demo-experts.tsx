import KorcomptenzImage from "@/components/korcomptenz-image";
import { DangerousHtml } from "@/components/ui/dangerous-html";

export default function DemoExperts({ data }: { data: ExpertsSectionType }) {
  return (
    <section className="container-md rounded-4xl p-8">
      <h5 className="text-7xl font-semibold mb-12 text-balance text-center text-black">
        {data?.title}
      </h5>

      <div
        className={`grid gap-12 justify-items-center ${
          data?.list?.length === 1
            ? "grid-cols-1 justify-center mx-auto max-w-3xl"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {data?.list?.map((partner, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <KorcomptenzImage
              src={partner?.image}
              width={200}
              height={200}
              className="object-contain"
            />
            <h2 className="text-2xl font-semibold text-muted">
              {partner?.title}
            </h2>
            <DangerousHtml html={partner?.description} className="text-muted" />
          </div>
        ))}
      </div>
    </section>
  );
}
