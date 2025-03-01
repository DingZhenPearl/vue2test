import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import TDesign from 'tdesign-vue'
import Antd from 'ant-design-vue';
import 'element-ui/lib/theme-chalk/index.css'
import 'tdesign-vue/es/style/index.css'
import 'ant-design-vue/dist/antd.css';

Vue.use(TDesign)
Vue.use(Antd);
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
