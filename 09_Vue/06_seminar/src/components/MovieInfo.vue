<template>
  <li @click="toggleDetails(movie)">
    <h3>Выбранный фильм</h3>
    <p>Название: {{ movie.title }}</p>
    <p>Режиссер: {{ movie.director }}</p>
    <p>Год выпуска: {{ movie.year }}</p>
<!--    <div v-if="movie.showDetails">-->
<!--      <p>{{ movie.details }}</p>-->
<!--      &lt;!&ndash; Дополнительные детали о книге &ndash;&gt;-->
<!--      <p v-if="availability">Нет дополнителных деталей о книге</p>-->
<!--    </div>-->
  </li>
</template>

<script>

import Vue from "vue";

export default {
  name: "MovieInfo",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      availability: false,
    }
  },
  methods: {
    toggleDetails(movie) {
      Vue.set(movie, 'showDetails', !movie.showDetails);
      if (!movie.details) {
        this.availability = !this.availability
      }
      this.$emit('info-updated', movie.details);
    }
  }
}
</script>


<style scoped>

</style>