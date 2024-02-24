<template>
  <div class="article">
    <img :src="urlImg" alt="article">
    <h3 class="article__title">{{ title }}</h3>
    <p>{{ date }}</p>
  </div>
</template>

<script>
export default {
  props: ['article'],
  name: "ArticlesComponent",
  computed: {
    urlImg() {
      return this.article.urlImg;
    },
    title() {
      return this.article.title;
    },
    date() {
      return this.article.date;
    }
  }
}
</script>


<style scoped lang="scss">

</style>