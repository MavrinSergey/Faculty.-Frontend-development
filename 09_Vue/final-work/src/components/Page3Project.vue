<template>
  <section class="page3">
    <HeaderContent :title="title" :links="links"/>
    <div class="btn-menu">
      <BtnComp @select-room="getFilterProjects" v-for="room in rooms" :key="room.id" :textBtn="room"
               :color-btn="colorBtn"/>
    </div>
    <div class="projects">
      <div class="projects__wrap">
        <ul>
          <ProjectComponent v-for="project in paginatedDataLeft" :project="project" :key="project.id"/>
        </ul>
        <ul>
          <ProjectComponent v-for="project in paginatedDataRight" :project="project" :key="project.id"/>
        </ul>
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
import HeaderContent from "@/components/UI/HeaderContent.vue";
import BtnComp from "@/components/UI/BtnComponent.vue";
import ProjectComponent from "@/components/UI/ProjectComponent.vue";
import {filter} from "core-js/internals/array-iteration";

export default {
  name: "Page3Project",
  components: {ProjectComponent, BtnComp, HeaderContent},
  props: ['projects'],
  data() {
    return {
      title: 'Our Project',
      links: [
        {title: 'Home', url: '#'},
        {title: 'Project', url: '#'},
      ],
      filterProjects: [],
      rooms: ['Bathroom', 'Bed Room', 'Kitchen', 'Living Area'],
      colorBtn: 'white',

      pagination_pageNumber: 0,
      pagination_numberItems: 8,
      pagination_items_total: this.projects.length,
    }
  },
  methods: {
    filter,
    nextPage() {
      this.pagination_pageNumber++;
    },
    prevPage() {
      this.pagination_pageNumber--;
    },
    getFilterProjects(searchItem) {
      if (!searchItem) {
        this.filterProjects = this.projects
      } else {
        this.filterProjects = this.projects.filter(project => project.title.indexOf(searchItem) !== -1)
      }
    },
    paginatedData() {
      const start = this.pagination_pageNumber * this.pagination_numberItems,
          end = start + this.pagination_numberItems;
      return this.filterProjects.slice(start, end);
    },
  },
  computed: {
    pageCount() {
      return Math.ceil(this.pagination_items_total / this.pagination_numberItems);
    },
    paginatedDataLeft() {
      return this.paginatedData().filter((project, index) => index % 2 === 0)
    },
    paginatedDataRight() {
      return this.paginatedData().filter((project, index) => index % 2 !== 0)

    },
  },
  mounted() {
    this.getFilterProjects();
  },
}
</script>


<style scoped lang="scss">
@import "@/assets/scss-modules/styles";

.projects {
  margin: 0 auto 200px;
  width: $width;
  &__wrap {
    margin-bottom: 61px;
    display: flex;
    column-gap: 30px;
  }
  ul {
    display: flex;
    flex-direction: column;
    row-gap: 37px;
  }
}

</style>