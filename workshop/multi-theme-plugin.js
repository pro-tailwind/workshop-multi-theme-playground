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

// -----------------------------
// Plugin definition
// -----------------------------

const multiThemePlugin = plugin.withOptions(function (options) {
  const themes = options?.themes
  if (!themes) throw new Error('Please pass a `themes` option when registering the multi-theme plugin.')
  
  const defaultThemeColors = Object.values(themes)[0]?.colors
  if (!defaultThemeColors) throw new Error('The themes object passed to the multi-theme plugin should contain a `colors` object.') 
    return function ({ addBase }) {
      addBase({
        ':root': getCssVarDeclarations(defaultThemeColors),
      })

      Object.entries(themes).forEach(([key, value]) => {
        if (!value.colors) throw new Error (`The ${key} theme does not have a colors property, make sure to add one!`)
        addBase({
          [`[data-theme="${key}"]`]: getCssVarDeclarations(value?.colors),
        })
      })
    }
  },
  function (options) {
    const { themes } = options
    return {
      theme: {
        extend: {
          colors: getInputWithCssVarReferences(Object.values(themes)[0].colors),
        },
      },
    }
})

module.exports = multiThemePlugin

// const plugin = require('tailwindcss/plugin')

// // -------------------------------------
// // Helper functions
// // -------------------------------------

// function getCssVarDeclarations(input, path = [], output = {}) {
//   for (const [key, value] of Object.entries(input)) {
//     const newPath = path.concat(key)

//     if (typeof value === 'string') {
//       output[`--${newPath.join('-')}`] = value
//     } else {
//       getCssVarDeclarations(value, newPath, output)
//     }
//   }
//   return output
// }

// function getInputWithCssVarReferences(input, path = []) {
//   return Object.fromEntries(
//     Object.entries(input).map(([key, value]) => {
//       if (typeof value === 'string') {
//         return [key, `rgb(var(--${path.concat(key).join('-')}) / <alpha-value>)`]
//       }
//       return [key, getInputWithCssVarReferences(value, path.concat(key))]
//     })
//   )
// }

// // -------------------------------------
// // Plugin definition
// // -------------------------------------

// const multiThemePlugin = plugin.withOptions(
//   function (options) {
//     const colorThemes = options.themes ?? [{ colors: {} }]

//     // -------------------------------------
//     // CSS variables declaration
//     // -------------------------------------
//     return function ({ addBase }) {
//       addBase({
//         ':root': getCssVarDeclarations(colorThemes[0].colors),
//       })

//       colorThemes.forEach((colorTheme) => {
//         addBase({
//           [`[data-theme="${colorTheme.name}"]`]: getCssVarDeclarations(colorTheme.colors),
//         })
//       })
//     }
//   },
//   function (options) {
//     const colorThemes = options.themes ?? [{ colors: {} }]

//     // -------------------------------------
//     // Extending the project's `theme`
//     // -------------------------------------
//     return {
//       theme: {
//         extend: {
//           colors: getInputWithCssVarReferences(colorThemes[0].colors),
//         },
//       },
//     }
//   }
// )

// module.exports = multiThemePlugin
