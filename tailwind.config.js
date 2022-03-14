module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "#F0F4F9": "#F0F4F9",
        "#FDC800": "#FDC800",
        "#212529": "#212529",
        "#002147": "#002147",
        "#BDBDBD": "#BDBDBD",
        "#002147": "#002147",
      },
      fontFamily: {
        CormorantGaramond: ['"EB Garamond"', "serif"],
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
