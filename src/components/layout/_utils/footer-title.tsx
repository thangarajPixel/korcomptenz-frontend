import React from "react";

const FooterTitle = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="space-y-4">
      <p className="text-primary font-semibold text-3xl  border-b border-primary  pb-2">
        {title}
      </p>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
};

export default FooterTitle;
