<template>
  <div class="container">
    <h2>练习表格</h2>
    <table class="table table-bordered">
      <caption>边框表格布局</caption>
      <thead>
      <tr>
        <th>编号</th>
        <th>用户名</th>
        <th>电话</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in list" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.userName}}</td>
        <td>{{item.phoneNumber}}</td>

      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: "link",
      data(){
          return {//return返回的数据为全局变量
            list:[]
          }
      },
      created() {
          this.$http.get('http://127.0.0.1:8081/getUser').then((response) =>{
            this.list=response.body.user
            console.log(this.list)
          })
      }
    }
</script>

<style scoped>

</style>
