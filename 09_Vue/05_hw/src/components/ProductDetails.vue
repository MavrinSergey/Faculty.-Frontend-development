<template>
  <figure>
    <picture>Здесь какая то картинка</picture>
    <figcaption>{{ product.name }}</figcaption>
    <p v-if="product.available">{{ formattedPrice }}</p>
    <p v-else>товар отсутствует</p>
  </figure>
</template>

<script>
export default {
  data() {
    return {
      product: {
        name: 'Самый лучший товар',
        price: 99,
        available: true,
      },
    }
  },
  computed: {
    formattedPrice() {
      const formatter = new Intl.NumberFormat("ru", {
        style: "currency",
        currency: "USD"
      })
      return formatter.format(this.product.price);
    }
  },
}
</script>


<style scoped>

</style>