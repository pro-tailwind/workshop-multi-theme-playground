const defaultTheme = require('tailwindcss/defaultTheme')

// Plugins
const bgStripesPlugin = require('./plugins/bg-stripes')
const squareDiagonalPlugin = require('./plugins/square-diagonal')

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
      gridTemplateColumns: ({ theme }) => ({
        'background-split': `1fr 
            ${theme('width.100')} 
            calc(
              ${theme('maxWidth.7xl')} - ${theme('width.100')} - ${theme('padding.8')}
            ) 
            1fr`,
      }),
    },
  },
  plugins: [bgStripesPlugin, squareDiagonalPlugin],
}
