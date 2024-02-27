<template>
  <div id="app">
    <CalcFunc/>
  </div>
</template>

<script>

import CalcFunc from "@/components/CalcFunc.vue";

export default {
  name: 'App',
  components: {
    CalcFunc,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
