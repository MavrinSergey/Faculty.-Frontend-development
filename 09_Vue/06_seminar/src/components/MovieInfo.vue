<template>
  <li>
    <div class="book" @click="toggleDetails(book)">
      <h3>{{ book.title }}</h3>
      <p>Автор: {{ book.author }}</p>
      <p>Год издания: {{ book.year }}</p>
      <div v-if="book.showDetails">
        <p>{{ book.details }}</p>
        <!-- Дополнительные детали о книге -->
        <p v-if="availability">Нет дополнителных деталей о книге</p>
      </div>
    </div>
  </li>
</template>

<script>
import Vue from "vue";

export default {
  name: "UserComponent",
  props: {
    book: {
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
    toggleDetails(book) {
      Vue.set(book, 'showDetails', !book.showDetails);
      if (!book.details) {
        this.availability = !this.availability
      }
    }
  }
}
</script>


<style scoped>

</style>