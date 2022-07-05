const colorThemes = require('./workshop/themes')
const bgStripesPlugin = require('./plugins/bg-stripes-plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'theme-one': colorThemes[0].colors.primary,
        'theme-two': colorThemes[1].colors.primary,
        'theme-three': colorThemes[2].colors.primary,
        primary: {
          500: 'var(--primary-500)',
        },
      },
    },
  },
  plugins: [bgStripesPlugin],
}
