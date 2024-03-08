<template>
  <section class="page3">
    <HeaderContent :title="title" :links="links"/>
    <div class="btn-menu">
      <BtnComponent :colorBtn="colorBtn" v-for="room in rooms" :key="room.id">{{ room }}</BtnComponent>
    </div>
    <div class="projects">
      <ul>
        <ProjectComponent nt v-for="project in projectsItem" :project="project" :key="project.id"/>
      </ul>
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
import BtnComponent from "@/components/UI/BtnComponent.vue";
import ProjectComponent from "@/components/UI/ProjectComponent.vue";
import { mapGetters } from "vuex";

export default {
  name: "Page3Project",
  components: {
    ProjectComponent,
    BtnComponent,
    HeaderContent
  },
  data() {
    return {
      title: 'Our Project',
      links: [
        {title: 'Home', url: '/home'},
        {title: 'Blog', url: '/blog'},
      ],
      rooms: ['Bathroom', 'Bed Room', 'Kitchen', 'Living Area'],
      colorBtn: 'white',
    }
  },
  methods: {

  },
  computed: {
    ...mapGetters(['projectsItem']),
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss-modules/styles.scss";
.page3 {
  .projects {
    margin: 0 auto 200px;
    width: $width;
    display: block;

    ul {
      margin-bottom: 61px;
      row-gap: 37px;
      column-gap: 30px;
      column-count: 2;
      column-width: 500px;

      & .project {
        margin-bottom: 37px;

        & .project__img {
          border-radius: 0;
        }
      }
    }
  }
}

</style>