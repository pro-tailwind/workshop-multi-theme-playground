const colors = require('tailwindcss/colors')

const themes = [
  {
    name: 'default',
    colors: {
      primary: {
        50: colors.indigo[50],
        100: colors.indigo[100],
        200: colors.indigo[200],
        300: colors.indigo[300],
        400: colors.indigo[400],
        500: colors.indigo[500],
        600: colors.indigo[600],
        700: colors.indigo[700],
        800: colors.indigo[800],
        900: colors.indigo[900],
      },
    },
  },
  {
    name: 'ocean',
    colors: {
      primary: {
        50: '#dafbe1',
        100: '#aceebb',
        200: '#6fdd8b',
        300: '#4ac26b',
        400: '#2da44e',
        500: '#1a7f37',
        600: '#116329',
        700: '#044f1e',
        800: '#003d16',
        900: '#002d11',
      },
    },
  },
  {
    name: 'pink',
    colors: {
      primary: {
        50: '#ffeff7',
        100: '#ffd3eb',
        200: '#ffadda',
        300: '#ff80c8',
        400: '#e85aad',
        500: '#bf3989',
        600: '#99286e',
        700: '#772057',
        800: '#611347',
        900: '#4d0336',
      },
    },
  },
]

module.exports = themes
