/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#000810",
      },
      fontFamily: {
        Outfit: "Outfit",
      },
    },
  },
  plugins: [],
};
