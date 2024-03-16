<template>
  <section class="page2">
    <HeaderContent
        :title="title"
        :links="links"/>
    <LatestPost/>
    <div class="articles">
      <h2 class="articles__title">{{ title }}</h2>
      <div class="articles__wrap">
        <ArticlesComponent
            v-for="article in paginatedData"
            :key="article.id"
            :article="article"/>
      </div>
      <div class="btn-menu">
        <BtnComponent
            :colorBtn="colorBtn"
            :handler="prevPage">
          Prev
        </BtnComponent>
        <BtnComponent
            :colorBtn="colorBtn"
            :handler="nextPage">
          Next
        </BtnComponent>
      </div>
    </div>
  </section>
</template>
<script>
import HeaderContent from "@/components/HeaderContent.vue";
import LatestPost from "@/components/UI/LatestPost.vue";
import {mapActions, mapGetters} from "vuex";
import ArticlesComponent from "@/components/UI/ArticlesComponent.vue";
import BtnComponent from "@/components/UI/BtnComponent.vue";


export default {
  name: "Page2Blog",
  components: {
    BtnComponent,
    ArticlesComponent,
    LatestPost,
    HeaderContent,
  },
  data() {
    return {
      title: 'Articles & News',
      links: [
        {title: 'Home', url: '/home'},
        {title: 'Project', url: '/project'},
      ],
      colorBtn: 'white',
    }
  },
  methods: {
    ...mapActions({
      prevPage: 'articles/prevPage',
      nextPage: 'articles/nextPage',
    }),
  },
  computed: {
    ...mapGetters({
      paginatedData: 'articles/getPaginatedData',
    }),
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss-modules/styles.scss";

.articles {
  margin: 0 auto 200px;
  width: 1200px;

  &__title {
    margin-bottom: 27px;
    font-family: dm sans-serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
    color: $colorPrimary2;
  }

  &__wrap {
    margin-bottom: 51px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 28px;
    row-gap: 30px;
  }
}
</style>