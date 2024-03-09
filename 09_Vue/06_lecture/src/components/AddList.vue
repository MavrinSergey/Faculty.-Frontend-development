<template>
  <div>
    <input type="text" v-model="category" placeholder="category">
    <input type="text" v-model="value" placeholder="value">
    <input type="date" v-model="data" placeholder="data">
    <button @click="onSave">Save</button>
  </div>
</template>

<script>
export default {
  name: "AddList",
  data() {
    return {
      category: '',
      value: '',
      data: '',
    }
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`
    }
  },
  methods: {
    onSave() {
      const data = {
        category: this.category,
        value: this.value,
        data: this.data || this.getCurrentDate,
      }
      this.$emit('addNewPay', data);
    }
  }
}
</script>


<style scoped>

</style>