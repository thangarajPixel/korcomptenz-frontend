"use client";

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

      <div className="max-w-xl text-center bg-white p-10  flex flex-col items-center">
        {/* Tick Animation */}
        <div className="mb-6">
          <svg className="w-20 h-20" viewBox="0 0 52 52">
            {/* Circle */}
            <circle
              cx="26"
              cy="26"
              r="25"
              fill="none"
              stroke="#16a34a"
              strokeWidth="3"
              className="animate-circle"
            />

            {/* Check */}
            <path
              fill="none"
              stroke="#16a34a"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 27l7 7 17-17"
              className="animate-check"
            />
          </svg>
        </div>

        <h1 className="text-4xl md:text-5xl font-semibold text-primary mb-4">
          Thank You for Downloading the Case Study
        </h1>
      </div>

      {/* Inline animation styles */}
      <style jsx>{`
        .animate-circle {
          stroke-dasharray: 157;
          stroke-dashoffset: 157;
          animation: draw-circle 0.6s ease-out forwards;
        }

        .animate-check {
          stroke-dasharray: 48;
          stroke-dashoffset: 48;
          animation: draw-check 0.4s ease-out forwards;
          animation-delay: 0.6s;
        }

        @keyframes draw-circle {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes draw-check {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ThankYouPage;
