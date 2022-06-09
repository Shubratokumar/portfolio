module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        myPortfolio: {
          primary: "#7510f7",

          secondary: "#F77E21",

          accent: "#f8fcae",

          neutral: "#1A1622",

          "base-100": "#ffffff",

          info: "#2E90E5",

          success: "#3BD87A",

          warning: "#FBB750",

          error: "#F5565E",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
