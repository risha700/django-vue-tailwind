const { colors, fill } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors:{},
      linearGradients: {
        directions: { // defaults to these values
          't': 'to top',
          'tr': 'to top right',
          'r': 'to right',
          'br': 'to bottom right',
          'b': 'to bottom',
          'bl': 'to bottom left',
          'l': 'to left',
          'tl': 'to top left',
        },
        colors: { // defaults to {}
          'greyish':['#465d5c, #607376, #7d898f, #9aa1a6, #b7b9bd, #b0b1b6, #a9aaae, #a2a2a7, #787982, #51525e, #2d2e3d, #0a0a1e'],
          'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
          'canary':['#051937', '#004d7a', '#008793', '#00bf72', '#a8eb12'],
          'pinky-swear':['#d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1'],
          'blueish':['#d18d6b, #e08676, #ec7f89, #f07ba1, #ec7cbe, #d68ddd, #b89ef3, #95aeff, #68c5ff, #36daff, #2eecff, #5ffbf1']

        },
      },
  },
  
},
  variants: {
       fill: ['responsive', 'hover', 'focus'],
       borderStyle: ['responsive', 'hover', 'focus'],
       backgroundColor: ['responsive', 'hover', 'focus'],
      //  textColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      //  colors: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      backgroundImage: ['responsive','hover','focus'], // this is for the "bg-none" utility
      linearGradients: ['responsive','hover','focus'],
      // radialGradients: ['responsive','hover','focus'],

  },
  plugins: [
    require('./plugins/utils'),
    require('./plugins/tailwindcss-gradients')(),

  ]
}
 