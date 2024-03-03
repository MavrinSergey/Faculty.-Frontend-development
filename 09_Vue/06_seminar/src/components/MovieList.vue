<template>
  <ul>
    <BookComponent :book="book" v-for="book in books" :key="book.id"/>
  </ul>
</template>

<script>
import BookComponent from './BookComponent.vue'

export default {
  name: 'HelloWorld',
  components: {
    BookComponent
  },
  props: {},
  data() {
    return {
      books: [
        {id: 1, title: 'Книга 1', author: 'Автор 1', year: 2020, details: 'gdfgdfgdfgdfg'},
        {id: 2, title: 'Книга 2', author: 'Автор 2', year: 2019, details: 'hgfhfhhgfh'},
        {id: 3, title: 'Книга 3', author: 'Автор 3', year: 2021, details: ''}
      ]
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
