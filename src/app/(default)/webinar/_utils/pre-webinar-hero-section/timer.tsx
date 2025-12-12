import { cn } from '@/lib/utils';
import React from 'react'

const Timer = ({ data, className }: { data: string, className?: string }) => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date(data).getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [data]);
  return (
    <div className={cn("bg-white rounded-2xl shadow-xl px-6 md:px-12 py-3 md:py-6", className)}>
      <div className="flex items-center gap-4 md:gap-8">
        <div className="text-center">
          <div className="text-2xl md:text-5xl font-bold text-gray-900">
            {timeLeft.days.toString().padStart(2, "0")}
          </div>
          <div className="text-xs text-[#229D68] font-medium">
            Days
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-5xl font-bold text-gray-900">
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <div className="text-xs text-[#229D68] font-medium">
            Hours
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-5xl font-bold text-gray-900">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </div>
          <div className="text-xs text-[#229D68] font-medium">
            Minutes
          </div>
        </div>
        <div className="text-center">
          <div className="text-2xl md:text-5xl font-bold text-gray-900">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </div>
          <div className="text-xs text-[#229D68] font-medium">
            Seconds
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timer