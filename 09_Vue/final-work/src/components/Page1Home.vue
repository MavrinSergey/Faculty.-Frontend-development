<template>
  <section class="page1">
    <div class="page1__header">
      <h1 class="page1__header-title">Let Your Home Be Unique</h1>
      <p class="page1__text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
      <BtnComp :textBtn="textBtn" :color-btn="colorBtn"/>
    </div>
    <div class="projects__wrap">
      <h2 class="projects__title">Follow Our Projects</h2>
      <p class="page1__text projects__desc">It is a long established fact that a reader will be distracted by the of
        readable
        content of page lookings at its layouts points.</p>
      <ul class="projects">
        <ProjectComponent v-for="project in modifiedProjects" :project="project" :key="project.id"/>
      </ul>
    </div>
    <div class="descriptions">
      <div class="description">
        <p>12</p>
        <p>Years Of Experiance</p>
      </div>
      <img src="@/assets/img/Line_vertical.png">
      <div class="description">
        <p>85</p>
        <p>Success Project</p>
      </div>
      <img src="@/assets/img/Line_vertical.png">
      <div class="description">
        <p>15</p>
        <p>Active Project</p>
      </div>
      <img src="@/assets/img/Line_vertical.png">
      <div class="description">
        <p>95</p>
        <p>Happy Customers</p>
      </div>
    </div>
    <div class="articles">
      <h2 class="articles__title">Articles & News</h2>
      <p class="articles__desc">It is a long established fact that a reader will be distracted by the of readable
        content of a page when lookings at its layouts the points of using.</p>
      <ul class="articles__wrap">
        <ArticlesComponent v-for="article in modifiedArticle" :key="article.id" :article="article"/>
      </ul>
    </div>
  </section>
</template>
<script>
import ProjectComponent from '@/components/UI/ProjectComponent.vue';
import ArticlesComponent from "@/components/UI/ArticlesComponent.vue";
import BtnComp from "@/components/UI/BtnComponent.vue";

export default {
  name: "Page1Component",
  props: ['articles', 'projects'],
  components: {
    BtnComp,
    ArticlesComponent,
    ProjectComponent,
  },
  data() {
    return {
      modifiedArticle: [],
      modifiedProjects: [],
      textBtn: 'Get Started',
      colorBtn: 'black',
      borderRadius: [' 0 70px 0 0', '70px 0 0 0', '0 0 70px 0', '0 0 0 70px'],
    }
  },
  methods: {
    getModifiedArticle() {
      this.modifiedArticle = this.articles.filter((item, index) => index < 3);
    },
    getModifiedProjects() {
      this.modifiedProjects = this.projects.slice(-4, this.projects.length)
          .map((item, i) => {
            item.borderRadius = this.borderRadius[i];
            return item;
          });
    }
  },
  mounted() {
    this.getModifiedArticle();
    this.getModifiedProjects();
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss-modules/styles";

.page1__header {
  margin: 0 auto 96px;
  max-width: 1200px;
  padding: 206px 52px;
  background-image: url("@/assets/img/page1_Image1.png");
  background-repeat: no-repeat;
}

.page1__header-title {
  margin-bottom: 18px;
  max-width: 434px;
  color: $colorPrimary2;
  font-family: dm, sans-serif;
  font-size: 65px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.page1__text {
  margin-bottom: 21px;
  max-width: 434px;
  color: $colorTextGrey2;
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 150%;
}

.projects__wrap {
  margin: 0 auto;
  max-width: 1200px;
  text-align: center;
}

.projects__title {
  margin-bottom: 8px;
  color: $colorTextGrey2;
  font-family: dm;
  font-size: 50px;
  font-weight: 400;
  line-height: 125%;
}

.projects__desc {
  margin: 0 auto 93px;
  max-width: 737px;
}

.projects {
  margin-bottom: 96px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 105px;
  row-gap: 56px;

  //&:nth-child(1) .project__img {
  //  border-radius: 0 70px 0 0;
  //}
  //
  //&:nth-child(2) .project__img {
  //  border-radius: 0 0 70px 0;
  //}
  //
  //&:nth-child(3) .project__img {
  //  border-radius: 0 0 0 70px;
  //}
  //
  //&:nth-child(4) .project__img {
  //  border-radius: 70px 0 0 0;
  //}
}

.descriptions {
  margin-bottom: 96px;
  max-height: 457px;
  padding: 151px calc(50% - 600px);
  display: flex;
  gap: 76px;
  justify-content: center;
  background-color: $colorPrimary3;
}

.description {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;

  & p:first-child {
    color: $colorPrimary;
    font-family: dm;
    font-size: 85px;
    font-weight: 400;
    line-height: 125%;
  }

  & p:last-child {
    color: $colorTextGrey2;
    font-family: jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
  }
}

.articles {
  margin: 0 auto 96px;
  max-width: 1200px;

  &__title {
    margin-bottom: 12px;
    text-align: center;
    color: $colorPrimary2;
    font-family: dm;
    font-size: 50px;
    font-weight: 400;
    line-height: 125%;
  }

  &__desc {
    margin: 0 auto 52px;
    max-width: 811px;
    text-align: center;
    color: $colorTextGrey2;
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 150%;
  }

  &__wrap {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 27px;
  }
}
</style>