/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#000810",
        "navy-blue": "#003BA4",
        "brigh-blue": "#F0F5FF",
        "light-gray": "#F8F9FA",
      },
      fontFamily: {
        Outfit: "Outfit",
        Inter: "Inter",
        Poppins: "Poppins",
        "Plus-Jakarta-Sans": "Plus Jakarta Sans",
      },
    },
  },
  plugins: [],
};
