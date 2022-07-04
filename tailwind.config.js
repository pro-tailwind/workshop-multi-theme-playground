const multiThemePlugin = require('./workshop/multi-theme-plugin')

const themes = require('./workshop/themes')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './examples/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
  },
  plugins: [
    multiThemePlugin({
      themes,
    }),
  ],
}
