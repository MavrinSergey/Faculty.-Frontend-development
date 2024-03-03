<template>
  <section class="page2">
    <HeaderContent :title="title" :links="links"/>
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
        <ArticlesComponent v-for="article in paginatedData" :key="article.id" :article="article"/>
      </div>
      <div class="btn-menu">
        <button class="btn btn_white btn_prev"
                :disabled="pagination_pageNumber === 0"
                @click="prevPage">
          Prev
        </button>
        <button class="btn btn_white"
                :disabled="pagination_pageNumber >= pageCount - 1"
                @click="nextPage">
          Next
        </button>
      </div>
    </div>
  </section>
</template>
<script>
// import ProjectComponent from '@/components/ProjectComponent.vue';
import ArticlesComponent from "@/components/UI/ArticlesComponent.vue";
import HeaderContent from "@/components/UI/HeaderContent.vue";

export default {
  name: "Page1Component",
  props: ['articles'],
  components: {
    HeaderContent,
    ArticlesComponent,
  },
  data() {
    return {
      title: 'Articles & News',
      links: [
        {title: 'Home', url: '#'},
        {title: 'Blog', url: '#'},
      ],
      pagination_pageNumber: 0,
      pagination_numberItems: 6,
      pagination_items_total: this.articles.length,
    }
  },
  methods: {
    nextPage() {
      this.pagination_pageNumber++;
    },
    prevPage() {
      this.pagination_pageNumber--;
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.pagination_items_total / this.pagination_numberItems);
    },
    paginatedData() {
      const start = this.pagination_pageNumber * this.pagination_numberItems,
          end = start + this.pagination_numberItems;
      return this.articles.slice(start, end);
    }
  }
}
</script>

<style scoped lang="scss">
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
    margin-bottom: 51px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 28px;
    row-gap: 30px;
  }
}



</style>