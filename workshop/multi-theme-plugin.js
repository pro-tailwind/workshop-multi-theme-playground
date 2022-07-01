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
const multiThemePlugin = plugin(
  function ({ addBase, theme }) {
    // Root CSS variables
    addBase({
      ':root': transformObject({
        object: theme('multiTheme')[0].colors,
        keyTransform: ({ key }) => `--primary-${key}`,
      }),
    })
    // Scoped themes
    theme('multiTheme').forEach((t) => {
      addBase({
        [`[data-theme="${t.name}"]`]: transformObject({
          object: t.colors,
          keyTransform: ({ key }) => [`--primary-${key}`],
        }),
      })
    })
  },
  // Add  new utilities to the Tailwind config's theme
  {
    theme: {
      extend: {
        colors: ({ theme }) => ({
          primary: transformObject({
            object: theme('multiTheme')[0].colors,
            valueTransform: ({ key }) => `rgb(var(--primary-${key}) / <alpha-value>)`,
          }),
        }),
      },
    },
  }
)

// What next?
// Support other keys than just colors
// Add custom variants to target a single theme (like dark mode works)
// Support nested entries in objects?!

module.exports = multiThemePlugin
