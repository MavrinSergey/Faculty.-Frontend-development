<template>
  <div>
    <h2>Корзина покупок</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">{{ item.name }} - {{ item.price }}</li>
    </ul>
    <p>Количество товаров в корзине: {{ totalItems }}</p>
    <p>Общая стоимость: {{ totalPrice }}</p>
    <button @click="addItemToCart({ id: 1, name: 'Товар', price: 10 })">Добавить в корзину</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['cartItems', 'totalItems', 'totalPrice']), // Подключение геттеров из хранилища
  },
  methods: {
    ...mapActions(['addItemToCart']), // Подключение действия из хранилища
  },
};
</script>

<style scoped>

</style>