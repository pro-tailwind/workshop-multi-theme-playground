const plugin = require('tailwindcss/plugin')
const colorThemes = require('./themes')

module.exports = plugin(function ({ addBase }) {
  addBase({
    ':root': {
      '--primary-50': colorThemes[0].colors.primary[50],
      '--primary-100': colorThemes[0].colors.primary[100],
      '--primary-200': colorThemes[0].colors.primary[200],
      '--primary-300': colorThemes[0].colors.primary[300],
      '--primary-400': colorThemes[0].colors.primary[400],
      '--primary-500': colorThemes[0].colors.primary[500],
      '--primary-600': colorThemes[0].colors.primary[600],
      '--primary-700': colorThemes[0].colors.primary[700],
      '--primary-800': colorThemes[0].colors.primary[800],
      '--primary-900': colorThemes[0].colors.primary[900],
    },
    ['[data-theme="default"]']: {
      '--primary-50': colorThemes[0].colors.primary[50],
      '--primary-100': colorThemes[0].colors.primary[100],
      '--primary-200': colorThemes[0].colors.primary[200],
      '--primary-300': colorThemes[0].colors.primary[300],
      '--primary-400': colorThemes[0].colors.primary[400],
      '--primary-500': colorThemes[0].colors.primary[500],
      '--primary-600': colorThemes[0].colors.primary[600],
      '--primary-700': colorThemes[0].colors.primary[700],
      '--primary-800': colorThemes[0].colors.primary[800],
      '--primary-900': colorThemes[0].colors.primary[900],
    },
    ['[data-theme="ocean"]']: {
      '--primary-50': colorThemes[1].colors.primary[50],
      '--primary-100': colorThemes[1].colors.primary[100],
      '--primary-200': colorThemes[1].colors.primary[200],
      '--primary-300': colorThemes[1].colors.primary[300],
      '--primary-400': colorThemes[1].colors.primary[400],
      '--primary-500': colorThemes[1].colors.primary[500],
      '--primary-600': colorThemes[1].colors.primary[600],
      '--primary-700': colorThemes[1].colors.primary[700],
      '--primary-800': colorThemes[1].colors.primary[800],
      '--primary-900': colorThemes[1].colors.primary[900],
    },
    ['[data-theme="pink"]']: {
      '--primary-50': colorThemes[2].colors.primary[50],
      '--primary-100': colorThemes[2].colors.primary[100],
      '--primary-200': colorThemes[2].colors.primary[200],
      '--primary-300': colorThemes[2].colors.primary[300],
      '--primary-400': colorThemes[2].colors.primary[400],
      '--primary-500': colorThemes[2].colors.primary[500],
      '--primary-600': colorThemes[2].colors.primary[600],
      '--primary-700': colorThemes[2].colors.primary[700],
      '--primary-800': colorThemes[2].colors.primary[800],
      '--primary-900': colorThemes[2].colors.primary[900],
    },
  })
})
