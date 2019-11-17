<template>
        <!-- gradient color -->
    <svg aria-hidden="true" focusable="false" style="width:0;height:0;position:absolute;">
      <linearGradient id="gradient-horizontal">
        <stop offset="0%" stop-color="var(--color-stop-1)" />
        <stop offset="50%" stop-color="var(--color-stop-2)" />
        <stop offset="100%" stop-color="var(--color-stop-3)" />
        </linearGradient>
        <linearGradient id="gradient-vertical" x2="0" y2="1">
        <stop offset="0%" stop-color="var(--color-stop-1)" />
        <stop offset="50%" stop-color="var(--color-stop-2)" />
        <stop offset="100%" stop-color="var(--color-stop-3)" />
      </linearGradient>
    </svg>
</template>

<script>
    export default {
        name: "SvgGradientColor"
    }
</script>

<style lang="scss">
#gradient-horizontal {
  --color-stop-1: #a770ef;
  --color-stop-2: #cf8bf3;
  --color-stop-3: #fdb99b;
}
#gradient-vertical {
  --color-stop-1: #00c3ff;
  --color-stop-2: #77e190;
  --color-stop-3: #ffff1c;
}
.icon-hgradient {
  fill: url(#gradient-horizontal) gray;
  /* We could use it as a stroke fill too:
  stroke: url(#gradient-horizontal) gray; */
  &:hover{
     fill: url(#gradient-vertical) blue;
  }
}
.icon-vgradient {
  fill: url(#gradient-vertical) gray;
}
</style>