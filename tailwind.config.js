/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D1D1D",
        secondary: "#4A4A4A",
        accent: "#FF3366"
      }
    },
  },
  plugins: [],
}