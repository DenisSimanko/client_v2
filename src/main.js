import dishData from './data'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

window.data = dishData;
Vue.config.productionTip = false

Vue.mixin({
  computed: {
    URL() {
      return process.env.BASE_URL.indexOf('localhost')
      ? 'http://localhost:8080/'
      : 'http://pizza365.com.ua/'
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
