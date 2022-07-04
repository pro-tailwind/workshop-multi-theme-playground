const plugin = require('tailwindcss/plugin')

// -----------------------------------------------------------------
// Helper functions
// -----------------------------------------------------------------

// Flatten objects and kebabify its properties
function kebabify(object, prefix = '', output = {}) {
  Object.entries(object).forEach(([key, value]) => {
    // Accumulate the key name separated by `-`
    const keyName = prefix ? `${prefix}-${key}` : key
    if (typeof value === 'object') {
      // Recursively call kebabify when hitting nested objects
      kebabify(value, keyName, output)
    } else {
      // Populate the output object with the current key name
      output[keyName] = value
    }
  })
  // Return the complete, flat object
  return output
}

// Apply transforms to the keys or values of an already flattened object
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

// -----------------------------------------------------------------
// Plugin definition
// -----------------------------------------------------------------
const multiThemePlugin = plugin.withOptions(
  function (options) {
    return function ({ addBase, addVariant }) {
      
      // -----------------------------------------------------------------
      // Rroot scope CSS variables
      // -----------------------------------------------------------------

      // Get user-defined themes
      const themes = options.themes ?? [{ colors: {} }]
      // Generate CSS-in-JS object to define CSS variables at the `:root` scope
      const rootCssVariables = {
        ':root': transformObject({
          object: kebabify(themes[0].colors),
          keyTransform: ({key}) => `--${key}`
      })}
      // Inject that CSS in Tailwind's `base` layer
      addBase(rootCssVariables)

      addBase({
        ':root': transformObject({
          object: kebabify(themes[0].borderRadius),
          keyTransform: ({key}) => '--' + key
        })
      })

      // -----------------------------------------------------------------
      // Scoped CSS variables for each themes
      // -----------------------------------------------------------------

      // Assign different values to the same CSS variables, within individual theme scopes
      themes.forEach((theme) => {
        // Generate CSS-in-JS
        const scopedVariablesCss = {
          [`[data-theme="${theme.name}"]`]: transformObject({
              object: kebabify(theme.colors),
              keyTransform: ({key}) => `--${key}`
          })}
        // Inject that CSS in Tailwind's `base` layer
          addBase(scopedVariablesCss)

          addBase(
            {
              [`[data-theme="${theme.name}"]`]: transformObject(
                {
                  object: kebabify(theme.borderRadius),
                  keyTransform: ({key}) => '--' + key,
                }
              )
      })})

    // -----------------------------------------------------------------
    // Theme-specifc variants for bespoke, element-specific overrides
    // -----------------------------------------------------------------

    themes.forEach((theme) => {
      addVariant(`theme-${theme.name}`, `[data-theme=${theme.name}] &`)
    })
    }
  },

  // -----------------------------------------------------------------
  // Tailwind config theme object
  // -----------------------------------------------------------------
  function (options) {
    const themes = options.themes ?? [{ colors: {} }]
    return {
      theme: {
        extend: {
          colors: transformObject({
            object: kebabify(themes[0].colors),
            valueTransform: ({key}) => `rgb(var(--${key}) / <alpha-value>)`
          }),
          borderRadius: transformObject({
            object: kebabify(themes[0].borderRadius),
            valueTransform: ({key}) => `var(--${key})`
          }),
        },
      },
    }
  }
)

// What next?
// Support other keys than just colors?

module.exports = multiThemePlugin
