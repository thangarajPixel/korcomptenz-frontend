"use client";

import { useState } from "react";
import { ChevronLeft, X } from "lucide-react";

// ---------- Types ----------

interface EcosystemDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  menu: EcosystemMenuType | null;
}

interface DrawerState {
  isOpen: boolean;
  menu: EcosystemMenuType | null;
}

// ---------- Data ----------

// ---------- Drawer ----------
const EcosystemDrawer = ({ isOpen, onClose, menu }: EcosystemDrawerProps) => {
  if (!isOpen || !menu) return null;

  const item = menu?.item;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-white">
        {/* Header */}
        <div className="flex items-center justify-between py-4 bg-white border-b border-primary">
          <div className="flex items-center">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <h2 className="font-medium text-lg text-primary">{menu?.menu}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-50 transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* Content */}
        <div className="h-full overflow-y-auto bg-white">
          {item && (
            <div className="p-4 space-y-4">
              {item?.child?.map((child, i) => (
                <div
                  key={`ecosystem-mobile-${i}`}
                  className="px-2 py-3 border-b border-gray-100"
                >
                  <p className="text-lg font-medium text-primary border-b border-primary">
                    {child?.title}
                  </p>
                  {child?.description?.length > 0 && (
                    <ul className="mt-1 text-md text-black">
                      {child?.description?.map((desc, j) => (
                        <li key={`ecosystem-mobile-${j}`}>
                          {desc?.description}
                        </li>
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
const EcosystemMobile = ({}: { data: LayoutType }) => {
  const [drawer, setDrawer] = useState<DrawerState>({
    isOpen: false,
    menu: null,
  });

  // const handleMenuClick = (menu: SidebarMenu) => {
  //   setDrawer({ isOpen: true, menu });
  // };

  const closeDrawer = () => {
    setDrawer({ isOpen: false, menu: null });
  };

  return (
    <>
      {/* Sidebar list */}
      {/* <div className="px-0">
        {data?.ecosystemMenu?.map((ec) => (
          <button
            key={`ecosystem-mobile-${ec?.id}`}
            onClick={() => handleMenuClick(ec)}
            className="w-full flex items-center justify-between p-2 text-left border-b border-gray-100"
          >
            <span className="text-lg text-custom-gray-4 font-normal">
              {ec?.menu}
            </span>
            <ChevronRight className="w-4 h-4 text-primary" />
          </button>
        ))}
      </div> */}

      {/* Drawer */}
      <EcosystemDrawer
        isOpen={drawer.isOpen}
        onClose={closeDrawer}
        menu={drawer.menu}
      />
    </>
  );
};

export default EcosystemMobile;
