<template>
  <div>
    <h2>Данные с сервера</h2>
    <ul>
      <li v-for="item in postsItems" :key="item">{{ item }}</li>
    </ul>
    <button @click="fetchData">Загрузить</button>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
  computed: {
    ...mapGetters(['postsItems'])
  },
  methods: {
    ...mapActions(['fetchData']), // Подключение действия из хранилища
  },
};
</script>

<style scoped>

</style>