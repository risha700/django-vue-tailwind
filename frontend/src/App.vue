<template>
  <div id="app">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 leading-snug tracking-wider">
      <table class="table-auto container mx-auto py-24 px-6 bg-gray-200">
        <thead class="border-solid border-4 bg-scroll hover:border-red-300 bg-gradient-r-canary">
            <tr>
              <th class="px-4 py-2 font-gradient">Method</th>
              <th class="px-4 py-2 ">Example</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td class="border px-4 py-2">Load .png as a data-url threshold 8192</td>
            <td class="border px-4 py-2">
                  <img alt="Vue logo" src="./assets/logo.png" class="h-12">
            </td>
        </tr>
        <tr>
            <td class="border px-4 py-2">Load .png as a file-loader threshold 8192</td>
            <td class="border px-4 py-2" >
                   <img alt="Vue logo" src="./assets/logo.png" class="h-12">
            </td>
        </tr>
        <tr>
            <td class="border px-4 py-2">Load .svg as a svg-url-loader threshold 8192</td>
            <td class="border px-4 py-2">
                   <img alt="Vue logo" src="./assets/img/svg-urls/shield.svg" class="h-12">
            </td>
        </tr>
        <tr>
            <td class="border px-4 py-2">SVG vue component with gradient</td>
            <td class="border px-4 py-2">
                <svg-icon icon-name="airplay" class-name="icon-vgradient"></svg-icon>
                <svg-icon icon-name="alert-circle"  class-name="icon-hgradient"></svg-icon>

  
            </td>
        </tr>
        <tr>
            <td class="border px-4 py-2">SVG icon-font with gradient url-background</td>
            <td class="border px-4 py-2">
                <span class="class-name-use-svg-icon h-12"></span>
            </td>
        </tr>
    </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'
export default {
  name: 'app',
  components: {
    SvgIcon
  },
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
  text-align: center;
}

.class-name-use-svg-icon {
    &:before {
        font-icon: url('./assets/img/all_icons/terminal.svg');
        background: -webkit-gradient(linear, left top, left bottom, from(#f00), to(#333));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: block;
        font-size: 3rem;
    }
    &:hover::before {
        background:  -webkit-gradient(linear, left top, left bottom, from(#77e190), to(#555555));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: block;
        //font-size: 13em;
    
      }
    }
// #gradient-horizontal {
//   --color-stop-1: #a770ef;
//   --color-stop-2: #cf8bf3;
//   --color-stop-3: #fdb99b;
// }
// #gradient-vertical {
//   --color-stop-1: #00c3ff;
//   --color-stop-2: #77e190;
//   --color-stop-3: #ffff1c;
// }
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
.try-url{
    background:url("./assets/img/svg-urls/shield.svg");
}
</style>
