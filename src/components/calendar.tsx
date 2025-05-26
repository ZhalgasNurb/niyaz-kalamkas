import { Heart } from "lucide-react";

export default function BotanicalCalendar() {
  // August 2025 calendar data
  const daysOfWeek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

  // August 2025 starts on Friday (5th day of week, 0-indexed)
  const firstDayOfMonth = 4; // Friday (0=Monday, 4=Friday)
  const daysInMonth = 31;

  // Generate calendar grid
  const calendarDays = [];

  // Add empty cells for days before the 1st
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  return (
    <div className="flex items-center justify-center p-2 sm:p-4 lg:p-8 ">
      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
        {/* Calendar container */}
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/30"></div>

        {/* Calendar content */}
        <div className="bg-gray-600/30 rounded-md relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Month and Year */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className=" text-2xl sm:text-3xl lg:text-4xl font-serif text-gray-800 tracking-wider">
              ТАМЫЗ
            </h1>
            <p className=" text-lg sm:text-xl lg:text-2xl font-serif italic text-gray-600 mt-1">
              2025
            </p>
          </div>

          {/* Calendar Grid */}
          <div className="w-full max-w-xs sm:max-w-sm">
            {/* Days of week header */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2 sm:mb-4">
              {daysOfWeek.map((day, index) => (
                <div
                  key={index}
                  className="text-center text-xs sm:text-sm font-serif text-gray-600 py-1 sm:py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar days */}
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className="relative flex items-center justify-center h-8 sm:h-10 lg:h-12"
                >
                  {day && (
                    <>
                      {/* Special highlight for 29th */}
                      {day === 29 ? (
                        <div className="relative">
                          <Heart className="absolute -top-1 -left-3 text-red-400 w-10 h-10 sm:w-8 sm:h-8 lg:w-10 lg:h-10 animate-pulse" />
                          <span className="relative z-10 text-sm sm:text-base lg:text-lg font-serif font-bold text-white">
                            {day}
                          </span>
                        </div>
                      ) : (
                        <span className="text-sm sm:text-base lg:text-lg font-serif text-gray-700 hover:text-gray-900 transition-colors">
                          {day}
                        </span>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Optional decorative text */}
          <div className="mt-6 sm:mt-8 text-center">
            <p className="text-xs sm:text-sm font-serif italic text-gray-600">
              Біздің бақытты күніміз
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
