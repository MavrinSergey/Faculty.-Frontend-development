<script>
// import ProjectComponent from '@/components/ProjectComponent.vue';
import ArticlesComponent from "@/components/ArticlesComponent.vue";

export default {
  name: "Page1Component",
  props: ['articles'],
  components: {
    ArticlesComponent,
    // ProjectComponent,
  },
  data() {
    return {

    }
  },
}
</script>
<template>
  <section class="page2">
    <div class="header">
      <div class="header__wrap">
        <h1 class="header__title">Articles & News</h1>
        <nav class="header__nav">
          <a class="header__link" href="#">Home </a><span>/</span>
          <a class="header__link" href="#"> Blog</a>
        </nav>
      </div>
    </div>
    <div class="latest-post">
      <div class="latest-post__title">Latest Post</div>
      <figure class="post">
        <img src="@/assets/img/Image.png" alt="kitchen"/>
        <figcaption>
          <div class="post__title">Low Cost Latest Invented Interior Designing Ideas</div>
          <div class="post__content">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim
            maximus.posuere in.Contrary to popular belief.

            Lorem Ipsum is not simply random text. It has roots in a piece of classica.
          </div>
          <div class="post__date-wrap">
            <p class="post__date">26 December,2022</p>
            <img class="post__arrow" src="@/assets/img/arrow_circle.png" alt="arrow_circle">
          </div>
        </figcaption>
      </figure>
    </div>
    <div class="articles">
      <h2 class="articles__title">Articles & News</h2>
      <div class="articles__wrap">
        <ArticlesComponent v-for="article in articles" :key="article.id" :article="article"/>
      </div>
      <nav class="articles__nav">
        <button class="btn__pagination">01</button>
        <button class="btn__pagination">02</button>
        <button class="btn__pagination">03</button>
        <button class="btn__pagination">&#62;</button>
      </nav>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import "@/assets/scss-modules/variables";
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
  }
}

.latest-post {
  margin: 0 auto 150px;
  width: 1200px;

  &__title {
    margin-bottom: 27px;
    font-family: dm;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    color: $colorPrimary2;
  }
}

.post {
  padding: 22px;
  display: flex;
  align-items: center;
  gap: 65px;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 62px;
  box-shadow: 0 10px 30px 0 rgba(255, 255, 255, 0.25);

  figcaption {
    margin-right: 34px;
  }

  &__title {
    margin-bottom: 22px;
    font-family: dm;
    font-size: 25px;
    font-weight: 400;
    line-height: 125%;
    color: $colorPrimary2;
  }

  &__content {
    margin-bottom: 41px;
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
    color: $colorTextGrey2;
  }

  &__date-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;

  }
}

.articles {
  margin: 0 auto 200px;
  width: 1200px;

  &__title {
    margin-bottom: 27px;
    font-family: dm;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    color: $colorPrimary2;
  }
  &__wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 28px;
    row-gap: 30px;
  }
  &__nav {
    padding: 51px calc( 50% - 134px) 0;
    display: flex;
    gap: 20px;
  }
}
.btn__pagination {
  width: 52px;
  height: 52px;
  border: 1px solid $colorPrimary;
  border-radius: 50%;
  font-family: Jost;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%;
  color: $colorPrimary2;
}

</style>