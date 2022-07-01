const plugin = require('tailwindcss/plugin')

// Helper functions
// -------------------
function transformObject({
  object,
  keyTransform = ({ key }) => key,
  valueTransform = ({ value }) => value,
}) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      keyTransform({ key, value }),
      valueTransform({ key, value }),
    ])
  )
}

// -------------------
// Tailwind CSS Plugin
// -------------------
const multiThemePlugin = plugin.withOptions(
  function(options) {
    const themes = options.themes ?? [{colors: {}}]
    const themeSelector = options.themeSelector ?? function(theme) { return ([`[data-theme="${theme.name}"]`]) }
    const semanticColor = options.semanticColor ?? 'primary'
   return function ({ addBase }) {
      // Root CSS variables
      addBase({
        ':root': transformObject({
          object: themes[0].colors,
          keyTransform: ({ key }) => `--${semanticColor}-${key}`,
        }),
      })
      // Scoped themes
      themes.forEach((t) => {
        addBase({
          [`[data-theme="${t.name}"]`]: transformObject({
            object: t.colors,
            keyTransform: ({ key }) => [`--${semanticColor}-${key}`],
          }),
        })
      })
    }
  },

  function(options) {
    const themes = options.themes ?? [{colors: {}}]
    const semanticColor = options.semanticColor ?? 'primary'
    // Add  new utilities to the Tailwind config's theme
    return {
      theme: {
        extend: {
          colors: {
            [semanticColor]: transformObject({
              object: themes[0].colors,
              valueTransform: ({ key }) => `rgb(var(--${semanticColor}-${key}) / <alpha-value>)`,
            }),
          },
        },
      }
    }
  }
)

// What next?
// Support other keys than just colors
// Add custom variants to target a single theme (like dark mode works)
// Support nested entries in objects?!

module.exports = multiThemePlugin
