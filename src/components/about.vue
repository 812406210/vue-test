<template>

  <div>
    <h1>about</h1>
    <p>{{aboutMsg}}</p>
    <div id="home">
      <div class="btn-group" role="group" aria-label="...">
        <button type="button" class="btn btn-default">Left</button>
        <button type="button" class="btn btn-default">Middle</button>
        <button type="button" class="btn btn-default">Right</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        aboutMsg: '我是about组件'
      }
    }
  }
</script>
