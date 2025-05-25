/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        classica: ["ClassicaOne", "sans-serif"],
      },
    },
  },
  safelist: ["font-classica"],
  plugins: [],
};
