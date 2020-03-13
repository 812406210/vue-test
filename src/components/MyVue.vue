<template>
    <div class="myVue">
      <h1>Hello {{msg}} Conponents</h1>
    </div>
</template>

<script>
    export default {
        name: "MyVue",
      data () {
        return {
          msg: 'MyVue'
        }
      }
    }
</script>

<style scoped>

</style>
