const defaultTheme = require('tailwindcss/defaultTheme')

// Plugins
const bgStripesPlugin = require('./plugins/bg-stripes')
const squareDiagonalPlugin = require('./plugins/square-diagonal')
// const multiThemePlugin = require('./plugins/multi-theme-plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      width: {
        100: '25rem',
      },
    },
  },
  plugins: [bgStripesPlugin, squareDiagonalPlugin],
}
