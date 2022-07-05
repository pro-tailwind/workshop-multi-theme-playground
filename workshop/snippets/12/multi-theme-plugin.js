const plugin = require('tailwindcss/plugin')
const colorThemes = require('./themes')

module.exports = plugin(
  function ({ addBase }) {
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
    })

    colorThemes.forEach((colorTheme) => {
      addBase({
        [`[data-theme="${colorTheme.name}"]`]: {
          '--primary-50': colorTheme.colors.primary[50],
          '--primary-100': colorTheme.colors.primary[100],
          '--primary-200': colorTheme.colors.primary[200],
          '--primary-300': colorTheme.colors.primary[300],
          '--primary-400': colorTheme.colors.primary[400],
          '--primary-500': colorTheme.colors.primary[500],
          '--primary-600': colorTheme.colors.primary[600],
          '--primary-700': colorTheme.colors.primary[700],
          '--primary-800': colorTheme.colors.primary[800],
          '--primary-900': colorTheme.colors.primary[900],
        },
      })
    })
  },
  {
    theme: {
      extend: {
        colors: {
          primary: {
            50: 'rgb(var(--primary-50) / <alpha-value>)',
            100: 'rgb(var(--primary-100) / <alpha-value>)',
            200: 'rgb(var(--primary-200) / <alpha-value>)',
            300: 'rgb(var(--primary-300) / <alpha-value>)',
            400: 'rgb(var(--primary-400) / <alpha-value>)',
            500: 'rgb(var(--primary-500) / <alpha-value>)',
            600: 'rgb(var(--primary-600) / <alpha-value>)',
            700: 'rgb(var(--primary-700) / <alpha-value>)',
            800: 'rgb(var(--primary-800) / <alpha-value>)',
            900: 'rgb(var(--primary-900) / <alpha-value>)',
          },
        },
      },
    },
  }
)
