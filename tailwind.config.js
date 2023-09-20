/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#f4d03f",
        dark: "#171717",
        dark2: "#373737",
      },
    },
  },
  plugins: [],
};
