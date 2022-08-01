const defaultTheme = require('tailwindcss/defaultTheme')
const typogrpahyPlugin = require('@tailwindcss/typography')

const colorThemes = require('./workshop/themes')
const bgStripesPlugin = require('./plugins/bg-stripes-plugin')
const squareDiagonalPlugin = require('./plugins/square-diagonal')
const multiThemePlugin = require('./workshop/multi-theme-plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./{pages,components,workshop}/**/*.{js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif', ...defaultTheme.fontFamily.sans],
        mono: ['"Dank Mono"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    bgStripesPlugin,
    squareDiagonalPlugin,
    typogrpahyPlugin,
    multiThemePlugin({
      themes: colorThemes,
    }),
  ],
}
