"use client";

import { useState } from "react";
import { ChevronLeft, Plus } from "lucide-react";
import Link from "next/link";

// ---------- Types ----------

interface EcosystemDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  menu: EcosystemMenuType | null;
  closeMenu: () => void;
}

interface DrawerState {
  isOpen: boolean;
  menu: EcosystemMenuType | null;
}

// ---------- Drawer ----------

const EcosystemDrawer = ({
  isOpen,
  onClose,
  menu,
  closeMenu,
}: EcosystemDrawerProps) => {
  if (!isOpen || !menu) return null;

  const item = menu?.item;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-[#f2f2f2]">
        {/* Header */}
        <div className="flex items-center justify-between py-2 bg-[#f2f2f2] border-b border-primary">
          <div className="flex items-center">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>

            {menu?.menu && (
              <Link href={menu?.item?.link || "#"} onClick={closeMenu}>
                <h4 className="font-medium text-lg leading-[26px] text-primary">
                  {menu?.menu}
                </h4>
              </Link>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="h-full overflow-y-auto bg-[#f2f2f2] p-4">
          {item && (
            <div className="divide-y divide-gray-100">
              {item?.child?.map((child, index) => (
                <div
                  key={`ecosystem-mobile-${index}`}
                  className="border-b border-primary"
                >
                  {/* Parent Link */}
                  <Link
                    href={child?.href?.slug ? child.href.slug : "#"}
                    onClick={closeMenu}
                    className="w-full block text-left"
                  >
                    <div className="text-lg font-normal text-primary py-2 leading-6.5">
                      {child?.title}
                    </div>
                  </Link>

                  {/* Description / Child Links */}
                  {child?.description?.length > 0 && (
                    <div className="space-y-1 mt-2 pb-2">
                      {child?.description?.map((desc, descIndex) => (
                        <Link
                          key={`ecosystem-sub-${descIndex}`}
                          href={desc?.href?.slug ? desc.href.slug : "#"}
                          onClick={closeMenu}
                          className="block text-lg px-4 rounded transition-colors text-custom-gray-4 ps-7 hover:text-primary"
                        >
                          {desc?.description}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ---------- Main Component ----------

const EcosystemMobile = ({
  data,
  closeMenu,
}: {
  data: LayoutType;
  closeMenu: () => void;
}) => {
  const [drawer, setDrawer] = useState<DrawerState>({
    isOpen: false,
    menu: null,
  });

  const handleMenuClick = (menu: EcosystemMenuType) => {
    setDrawer({
      isOpen: true,
      menu,
    });
  };

  const closeDrawer = () => {
    setDrawer({
      isOpen: false,
      menu: null,
    });
  };

  return (
    <>
      {/* Main Ecosystem Menu */}
      <div className="px-0">
        {data?.ecosystemMenu?.map((ec) => (
          <button
            key={`ecosystem-mobile-${ec?.id}`}
            onClick={() => handleMenuClick(ec)}
            className="w-full flex items-center justify-between p-1 text-left"
          >
            <span className="text-lg text-foreground leading-6.5 font-normal">
              {ec?.menu}
            </span>

            <Plus className="w-4 h-4 text-primary" />
          </button>
        ))}
      </div>

      {/* Ecosystem Drawer */}
      <EcosystemDrawer
        isOpen={drawer.isOpen}
        onClose={closeDrawer}
        menu={drawer.menu}
        closeMenu={closeMenu}
      />
    </>
  );
};

export default EcosystemMobile;
