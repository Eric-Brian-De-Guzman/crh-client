/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3A1E13",
        "secondary": "#937954",
        "tertiary": "#CFC2AF"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}