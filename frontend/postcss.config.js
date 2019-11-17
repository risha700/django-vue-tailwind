const purgecss = require('@fullhuman/postcss-purgecss')

class TailwindExtractor {
  static extract(content) {
      return content.match(/[A-z0-9-:\/]+/g);
  }
}

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'?
    [purgecss({
      // whitelist:['@media'],
      content: ['./src/**/**/*.vue', './../templates/**/**/*.html'],
      extractors: [{
        extractor: TailwindExtractor,
        extensions: ["html", "js", "vue","svg"]
    }]
    })]:[],

  ]
}