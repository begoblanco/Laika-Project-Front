/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      variants: {},

      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#4b3065",
        secondary: "#d0a5ff",
      },
    },
    plugins: [],
  },
};
