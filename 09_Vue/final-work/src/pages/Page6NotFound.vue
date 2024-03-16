<template>
  <section class="page6">
    <h1>404</h1>
    <h2>We are sorry, but the page you requested was not found</h2>
    <router-link class="header__link" to="/home">
      <BtnComponent>Back To Home</BtnComponent>
    </router-link>
  </section>
</template>

<script>

import BtnComponent from "@/components/UI/BtnComponent.vue";

export default {
  name: 'Page6NotFound',
  components: {
    BtnComponent
  },
}
</script>


<style scoped lang="scss">
.page6 {
  margin: 0 auto 60px;
  max-width: 1200px;
}
</style>