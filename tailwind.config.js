/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        roboto: ["Roboto"]
      },
      colors: {
        blue: {
          100: "#E3EAEF",
          500: "#2188FF",
          950: "#17192D",
        },
        gray: {
          500: "#88929C",
          600: "#77818C",
        },
      },
      screens: {
        xs: "375px",
        sm: "480px",
        md: "760px",
        lg: "960px",
        default: "1200px",
      },
    },
  },
  plugins: [],
};
