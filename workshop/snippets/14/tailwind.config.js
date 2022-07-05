const colorThemes = require('./workshop/themes')
const bgStripesPlugin = require('./plugins/bg-stripes-plugin')
const multiThemePlugin = require('./workshop/multi-theme-plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {},
  plugins: [
    bgStripesPlugin,
    multiThemePlugin({
      // Passing the themes array as an option
      themes: colorThemes
    }),
  ],
}
