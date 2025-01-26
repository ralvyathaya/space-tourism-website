/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["Bellefair", "serif"],
      },
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
      },
    },
  },
  plugins: [],
}
