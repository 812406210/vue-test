import Vue from "vue";
import VueRouter from "vue-router";
// import $ from 'jquery'
// import './assets/bootstrap/css/bootstrap.min.css'
// import './assets/bootstrap/js/bootstrap.min'
// 引入组件
import navigation from "./components/navigation";
import notbook from "./components/notbook";
import link from "./components/link";
import describe from "./components/describe";
import management from "./components/management";


// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
  {
    path: "/navigation",
    component: navigation
  },
  {
    path: "/notbook",
    component: notbook
  },
  {
    path: "/link",
    component: link
  },
  {
    path: "/describe",
    component: describe
  },
  {
    path: "/management",
    component: management
  }


]

var router =  new VueRouter({
  routes
})
export default router;

