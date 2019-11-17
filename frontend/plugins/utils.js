module.exports = ({ addUtilities, theme }) => {

      let sharpenUtilities = {
        '.skew-10deg': {
          transform: 'skewY(-10deg)',
        },
        '.skew-15deg': {
          transform: 'skewY(-15deg)',
        },
      }
      let fontGradientUtils = {
          '.font-gradient':{
            fontSize:'72px',
            background: theme('colors.gradient.menu'),
            backgroundClip:'text',
            '-webkit-text-fill-color':'transparent'

          }
      }

      let imagesUtilities = {
        '.object-contain': { objectFit: 'contain' },
        '.object-cover': { objectFit: 'cover' },
        '.object-fill': { objectFit: 'fill' },
        '.object-none': { objectFit: 'none' },
        '.object-scale': { objectFit: 'scale-down' },
      }
      addUtilities(sharpenUtilities,['responsive', 'hover'])
      addUtilities(fontGradientUtils,['responsive', 'hover'])
      addUtilities(imagesUtilities,['responsive', 'hover'])
    }

