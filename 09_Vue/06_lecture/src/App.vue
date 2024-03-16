<template>
  <div id="app">
    <PaymentsDisplay :items="paymentList" :info="infoText"/>
    <AddList @addNewPay="addNewPay"/>
  </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue'
import AddList from './components/AddList.vue'

export default {
  name: 'App',
  components: {
    PaymentsDisplay,
    AddList
  },
  data() {
    return {
      paymentList: [],
      infoText: 'new text info'
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169,
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360,
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532,
        },
      ]
    },
    addNewPay(data) {
      this.paymentList.push(data)
    }
  },
  created() {
    this.paymentList = this.fetchData();
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
