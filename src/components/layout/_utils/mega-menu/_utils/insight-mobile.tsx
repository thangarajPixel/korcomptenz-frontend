"use client";

import Link from "next/link";

const InsightMobile = ({
  data,
  closeMenu,
}: {
  data: LayoutType;
  closeMenu: () => void;
}) => {
  return (
    <div className="px-0">
      {data?.insightMenu?.categories?.map((cat) => (
        <div
          key={cat?.id}
          className="w-full flex items-center justify-between p-2 text-left border-b border-[#E0E0E0]"
        >
          <Link href={cat?.link || "#"} onClick={closeMenu}>
            <span className="text-lg text-foreground leading-6.5 font-normal">
              {cat?.title}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InsightMobile;
