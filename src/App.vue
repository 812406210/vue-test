<template>
  <div id="app">
    <img src="./assets/logo.png">
<!--    <HelloWorld/>-->
    <br/>
    <header>
      <!-- router-link 定义点击后导航到哪个路径下 -->
      <router-link to="/home">Home</router-link>
      <router-link to="/about">About</router-link>
    </header>
    <!-- 对应的组件内容渲染到router-view中 -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import MyVue from  './components/MyVue'
export default {name: 'App',
  components: {HelloWorld,
    MyVue
}  //组件注册

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
