import dishData from './data'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

window.data = dishData;
Vue.config.productionTip = false

Vue.mixin({
  computed: {
    URL() {
      return process.env.NODE_ENV == 'development' 
        ? ~window.location.href.indexOf('192.168') ? 'http://192.168.0.102:8080/' : 'http://localhost:8080/' 
        : process.env.BASE_URL;
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
