// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'// 样式文件一定要引入
Vue.config.productionTip = false
var url = 'http://localhost:3000'
Vue.use(ElementUI);
axios.get(url + '/product')
  .then(function (response) {
    console.log(response, 77)
  })
  .catch(function (error) {
    console.log(error, 778)
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
