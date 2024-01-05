/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "red-ocean": "#EB455F",
        "dark-red-ocean": "#BF394E",
        "blue-ocean": "#BAD7E9",
        "navy-ocean": "#2B3467",
        "cream-ocean": "#FCFFE7",
        "dark-cream-ocean": "#E6E9D1",
        "dark-ocean": "#212121",
      }
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")]
}

