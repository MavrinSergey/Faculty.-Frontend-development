<template>
  <div id="app">
    <CalcComponent/>
  </div>
</template>

<script>

import CalcComponent from './components/CalcComponent.vue'

export default {
  name: 'App',
  components: {
    CalcComponent
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
