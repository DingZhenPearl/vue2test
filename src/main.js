import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import TDesign from 'tdesign-vue'
import 'element-ui/lib/theme-chalk/index.css'
import 'tdesign-vue/es/style/index.css'


Vue.use(ElementUI)
Vue.use(TDesign)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
