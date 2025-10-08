import KorcomptenzImage from "@/components/korcomptenz-image";
import Image from "next/image";

// Example showing how to use with external JSON data
interface data {
  badges: Array<{
    id: string;
    icon: string;
    title: string;
  }>;
  products: Array<{
    id: string;
    logo: string;
    alt: string;
  }>;
}
const data = {
  badges: [
    {
      id: "1",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/image_33_7c890874ad.png?updatedAt=2025-10-06T09%3A51%3A31.098Z",
      title: "Application Integration Solution Provider",
    },
    {
      id: "2",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/image_33_7c890874ad.png?updatedAt=2025-10-06T09%3A51%3A31.098Z",
      title: "Data Analytics Solutions Provider",
    },
    {
      id: "3",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/image_33_7c890874ad.png?updatedAt=2025-10-06T09%3A51%3A31.098Z",
      title: "Enterprise Resource Planning Solution Provider",
    },
    {
      id: "4",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/image_33_7c890874ad.png?updatedAt=2025-10-06T09%3A51%3A31.098Z",
      title: "Application Development Solutions Provider",
    },
    {
      id: "5",
      icon: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/image_33_7c890874ad.png?updatedAt=2025-10-06T09%3A51%3A31.098Z",
      title: "Cloud Platform Solutions Provider",
    },
  ],
  products: [
    {
      id: "1",
      logo: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/7_D2878_C6800_DB_092_D117_A5_A2_E23_DFB_6_F8_D3_A572_EDC_8_BE_077_DE_16_D0_EA_20_E2_BC_33_1_64c2ea59b2.png?updatedAt=2025-10-06T09%3A51%3A31.129Z",
      alt: "Microsoft Azure",
    },
    {
      id: "2",
      logo: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/17343_featured_225x127_1_a506eddded.png?updatedAt=2025-10-06T09%3A51%3A31.105Z",
      alt: "Dynamics 365",
    },
    {
      id: "3",
      logo: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/Group_26_2_1_73bd6f0b8b.png?updatedAt=2025-10-06T09%3A51%3A31.057Z",
      alt: "Power Platform",
    },
    {
      id: "4",
      logo: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/microsoft_copilot_1024_1_40a794b1e9.png?updatedAt=2025-10-06T09%3A51%3A31.020Z",
      alt: "Copilot",
    },
    {
      id: "5",
      logo: "https://aue2kormlworkspacetest01.blob.core.windows.net/pixelteam-datastorage/Fabric_transparent_logo_1_98af49f127.png?updatedAt=2025-10-06T09%3A51%3A31.009Z",
      alt: "Microsoft Fabric",
    },
  ],
};
export default function ClientPartnership() {
  return (
    <section className="container-lg">
      <h1 className="text-4xl  font-bold text-foreground mb-12 text-balance">
        Our partnership at a glance
      </h1>

      {/* Partner Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
        {data?.badges?.map((badge) => (
          <div key={badge.id} className="flex flex-col gap-4">
            <div className="w-12 h-12 relative flex-shrink-0">
              <KorcomptenzImage
                src={badge.icon || "/placeholder.svg"}
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <p className="text-lg leading-relaxed text-foreground font-normal">
              {badge.title}
            </p>
          </div>
        ))}
      </div>

      {/* Product Logos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {data?.products?.map((product) => (
          <div key={product.id} className="flex items-center justify-start">
            <div className="relative h-16 w-full max-w-[180px]">
              <Image
                src={product.logo || "/placeholder.svg"}
                alt={product.alt}
                width={180}
                height={60}
                className="object-contain object-left"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
