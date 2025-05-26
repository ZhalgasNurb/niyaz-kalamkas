import { MessageCircle } from "lucide-react";

export default function EventLink() {
  const telegramLink = import.meta.env.VITE_TELEGRAM_LINK || "https://t.me/";

  return (
    <div className="font-serif italic py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border-4 border-black p-6 sm:p-12 ">
          <div className="text-center">
            <MessageCircle className="w-12 h-12 sm:w-16 sm:h-16 text-black mx-auto mb-4 sm:mb-6" />

            <h2 className="text-2xl sm:text-4xl font-serif text-black mb-4 sm:mb-6 uppercase ">
              Іс-шарада түсірілген суреттер
            </h2>
            <div className="w-16 sm:w-24 h-0.5 bg-black mx-auto mb-6 sm:mb-8"></div>

            <p className="text-black font-bold text-sm sm:text-base uppercase mb-8 sm:mb-12">
              Суреттермен бөлісу үшін Telegram чатына қосылыңыз
            </p>

            {/* Telegram Link Button */}
            <a
              href={telegramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center z-50 gap-3 sm:gap-4 bg-black text-white py-4 sm:py-6 px-8 sm:px-12 border-4 border-black font-bold text-lg sm:text-xl uppercase hover:bg-white hover:text-black transform hover:-translate-y-1 transition-all duration-200 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
            >
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16l-1.61 7.59c-.12.54-.44.67-.89.42l-2.46-1.81-1.19 1.14c-.13.13-.24.24-.49.24l.17-2.43 4.47-4.03c.19-.17-.04-.27-.3-.1l-5.52 3.47-2.38-.74c-.52-.16-.53-.52.11-.77l9.3-3.58c.43-.16.81.1.67.61z" />
              </svg>
              <span className="hidden sm:inline">Чатқа қосылу</span>
              <span className="sm:hidden">Telegram чат</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
