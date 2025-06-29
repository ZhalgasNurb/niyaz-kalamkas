import { Heart } from "lucide-react";
import BotanicalInvitation from "./components/botanical-invitation";
import BotanicalCalendar from "./components/calendar";
import BotanicalCountdown from "./components/countdown";
import RSVPForm from "./components/rsvp-form";
import EventLink from "./components/event-link";

const WeddingInvitation = () => {
  return (
    <div className="min-h-screen  shadow-2xl relative overflow-hidden">
      {/* Hero Section */}
      {/* <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(120, 219, 226, 0.1) 0%, transparent 50%)
            `,
        }}
      /> */}
      <div className="relative overflow-hidden w-full h-[100dvh] bg-[url('/bg.png')] bg-cover bg-center bg-black/70">
        <div className="absolute left-0 right-0 top-0 bottom-0 bg-gradient-to-b from-black/70 to-white/20"></div>
        <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-16 text-center">
          <div className="animate-fade-in flex flex-col items-center justify-between h-full text-center">
            <h1 className="font-classica mt-8 sm:mt-12 text-4xl sm:text-6xl md:text-8xl text-white mb-4 tracking-wide flex flex-col items-center font-bold">
              <span className="">Нияз</span>
              <span className=" text-white font-light text-2xl sm:text-4xl md:text-5xl my-2 sm:my-4">
                &
              </span>
              <span className="">Каламкас</span>
            </h1>
            <div className="mb-20 sm:mb-0">
              <p className="font-classica text-3xl text-white mb-4 sm:mb-8 font-light tracking-wider">
                Wedding Day
              </p>
              <div className="font-classica text-white text-3xl tracking-[0.2em] sm:tracking-[0.3em] font-light">
                29 ⟡ 08 ⟡ 2025
              </div>
            </div>
          </div>
        </div>
      </div>
      <BotanicalInvitation />
      <BotanicalCalendar />
      <BotanicalCountdown />
      <RSVPForm />
      <EventLink />

      {/* Footer */}
      <div className="text-center py-8 sm:py-16 px-4 sm:px-6 bg-black">
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <Heart
            strokeWidth={0.5}
            className="w-5 h-5 sm:w-6 sm:h-6 text-white "
          />
          <span className="text-white font-classica font-light tracking-wide text-sm sm:text-base align-middle">
            Махаббатпен, Нияз бен Каламкас
          </span>
          <Heart
            strokeWidth={0.5}
            className="w-5 h-5 sm:w-6 sm:h-6 text-white"
          />
        </div>
        {/* <div className="w-16 sm:w-24 h-0.5 bg-white mx-auto mb-2 sm:mb-4"></div>
        <p className="text-xs sm:text-sm text-gray-300 font-light">
          По всем вопросам: wedding@example.com или +7 (999) 123-45-67
        </p> */}
      </div>
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
      `}</style>
    </div>
  );
};

export default WeddingInvitation;
