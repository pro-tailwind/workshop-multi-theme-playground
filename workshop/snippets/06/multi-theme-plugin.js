const plugin = require('tailwindcss/plugin')
const colorThemes = require('./themes')

module.exports = plugin(function ({ addBase }) {
  addBase({
    ':root': {
      '--primary-500': colorThemes[0].colors.primary[500],
    },

    /* Theme-specific scopes */
    '.theme-one': {
      '--primary-500': colorThemes[0].colors.primary[500],
    },
    '.theme-two': {
      '--primary-500': colorThemes[1].colors.primary[500],
    },
    '.theme-three': {
      '--primary-500': colorThemes[2].colors.primary[500],
    },
  })
})
