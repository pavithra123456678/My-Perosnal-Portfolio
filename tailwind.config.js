/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Tells Tailwind to scan all source files
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 1.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      fontFamily: {
        sans: ["'Segoe UI'", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
