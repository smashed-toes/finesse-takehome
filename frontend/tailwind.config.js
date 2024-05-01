/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    fontFamily: {
      secondary: ["carbon", "sans-serif"],
      roboto: ["roboto", "sans-serif"],
    },
    extend: {
      colors: {
        "blue-gray": "#565d6a",
        "body-text": "66ff66",
      },
    },
  },
  plugins: [],
};
