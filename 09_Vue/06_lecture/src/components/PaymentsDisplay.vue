<template>
  <div>
    <div v-for="item in items" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default() {
        return [];
      },
    },
  },

}
</script>


<style scoped>

</style>