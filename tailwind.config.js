/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['var(--font-montserrat)']
      },
      screens: {
        'xxxs': '320px',
        'xxs': '360px',
        'xs': '412px',
      }
    },
  },
  darkMode: "class",
  variants: {},
  plugins: [],
}
