<template>
  <form>
    <div v-for="(item, index) in cartItems" :key="index">
      <input type="number" v-model="item.quantity" @change="updateTotal" />
      <p>Price: {{ item.price }}</p>
      <p>Subtotal: {{ item.quantity * item.price }}</p>
    </div>
    <div>
      Total: {{ total }}
    </div>
  </form>
</template>

<script>
export default {
  name: 'BasketComponent',
  data() {
    return {
      cartItems: [
        { quantity: 2, price: 10, },
        { quantity: 2, price: 15 }
      ],
      total: 0
    };
  },
  methods: {
    updateTotal() {
      this.total = this.cartItems.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);
    }
  },
  mounted() {
    this.updateTotal();
  }
}
</script>

<style scoped>
* {
  margin: 0;
  box-sizing: border-box;
}

form, .authTrue {
  margin: 0 auto;
  padding: 15px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid grey;
  border-radius: 10px;
}

input, button {
  width: 100%;
  height: 30px;
  font-size: 20px;
  border: 1px solid;
  border-radius: 6px;
}
</style>
