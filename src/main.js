// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import index from './index'
import  router from './router.js'
import $ from 'jquery'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.min'
import echarts from 'echarts'
import http from 'vue-resource'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
Vue.use(http);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { index },
  template: '<index/>',

})
