const plugin = require('tailwindcss/plugin')

// -------------------------------------
// Helper functions
// -------------------------------------

function getCssVarDeclarations(input, path = [], output = {}) {
  for (const [key, value] of Object.entries(input)) {
    const newPath = path.concat(key)

    if (typeof value === 'string') {
      output[`--${newPath.join('-')}`] = value
    } else {
      getCssVarDeclarations(value, newPath, output)
    }
  }
  return output
}

function getInputWithCssVarReferences(input, path = []) {
  return Object.fromEntries(
    Object.entries(input).map(([key, value]) => {
      if (typeof value === 'string') {
        return [key, `rgb(var(--${path.concat(key).join('-')}) / <alpha-value>)`]
      }
      return [key, getInputWithCssVarReferences(value, path.concat(key))]
    })
  )
}

// -------------------------------------
// Plugin definition
// -------------------------------------

const multiThemePlugin = plugin.withOptions(
  function (options) {
    const colorThemes = options.themes ?? [{ colors: {} }]

    // -------------------------------------
    // CSS variables declaration
    // -------------------------------------
    return function ({ addBase }) {
      addBase({
        ':root': getCssVarDeclarations(colorThemes[0].colors),
      })

      colorThemes.forEach((colorTheme) => {
        addBase({
          [`[data-theme="${colorTheme.name}"]`]: getCssVarDeclarations(colorTheme.colors),
        })
      })
    }
  },
  function (options) {
    const colorThemes = options.themes ?? [{ colors: {} }]

    // -------------------------------------
    // Extending the project's `theme`
    // -------------------------------------
    return {
      theme: {
        extend: {
          colors: getInputWithCssVarReferences(colorThemes[0].colors),
        },
      },
    }
  }
)

module.exports = multiThemePlugin
