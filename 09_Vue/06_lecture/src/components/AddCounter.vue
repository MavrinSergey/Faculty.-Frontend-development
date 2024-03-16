<template>
  <div>
    <button @click="upCounter">Count {{ counter }}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    upCounter() {
      this.counter++
    },
    beforeCreate() {
      this.counter = 2
      // console.log("beforeCreate")
    },
    created() {
      this.counter = 4
      // console.log("created")
    },
    mounted() {
      this.counter = 6
      console.log("mounted")
    }
  }
}
</script>


<style scoped>

</style>
