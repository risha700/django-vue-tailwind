const { colors, fill } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      //applied as background-image
      gradients: theme => ({
        'blue-green': [theme('colors.blue.500'), theme('colors.green.500')],
        'purple-blue': [theme('colors.purple.500'), theme('colors.blue.500'), theme('colors.pink.500')],

      }),
      colors: {
        gradient:{
            regal: "#e2e",
        }
      }
    }
  },
  variants: {
      //  fill: ['responsive', 'hover', 'focus'],
       gradients: ['responsive', 'hover','focus'],
      //  textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      //  colors: ['responsive', 'hover', 'focus', 'active', 'group-hover'],

  },
  plugins: [
    require('./plugins/gradients'),
    require('./plugins/utils'),

  ]
}
 