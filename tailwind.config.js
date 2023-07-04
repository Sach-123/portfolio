/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary_background: "#282C33",
        primary: "#C778DD",
        dimWhite: "#ABB2BF",
      },
      fontFamily: {
        Fira_code: ["Fira Code", "monospace"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      sm_md:"850px",
      md: "1060px",
      lg: "1200px",
      lg_xl:"1280px",
      xl: "1700px",
    },
  },
  plugins: [],
};

