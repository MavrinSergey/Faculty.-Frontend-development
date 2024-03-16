<template>
  <div id="app">
    <UserList/>
    <BookList/>
    <MovieList/>
  </div>
</template>

<script>
import UserList from './components/UserList.vue'
import BookList from './components/BookList.vue'
import MovieList from './components/MovieList.vue'

export default {
  name: 'App',
  components: {
    UserList,
    BookList,
    MovieList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
