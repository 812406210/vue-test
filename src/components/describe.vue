<template>

  <div>
    <h2>echarts练习</h2>
    <div style="width:500px;height:500px" ref="chart"></div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      drawLine() {
        console.log("请求开始......")
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(this.$refs.chart);
        //无参的get请求
        console.log("this---->"+ this.$http)
        this.$http.get('http://127.0.0.1:8081/get').then((res) => {
          console.log("获取的数据为："+res.body.row)
          // 绘制图表
          myChart.setOption({
            title: {text: res.body.title},
            tooltip: {},
            xAxis: {
              data: res.body.column
            },
            yAxis: {},
            series: [{
              name: '销量',
              type: 'bar',
              data: res.body.row
            }]
          });
        }).catch(function (err) {
            console.log(err);
          })
      }
    },
    mounted(){
      this.drawLine();
    }
  }
</script>

<style scoped>

</style>
