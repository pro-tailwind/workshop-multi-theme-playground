const multiThemePlugin = require('./workshop/multi-theme-plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './examples/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    multiTheme: [
      {
        name: 'default',
        colors: {
          50: '238 242 255',
          100: '224 231 255',
          200: '199 210 254',
          300: '165 180 252',
          400: '129 140 248',
          500: '99 102 241',
          600: '79 70 229',
          700: '67 56 202',
          800: '55 48 163',
          900: '49 46 129',
        },
      },
      {
        name: 'shamrock',
        colors: {
          50: '236 253 244',
          100: '209 250 228',
          200: '167 243 205',
          300: '110 231 179',
          400: '43 201 138',
          500: '15 186 123',
          600: '5 150 100',
          700: '4 120 83',
          800: '6 95 67',
          900: '6 78 57',
        },
      },
      {
        name: 'bittersweet',
        colors: {
          50: '254 244 242',
          100: '255 231 225',
          200: '255 212 201',
          300: '254 181 163',
          400: '250 119 86',
          500: '242 101 65',
          600: '224 72 34',
          700: '188 58 25',
          800: '156 51 24',
          900: '129 48 27',
        },
      },
    ],
  },
  plugins: [multiThemePlugin],
}
