<template>
  <div id="app">
    <SeminarComp/>
    <CartComp/>
    <JsonPlaceholder/>
  </div>
</template>

<script>

import SeminarComp from "@/components/SeminarComp.vue";
import CartComp from "@/components/CartComp.vue";
import JsonPlaceholder from "@/components/JsonPlaceholder.vue";

export default {
  name: 'App',
  components: {
    JsonPlaceholder,
    SeminarComp,
    CartComp,
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
