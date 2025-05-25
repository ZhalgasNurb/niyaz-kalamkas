export default function BotanicalInvitation() {
  return (
    <div className="my-6 flex items-center justify-center p-2 sm:p-4 lg:p-8 ">
      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center">
          <div className="space-y-4 sm:space-y-6">
            {/* Main invitation text */}
            <div className="space-y-2 sm:space-y-4">
              <p className="text-sm sm:text-base lg:text-lg font-serif italic text-gray-800 leading-relaxed">
                Құрметті ағайын-туыс, құда-жекжағат, дос-жарандар!
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-serif italic text-gray-800 leading-relaxed">
                Сіздерді ұлымыз бен келініміз
              </p>
            </div>

            <div className="space-y-2 sm:space-y-4">
              <p className="text-sm sm:text-base lg:text-lg font-serif italic text-gray-800 leading-relaxed">
                Нияз бен Қаламқастың
              </p>
              <p className="text-xs sm:text-sm lg:text-base font-serif italic text-gray-700 leading-relaxed">
                шаңырақ көтеру тойына арналған ақ дастарханымыздың қадірлі
                қонағы болуға шақырамыз!
              </p>
            </div>

            {/* Signature */}
            <div className="mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-gray-400/30">
              <p className="text-xs sm:text-sm font-serif italic text-gray-600">
                Той иелері:
              </p>
              <p className="text-sm sm:text-base font-serif italic text-gray-800 mt-1">
                Талғат пен Ақбота
              </p>
            </div>

            {/* Event Details Section */}
            <div className="mt-6 sm:mt-8 lg:mt-12 pt-4 sm:pt-6 lg:pt-8 border-t border-gray-400/30">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xs sm:text-sm font-serif uppercase tracking-wider text-gray-600 mb-2 sm:mb-3">
                    ТОЙ САЛТАНАТЫ:{" "}
                  </h3>
                  <p className="text-base sm:text-lg lg:text-xl font-serif italic text-gray-800">
                    29 тамыз 2025
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-serif italic text-gray-700">
                    сағат 18:00
                  </p>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-serif uppercase tracking-wider text-gray-600 mb-2 sm:mb-3">
                    МЕКЕН-ЖАЙЫМЫЗ:{" "}
                  </h3>
                  <p className="text-xs sm:text-sm lg:text-base font-serif italic text-gray-800">
                    "Бакшасарай" мейрамханасы Алматы қ., Темирязева 42 К1
                  </p>

                  <div className="flex items-center justify-center mt-3 sm:mt-4">
                    <div className="flex items-center space-x-2">
                      <a
                        href="https://2gis.kz/almaty/geo/9429940000921500"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="./2gis.png" alt="2gis.png" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
