<template>
  <div>
    <h2>Список фильмов</h2>
    <ul>
      <MovieInfo :movie="movie" v-for="movie in movies" :key="movie.id" @info-updated="handleInfoUpdate"/>
    <div>{{ newDetails }}</div>
    </ul>
  </div>
</template>

<script>
import MovieInfo from './MovieInfo.vue'

export default {
  name: 'MovieList',
  components: {
    MovieInfo
  },
  props: {},
  data() {
    return {
      movies: [
        {id: 1, title: 'Фильм 1', director: 'Режиссер 1', year: 2020, details: 'Какие то детали'},
        {id: 2, title: 'Фильм 2', director: 'Режиссер 2', year: 2019, details: ''},
        {id: 3, title: 'Фильм 3', director: 'Режиссер 3', year: 2021, details: 'И тут детали'}
      ],
      newDetails: ''
    };
  },
  methods: {
    handleInfoUpdate(details) {
      this.newDetails = details;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
