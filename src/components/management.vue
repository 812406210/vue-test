<template>
  <div class="container">
    <h2>练习表格-post请求练习</h2>
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
        name: "management",
      data(){
          return {
            list:[]
          }
      },
      created() {
        //带参请求
        this.$http.post('http://127.0.0.1:8081/getUserByParam',
          {
            id:11,
            userName:'jie'
          }//注意，get请求一定要加params，post请求不需要
             ).then((response) =>{
          this.list=response.body
          console.log(this.list)
        })
      }
    }
</script>

<style scoped>

</style>
