/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brownOrange: "#D48A40",
        darkOrange: "#C64E35",
        burgundy: "#834055",
        background: "#30344E",
        orange: "#F99900",
        ltBlue: "#8DB5D3",
        beige: "#FECC99",
        greyBlue: "#5D839B",
      },
    },
  },
  plugins: [],
};
