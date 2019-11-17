<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :href="name"></use>
    <svg-gradient-color></svg-gradient-color>
  </svg>
</template>

<script>
// https://webpack.js.org/guides/dependency-management/#context-module-api
const requireAll = requireContext => requireContext.keys().forEach(requireContext)
const req = require.context('../assets/img/icons', false, /\.svg$/)
requireAll(req)

import SvgGradientColor from "./SvgGradientColor";
export default {
  components:{SvgGradientColor},
  name: 'SvgIcon',
  props: {
    iconName: {
      // icon filename
      type: String,
      required: true,
    },
    className: {
      // css class name
      type: String,
      default: '',
    },
  },
  computed: {
    name() {
      let icon = this.iconName
      return icon ? `#icon-${icon}` : ''

    },
    svgClass() {
      let className = this.className
      return className ? `svg-icon ${className}` : 'svg-icon'
    },

  },
}
</script>

<style>
.svg-icon {
  /* width: 1em;
  height: 1em; */
  fill: currentColor;
  overflow: hidden;
}
</style>
