<template>
  <nav class="header__nav">
    <router-link class="header__link" to="/home">
      Home
    </router-link>
    <router-link class="header__link" to="/project">
      Project
    </router-link>
    <router-link class="header__link" to="/blog">
      Blog
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavPages"
}
</script>


<style scoped lang="scss">
@import "@/assets/scss-modules/styles.scss";
.header__nav {
  display: flex;
  gap: 45px;
  color: $colorPrimary2;
  font-family: jost, sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>