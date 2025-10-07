/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btc: "#f2a900",
        eth: "#3c3c3d",
        usdt: "#26a17b",
        glass: "rgba(17,24,39,0.60)", // ~gray-900 @ 60% for panels
        glassBorder: "#1f2937", // gray-800 equivalent for subtle borders
      },
      boxShadow: {
        glow: "0 0 15px rgba(59,130,246,0.30)", // soft blue glow
      },
      // Border utilities will pick up `border-glass` from the colors map
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
