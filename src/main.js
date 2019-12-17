import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// axios.defaults.baseURL = 'http://v3.wufazhuce.com:8000';
import VueAxios from 'vue-axios'
import 'amfe-flexible/index.js'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
import 'vue-video-player/src/custom-theme.css'
import vueSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'



Vue.config.productionTip = false
Vue.use(VueAxios,axios,VideoPlayer,vueSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
