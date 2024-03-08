<template>
  <section class="page2">
    <HeaderContent :title="title" :links="links"/>
    <LatestPost/>
    <div class="articles">
      <h2 class="articles__title">{{ title }}</h2>
      <div class="articles__wrap">
        <ArticlesComponent v-for="article in articlesItem" :key="article.id" :article="article"/>
      </div>
      <div class="btn-menu">
        <BtnComponent :colorBtn="colorBtn" :disabled="pagination_pageNumber === 0"
                      @click="prevPage">Prev</BtnComponent>
        <BtnComponent :colorBtn="colorBtn" :disabled="pagination_pageNumber >= pageCount - 1"
                      @click="nextPage">Next</BtnComponent>
      </div>
    </div>
  </section>
</template>
<script>
import HeaderContent from "@/components/HeaderContent.vue";
import LatestPost from "@/components/UI/LatestPost.vue";
import { mapGetters } from "vuex";
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
      pagination_pageNumber: 0,
      pagination_numberItems: 6,
      // pagination_items_total: this.articles.length,
    }
  },
  methods: {
    // nextPage() {
    //   this.pagination_pageNumber++;
    // },
    // prevPage() {
    //   this.pagination_pageNumber--;
    // }
  },
  computed: {
    ...mapGetters(['articlesItem']),
    // pageCount() {
    //   return Math.ceil(this.pagination_items_total / this.pagination_numberItems);
    // },
    // paginatedData() {
    //   const start = this.pagination_pageNumber * this.pagination_numberItems,
    //       end = start + this.pagination_numberItems;
    //   return this.articles.slice(start, end);
    // }
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
    font-family: dm;
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