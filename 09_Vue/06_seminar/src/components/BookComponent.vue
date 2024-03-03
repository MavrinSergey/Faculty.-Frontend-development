<template>
  <li>
    <p>{{ user.name }}</p>
    <p>{{ user.lastName }}</p>
    <p>{{ user.email }}</p>
  </li>
</template>

<script>
export default {
  name: "UserComponent",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>


<style scoped>

</style>