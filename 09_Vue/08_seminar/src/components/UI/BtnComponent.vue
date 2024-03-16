<template>
  <button
      class="btn"
      @click="handleClick"
      :class="{btn_black: isActiveBlack, btn_white: isActiveWhite, btn_orange: isActiveFilter}">
    <slot></slot>
  </button>
</template>

<script>


export default {
  name: "BtnComponent",
  props: ['colorBtn', 'handler'],
  data() {
    return {
      isActiveBlack: true,
      isActiveWhite: false,
      isActiveFilter: false,
    }
  },
  mounted() {
    this.colorBtn === 'white' ? this.changeClass(false) : this.changeClass(true);
  },
  methods: {
    changeClass(bool) {
      this.isActiveBlack = bool;
      this.isActiveWhite = !bool;
    },
    handleClick(event) {
      this.isActiveFilter = !this.isActiveFilter;
      return this.handler(event);
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss-modules/styles.scss";

</style>