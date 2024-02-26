<template>
  <div class="article">
    <img class="article__img" src="@/assets/img/article_1.png" alt="article">
    <h3 class="article__title">{{ title }}</h3>
    <div class="article__date-wrap">
      <p class="article__date">{{ date }}</p>
      <img class="article__arrow" src="@/assets/img/arrow_circle.png" alt="arrow_circle">
    </div>
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
@import "@/assets/scss-modules/variables";
.article {
  padding: 21px;
  height: 521px;
  display: flex;
  flex-direction: column;
  gap: 21px;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 62px;
  box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);

  &__img {
    border-radius: 45px 45px 0 0;
  }

  &__title {
    color: $colorPrimary2;
    font-family: dm;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
  }

  &__date {
    color: $colorTextGrey2;
    font-family: Jost;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    &-wrap {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__arrow {
    width: 52px;
  }
}
</style>