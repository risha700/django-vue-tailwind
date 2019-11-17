import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import './assets/styles/app.scss'
Vue.config.productionTip = false

import SvgIcon from "./components/SvgIcon"
Vue.component("SvgIcon",SvgIcon)

const app = new Vue({
  el:"#app",
  store,
  render: process.env.NODE_ENV === 'development'?h => h(App):''
});

