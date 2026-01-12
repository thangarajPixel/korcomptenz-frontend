"use client";

import KorcomptenzImage from "@/components/korcomptenz-image";

const ThankYouPage = () => {
  const handleClose = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.close();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 relative">
      {/* Close Button */}
      <button
        onClick={handleClose}
        aria-label="Close"
        className="absolute top-6 right-6 text-gray-500 hover:text-gray-800 text-2xl"
      >
        ✕
      </button>

      <div className="max-w-4xl text-center flex flex-col items-center">
        {/* Heading */}

        <div className="flex gap-2">
          <p className="text-[80px] font-light mb-2">Thank you</p>
          <KorcomptenzImage
            src="https://s.w.org/images/core/emoji/16.0.1/svg/1f642.svg"
            width={80}
            height={80}
          />
        </div>

        {/* Sub heading */}
        <p className="text-[36px] font-light mb-6">
          Your form has been successfully submited.
        </p>

        {/* Description */}
        <p className="text-[22px] leading-8 max-w-3xl mb-10">
          We are looking forward to learning more about your unique needs and
          demonstrating our capabilities. We will be in touch soon, but please
          feel free to contact our sales experts directly.
        </p>

        {/* Divider */}
        <div className="w-full max-w-3xl border-t border-gray-300 my-8" />

        {/* Contact details */}
        <div className="text-gray-800 text-[16px] leading-relaxed">
          <p className="font-semibold text-[18px] mb-1">Kathy Jones</p>
          <p className="mb-1">
            Suite 207, 35 Waterview Blvd. Parsippany, NJ 07054
          </p>

          <p className="mt-3">
            Phone:&nbsp;
            <a href="tel:19736018770" className="underline">
              1-973-601-8770
            </a>
          </p>

          <p>
            Email:&nbsp;
            <a href="mailto:sales@korcomptenz.com" className="underline">
              sales@korcomptenz.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
