<script>
export default {
  name: "HeaderContent",
  props: ['title', 'links']
}
</script>

<template>
  <div class="header">
    <div class="header__wrap">
      <h1 class="header__title">{{ title }}</h1>
      <nav class="header__nav">
        <router-link class="header__link" v-for="link in links" :key="link.id" :to="link.url">{{ link.title }}</router-link>
      </nav>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss-modules/styles.scss";

.header {
  margin-bottom: 200px;
  padding: 178px calc(50% - 256px) 0;
  max-height: 356px;
  background-image: url("@/assets/img/page2_Image1.png");

  &__wrap {
    padding: 41px 0;
    background-color: white;
    border-radius: 37px 37px 0 0;
  }

  &__title {
    text-align: center;
    font-family: dm;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    color: $colorPrimary2;
  }

  &__nav {
    text-align: center;
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    color: $colorTextGrey2;
    a:not(a:last-child):after {
      content: '/';
    }
    a:not(a:first-child) {
      margin-left: 7px;
    }
  }
}
</style>