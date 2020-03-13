import Vue from "vue";
import VueRouter from "vue-router";
// import $ from 'jquery'
// import './assets/bootstrap/css/bootstrap.min.css'
// import './assets/bootstrap/js/bootstrap.min'
// 引入组件
import home from "./components/home.vue";
import about from "./components/about.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
  {
    path:"/home",
    component: home
  },
  {
    path: "/about",
    component: about
  }
]

var router =  new VueRouter({
  routes
})
export default router;

