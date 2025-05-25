"use client";

import { useState, useEffect } from "react";

export default function BotanicalCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: August 29, 2025 at 18:00 (Almaty time)
    const targetDate = new Date("2025-08-29T18:00:00+06:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, "0");
  };

  return (
    <div className="flex items-center justify-center p-2 sm:p-4 lg:p-8">
      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
        <div className="absolute inset-0 bg-white/30"></div>

        {/* Countdown content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Title */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-serif text-gray-800">
              Мейрамға дейін қалған уақыт:
            </h2>
          </div>

          {/* Countdown Display */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-4 sm:mb-6">
            {/* Days */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-gray-800 bg-white/50 rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-sm">
                {formatNumber(timeLeft.days)}
              </div>
              <p className="text-xs sm:text-sm font-serif text-gray-700 mt-1 sm:mt-2">
                күн
              </p>
            </div>

            {/* Separator */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-gray-800">
              :
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-gray-800 bg-white/50 rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-sm">
                {formatNumber(timeLeft.hours)}
              </div>
              <p className="text-xs sm:text-sm font-serif text-gray-700 mt-1 sm:mt-2">
                сағат
              </p>
            </div>

            {/* Separator */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-gray-800">
              :
            </div>

            {/* Minutes */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-gray-800 bg-white/50 rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-sm">
                {formatNumber(timeLeft.minutes)}
              </div>
              <p className="text-xs sm:text-sm font-serif text-gray-700 mt-1 sm:mt-2">
                минут
              </p>
            </div>

            {/* Separator */}
            <div className="text-2xl sm:text-3xl lg:text-4xl font-mono font-bold text-gray-800">
              :
            </div>

            {/* Seconds */}
            <div className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-mono font-bold text-gray-800 bg-white/50 rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-sm">
                {formatNumber(timeLeft.seconds)}
              </div>
              <p className="text-xs sm:text-sm font-serif text-gray-700 mt-1 sm:mt-2">
                секунд
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
