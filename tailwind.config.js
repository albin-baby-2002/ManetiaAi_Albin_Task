/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#000810",
        "navy-blue": "#003BA4",
        "brigh-blue": "#F0F5FF",
      },
      fontFamily: {
        Outfit: "Outfit",
        Inter: "Inter",
      },
    },
  },
  plugins: [],
};
