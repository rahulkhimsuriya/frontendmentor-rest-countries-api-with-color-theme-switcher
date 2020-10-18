import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.filter('formateNumber', function(value) {
  if (!value) return ''
  return new Intl.NumberFormat().format(value)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
