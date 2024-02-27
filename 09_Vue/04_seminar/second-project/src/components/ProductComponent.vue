<template>
    <tr class="table__row">
      <td class="table__cell">{{product.name}}</td>
      <td class="table__cell">{{product.price}}</td>
    </tr>
</template>

<script>
export default {
  name: "ProductComponent",
  props: ['product'],
}
</script>


<style scoped lang="css">

</style>