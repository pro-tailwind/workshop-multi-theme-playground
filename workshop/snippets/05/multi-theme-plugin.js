const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({ addBase }) {
  addBase({
    body: {
      textTransform: 'uppercase',
    },
  })
})
