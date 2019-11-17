<template>
  <div id="app" class="mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
    <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 leading-snug tracking-wider">
      <table class="table-auto container mx-auto py-24 px-6 bg-gray-200">
        <thead class="bg-gradient-blue-green">
            <tr>
              <th class="px-4 py-2">Method</th>
              <th class="px-4 py-2">Example</th>
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

    <div class="max-w-sm rounded overflow-hidden shadow-lg">
<!--      <img class="w-full" src='./assets/svg/stopwatch.svg' alt="Sunset in the mountains">-->
       <span class="class-name-use-svg-icon"></span>
      <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
        </div>
  </div>

  <div class="">
    <div class="inline-flex items-center bg-white leading-none text-purple-600 rounded-full p-2 shadow text-md">
      <span class="inline-flex bg-purple-600 text-white rounded-full h-6 px-3 justify-center items-center text-">Purple</span>
      <span class="inline-flex px-2">Aliquam condimentum, odio ac finibus fermentum neque risus.</span>
    </div>
  </div>


    <div class="w-1/2 mx-auto">
  <div class="w-full shadow-2xl subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
    <div class="flex items-center h-6 rounded-t bg-gray-100 border-b border-gray-500 text-center text-black" id="headerTerminal">
      <div class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3" id="closebtn">
      </div>
      <div class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3" id="minbtn">
      </div>
      <div class="ml-2 border-green-900 bg-green-500 shadow-inner rounded-full w-3 h-3" id="maxbtn">
      </div>
      <div class="mx-auto pr-16" id="terminaltitle">
        <p class="text-center text-sm">Terminal</p>
      </div>

    </div>
    <div class="pl-1 pt-1 h-auto  text-green-200 font-mono text-xs bg-black" id="console">
      <p class="pb-1">Last login: Wed Sep 25 09:11:04 on ttys002</p>
      <p class="pb-1">Laraben:Devprojects laraben$</p>
    </div>
  </div>
</div>

    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'
export default {
  name: 'app',
  components: {
    SvgIcon
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  margin-top: 60px;
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
.try-url{
    background:url("./assets/img/svg-urls/shield.svg");
}
</style>
