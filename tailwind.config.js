const defaultTheme = require('tailwindcss/defaultTheme')

const colorThemes = require('./workshop/themes')
const bgStripesPlugin = require('./plugins/bg-stripes-plugin')
const multiThemePlugin = require('./workshop/multi-theme-plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    bgStripesPlugin,
    multiThemePlugin({
      themes: colorThemes,
    }),
  ],
}
