import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import flexable from './assets/js/flexble'
Vue.prototype.$axios=axios;
Vue.config.productionTip = false
import "../public/font_kk3jj7lmbre/iconfont.css"
import "../public/font_050in0plwdql/iconfont.css"
import "../public/font_nnv37zxtv/iconfont.css"
import "../public/font_lv0uzg6bg2d/iconfont.css"
import "../public/font_r58hazwdrv/iconfont.css"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
