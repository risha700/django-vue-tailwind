const _ = require('lodash')

module.exports = function({ addUtilities, e, config, variants }) {
  const gradients = config('theme.gradients', {})
  const gradientVariants = variants('gradients', [])

  const utilities = _.map(gradients, ([start, ...args], name) => ({
    [`.bg-gradient-${e(name)}`]: {
      backgroundImage: `linear-gradient(to right, ${start}, ${args})`
    }
  }))

  addUtilities(utilities, gradientVariants)
}
