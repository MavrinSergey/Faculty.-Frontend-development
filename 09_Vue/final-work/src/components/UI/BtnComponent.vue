<template>
  <button class="btn" @click="chooseRoom" :class="{btn_black: isActiveBlack, btn_white: isActiveWhite}"><slot></slot></button>
</template>

<script>
export default {
  name: "BtnComponent",
  props: ['colorBtn'],
  data() {
    return {
      isActiveBlack: true,
      isActiveWhite: false,
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
    chooseRoom() {
      this.$emit('select-room')
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss-modules/styles.scss";

</style>