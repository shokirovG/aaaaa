/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, ts, vue}", "./src/**/*"],
  theme: {
    extend: {
      colors: {
        // primary: "#6941c6",
        primary: {
          DEFAULT: "#6941c6",
          300: "#D6BBFB",
          500: "#6941c6",
          600: "#7F56D9",
          700: "#6941C6",
        },
        danger: "#FF7F51",
        purple: "#8758FF",
        line: "#F2F2F2",
        main: "#C02221",
        mainLight: "#FF6969",
        darkGray: "#787878",
        mainDarkGray: "#44444F",
        lightGray: "#D9D9D9",
        textSecondary: "#6A707E",
        gray200: "#EAECF0",
        gray300: "#D0D5DD",
        // primary600: "#7F56D9",
      },
    },
  },
  plugins: [],
};
