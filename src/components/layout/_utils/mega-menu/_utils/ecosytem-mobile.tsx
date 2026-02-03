"use client";

import { useState } from "react";
import { ChevronLeft, X, Plus } from "lucide-react";
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

// ---------- Data ----------

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
        <div className="flex items-center justify-between py-2  bg-[#f2f2f2] border-b border-primary">
          <div className="flex items-center">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <Link href={menu?.item?.link || "#"} onClick={closeMenu}>
              <h4 className="font-medium text-lg text-primary">{menu?.menu}</h4>
            </Link>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-50 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="h-full overflow-y-auto  bg-[#f2f2f2]">
          {item && (
            <div className="p-4 ">
              {item?.child?.map((child, i) => (
                <div
                  key={`ecosystem-mobile-${i}`}
                  className="px-2 py-1 border-b border-gray-100"
                >
                  <Link href={child?.href?.slug || "#"} onClick={closeMenu}>
                    <p className="text-lg font-medium text-primary border-b border-primary">
                      {child?.title}
                    </p>
                  </Link>
                  {child?.description?.length > 0 && (
                    <ul className="mt-1 text-md text-black">
                      {child?.description?.map((desc, j) => (
                        <Link
                          href={desc?.href?.slug || "#"}
                          onClick={closeMenu}
                          key={j}
                        >
                          <li key={`ecosystem-mobile-${j}`}>
                            {desc?.description}
                          </li>
                        </Link>
                      ))}
                    </ul>
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
    setDrawer({ isOpen: true, menu });
  };

  const closeDrawer = () => {
    setDrawer({ isOpen: false, menu: null });
  };

  return (
    <>
      {/* Sidebar list */}
      <div className="px-0">
        {data?.ecosystemMenu?.map((ec) => (
          <button
            key={`ecosystem-mobile-${ec?.id}`}
            onClick={() => handleMenuClick(ec)}
            className="w-full flex items-center justify-between p-2 text-left border-b border-[#E0E0E0]"
          >
            <span className="text-lg text-foreground leading-6.5 font-normal">
              {ec?.menu}
            </span>
            <Plus className="w-4 h-4 text-primary" />
          </button>
        ))}
      </div>

      {/* Drawer */}
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
