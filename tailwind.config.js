/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
        fontFamily: {
            sans: ['"Space Grotesk"', ...fontFamily.sans],
        },
    },
  },
  plugins: [],
};