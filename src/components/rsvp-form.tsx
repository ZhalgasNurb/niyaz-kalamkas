"use client";

import { useState } from "react";
import { Users, Send, CheckCircle } from "lucide-react";

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    if (e) e.preventDefault();
    setIsLoading(true);

    try {
      const formDataToSend = new FormData();

      // Validate form data
      if (!formData.name || !formData.message) {
        setErrorMessage("Аты-жөніңіз міндетті түрде толтырылуы тиіс.");
        setIsLoading(false);
        return;
      }

      const entryName = import.meta.env.VITE_GOOGLE_ENTRY_NAME;
      const entryMessage = import.meta.env.VITE_GOOGLE_ENTRY_MESSAGE;
      if (!entryName || !entryMessage) {
        throw new Error(
          "Google Form entry name is not defined in environment variables."
        );
      }

      formDataToSend.append(entryName, formData.name);
      formDataToSend.append(entryMessage, formData.message);

      const googleUrl = import.meta.env.VITE_GOOGLE_URL;
      if (!googleUrl) {
        throw new Error(
          "Google Form URL is not defined in environment variables."
        );
      }
      await fetch(googleUrl, {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      });

      setIsSubmitted(true);
      setIsLoading(false);
    } catch (error) {
      console.error("Ошибка отправки:", error);
      alert("Произошла ошибка при отправке. Попробуйте еще раз.");
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16 bg-contain bg-center rounded-lg relative overflow-hidden">
      <div className="bg-white border-4 border-black p-6 sm:p-12">
        <div className="text-center mb-8 sm:mb-12">
          <Users className="w-12 h-12 sm:w-16 sm:h-16 text-black mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-4xl font-serif text-black mb-2 sm:mb-4 uppercase tracking-wider">
            Қуанышымыздың қадірлі қонағы болыңыздар!
          </h2>
          <div className="w-16 sm:w-24 h-0.5 bg-black mx-auto mb-4 sm:mb-6"></div>
          <p className="text-black font-medium text-sm sm:text-base">
            Тойға қатысуларыңызды растауларыңызды сұраймыз!
          </p>
        </div>

        {!isSubmitted ? (
          <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-black mb-2 sm:mb-3 uppercase tracking-wide">
                Аты-жөніңіз *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black bg-white text-black font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 text-sm sm:text-base"
                placeholder="Атыңызды енгізіңіз"
              />
              {errorMessage && (
                <p className="text-red-500 text-xs sm:text-sm mt-2">
                  {errorMessage}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-bold text-black mb-2 sm:mb-3 uppercase tracking-wide">
                Жас жұбайларға тілегіңіз
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-black rounded-none focus:outline-none focus:ring-0 focus:border-black bg-white text-black font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:focus:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 resize-none text-sm sm:text-base"
                placeholder="Сіздің тілегіңіз..."
              />
            </div>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              style={{
                backgroundColor: isLoading ? "#f0f0f0" : "#000",
                color: isLoading ? "#000" : "#fff",
              }}
              className="w-full py-3 sm:py-4 px-6 sm:px-8 border-2 border-black font-bold text-sm sm:text-lg uppercase tracking-wider transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-current"></div>
                  Отправляем...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Жіберу</span>
                  <span className="sm:hidden">Жіберу</span>
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="text-center py-12 sm:py-16">
            <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-black mx-auto mb-4 sm:mb-6" />
            <h3 className="text-2xl sm:text-3xl font-bold text-black mb-2 sm:mb-4 uppercase tracking-wide">
              Рахмет!
            </h3>
            <div className="w-12 sm:w-16 h-0.5 bg-black mx-auto mb-2 sm:mb-4"></div>
            <p className="text-black text-base sm:text-lg font-medium">
              Жауабыңыз қабылданды. Осы ерекше күнді бізбен бірге
              өткізетініңізге өте қуаныштымыз!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
