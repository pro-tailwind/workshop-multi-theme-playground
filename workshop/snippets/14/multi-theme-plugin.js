const plugin = require('tailwindcss/plugin')

// -------------------------------------
// Helper functions
// -------------------------------------

// kebab-case keys for nested color objects
function kebabify(object, prefix = '', output = {}) {
  Object.entries(object).forEach(([key, value]) => {
    // Accumulate kebab prefix
    const keyName = prefix ? `${prefix}-${key}` : key

    if (typeof value === 'object') {
      // Recursively call kebabify if hitting nested object
      kebabify(value, keyName, output)
    } else {
      // Populate the output object with current keyName
      output[keyName] = value
    }
  })
  return output
}

function transformObject({
  object = {},
  keyTransform = ({ key }) => key,
  valueTransform = ({ value }) => value,
}) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      return [keyTransform({ key, value }), valueTransform({ key, value })]
    })
  )
}

module.exports = plugin.withOptions(
  function (options) {
    const colorThemes = options.themes ?? [{colors: {}}]
    return function ({ addBase }) {
      addBase({
        ':root': transformObject({
          object: kebabify(colorThemes[0].colors),
          keyTransform: ({ key }) => `--${key}`,
        }),
      })

      colorThemes.forEach((colorTheme) => {
        addBase({
          [`[data-theme="${colorTheme.name}"]`]: transformObject({
            object: kebabify(colorTheme.colors),
            keyTransform: ({ key }) => `--${key}`,
          }),
        })
      })
    }
  },
  function (options) {
    const colorThemes = options.themes ?? [{ colors: {}}]
    return {
      theme: {
        extend: {
          colors: transformObject({
            object: kebabify(colorThemes[0].colors),
            valueTransform: ({ key }) => `rgb(var(--${key}) / <alpha-value>)`,
          }),
        },
      },
    }
  }
)
