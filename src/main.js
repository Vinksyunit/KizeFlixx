import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vuetify from '@/plugins/vuetify'
import Carousel3d from 'vue-carousel-3d';


Vue.use(Carousel3d);


Vue.config.productionTip = false
axios.defaults.baseURL = 'https://www.omdbapi.com/?apikey=61d07e3&page=1&type=movie&'

new Vue({
  render: h => h(App),
  vuetify,
  router
}).$mount('#app')
  