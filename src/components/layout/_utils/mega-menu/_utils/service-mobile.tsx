"use client";

import { useState } from "react";
import { ChevronLeft, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ChildItem {
  title: string;
  type: "light" | "dark";
  href?: {
    slug: string;
  };
  attachment: ImageType;
}

interface ServiceItem {
  title: string;
  side: "left" | "right";
  child: readonly ChildItem[];
  href?: {
    slug: string;
  };
}

interface Service {
  id: string;
  title: string;
  image: ImageType;
  items: readonly ServiceItem[];
}

// const SubmenuDrawer = ({
//   isOpen,
//   onClose,
//   submenuItem,
//   serviceName,
// }: SubmenuDrawerProps) => {
//   if (!isOpen || !submenuItem) return null;

//   return (
//     <div className="fixed inset-0 z-[60] lg:hidden">
//       <div className="fixed inset-0 bg-black/5">
//         <div className="flex items-center justify-between px-4 bg-white border-b border-gray-100 shadow-sm">
//           <div className="flex items-center">
//             <button
//               onClick={onClose}
//               className="mr-2 p-2 rounded-full hover:bg-gray-50 transition-colors"
//             >
//               <ArrowLeft className="w-5 h-5 text-primary" />
//             </button>
//             <h2 className="text-4xl font-normal text-custom-gray-4 leading-6.5">
//               {serviceName}
//             </h2>
//           </div>
//           <button
//             onClick={onClose}
//             className="p-2 rounded-full hover:bg-gray-50 transition-colors"
//           >
//             <X className="w-5 h-5 text-gray-400" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

const ServicesMobile = ({
  data,
  closeMenu,
}: {
  data: LayoutType;
  closeMenu: () => void;
}) => {
  const [serviceDrawer, setServiceDrawer] = useState<{
    isOpen: boolean;
    service: Service | null;
  }>({
    isOpen: false,
    service: null,
  });

  const handleServiceClick = (service: Service) => {
    setServiceDrawer({ isOpen: true, service });
  };

  const closeServiceDrawer = () => {
    setServiceDrawer({ isOpen: false, service: null });
  };

  // const closeSubmenuDrawer = () => {
  //   setSubmenuDrawer({
  //     isOpen: false,
  //     item: null,
  //     serviceName: "",
  //   });
  // };

  return (
    <>
      <div className="px-0">
        {data?.serviceMenu.map((service) => (
          <button
            key={service?.id}
            onClick={() => handleServiceClick(service)}
            className="w-full flex items-center justify-between p-1 text-left"
          >
            <span className="text-lg text-custom-gray-4 font-normal">
              {service?.title}
            </span>
            <Plus className="w-4 h-4 text-primary" />
          </button>
        ))}
      </div>

      {serviceDrawer.isOpen && serviceDrawer?.service && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-white">
            <div className="flex items-center justify-between py-4 bg-white border-b border-primary">
              <div className="flex items-center">
                <button
                  onClick={closeServiceDrawer}
                  className="p-2 rounded-full hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-primary" />
                </button>
                <h2 className="items-center font-medium text-lg leading-[26px] text-primary">
                  {serviceDrawer?.service?.title}
                </h2>
              </div>
            </div>

            <div className="h-full overflow-y-auto bg-white">
              <div className="divide-y divide-gray-100">
                {serviceDrawer?.service?.items?.map((item, index) => (
                  <div key={index} className="border-b border-primary">
                    {/* 🔹 Parent Link */}
                    <Link
                      href={item?.href?.slug ? `${item.href.slug}` : "#"}
                      className="w-full block text-left"
                      onClick={closeMenu}
                    >
                      <div className="text-lg font-normal text-primary py-2 px-4 leading-6.5">
                        {item?.title}
                      </div>
                    </Link>

                    {/* 🔹 Child Links */}
                    {item?.child?.length > 0 && (
                      <div className="space-y-1 mt-2">
                        {item.child.map((childItem, childIndex) =>
                          childItem?.attachment ? (
                            <Link
                              key={`ng-sub-${childIndex}`}
                              href={childItem?.attachment?.url || "#"}
                              onClick={closeMenu}
                              className={cn(
                                "block text-lg px-4 rounded transition-colors",
                                childItem?.type === "light" &&
                                  "text-custom-gray-4 ps-7 hover:text-primary",
                                childItem?.type === "dark" &&
                                  "text-black mb-1 hover:text-primary"
                              )}
                            >
                              {childItem?.title}
                            </Link>
                          ) : (
                            <Link
                              key={`ng-sub-${childIndex}`}
                              href={
                                childItem?.href?.slug
                                  ? `${childItem.href.slug}`
                                  : "#"
                              }
                              onClick={closeMenu}
                              className={cn(
                                "block text-lg px-4 rounded transition-colors",
                                childItem?.type === "light" &&
                                  "text-custom-gray-4 ps-7 hover:text-primary",
                                childItem?.type === "dark" &&
                                  "text-black mb-1 hover:text-primary"
                              )}
                            >
                              {childItem?.title}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <SubmenuDrawer
        isOpen={submenuDrawer.isOpen}
        onClose={closeSubmenuDrawer}
        submenuItem={submenuDrawer.item}
        serviceName={submenuDrawer.serviceName}
      /> */}
    </>
  );
};

export default ServicesMobile;
