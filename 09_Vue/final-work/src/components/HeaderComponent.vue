<template>
  <header class="header">
    <a class="logo">
      <img class="logo__img" src="../assets/img/Logo-1.png" alt="logo">
    </a>
    <nav class="header__nav">
      <a class="header__link" @click="changeContent('Page1Component')">Home</a>
      <a class="header__link" @click="changeContent('Page2Component')">Project</a>
      <a class="header__link" @click="changeContent('Page3Component')">Blog</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: [],
  methods: {
    changeContent (componentType) {
      this.$emit('changeContent', componentType)
    }
  }

}
</script>


<style scoped lang="scss">
@import "@/assets/scss-modules/variables";
.header {
  margin: 44px auto 57px;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo__img {
  width: 177px;
  height: 50px;
}

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