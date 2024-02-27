<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <HelloWorld msg="4 Seminar"/>
    <GalleryComponent></GalleryComponent>
    <table class="table">
      <caption>
        <h1>Корзина</h1>
      </caption>
      <tr class="table__row table__head">
        <th class="table__cell">
          <h2 v-on:click="sortCol" data-sort-key="name" data-check-ascending="false">Наименование</h2>
        </th>
        <th class="table__cell">
          <h2 v-on:click="sortCol" data-sort-key="price" data-check-ascending="false">Цена</h2>
        </th>
      </tr>
      <tbody class="table__content">
        <ProductComponent v-for="product in products" :product="product" :key="product"/>
      </tbody>
    </table>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GalleryComponent from './components/GalleryComponent.vue'
import ProductComponent from './components/ProductComponent.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    GalleryComponent,
    ProductComponent
  },
  data() {
    return {
      products: [
        {name: 'Молоко', price: 35},
        {name: 'Хлеб', price: 25},
        {name: 'Яблоки', price: 23},
        {name: 'Мясо', price: 54},
      ]
    };
  },
  methods: {
    sortCol({target, currentTarget}) {
      if (!(currentTarget.dataset.checkAscending === "true")) {
        this.products.sort((a, b) => sortFunction(a, b, target.dataset.sortKey, true));
        currentTarget.dataset.checkAscending = "true";
      } else {
        this.products.sort((a, b) => sortFunction(a, b, target.dataset.sortKey, false));
        currentTarget.dataset.checkAscending = "false";
      }
      function sortFunction (a, b, sortKey, checkAscending) {
        const valueA = String(a[sortKey]).toLowerCase();
        const valueB = String(b[sortKey]).toLowerCase();

        if (checkAscending) {
          return valueA.localeCompare(valueB);
        } else {
          return valueB.localeCompare(valueA);
        }
      }
    }
  }
}
</script>

<style lang="css">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.table {
  margin: 0 auto;
  width: 600px;
  border-collapse: collapse;
  border: 3px solid purple;
}

.table__cell {
  width: 50%;
  border: 3px solid purple;
  text-align: center;
}
</style>
